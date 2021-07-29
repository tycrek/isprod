# isprod

I wanted what [linkeo/isprod] had made but didn't like the very outdated codebase that used some old concepts. So I rewrote it into what is essentially a glorified Regular Expression.

[//]: # (GH PACKAGES TEMPLATE START)
## Usage

This package is installable from [GitHub Packages]. To use this package in your project, create an `.npmrc` file in the same directory as your project's `package.json` file with these contents:

```
@tycrek:registry=https://npm.pkg.github.com
```

[GitHub Packages]: https://github.com/features/packages
[//]: # (GH PACKAGES TEMPLATE END)

1. Install with `npm i @tycrek/isprod`
2. Set your `NODE_ENV` to `production` using your preferred method.
3. Use it:
   ```js
   // isProd is a boolean
   const isProd = require('@tycrek/isprod')();
   
   // enable strict mode
   const isProd = require('@tycrek/isprod')(true);

   console.log(isProd); // true (or false)

   // can also be used inline
   if (require('@tycrek/isprod')()) {
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

[linkeo/isprod]: https://github.com/linkeo/isprod
[`.env.test`]: https://github.com/tycrek/isprod/blob/master/.env.test
