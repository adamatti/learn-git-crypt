const { config } = require('dotenv');
if (process.env.NODE_ENV !== 'PROD') {
    config({ path: './.env' });
}
const appEnvVars = Object.entries(process.env).filter(([key]) => key.startsWith('APP_'));
console.log('App vars:', appEnvVars);