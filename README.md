# Documark Plugin Loader

[![npm version](https://badge.fury.io/js/dmp-plugin-loader.svg)](http://badge.fury.io/js/dmp-plugin-loader)
[![dependency status](https://david-dm.org/mauvm/dmp-plugin-loader.svg)](https://david-dm.org/mauvm)

> Documark plugin for loading plugins with ease!

## Usage

1. Load plugin loader:

	```yaml
	plugins:
	  - dmp-plugin-loader
	```

2. Import plugins in your `document.jade`:

	```jade
	---
	title: Document
	---

	import my-plugin
	```

3. The plugin loader will then find all `import` elements and use their text as plugin name.

4. If the file or folder `./plugins/my-plugin` exists (relative to your document root), it will be loaded as a Node module (`require('/path/to/plugins/my-plugin');`). Else the plugin name will be loaded (`require('my-plugin');`).

	See [Node modules, LOAD_AS_FILE and LOAD_AS_DIRECTORY][require-steps] for more information.

[require-steps]: http://nodejs.org/api/modules.html#modules_all_together
