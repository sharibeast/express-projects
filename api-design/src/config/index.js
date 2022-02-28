const { merge } = require('lodash');
const env = process.env.NODE_ENV || 'development';

const baseConfig = {
    env,
    isDev:env==='development',
    isTest:env==='testing',
    port:3000,
    secrets:{
        
    }
}


