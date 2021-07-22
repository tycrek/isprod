# isprod2

[![npm image]][npm page]

I wanted what [linkeo/isprod] had made but didn't like the very outdated codebase that used some old concepts. So I rewrote it into what is essentially a glorified Regular Expression.

## Usage

1. Install with `npm i isprod2`
2. Set your `NODE_ENV` to `production` using your preferred method.
3. Use it:
   ```js
   // isProd is a boolean
   const isProd = require('isprod2')();
   
   // enable strict mode
   const isProd = require('isprod2')(true);

   console.log(isProd); // true (or false)

   // can also be used inline
   if (require('isprod2')()) {
       // do something
   }
   ```

### Modes

| Lazy | Strict |
| :---: | :---: |
| **`isProd()`** | **`isProd(true)`** |
| Matches "prod" or more | Matches only "production" |

## Testing

Modify [`.env.test`] to your liking and run `npm test`.

## Contributing

You *do* realize this entire project can be replaced with less than a line of code right? (But by all means any contributions are welcome!)

[npm image]: https://img.shields.io/npm/v/isprod2?color=%23CB3837&label=View%20on%20NPM&logo=npm&style=for-the-badge
[npm page]: https://www.npmjs.com/package/isprod2
[linkeo/isprod]: https://github.com/linkeo/isprod
[`.env.test`]: https://github.com/tycrek/isprod/blob/master/.env.test
