import * as vscode from 'vscode';

export function insertAtCursor(text: string): Thenable<Boolean> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        console.warn('No active text editor');
        return Promise.resolve(false);
    }

    return editor.edit(edit => {
        if (editor.selection.isEmpty) {
            edit.insert(editor.selection.active, text);
        } else {
            edit.delete(editor.selection);
            edit.insert(editor.selection.start, text);
        }
    });
}