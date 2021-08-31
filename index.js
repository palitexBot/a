const {Client,MessageEmbed,Intents} = require("discord.js")
const client = new Client({intents:["DIRECT_MESSAGES","GUILDS","GUILD_MEMBERS","GUILD_MESSAGES","GUILD_BANS","GUILD_PRESENCES"]})
const config = require('./config/infos')
client.login(config.token)
client.on("ready",a=>{
console.log(`Logado no ${a.user.tag}!`)
    
})