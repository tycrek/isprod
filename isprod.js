
/**
 * Determines if the current environment is a production environment. Leave `strict` blank for "lazy mode" which matches "prod" or more.
 * @param {boolean} [strict] If true, only 'production' will be matched (optional, defaults to false)
 * @return {boolean} true if production, false otherwise
 */
function isProd(strict = false) {
	return new RegExp(`prod(uction){${strict ? 1 : 0}}`, 'gi').test(process.env.NODE_ENV);
}

module.exports = isProd;
