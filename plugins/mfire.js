const Mizuki = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');
const sanuwa= require('sanuwa-npm'); 
let wk = Config.WORKTYPE == 'public' ? false : true 
const MDOWN = "*📥ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴍᴇᴅɪᴀғɪʀᴇ ғɪʟᴇ*"
const MUP = "*📤ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴍᴇᴅɪᴀғɪʀᴇ ғɪʟᴇ*"

Mizuki.addCommand({pattern: 'mefire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
 const mlink = match[1]
 if (!mlink) return await message.client.sendMessage(message.jid, '*Please Give a vaild MEDIAFIRE link*', MessageType.text, { quoted: message.data });
    var down = await message.client.sendMessage(message.jid, MDOWN, MessageType.text, { quoted: message.data });
  
  sanuwa.mediafire(`${match[1]}`).then(async(data) => { const {nama, mime, link, } = data[0]
    const linkdata = await axios.get(link, { responseType: 'arraybuffer'});
                                                       
     var up = await message.client.sendMessage(message.jid, MUP, MessageType.text, { quoted: message.data });                                                  
await message.client.deleteMessage(message.jid, {id: down.key.id, remoteJid: message.jid, fromMe: true}) ;  
await message.sendMessage(Buffer.from(linkdata.data), MessageType.document, { filename: nama, mimetype: mime, });
 return await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) 
     .catch( async (err) => await message.sendMessage("⛔️ *INVALID LINK OR MAX FILE SIZE REACHED*"), )                                                  
   })})); 

