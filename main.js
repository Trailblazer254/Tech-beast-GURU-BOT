const _0xfd3d9=_0x12ac;(function(_0x41d1a9,_0x8b2715){const _0x553e87=_0x12ac,_0x45c2e3=_0x41d1a9();while(!![]){try{const _0x92c95=parseInt(_0x553e87(0xac))/0x1+-parseInt(_0x553e87(0x92))/0x2*(parseInt(_0x553e87(0xa7))/0x3)+-parseInt(_0x553e87(0xa8))/0x4*(parseInt(_0x553e87(0xa1))/0x5)+-parseInt(_0x553e87(0x91))/0x6*(-parseInt(_0x553e87(0x97))/0x7)+parseInt(_0x553e87(0x95))/0x8+parseInt(_0x553e87(0xab))/0x9*(-parseInt(_0x553e87(0xa5))/0xa)+parseInt(_0x553e87(0xa2))/0xb;if(_0x92c95===_0x8b2715)break;else _0x45c2e3['push'](_0x45c2e3['shift']());}catch(_0x146460){_0x45c2e3['push'](_0x45c2e3['shift']());}}}(_0x2fa7,0xea206),process[_0xfd3d9(0xa3)][_0xfd3d9(0x98)]='0');import'./config.js';import{createRequire}from'module';function _0x12ac(_0x1959b0,_0x4a8e24){const _0x2fa747=_0x2fa7();return _0x12ac=function(_0x12ac5e,_0x253723){_0x12ac5e=_0x12ac5e-0x8f;let _0x25430=_0x2fa747[_0x12ac5e];return _0x25430;},_0x12ac(_0x1959b0,_0x4a8e24);}import _0x48957c,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import*as _0x4f7b15 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch,rmSync}from'fs';import _0x51feb4 from'yargs';import{spawn}from'child_process';import _0x535005 from'lodash';import _0x299a24 from'chalk';import _0x1d5a18 from'syntax-error';function _0x2fa7(){const _0x4cdb75=['NODE_TLS_REJECT_UNAUTHORIZED','opts','__filename','timestamp','url','argv','entries','__require','prefix','3989890jCfmpk','12682857ioFguP','env','APIKeys','11666170NoktDC','__dirname','278601FYiTIS','8ARpJPj','dirname','win32','9iMEexl','1048411jJfpMk','API','APIs','508716mDyPQV','28UPkTeT','@adiwajshing/baileys','\x5c$&','12388040eBJnDa','‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\x5c-','105QJyivY'];_0x2fa7=function(){return _0x4cdb75;};return _0x2fa7();}import{tmpdir}from'os';import{format}from'util';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import _0x175c8b from'pino';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';import _0x399e1a from'./lib/store.js';const {DisconnectReason,useMultiFileAuthState}=await import(_0xfd3d9(0x93)),{CONNECTING}=_0x4f7b15,{chain}=_0x535005,PORT=process[_0xfd3d9(0xa3)]['PORT']||process[_0xfd3d9(0xa3)]['SERVER_PORT']||0xbb8;protoType(),serialize(),global[_0xfd3d9(0x9a)]=function filename(_0x5eb04f=import.meta['url'],_0x588670=platform!==_0xfd3d9(0xaa)){return _0x588670?/file:\/\/\//['test'](_0x5eb04f)?fileURLToPath(_0x5eb04f):_0x5eb04f:pathToFileURL(_0x5eb04f)['toString']();},global['__dirname']=function dirname(_0x45b8ad){const _0x4778b0=_0xfd3d9;return _0x48957c[_0x4778b0(0xa9)](global[_0x4778b0(0x9a)](_0x45b8ad,!![]));},global[_0xfd3d9(0x9f)]=function require(_0x330c81=import.meta[_0xfd3d9(0x9c)]){return createRequire(_0x330c81);},global[_0xfd3d9(0x8f)]=(_0x88b52c,_0x19802d='/',_0x328566={},_0x13a165)=>(_0x88b52c in global[_0xfd3d9(0x90)]?global[_0xfd3d9(0x90)][_0x88b52c]:_0x88b52c)+_0x19802d+(_0x328566||_0x13a165?'?'+new URLSearchParams(Object[_0xfd3d9(0x9e)]({..._0x328566,..._0x13a165?{[_0x13a165]:global[_0xfd3d9(0xa4)][_0x88b52c in global[_0xfd3d9(0x90)]?global[_0xfd3d9(0x90)][_0x88b52c]:_0x88b52c]}:{}})):''),global[_0xfd3d9(0x9b)]={'start':new Date()};const __dirname=global[_0xfd3d9(0xa6)](import.meta[_0xfd3d9(0x9c)]);global[_0xfd3d9(0x99)]=new Object(_0x51feb4(process[_0xfd3d9(0x9d)]['slice'](0x2))['exitProcess'](![])['parse']()),global[_0xfd3d9(0xa0)]=new RegExp('^['+(opts[_0xfd3d9(0xa0)]||_0xfd3d9(0x96))['replace'](/[|\\{}()[\]^$+*?.\-\^]/g,_0xfd3d9(0x94))+']');

//DATABASE--START 


 global.opts['db'] = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority'

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
      (opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)


global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
    if (!global.db.READ) {
      clearInterval(this)
      resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
    }
  }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read().catch(console.error)
  global.db.READ = null
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = chain(global.db.data)
}
loadDatabase()

//DATABASE--END

const _0x2622a9=_0x42fa;(function(_0x10ae2e,_0x57664c){const _0x16be47=_0x42fa,_0x389e4e=_0x10ae2e();while(!![]){try{const _0x390eb3=parseInt(_0x16be47(0xee))/0x1*(parseInt(_0x16be47(0x104))/0x2)+-parseInt(_0x16be47(0xfa))/0x3+-parseInt(_0x16be47(0xe7))/0x4*(parseInt(_0x16be47(0x112))/0x5)+-parseInt(_0x16be47(0x108))/0x6*(-parseInt(_0x16be47(0xe8))/0x7)+-parseInt(_0x16be47(0x114))/0x8*(parseInt(_0x16be47(0x129))/0x9)+-parseInt(_0x16be47(0x115))/0xa+parseInt(_0x16be47(0xd3))/0xb;if(_0x390eb3===_0x57664c)break;else _0x389e4e['push'](_0x389e4e['shift']());}catch(_0x35017c){_0x389e4e['push'](_0x389e4e['shift']());}}}(_0x4d85,0xb900c),global[_0x2622a9(0xe9)]=(opts['_'][0x0]||'guru')+_0x2622a9(0xc9));const {state,saveState}=store[_0x2622a9(0xca)](global[_0x2622a9(0xe9)]),connectionOptions={'printQRInTerminal':!![],'auth':state,'logger':pino({'level':_0x2622a9(0xf2)}),'browser':[_0x2622a9(0xf6),'Safari','1.0.0']};function _0x4d85(){const _0x4a3ac9=['sIcon','credsUpdate','sort','3937446zaxqov','./handler.js?update=','now','connectionUpdate','warn','deleteUpdate','group\x20link\x20revoked\x0a@revoke','error','bind','message.delete','295522WUChZr','-filter_complex','data','participantsUpdate','1321482lbBfai','sSubject','conn','Group\x20name\x20changed\x20\x0a@group','server','deleted\x20plugin\x20-\x20\x27','sdemote','uncaughtException','spromote','fromEntries','480750xshWlI','support','40HuNVWD','2297990teroJN','entries','write','onDelete','group\x20icon\x20changed','-loglevel','output','@user\x20is\x20now\x20admin','groupsUpdate','messages.upsert','connect','sDesc','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','handler','close','Group\x20description\x20changed\x20\x0a@desc','reload','forEach','?update=','info','592929zsbzBm','sRevoke','test','./tmp','Quick\x20Test\x20Done','module','freeze','logger','race','.data.json','useSingleFileAuthState','statusCode','__filename','Hello,\x20@user\x0aWelcome\x20@group','./handler.js','--version','autocleartmp','groups.update','creds.update','14279265ulERRQ','connection.update','-frames:v','convert','payload','filter','default','isFile','webp','map','push','plugins','readyState','error\x20require\x20plugin\x20\x27','ffmpegWebp','\x20updated\x20plugin\x20-\x20\x27','keys','length','✅\x20\x20Auto\x20clear\x20\x20|\x20\x20tmp\x20folder\x20cleared','ffmpeg','12iaQvvO','28zMEqEf','authFile','group-participants.update','loggedOut','magick','catch','5PaQnMO','log','off','ffprobe','silent','localeCompare','then','reloadHandler','GURU-BOT'];_0x4d85=function(){return _0x4a3ac9;};return _0x4d85();}function _0x42fa(_0xc9a66a,_0x28fc71){const _0x4d8554=_0x4d85();return _0x42fa=function(_0x42fa5d,_0x7b91ad){_0x42fa5d=_0x42fa5d-0xc1;let _0x2326c5=_0x4d8554[_0x42fa5d];return _0x2326c5;},_0x42fa(_0xc9a66a,_0x28fc71);}global['conn']=makeWASocket(connectionOptions),conn['isInit']=![];!opts['test']&&setInterval(async()=>{const _0x3c5a62=_0x2622a9;if(global['db'][_0x3c5a62(0x106)])await global['db'][_0x3c5a62(0x117)]()[_0x3c5a62(0xed)](console['error']);if(opts[_0x3c5a62(0xd0)])try{clearTmp();}catch(_0x1f28c6){console[_0x3c5a62(0x101)](_0x1f28c6);}},0x3c*0x3e8);if(opts[_0x2622a9(0x10c)])(await import('./server.js'))[_0x2622a9(0xd9)](global[_0x2622a9(0x10a)],PORT);async function clearTmp(){const _0x1e0f54=_0x2622a9,_0x5db272=[tmpdir(),join(__dirname,_0x1e0f54(0xc3))],_0xdce0be=[];return _0x5db272[_0x1e0f54(0x126)](_0xd2ef17=>readdirSync(_0xd2ef17)[_0x1e0f54(0x126)](_0x2b0f64=>_0xdce0be[_0x1e0f54(0xdd)](join(_0xd2ef17,_0x2b0f64)))),_0xdce0be['map'](_0x145fc9=>{const _0x2bb9b4=_0x1e0f54,_0x1f3eee=statSync(_0x145fc9);if(_0x1f3eee[_0x2bb9b4(0xda)]()&&Date['now']()-_0x1f3eee['mtimeMs']>=0x3e8*0x3c*0x1)return unlinkSync(_0x145fc9);return![];});}setInterval(async()=>{const _0x53ccff=_0x2622a9;var _0x3bc549=await clearTmp();console[_0x53ccff(0xef)](chalk['cyan'](_0x53ccff(0xe5)));},0xea60);async function connectionUpdate(_0x53f088){const _0x518abf=_0x2622a9,{connection:_0x3a92aa,lastDisconnect:_0x3a5c60,isNewLogin:_0x1cba2a}=_0x53f088;if(_0x1cba2a)conn['isInit']=!![];const _0x2a9420=_0x3a5c60?.[_0x518abf(0x101)]?.[_0x518abf(0x11b)]?.[_0x518abf(0xcb)]||_0x3a5c60?.[_0x518abf(0x101)]?.[_0x518abf(0x11b)]?.[_0x518abf(0xd7)]?.[_0x518abf(0xcb)];_0x2a9420&&_0x2a9420!==DisconnectReason[_0x518abf(0xeb)]&&conn?.['ws'][_0x518abf(0xdf)]!==CONNECTING&&(console[_0x518abf(0xef)](await global[_0x518abf(0xf5)](!![])[_0x518abf(0xed)](console[_0x518abf(0x101)])),global['timestamp'][_0x518abf(0x11f)]=new Date());if(global['db'][_0x518abf(0x106)]==null)loadDatabase();}process['on'](_0x2622a9(0x10f),console[_0x2622a9(0x101)]);let isInit=!![],handler=await import(_0x2622a9(0xce));global['reloadHandler']=async function(_0x1a2055){const _0x39c83f=_0x2622a9;try{const _0x1d7436=await import(_0x39c83f(0xfb)+Date[_0x39c83f(0xfc)]())[_0x39c83f(0xed)](console[_0x39c83f(0x101)]);if(Object[_0x39c83f(0xe3)](_0x1d7436||{})[_0x39c83f(0xe4)])handler=_0x1d7436;}catch(_0x3e2e3a){console['error'](_0x3e2e3a);}if(_0x1a2055){const _0x1bcdbc=global['conn']['chats'];try{global[_0x39c83f(0x10a)]['ws'][_0x39c83f(0x123)]();}catch{}conn['ev']['removeAllListeners'](),global[_0x39c83f(0x10a)]=makeWASocket(connectionOptions,{'chats':_0x1bcdbc}),isInit=!![];}return!isInit&&(conn['ev'][_0x39c83f(0xf0)](_0x39c83f(0x11e),conn[_0x39c83f(0x122)]),conn['ev'][_0x39c83f(0xf0)](_0x39c83f(0xea),conn['participantsUpdate']),conn['ev'][_0x39c83f(0xf0)]('groups.update',conn[_0x39c83f(0x11d)]),conn['ev'][_0x39c83f(0xf0)](_0x39c83f(0x103),conn[_0x39c83f(0x118)]),conn['ev'][_0x39c83f(0xf0)](_0x39c83f(0xd4),conn[_0x39c83f(0xfd)]),conn['ev'][_0x39c83f(0xf0)](_0x39c83f(0xd2),conn[_0x39c83f(0xf8)])),conn['welcome']=_0x39c83f(0xcd),conn['bye']='Goodbye\x20@user',conn[_0x39c83f(0x110)]=_0x39c83f(0x11c),conn[_0x39c83f(0x10e)]='@user\x20demoted',conn[_0x39c83f(0x120)]=_0x39c83f(0x124),conn[_0x39c83f(0x109)]=_0x39c83f(0x10b),conn[_0x39c83f(0xf7)]=_0x39c83f(0x119),conn[_0x39c83f(0xc1)]=_0x39c83f(0x100),conn[_0x39c83f(0x122)]=handler[_0x39c83f(0x122)][_0x39c83f(0x102)](global[_0x39c83f(0x10a)]),conn[_0x39c83f(0x107)]=handler['participantsUpdate']['bind'](global['conn']),conn[_0x39c83f(0x11d)]=handler['groupsUpdate'][_0x39c83f(0x102)](global[_0x39c83f(0x10a)]),conn['onDelete']=handler[_0x39c83f(0xff)][_0x39c83f(0x102)](global[_0x39c83f(0x10a)]),conn[_0x39c83f(0xfd)]=connectionUpdate[_0x39c83f(0x102)](global[_0x39c83f(0x10a)]),conn[_0x39c83f(0xf8)]=saveState['bind'](global['conn'],!![]),conn['ev']['on']('messages.upsert',conn[_0x39c83f(0x122)]),conn['ev']['on'](_0x39c83f(0xea),conn[_0x39c83f(0x107)]),conn['ev']['on'](_0x39c83f(0xd1),conn['groupsUpdate']),conn['ev']['on'](_0x39c83f(0x103),conn[_0x39c83f(0x118)]),conn['ev']['on'](_0x39c83f(0xd4),conn[_0x39c83f(0xfd)]),conn['ev']['on'](_0x39c83f(0xd2),conn[_0x39c83f(0xf8)]),isInit=![],!![];};const pluginFolder=global['__dirname'](join(__dirname,'./plugins/index')),pluginFilter=_0x5e0413=>/\.js$/[_0x2622a9(0xc2)](_0x5e0413);global[_0x2622a9(0xde)]={};async function filesInit(){const _0x3e4f2a=_0x2622a9;for(let _0x5c272d of readdirSync(pluginFolder)[_0x3e4f2a(0xd8)](pluginFilter)){try{let _0x5e31e7=global[_0x3e4f2a(0xcc)](join(pluginFolder,_0x5c272d));const _0x1c7d31=await import(_0x5e31e7);global[_0x3e4f2a(0xde)][_0x5c272d]=_0x1c7d31[_0x3e4f2a(0xd9)]||_0x1c7d31;}catch(_0x195e77){conn[_0x3e4f2a(0xc7)]['error'](_0x195e77),delete global[_0x3e4f2a(0xde)][_0x5c272d];}}}filesInit()[_0x2622a9(0xf4)](_0x1da5e1=>console['log'](Object['keys'](global[_0x2622a9(0xde)])))[_0x2622a9(0xed)](console[_0x2622a9(0x101)]),global[_0x2622a9(0x125)]=async(_0x3c9acc,_0x361375)=>{const _0x43359c=_0x2622a9;if(pluginFilter(_0x361375)){let _0xf03420=global[_0x43359c(0xcc)](join(pluginFolder,_0x361375),!![]);if(_0x361375 in global[_0x43359c(0xde)]){if(existsSync(_0xf03420))conn[_0x43359c(0xc7)][_0x43359c(0x128)](_0x43359c(0xe2)+_0x361375+'\x27');else return conn[_0x43359c(0xc7)][_0x43359c(0xfe)](_0x43359c(0x10d)+_0x361375+'\x27'),delete global['plugins'][_0x361375];}else conn['logger']['info']('new\x20plugin\x20-\x20\x27'+_0x361375+'\x27');let _0x17afd9=syntaxerror(readFileSync(_0xf03420),_0x361375,{'sourceType':_0x43359c(0xc5),'allowAwaitOutsideFunction':!![]});if(_0x17afd9)conn[_0x43359c(0xc7)][_0x43359c(0x101)]('syntax\x20error\x20while\x20loading\x20\x27'+_0x361375+'\x27\x0a'+format(_0x17afd9));else try{const _0x95f93f=await import(global[_0x43359c(0xcc)](_0xf03420)+_0x43359c(0x127)+Date[_0x43359c(0xfc)]());global[_0x43359c(0xde)][_0x361375]=_0x95f93f[_0x43359c(0xd9)]||_0x95f93f;}catch(_0x403043){conn['logger'][_0x43359c(0x101)](_0x43359c(0xe0)+_0x361375+'\x0a'+format(_0x403043)+'\x27');}finally{global[_0x43359c(0xde)]=Object[_0x43359c(0x111)](Object[_0x43359c(0x116)](global[_0x43359c(0xde)])[_0x43359c(0xf9)](([_0x10cb7b],[_0x5aeb46])=>_0x10cb7b[_0x43359c(0xf3)](_0x5aeb46)));}}},Object[_0x2622a9(0xc6)](global[_0x2622a9(0x125)]),watch(pluginFolder,global[_0x2622a9(0x125)]),await global[_0x2622a9(0xf5)]();async function _quickTest(){const _0xa7a88d=_0x2622a9;let _0xdfb6d5=await Promise['all']([spawn('ffmpeg'),spawn(_0xa7a88d(0xf1)),spawn(_0xa7a88d(0xe6),['-hide_banner',_0xa7a88d(0x11a),'error',_0xa7a88d(0x105),'color',_0xa7a88d(0xd5),'1','-f',_0xa7a88d(0xdb),'-']),spawn(_0xa7a88d(0xd6)),spawn(_0xa7a88d(0xec)),spawn('gm'),spawn('find',[_0xa7a88d(0xcf)])][_0xa7a88d(0xdc)](_0x49c9e9=>{const _0x188105=_0xa7a88d;return Promise[_0x188105(0xc8)]([new Promise(_0x2406c2=>{const _0xfd3998=_0x188105;_0x49c9e9['on'](_0xfd3998(0x123),_0x48a75d=>{_0x2406c2(_0x48a75d!==0x7f);});}),new Promise(_0x359fc6=>{const _0x48a8ad=_0x188105;_0x49c9e9['on'](_0x48a8ad(0x101),_0x5a3208=>_0x359fc6(![]));})]);})),[_0x189c4f,_0x1f7758,_0x59c034,_0x20a41d,_0x3371fb,_0x4df4aa,_0x407f80]=_0xdfb6d5;console[_0xa7a88d(0xef)](_0xdfb6d5);let _0x1b147b=global['support']={'ffmpeg':_0x189c4f,'ffprobe':_0x1f7758,'ffmpegWebp':_0x59c034,'convert':_0x20a41d,'magick':_0x3371fb,'gm':_0x4df4aa,'find':_0x407f80};Object[_0xa7a88d(0xc6)](global[_0xa7a88d(0x113)]);if(!_0x1b147b[_0xa7a88d(0xe6)])conn[_0xa7a88d(0xc7)][_0xa7a88d(0xfe)](_0xa7a88d(0x121));if(_0x1b147b[_0xa7a88d(0xe6)]&&!_0x1b147b[_0xa7a88d(0xe1)])conn[_0xa7a88d(0xc7)][_0xa7a88d(0xfe)]('Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)');if(!_0x1b147b[_0xa7a88d(0xd6)]&&!_0x1b147b['magick']&&!_0x1b147b['gm'])conn[_0xa7a88d(0xc7)]['warn']('Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)');}_quickTest()['then'](()=>conn[_0x2622a9(0xc7)]['info'](_0x2622a9(0xc4)))[_0x2622a9(0xed)](console[_0x2622a9(0x101)]);
