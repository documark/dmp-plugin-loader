var exists = require('fs').existsSync;
var join   = require('path').join;

module.exports = function documarkPluginLoader ($, document, done) {
	var plugins = [];

	$('import').each(function () {
		var $this  = $(this);
		var plugin = $this.text();

		// Use package <document root>/plugins/<name> if it exists
		var localPlugin = join(document.path(), 'plugins', plugin);

		if (exists(localPlugin)) {
			plugin = localPlugin;
		}

		plugins.push(plugin);
		$this.remove();
	});

	document.applyPlugins($, plugins, done);
};
