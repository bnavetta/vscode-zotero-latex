// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as request from 'request';

function fetchCitation(): Thenable<string> {
	const config = vscode.workspace.getConfiguration("zoterolatex");
	const serverUrl = config.get('zotero.serverUrl', 'http://localhost:23119/better-bibtex');
	const latexCommand = config.get<string>('zotero.latexCommand', 'autocite');
	const url = `${serverUrl}/cayw?format=latex&command=${encodeURIComponent(latexCommand)}`;

	return new Promise((resolve, reject) => {
		request.get(url, (error, _, body) => {
			if (error) {
				reject(error);
			} else {
				resolve(body);
			}
		});
	});
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	let disposable1 = vscode.commands.registerCommand('zoterolatex.addCitation', () => {
		return fetchCitation().then(citation => {
			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				return;
			}
			editor.edit(edit => {
				edit.insert(editor.selection.active, citation);
			});

			vscode.window.showInformationMessage('Citation inserted!');
		});
	});
	context.subscriptions.push(disposable1);

	let disposable2 = vscode.commands.registerCommand("zoterolatex.openInZotero", () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor || editor.selection.isEmpty) {
			return;
		}

		const citationKey = editor.document.getText(new vscode.Range(editor.selection.start, editor.selection.end));
		const uri = vscode.Uri.parse(`zotero://select/items/bbt:${encodeURIComponent(citationKey)}`);
		return vscode.env.openExternal(uri);
	});
	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
