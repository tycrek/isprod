# isprod2

I wanted what [linkeo/isprod] had made but didn't like the very outdated codebase that used some old concepts. So I rewrote it into what is essentially a glorified Regular Expression.

## Usage

1. Install it: `npm install isprod2`
2. Set your `NODE_ENV` to `production` using your preferred method.
3. Use it:
   ```js
   const isProd = require('isprod2')();
   
   // or, enable strict mode
   const isProd = require('isprod2')(true);

   // isProd is a boolean
   console.log(isProd); // true (or false)
   ```

### Modes

| Lazy | Strict |
| :---: | :---: |
| **`isProd()`** | **`isProd(true)`** |
| Matches "prod" or more | Matches only "production" |

[linkeo/isprod]: https://github.com/linkeo/isprod
