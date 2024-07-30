const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
var SESSION_ID;

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}
if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
}else{
SESSION_ID = envv2.SESSION_ID
}




module.exports = {
    SESSION_ID: SESSION_ID,"PRABATH-MD~AvMzUR6L#57wW3zD8s628OVGTO1asYnPACbXiJx7jihXYg3tJHm8"   
    BOT_NUMBER:  BOT_NUMBER,"94773928816
    GITHUB_USERNAME: username,"vimukthiguna"
    GITHUB_AUTH_TOKEN: GITHUB_TOKEN,"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"
};
