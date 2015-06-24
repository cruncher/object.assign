// Object.assign polyfill

Object.assign || (function() {
	"use strict";

	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function isDefined(val) {
		return val !== undefined && val !== null;
	}

	function ownPropertyKeys(object) {
		var keys = Object.keys(object);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(object));
		}

		return keys;
	}

	Object.defineProperty(Object, 'assign', {
		value: function (target) {
			if (!isDefined(target)) {
				throw new TypeError('Object.assign: First argument ' + target + ' cannot be converted to object.');
			}

			var object = Object(target);
			var n = 1;
			var source, keys, key, k;

			for (n; n < arguments.length; n++) {
				source = arguments[n];

				// Ignore any undefined sources
				if (!isDefined(source)) { continue; }

				// Get own enumerable keys and all own symbols (I think symbols
				// are by definition non-enumerable, but I'm not clear on this,
				// as they are defineable as enumerable with
				// Object.defineProperty, strangely).
				keys = ownPropertyKeys(Object(source));
				k = keys.length;

				// Copy key/values to target object
				while (k--) {
					key = keys[k];
					object[key] = source[key];
				}
			}

			return object;
		},

		configurable: true,
		writable: true
	});
})();
