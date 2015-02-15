# Documark Plugin Loader

Documark plugin for loading plugins with ease!

### Usage

1. Load plugin loader:

	```yaml
	plugins:
	  - documark-plugin-loader
	```

2. Load (local) plugins with an `import` element. Add this to your `document.jade`:

	```jade
	import my-plugin
	// This attempts to load:
	//   - ./plugins/my-plugin.js
	//   - ./plugins/my-plugin/index.js
	//   - my-plugin (as local or global Node module)
	```

	
