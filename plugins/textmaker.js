/* Codded by Phaticusthiccy

Unlimited API for Photooxy, Textpro and Instagram scraper.

Material: https://www.npmjs.com/package/textmaker-thiccy
Github: https://github.com/phaticusthiccy/TextMaker-Unlimited

This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/

const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const Mizuki = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'SI') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Mizuki.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    if (Config.LANG == 'SI' || Config.LANG == 'EN') {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'SI' || Config.LANG == 'EN') {
        usage_cmd = '⌨️ *උදාහරණය:* _'
        command_cmd = '💻 *විධානය:* '
        desc_cmd = 'ℹ️ *විස්තර:* _'
    } else { 
        usage_cmd = '*⌨️ Example:* _'
        command_cmd = '💻 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
    }
    const msg = command_cmd + '```.textdevil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil Mrjoka_\n\n' +
        command_cmd + '```.textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear Mrjoka_\n\n' +
        command_cmd + '```.textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf Developer;Mrjoka_\n\n' +
        command_cmd + '```.textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon Mrjoka_\n\n' +
        command_cmd + '```.text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.text2neon Mrjoka_\n\n' +
        command_cmd + '```.text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.text3neon Mrjoka_\n\n' +
        command_cmd + '```.text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.text4neon Mrjoka_\n\n' +
        command_cmd + '```.textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.textlight Mrjoka_\n\n' +
        command_cmd + '```.textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.textjoker Mrjoka_\n\n' +
        command_cmd + '```.textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.textninja Developer;Mrjoka_\n\n' +
        command_cmd + '```.textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.textglitter Mrjoka_\n\n' +
        command_cmd + '```.textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.textbokeh Mrjoka_\n\n' +
        command_cmd + '```.textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.textmarvel Developer;Mrjoka_\n\n' +
        command_cmd + '```.text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.text2marvel Developer;Mrjoka_\n\n' +
        command_cmd + '```.textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.textavengers Developer;Mrjoka_\n\n' +
        command_cmd + '```.textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.textgraf Developer;Mrjoka_\n\n' +
        command_cmd + '```.text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.text2graf Developer;Mrjoka_\n\n' +
        command_cmd + '```.textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.textlion Developer;Mrjoka_\n\n' +
        command_cmd + '```.textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.textice Mrjoka_\n\n' +
        command_cmd + '```.textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.textspace Developer;Mrjoka_\n\n' +
        command_cmd + '```.textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.textsmoke Mrjoka_\n\n' + 
        command_cmd + '```.textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.textglow Mrjoka_\n\n' +
        command_cmd + '```.textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.textfire Mrjoka_\n\n' +
        command_cmd + '```.textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.textharry Mrjoka_\n\n' +
        command_cmd + '```.textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.textcup Mrjoka_\n\n' +
        command_cmd + '```.textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.textcemetery Mrjoka_\n\n' +
        command_cmd + '```.textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.textglitch Developer;Mrjoka_'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
Mizuki.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/devil.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/bear.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/bear.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/wolf.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/wolf.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/neon.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/neon.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/neon2.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/neon2.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/li.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/li.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/joker.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/joker.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/ninja.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/ninja.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/tt.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/tt.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/bkh.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/marvel.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/mar2.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/mar2.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/aven.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/aven.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/tt2.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/tt2.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/ttgra.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/ttgra.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/t2gra.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/t2gra.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/lion.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/lion.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/neon3.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/neon3.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/ice.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/ice.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/space.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/space.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/smoke.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/smoke.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/Mizuki/glowttp.jpg', async() => {
        await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/glowttp.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
    })
}));
Mizuki.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/tfire.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/tfire.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/hp.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/hp.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/t4n.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/t4n.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/cmth.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/cmth.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Mizuki.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Mizuki/cup.jpg', async() => {
                  await message.client.sendMessage(message.jid, fs.readFileSync('/root/Mizuki/cup.jpg'), MessageType.image, { caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));