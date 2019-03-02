import * as vscode from 'vscode';
import { Request } from 'request';

import { latexCommand } from './config';
import { search, Entry } from './api';
import { insertAtCursor } from './util';

// Based on https://github.com/Microsoft/vscode-extension-samples/blob/8ea86205551f2b0c5cad2712c2c4a7c1b6e2a4cd/quickinput-sample/src/quickOpen.ts

export async function quickCite() {
    console.log('Showing quick cite picker');
    const entry = await pickEntry();

    if (entry) {
        const citation = `\\${latexCommand()}{${entry.citekey}}`;
        console.log(`Inserting citation ${citation}`);
        await insertAtCursor(citation);
    }
}

class EntryItem implements vscode.QuickPickItem {
    label: string;
    detail: string;
    description: string;

    constructor(public entry: Entry) {
        this.label = entry.title;
        this.detail = entry.citekey;

        if (entry.author) {
            const names = entry.author.map(a => `${a.given} ${a.family}`);
            
            if (names.length < 2) {
                this.description = names.join(', ');
            } else if (names.length === 2) {
                this.description = names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
            } else {
                this.description = names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];
            }
        } else {
            this.description = '';
        }
    }
}

class ErrorItem implements vscode.QuickPickItem {
    label: string;

    constructor(public message: string) {
        this.label = message.replace(/\r?\n/g, ' ');
    }
}

async function pickEntry() {
    const disposables: vscode.Disposable[] = [];

    try {
        return await new Promise<Entry | undefined>((resolve, reject) => {
            const input = vscode.window.createQuickPick<EntryItem | ErrorItem>();
            input.matchOnDescription = true;
            input.matchOnDetail = true;
            input.placeholder = 'Type to insert a citation';
            let req: Request | undefined = undefined;
            disposables.push(input.onDidChangeValue(value => {
                if (!value) {
                    input.items = [];
                    return;
                }

                input.busy = true;
                if (req) {
                    req.abort();
                }

                req = search(value, (error, results) => {
                    if (error) {
                        input.items = [new ErrorItem(error.message)];
                    }

                    if (results) {
                        input.items = results.map(r => new EntryItem(r));
                    }

                    input.busy = false;
                });
            }));

            disposables.push(input.onDidChangeSelection(items => {
                const item = items[0];
                if (item instanceof EntryItem) {
                    resolve(item.entry);
                    input.hide();
                }
            }));

            disposables.push(input.onDidHide(() => {
                if (req) {
                    req.abort();
                }
                resolve(undefined);
                input.dispose();
            }));

            input.show();
        });
    } finally {
        disposables.forEach(d => d.dispose());
    }
}