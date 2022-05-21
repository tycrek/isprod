const REGEX_LAZY = new RegExp(`prod(uction){0}`, 'gi');
const REGEX_STRICT = new RegExp(`prod(uction){1}`, 'gi');

/**
 * Determines if the current environment is a production environment. Leave `strict` blank for **Lazy mode** which matches "prod" or more.
 */
export function isProd(strict = false): boolean {
	return (strict ? REGEX_STRICT : REGEX_LAZY).test(process.env.NODE_ENV);
}

export default isProd;
module.exports = isProd;
