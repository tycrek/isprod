const isProd = require('../isprod2')(!!process.env.STRICT);
console.log('Edit .env.test to change the test parameters\n')
console.log(`Production environment: ${isProd}`);
