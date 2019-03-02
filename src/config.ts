import { workspace } from 'vscode';

export function serverUrl() {
    return workspace.getConfiguration('zoterolatex').get('zotero.serverUrl', 'http://localhost:23119/better-bibtex');
}

export function latexCommand() {
    return workspace.getConfiguration('zoterolatex').get('zotero.latexCommand', 'autocite');
}

export function minimizeAfterPicking() {
    return workspace.getConfiguration('zoterolatex').get('zotero.minimizeAfterPicking', false);
}