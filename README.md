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

## Usage

First of all, you'll need to export your library from Zotero to a BibLaTeX file. Better BibTex supports
[several methods](https://retorque.re/zotero-better-bibtex/exporting/) such as automatic export to a `.bib` file and pulling from
Zotero when compiling your LaTeX document.

To insert a citation at the cursor, use the `Zotero: Add Citation` command (by default, `Alt-Z`). This will show the
Zotero citation popup. From there, pick sources just like with the Microsoft Word plugin (including page numbers,
prefixes, and other options).

If the cursor is on a citation key, the `Zotero: Open in Zotero` command will open the corresponding entry in Zotero.

Note that Zotero must be running while using this extension.

## Extension Settings

This extension contributes the following settings:

### Server URL (`zotero.serverUrl`)

This is the URL to the local [Zotero connector HTTP server](https://www.zotero.org/support/dev/client_coding/connector_http_server).
It defaults to `http://localhost:23119` and should not need to be changed.

### Latex Command (`zotero.latexCommand`)

This controls which BibLaTeX citation command to use, such as `autocite`, `cite`, and `parencite`. This can be any
citation command, but Better BibLaTeX works best with these three. By default, citations are added with `autocite`. 

### Minimize After Picking (`zotero.minimizeAfterPicking`)

Set this to `true` to minimize all Zotero windows after picking a citation. This is disabled by default.

## Known Issues

After picking a reference in the Cite As You Write window, the Zotero app steals focus (at least on macOS).
