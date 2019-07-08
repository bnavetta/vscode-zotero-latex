import { workspace } from 'vscode';

export function serverUrl() {
    return workspace.getConfiguration('zotero').get('serverUrl', 'http://localhost:23119') + '/better-bibtex';
}

export function latexCommand() {
    return workspace.getConfiguration('zotero').get('latexCommand', 'autocite');
}

export function minimizeAfterPicking() {
    return workspace.getConfiguration('zotero').get('minimizeAfterPicking', false);
}
