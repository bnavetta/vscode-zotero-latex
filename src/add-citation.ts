import * as vscode from 'vscode';

import * as config from './config';
import { insertAtCursor } from './util';
import { cayw } from './api';

export async function addCitation() {
    console.log('Showing CAYW picker');

    try {
        const citation = await cayw('biblatex', config.latexCommand(), config.minimizeAfterPicking());

        console.log(`Inserting citation ${citation}`);
        await insertAtCursor(citation);
    } catch (error) {
        debugger;
        console.log(error.code);
        if (error.code === 'ECONNREFUSED') {
            await vscode.window.showErrorMessage('Could not connect to Zotero. Is it running?');
        } else {
            await vscode.window.showErrorMessage(`Error adding citation: ${error}`);
        }
    }
}