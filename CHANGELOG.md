# Change Log

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