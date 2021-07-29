const isProd = require('../isprod')(!!process.env.STRICT);
console.log('\n(Edit .env.test to change the test parameters)\n')
console.log(`Production environment: ${isProd}`);
