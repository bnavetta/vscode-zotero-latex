# Zotero LaTeX extension

This is a VS Code extension for using [Zotero](https://www.zotero.org/) with the
[Better BibTeX](https://retorque.re/zotero-better-bibtex) extension.

## Features

The main feature of this extension is a command to insert citations from Zotero (Cite As You Write).
In a LaTeX file, use `Alt-Z` and pick your source. A citation will automatically be inserted
at the current cursor. This can use either Zotero's own UI or a dialog within VS Code.

If you have a citation key selected, you can jump to it in Zotero with the `Zotero: Open in Zotero` command.

## Requirements

You need to have Zotero installed, along with the Better BibTex extension. You'll probably also want
some kind of LaTeX editor extension installed, such as [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop).

## Extension Settings

This extension contributes the following settings:

* `zotero.citeMethod`: the UI to use for the `zotero.addCitation` command
* `zotero.serverUrl`: the URL of the Zotero / Better BibTex server (defaults to `http://localhost:23119/better-bibtex`)
* `zotero.latexCommand`: the LaTeX citation command to use (defaults to `autocite`)

## Known Issues

After picking a reference in the Cite As You Write window, the Zotero app steals focus (at least on macOS).

## Release Notes

## 0.3.0

* Make `zotero.addCitation` a wrapper command for key bindings. Depending on the value of `zotero.citeMethod`, it'll
use either the Zotero window or a picker within VS Code.
* `zotero.openInZotero` is now smarter and will expand to the word around the cursor if no text is selected.
* Fix key binding.

### 0.1.0

Initial release