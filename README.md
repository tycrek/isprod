[//]: # (NPM centered badge template START --------------------------------------------------)

<div align="center">

isprod
===

[![NPMCBT badge]][NPMCBT link]

*A glorified regular expression.*
</div>

[NPMCBT badge]: https://img.shields.io/npm/v/@tycrek/isprod?color=CB3837&label=%20View%20on%20NPM&logo=npm&style=for-the-badge
[NPMCBT link]: https://www.npmjs.com/package/@tycrek/isprod

[//]: # (NPM centered badge template END ----------------------------------------------------)

I wanted what [linkeo/isprod] had made but didn't like the very outdated codebase that used some old concepts. So I rewrote it into what is essentially a glorified Regular Expression.
## Usage

1. Install with `npm i @tycrek/isprod`
2. Set your `NODE_ENV` to `production` using your preferred method (it must be accessible from `process.env`).
3. Use it:
   ```ts
   import isProd from '@tycrek/isprod';

   console.log(isProd());

   // or, to enable strict mode:
   console.log(isProd(true));

   // output: true or false
   ```

### Modes

| Lazy | Strict |
| :---: | :---: |
| **`isProd()`** | **`isProd(true)`** |
| Matches "prod" or more | Matches only "production" |

## Testing

Modify [`.env.test`] to your liking and run `npm run test`.

## Contributing

You *do* realize this entire project can be replaced with less than a line of code right? (But by all means any contributions are welcome!)

[linkeo/isprod]: https://github.com/linkeo/isprod
[`.env.test`]: https://github.com/tycrek/isprod/blob/master/.env.test
