/* Copyright (C) 2020 Yusuf Usta. - Copyright (C) 2021 Mr.joka

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Mizuki-Mr.joka
*/

const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const { UniversalSpeedTest, SpeedUnits } = require('universal-speedtest');
const TinyURL = require('tinyurl');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('web');
const SLang = Language.getString('webss');
// https://github.com/ddsol/speedtest.net/blob/master/bin/index.js#L86
const SpeedTest = new UniversalSpeedTest({
    measureUpload: true,
    downloadUnit: SpeedUnits.MBps,
    timeout: 60000
});

Mizuki.addCommand({pattern: 'speedtest', fromMe: true, desc: Lang.SPEEDTEST_DESC}, (async (message, match) => {
    var msg = await message.reply(Lang.SPEEDTESTING);
    SpeedTest.runTestByFast().then(result => {    
    await message.client.sendMessage(
      message.jid,Lang.SPEEDTEST_RESULT + '\n\n' +     
    '*Ping:* ```' + result.ping + 'ms```\n' +
    '*' + Lang.UPLOAD + ':* ```' + speedText(result.uploadSpeed) + '```\n' +
    '*' + Lang.DOWNLOAD + ':* ```' + speedText(result.downloadSpeed) + '```\n',MessageType.text
    );
    await msg.delete();
})}));

Mizuki.addCommand({pattern: 'ping$', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  await message.sendMessage('```Ping!```');
  var end = new Date().getTime();

  await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text, { quoted: message.data });
}));

if (Config.WORKTYPE == 'private') {

    Mizuki.addCommand({pattern: 'short ?(.*)', fromMe: true, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));
    Mizuki.addCommand({pattern: 'calc ?(.*)', fromMe: true, desc: Lang.CALC }, (async (message, match) => {
        if (match[1].length < 4) { return await message.client.sendMessage(message.jid,Lang.VALİD, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), sonsayi = split[1], ilksayi = split[0]
            var result = -(-ilksayi - sonsayi)
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text)
            }
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Mizuki.addCommand({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));
    Mizuki.addCommand({pattern: 'calc ?(.*)', fromMe: false, desc: Lang.CALC }, (async (message, match) => {
        if (match[1].length < 4) { return await message.client.sendMessage(message.jid,Lang.VALİD, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), sonsayi = split[1], ilksayi = split[0]
            var result = -(-ilksayi - sonsayi)
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text)
            }
        }
    }));
}
