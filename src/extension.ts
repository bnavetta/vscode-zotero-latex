// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import * as config from './config';
import { quickCite } from './quick-cite';
import { zoteroCite } from './zotero-cite';
import { openInZotero } from './open-zotero';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	context.subscriptions.push(vscode.commands.registerCommand('zoterolatex.addCitation', () => {
		const method = config.citeMethod();
		switch (method) {
			case 'vscode':
				return quickCite();
			case 'zotero':
				return zoteroCite();
			default:
				console.error(`Unknown citation method: ${config.citeMethod()}`);
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('zoterolatex.zoteroCite', zoteroCite));
	context.subscriptions.push(vscode.commands.registerCommand('zoterolatex.quickCite', quickCite));
	context.subscriptions.push(vscode.commands.registerCommand("zoterolatex.openInZotero", openInZotero));
}

// this method is called when your extension is deactivated
export function deactivate() {}
