const isProd = require('../dist/isprod');

console.log('\n(Edit .env.test to change the test parameters)\n')
console.log(`Production environment: ${isProd(process.env.STRICT || undefined)}`);
