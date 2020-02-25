'use strict';

module.exports = {
  name: require('./package').name,

  options: {
		autoImport: {
			alias: {
				'countup': 'countup.js/dist/countUp'
			}
		}
	}
};
