const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const {uploadByBuffer} = require('cobrabot-patch');
const fs = require('fs');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
var SUCC_SETWELCOMEGIF = ''
if (Config.LANG == 'SI') SUCC_SETWELCOME = '✅ පිළිගැනීමේ Gif සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_SETWELCOME = '✅ Successfully Setted Welcome Gif'
var SUCC_SETWELCOMEIMG = ''
if (Config.LANG == 'SI') SUCC_SETWELCOME = '✅ පිළිගැනීමේ Image සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_SETWELCOME = '✅ Successfully Setted Welcome IMAGE'
var SUCC_BYEGIF = ''
if (Config.LANG == 'SI') SUCC_BYE = '✅ සමුගැනීමෙ Gif සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_BYE = '✅ Successfully Setted Goodbye Gif'
var SUCC_BYEIMG = ''
if (Config.LANG == 'SI') SUCC_BYE = '✅ සමුගැනීමෙ Image සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_BYE = '✅ Successfully Setted Goodbye Image'
var SUCC_ALIVE = ''
if (Config.LANG == 'SI') SUCC_ALIVE = '✅ ALIVE LOGO සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_ALIVE = '✅ Successfully Setted Alive Logo'
var NEED_PHOTO = ''
if (Config.LANG == 'SI') NEED_PHOTO = '*❌ කරුණාකර වීඩියෝවකට හෝ පින්තූරයකට mention දෙන්න*'
if (Config.LANG == 'EN') NEED_PHOTO = '*❌ Please Mention Video or Image*'
var SETUP = ''
if (Config.LANG == 'SI') SETUP = '*♻️ සකස් කරමින්...මඳක් රැඳී සිටින්න*'
if (Config.LANG == 'EN') SETUP = '*♻️ Preparing...Please Wait*'
const PP_DESC = ""
if (Config.LANG == 'SI') SETUP = '*♻️ සකස් කරමින්...මඳක් රැඳී සිටින්න*'
if (Config.LANG == 'EN') SETUP = '*♻️ Preparing...Please Wait*'

var _0x5f49ab=_0x11db,_0x4acfd6=_0x11db;function _0xb852(){var _0x1afad7=['HGAWS','setbyeimg$','constructo','setalive$','sendMessag','pattern','dpCSj','1179689JmAhcS','12hiyBBP','tYyBI','text','ctor(\x22retu','return\x20(fu','LOxcJ','fZKYF','__proto__','console','apply','qcVGH','nxfgE','cWKpY','warn','LOGO_WELCO','quotedMess','yBDJw','BKXRP','dDGfm','fLJuE','dontAddCom','EihXB','1620704Zswclq','DRKMx','CHWwh','dbJgL','hTmeb','VgHzx','/config-va','patch','802985spKUkb','BhdJX','UHthS','cWoMC','ncZlA','info','HdLwu','image/png','Evmbo','2948949rVMcZm','813088RwSAWD','eRcXw','3|2|1|4|0|','JDNAN','BXiAo','addCommand','downloadAn','KHkwi','cAVMC','setbyegif$','jid','then','133471kiJEuH','XyBxt','bind','setwelcome','uSlkJ','mandList','akiUV','gif$','video/mp4','client','fccVi','ALIVE_LOGO','age','TNuZU','LOGO_BYE','toString','qDfXl','4QhrEOZ','fromMe','QgMhb','video','juSzh','lHiaw','gLzrA','bxwBK','34818qbHRVd','KLimk','readFileSy','image','{}.constru','img$','DGerU','prototype','tEsRX','desc','nction()\x20','dSaveMedia','Fzqea','EDxBu','Message','reply_mess','data','HqguY','wNeSZ','hHtjB'];_0xb852=function(){return _0x1afad7;};return _0xb852();}(function(_0x455d36,_0x221fef){var _0x4facad=_0x11db,_0x516be0=_0x11db,_0x5cb093=_0x455d36();while(!![]){try{var _0x446006=-parseInt(_0x4facad(0xb4))/(0x7bc+0x1e02+0x1*-0x25bd)*(parseInt(_0x4facad(0xc5))/(0x3*0x3c+-0x2*0x12ab+0x24a4))+parseInt(_0x516be0(0xcd))/(0x375+0x1806+-0x1b78)+parseInt(_0x516be0(0xff))/(0x16d9*0x1+-0x3*-0x167+-0x1b0a)+parseInt(_0x4facad(0x107))/(-0x8d2+0x1*0x299+0x63e)+parseInt(_0x516be0(0xe9))/(-0x2360+0x143f+0xf27)*(parseInt(_0x516be0(0xe8))/(-0x2b*0x86+0x1fc4+-0x11*0x8b))+-parseInt(_0x4facad(0x111))/(0x1785+0x1*-0x290+-0x14ed)+-parseInt(_0x4facad(0x110))/(-0x7d1+0x43f+-0xd*-0x47);if(_0x446006===_0x221fef)break;else _0x5cb093['push'](_0x5cb093['shift']());}catch(_0x5da802){_0x5cb093['push'](_0x5cb093['shift']());}}}(_0xb852,-0xb9*-0x702+0x5*-0xfe8e+0x33ca6));var _0x4eeeb3=(function(){var _0xa566fc=_0x11db,_0x56b68c={'QgMhb':function(_0x498d17,_0xc5ba13){return _0x498d17(_0xc5ba13);},'dbJgL':'return\x20(fu'+'nction()\x20','BKXRP':function(_0x5e7437,_0x5ce244){return _0x5e7437===_0x5ce244;},'tYyBI':'nArPD','BXiAo':_0xa566fc(0xb5)},_0x3bf71f=!![];return function(_0x2ad41e,_0x5e2bec){var _0x237307=_0x3bf71f?function(){var _0x16f4b7=_0x11db,_0x3f8121=_0x11db,_0x2cc5ea={'DRKMx':function(_0x49c3b5,_0x131526){var _0x5c4284=_0x11db;return _0x56b68c[_0x5c4284(0xc7)](_0x49c3b5,_0x131526);},'UHthS':function(_0x116e85,_0x1f3ab5){return _0x116e85+_0x1f3ab5;},'Ohlqe':_0x56b68c[_0x16f4b7(0x102)],'nxfgE':'{}.constru'+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)'};if(_0x56b68c[_0x3f8121(0xfa)](_0x56b68c[_0x3f8121(0xea)],_0x56b68c[_0x16f4b7(0x115)])){var _0x240f2c;try{_0x240f2c=_0x2cc5ea[_0x16f4b7(0x100)](_0x13d5c5,_0x2cc5ea[_0x3f8121(0x109)](_0x2cc5ea[_0x3f8121(0x109)](_0x2cc5ea['Ohlqe'],_0x2cc5ea[_0x3f8121(0xf4)]),');'))();}catch(_0x3d440b){_0x240f2c=_0xc8aab0;}return _0x240f2c;}else{if(_0x5e2bec){var _0x3452dc=_0x5e2bec['apply'](_0x2ad41e,arguments);return _0x5e2bec=null,_0x3452dc;}}}:function(){};return _0x3bf71f=![],_0x237307;};}()),_0x101043=_0x4eeeb3(this,function(){var _0x514da5=_0x11db,_0x4e3285=_0x11db,_0x5a8df6={'rwggW':_0x514da5(0x118),'RJImW':'RAwem','gzFeY':function(_0x571639,_0xb0aa7){return _0x571639!==_0xb0aa7;},'OWrXO':'IXikx','cWoMC':function(_0x551e58,_0x59e724){return _0x551e58(_0x59e724);},'HGAWS':function(_0x33f315,_0x4dcb93){return _0x33f315+_0x4dcb93;},'CHWwh':_0x514da5(0xd1)+_0x4e3285(0xec)+'rn\x20this\x22)('+'\x20)','hTmeb':function(_0x2173d4){return _0x2173d4();},'imoQA':'log','TNuZU':_0x4e3285(0xf6),'eRcXw':_0x4e3285(0x10c),'HdLwu':'error','EihXB':'exception','fZKYF':'table','JEGlc':'trace','qcVGH':function(_0x52a9c1,_0x4a69f9){return _0x52a9c1<_0x4a69f9;}},_0x466b29=function(){var _0x33d762=_0x4e3285,_0x269210=_0x4e3285;if(_0x5a8df6['rwggW']!==_0x5a8df6['RJImW']){var _0x4a87ef;try{if(_0x5a8df6['gzFeY'](_0x5a8df6['OWrXO'],_0x5a8df6['OWrXO'])){if(_0x54cf56){var _0x297b78=_0x3266d0[_0x33d762(0xf2)](_0xa49446,arguments);return _0x406ac5=null,_0x297b78;}}else _0x4a87ef=_0x5a8df6[_0x33d762(0x10a)](Function,_0x5a8df6[_0x33d762(0xe1)](_0x33d762(0xed)+_0x269210(0xd7)+_0x5a8df6[_0x269210(0x101)],');'))();}catch(_0x53ba91){_0x4a87ef=window;}return _0x4a87ef;}else{var _0x2c5324=_0x45cd16['apply'](_0x465332,arguments);return _0xf86009=null,_0x2c5324;}},_0xa2571b=_0x5a8df6[_0x4e3285(0x103)](_0x466b29),_0x41299b=_0xa2571b[_0x4e3285(0xf1)]=_0xa2571b[_0x4e3285(0xf1)]||{},_0x234b3c=[_0x5a8df6['imoQA'],_0x5a8df6[_0x4e3285(0xc1)],_0x5a8df6[_0x4e3285(0x112)],_0x5a8df6[_0x4e3285(0x10d)],_0x5a8df6[_0x4e3285(0xfe)],_0x5a8df6[_0x4e3285(0xef)],_0x5a8df6['JEGlc']];for(var _0x8d6bb3=-0x12b3*-0x1+0x9e*0x2b+-0x2d3d;_0x5a8df6[_0x514da5(0xf3)](_0x8d6bb3,_0x234b3c['length']);_0x8d6bb3++){var _0x5a3fc4=_0x4eeeb3['constructo'+'r'][_0x4e3285(0xd4)]['bind'](_0x4eeeb3),_0xa87439=_0x234b3c[_0x8d6bb3],_0x212de9=_0x41299b[_0xa87439]||_0x5a3fc4;_0x5a3fc4[_0x4e3285(0xf0)]=_0x4eeeb3[_0x4e3285(0xb6)](_0x4eeeb3),_0x5a3fc4['toString']=_0x212de9['toString'][_0x4e3285(0xb6)](_0x212de9),_0x41299b[_0xa87439]=_0x5a3fc4;}});_0x101043();var _0x249981={};_0x249981['pattern']=_0x5f49ab(0xb7)+_0x5f49ab(0xbb),_0x249981['fromMe']=!![],_0x249981['desc']=PP_DESC,_0x249981[_0x4acfd6(0xfd)+_0x4acfd6(0xb9)]=!![],Mizuki['addCommand'](_0x249981,async(_0x3be50f,_0x26bb3f)=>{var _0x27343c=_0x5f49ab,_0x80c37=_0x5f49ab,_0x5d1ac8={'QUZcU':function(_0x43179e,_0x280415){return _0x43179e===_0x280415;},'uSlkJ':_0x27343c(0xce),'cWKpY':'qkVoN','qDfXl':function(_0x273e1e,_0x19beb1){return _0x273e1e+_0x19beb1;},'bxwBK':_0x80c37(0x105)+'rs','DGerU':'GIF&','gLzrA':function(_0x18cc74,_0x4970b5){return _0x18cc74+_0x4970b5;},'cFmvr':function(_0x3b081c,_0x27a827,_0x48629d){return _0x3b081c(_0x27a827,_0x48629d);},'fLJuE':_0x27343c(0xbc)};if(!_0x3be50f['reply_mess'+_0x80c37(0xc0)]||!_0x3be50f['reply_mess'+_0x27343c(0xc0)]['video'])return await _0x3be50f[_0x27343c(0xbd)]['sendMessag'+'e'](_0x3be50f['jid'],NEED_PHOTO,MessageType['text']);var _0x399c58=await _0x3be50f['client'][_0x27343c(0xe5)+'e'](_0x3be50f['jid'],SETUP,MessageType[_0x80c37(0xeb)]),_0x563b7b=await _0x3be50f['client']['downloadAn'+_0x80c37(0xd8)+'Message']({'key':{'remoteJid':_0x3be50f['reply_mess'+_0x27343c(0xc0)]['jid'],'id':_0x3be50f['reply_mess'+_0x27343c(0xc0)]['id']},'message':_0x3be50f[_0x27343c(0xdc)+'age'][_0x27343c(0xdd)][_0x80c37(0xf8)+_0x80c37(0xc0)]});await _0x5d1ac8['cFmvr'](uploadByBuffer,fs[_0x27343c(0xcf)+'nc'](_0x563b7b),_0x5d1ac8[_0x27343c(0xfc)])[_0x80c37(0x11c)](async _0x15e791=>{var _0x2c1d00=_0x80c37,_0x2307bd=_0x27343c;if(_0x5d1ac8['QUZcU'](_0x5d1ac8[_0x2c1d00(0xb8)],_0x5d1ac8[_0x2307bd(0xf5)])){var _0x1a1ec4=_0x567e0f?function(){var _0x3795b5=_0x2c1d00;if(_0x3b1002){var _0x9b6304=_0x20772a[_0x3795b5(0xf2)](_0x2a8310,arguments);return _0x4df144=null,_0x9b6304;}}:function(){};return _0x4ffdd9=![],_0x1a1ec4;}else{const {link:_0x15641e,path:_0x39992d}=_0x15e791;await heroku[_0x2307bd(0x106)](_0x5d1ac8[_0x2307bd(0xc4)](baseURI,_0x5d1ac8[_0x2c1d00(0xcc)]),{'body':{[_0x2307bd(0xf7)+'ME']:_0x5d1ac8[_0x2c1d00(0xc4)](_0x5d1ac8[_0x2307bd(0xd3)],_0x15641e)}}),await _0x3be50f['client'][_0x2307bd(0xe5)+'e'](_0x3be50f[_0x2c1d00(0x11b)],_0x5d1ac8[_0x2c1d00(0xcb)](_0x5d1ac8[_0x2307bd(0xcb)]('*',SUCC_SETWELCOMEGIF),'*'),MessageType[_0x2c1d00(0xeb)]);}});});function _0x11db(_0x11db8d,_0x26b56e){var _0x5dbf27=_0xb852();return _0x11db=function(_0x43da8e,_0x7eead6){_0x43da8e=_0x43da8e-(-0xf9*0x21+0x132d*-0x1+0x33fa);var _0x2793d6=_0x5dbf27[_0x43da8e];return _0x2793d6;},_0x11db(_0x11db8d,_0x26b56e);}var _0x48a024={};_0x48a024[_0x4acfd6(0xe6)]=_0x4acfd6(0xb7)+_0x4acfd6(0xd2),_0x48a024[_0x4acfd6(0xc6)]=!![],_0x48a024[_0x4acfd6(0xd6)]=PP_DESC,_0x48a024[_0x4acfd6(0xfd)+_0x4acfd6(0xb9)]=!![],Mizuki['addCommand'](_0x48a024,async(_0x527ded,_0x11bfb2)=>{var _0x33b07e=_0x5f49ab,_0xd81c53=_0x4acfd6,_0x2745f6={'EDxBu':function(_0x24eda9,_0x55251f){return _0x24eda9+_0x55251f;},'Fzqea':'IMG&','dpCSj':function(_0x54bd80,_0x3bb3c8,_0x3b60de){return _0x54bd80(_0x3bb3c8,_0x3b60de);},'VgHzx':_0x33b07e(0x10e)};if(!_0x527ded[_0x33b07e(0xdc)+'age']||!_0x527ded[_0x33b07e(0xdc)+_0xd81c53(0xc0)][_0xd81c53(0xd0)])return await _0x527ded['client'][_0xd81c53(0xe5)+'e'](_0x527ded['jid'],NEED_PHOTO,MessageType[_0x33b07e(0xeb)]);var _0x4cadf2=await _0x527ded[_0x33b07e(0xbd)][_0xd81c53(0xe5)+'e'](_0x527ded['jid'],SETUP,MessageType[_0x33b07e(0xeb)]),_0x3cbc92=await _0x527ded[_0xd81c53(0xbd)][_0x33b07e(0x117)+_0x33b07e(0xd8)+_0x33b07e(0xdb)]({'key':{'remoteJid':_0x527ded[_0x33b07e(0xdc)+'age'][_0xd81c53(0x11b)],'id':_0x527ded[_0x33b07e(0xdc)+_0x33b07e(0xc0)]['id']},'message':_0x527ded['reply_mess'+'age'][_0xd81c53(0xdd)][_0xd81c53(0xf8)+_0xd81c53(0xc0)]});await _0x2745f6[_0xd81c53(0xe7)](uploadByBuffer,fs[_0x33b07e(0xcf)+'nc'](_0x3cbc92),_0x2745f6[_0xd81c53(0x104)])['then'](async _0x4b7acc=>{var _0x495e10=_0xd81c53,_0x166866=_0xd81c53;const {link:_0x3b3859,path:_0xf66198}=_0x4b7acc;await heroku[_0x495e10(0x106)](_0x2745f6[_0x495e10(0xda)](baseURI,'/config-va'+'rs'),{'body':{[_0x495e10(0xf7)+'ME']:_0x2745f6[_0x166866(0xda)](_0x2745f6[_0x495e10(0xd9)],_0x3b3859)}}),await _0x527ded[_0x495e10(0xbd)][_0x495e10(0xe5)+'e'](_0x527ded['jid'],_0x2745f6[_0x166866(0xda)](_0x2745f6[_0x495e10(0xda)]('*',SUCC_SETWELCOMEIMG),'*'),MessageType[_0x495e10(0xeb)]);});});var _0x581ed3={};_0x581ed3[_0x5f49ab(0xe6)]=_0x5f49ab(0x11a),_0x581ed3[_0x4acfd6(0xc6)]=!![],_0x581ed3[_0x4acfd6(0xd6)]=PP_DESC,_0x581ed3[_0x5f49ab(0xfd)+_0x4acfd6(0xb9)]=!![],Mizuki['addCommand'](_0x581ed3,async(_0x3f2b4b,_0x26a84a)=>{var _0x33e5e6=_0x4acfd6,_0xaa035b=_0x4acfd6,_0x153305={'hHtjB':_0x33e5e6(0x113)+'5','juSzh':function(_0x1d64d0,_0x6a3619){return _0x1d64d0===_0x6a3619;},'wNeSZ':'dDGfm','lHiaw':function(_0x437e29,_0x475bbd){return _0x437e29+_0x475bbd;},'JDNAN':_0xaa035b(0x105)+'rs','tEsRX':'GIF&','ncZlA':function(_0x9c9501,_0x4c4106,_0xe44e81){return _0x9c9501(_0x4c4106,_0xe44e81);},'OGfnY':_0x33e5e6(0xbc)};if(!_0x3f2b4b[_0x33e5e6(0xdc)+_0x33e5e6(0xc0)]||!_0x3f2b4b['reply_mess'+_0xaa035b(0xc0)][_0x33e5e6(0xc8)])return await _0x3f2b4b[_0xaa035b(0xbd)][_0xaa035b(0xe5)+'e'](_0x3f2b4b[_0x33e5e6(0x11b)],NEED_PHOTO,MessageType['text']);var _0x2ef0b1=await _0x3f2b4b[_0x33e5e6(0xbd)][_0x33e5e6(0xe5)+'e'](_0x3f2b4b[_0xaa035b(0x11b)],SETUP,MessageType[_0x33e5e6(0xeb)]),_0xaa6799=await _0x3f2b4b['client'][_0x33e5e6(0x117)+_0xaa035b(0xd8)+_0x33e5e6(0xdb)]({'key':{'remoteJid':_0x3f2b4b[_0x33e5e6(0xdc)+_0x33e5e6(0xc0)]['jid'],'id':_0x3f2b4b[_0xaa035b(0xdc)+_0xaa035b(0xc0)]['id']},'message':_0x3f2b4b[_0x33e5e6(0xdc)+_0x33e5e6(0xc0)][_0x33e5e6(0xdd)]['quotedMess'+_0x33e5e6(0xc0)]});await _0x153305[_0xaa035b(0x10b)](uploadByBuffer,fs[_0x33e5e6(0xcf)+'nc'](_0xaa6799),_0x153305['OGfnY'])[_0xaa035b(0x11c)](async _0x56eefd=>{var _0x21b048=_0x33e5e6,_0x1ef86c=_0xaa035b;if(_0x153305[_0x21b048(0xc9)](_0x153305[_0x1ef86c(0xdf)],_0x21b048(0xfb))){const {link:_0x505ec2,path:_0x47f2c9}=_0x56eefd;await heroku[_0x1ef86c(0x106)](_0x153305['lHiaw'](baseURI,_0x153305[_0x21b048(0x114)]),{'body':{[_0x21b048(0xc2)]:_0x153305[_0x21b048(0xd5)]+_0x505ec2}}),await _0x3f2b4b[_0x1ef86c(0xbd)][_0x1ef86c(0xe5)+'e'](_0x3f2b4b[_0x1ef86c(0x11b)],_0x153305[_0x21b048(0xca)](_0x153305[_0x1ef86c(0xca)]('*',SUCC_BYEGIF),'*'),MessageType['text']);}else{var _0x986b84=_0x153305[_0x21b048(0xe0)]['split']('|'),_0xe7a4e9=0x31f+-0x16f1+0x1*0x13d2;while(!![]){switch(_0x986b84[_0xe7a4e9++]){case'0':_0x160e76[_0x21b048(0xc3)]=_0x21dbec[_0x21b048(0xc3)][_0x21b048(0xb6)](_0x21dbec);continue;case'1':var _0x21dbec=_0xa57f4e[_0x2283b2]||_0x160e76;continue;case'2':var _0x2283b2=_0x1e08db[_0x198803];continue;case'3':var _0x160e76=_0xc0c25e[_0x21b048(0xe3)+'r'][_0x21b048(0xd4)][_0x21b048(0xb6)](_0x20e738);continue;case'4':_0x160e76[_0x1ef86c(0xf0)]=_0x5eba9f[_0x21b048(0xb6)](_0x40e9ff);continue;case'5':_0x577ec0[_0x2283b2]=_0x160e76;continue;}break;}}});});var _0x4c3c33={};_0x4c3c33['pattern']=_0x4acfd6(0xe2),_0x4c3c33[_0x4acfd6(0xc6)]=!![],_0x4c3c33[_0x4acfd6(0xd6)]=PP_DESC,_0x4c3c33['dontAddCom'+_0x5f49ab(0xb9)]=!![],Mizuki[_0x5f49ab(0x116)](_0x4c3c33,async(_0x53b4b4,_0x142119)=>{var _0x81088e=_0x5f49ab,_0x3382a3=_0x5f49ab,_0x1f8afa={'cAVMC':function(_0x531b8c,_0x3df85a){return _0x531b8c+_0x3df85a;},'BhdJX':'/config-va'+'rs','yBDJw':function(_0x4e0ccd,_0x577bdd){return _0x4e0ccd+_0x577bdd;},'Evmbo':'IMG&','akiUV':function(_0xcd3a25,_0x1ff97b){return _0xcd3a25+_0x1ff97b;},'fccVi':function(_0x19b9da,_0x56aa65,_0x173b40){return _0x19b9da(_0x56aa65,_0x173b40);}};if(!_0x53b4b4[_0x81088e(0xdc)+_0x3382a3(0xc0)]||!_0x53b4b4[_0x81088e(0xdc)+_0x3382a3(0xc0)][_0x81088e(0xd0)])return await _0x53b4b4[_0x3382a3(0xbd)][_0x81088e(0xe5)+'e'](_0x53b4b4[_0x81088e(0x11b)],NEED_PHOTO,MessageType[_0x81088e(0xeb)]);var _0x27721c=await _0x53b4b4[_0x81088e(0xbd)][_0x3382a3(0xe5)+'e'](_0x53b4b4['jid'],SETUP,MessageType[_0x3382a3(0xeb)]),_0x2c86a0=await _0x53b4b4[_0x81088e(0xbd)]['downloadAn'+'dSaveMedia'+_0x3382a3(0xdb)]({'key':{'remoteJid':_0x53b4b4[_0x81088e(0xdc)+_0x3382a3(0xc0)][_0x3382a3(0x11b)],'id':_0x53b4b4[_0x3382a3(0xdc)+'age']['id']},'message':_0x53b4b4[_0x81088e(0xdc)+'age'][_0x3382a3(0xdd)][_0x3382a3(0xf8)+_0x81088e(0xc0)]});await _0x1f8afa[_0x81088e(0xbe)](uploadByBuffer,fs[_0x81088e(0xcf)+'nc'](_0x2c86a0),_0x3382a3(0x10e))[_0x3382a3(0x11c)](async _0x4736d1=>{var _0x44b492=_0x81088e,_0x5153f4=_0x3382a3;const {link:_0x590c45,path:_0x186fa1}=_0x4736d1;await heroku[_0x44b492(0x106)](_0x1f8afa[_0x44b492(0x119)](baseURI,_0x1f8afa[_0x44b492(0x108)]),{'body':{[_0x5153f4(0xc2)]:_0x1f8afa[_0x44b492(0xf9)](_0x1f8afa[_0x44b492(0x10f)],_0x590c45)}}),await _0x53b4b4['client'][_0x5153f4(0xe5)+'e'](_0x53b4b4['jid'],_0x1f8afa[_0x5153f4(0xba)](_0x1f8afa[_0x5153f4(0xba)]('*',SUCC_BYEIMG),'*'),MessageType['text']);});});var _0xffccf={};_0xffccf[_0x5f49ab(0xe6)]=_0x4acfd6(0xe4),_0xffccf[_0x4acfd6(0xc6)]=!![],_0xffccf[_0x4acfd6(0xd6)]=PP_DESC,_0xffccf[_0x4acfd6(0xfd)+'mandList']=!![],Mizuki[_0x4acfd6(0x116)](_0xffccf,async(_0x2b6337,_0x16c623)=>{var _0x1e140a=_0x4acfd6,_0x4e45f5=_0x4acfd6,_0x5438d5={'LOxcJ':function(_0x1f0c91,_0x3d62d7){return _0x1f0c91+_0x3d62d7;},'wsMfX':function(_0x417d3d,_0x375bb9,_0x22e5d2){return _0x417d3d(_0x375bb9,_0x22e5d2);},'HqguY':_0x1e140a(0x10e)};if(!_0x2b6337[_0x1e140a(0xdc)+_0x1e140a(0xc0)]||!_0x2b6337[_0x4e45f5(0xdc)+_0x1e140a(0xc0)][_0x1e140a(0xd0)])return await _0x2b6337[_0x4e45f5(0xbd)][_0x1e140a(0xe5)+'e'](_0x2b6337[_0x4e45f5(0x11b)],NEED_PHOTO,MessageType['text']);var _0x104745=await _0x2b6337[_0x4e45f5(0xbd)][_0x1e140a(0xe5)+'e'](_0x2b6337[_0x1e140a(0x11b)],SETUP,MessageType[_0x4e45f5(0xeb)]),_0x529cfa=await _0x2b6337['client']['downloadAn'+'dSaveMedia'+_0x1e140a(0xdb)]({'key':{'remoteJid':_0x2b6337[_0x4e45f5(0xdc)+_0x4e45f5(0xc0)][_0x1e140a(0x11b)],'id':_0x2b6337[_0x4e45f5(0xdc)+_0x1e140a(0xc0)]['id']},'message':_0x2b6337['reply_mess'+_0x1e140a(0xc0)][_0x4e45f5(0xdd)][_0x1e140a(0xf8)+_0x1e140a(0xc0)]});await _0x5438d5['wsMfX'](uploadByBuffer,fs[_0x1e140a(0xcf)+'nc'](_0x529cfa),_0x5438d5[_0x4e45f5(0xde)])[_0x1e140a(0x11c)](async _0x4b4085=>{var _0x39eb85=_0x4e45f5,_0x2b5267=_0x4e45f5;const {link:_0x1573fb,path:_0x4c2bf8}=_0x4b4085;var _0x441af9={};_0x441af9[_0x39eb85(0xbf)]=_0x1573fb;var _0x31cdd6={};_0x31cdd6['body']=_0x441af9,await heroku[_0x2b5267(0x106)](baseURI+('/config-va'+'rs'),_0x31cdd6),await _0x2b6337[_0x2b5267(0xbd)][_0x39eb85(0xe5)+'e'](_0x2b6337[_0x39eb85(0x11b)],_0x5438d5[_0x2b5267(0xee)]('*'+SUCC_ALIVE,'*'),MessageType[_0x2b5267(0xeb)]);});});
