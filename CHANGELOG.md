# Change Log

## [0.4.1]

* Fix to include the compiled files

## [0.4.0]

### Changed

* Use [`got`](https://github.com/sindresorhus/got) instead of [`request`](https://github.com/request/request), which
  should make the extension much smaller.
* Commands are only available in LaTeX documents, instead of any editor.

### Removed

* Removed quick select for adding citations. Only Zotero Cite as you Write (CAYW) is supported, as it is much more
  flexible. In particular, it supports adding multiple citations and page numbers.

## [0.3.1] - 2019-07-08

### Changed

* Fix configuration loading. Before, configuration was loaded from the nonexistent `zoterolatex.zotero` section, when it should have been loaded as `zotero`.
* Use [rollup.js](https://rollupjs.org/) to bundle the extension, so it loads more quickly

## [0.3.0] - 2019-03-02

### Added
* Use the `zotero.citeMethod` configuration setting to switch between the Zotero Cite as you Write UI and a native VS Code quick select

### Changed
* The keyboard shortcut for adding a citation is now `Alt+Z`
* If no text is selected, `Zotero: Open in Zotero` will treat the word at the cursor as the citation key 

### Removed