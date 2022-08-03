/**
   * Create By Xyrzaa.
   * Contact Me on wa.me/14129688025
   * Follow https://github.com/Xyrzaa
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	beta: 'https://betabotz-api.herokuapp.com',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'c2459db922', //mau apikey unlimited? beli di zenzapis.xyz!, Enggak punya apikey? regist di zenzapis.xyz untuk mendapatkan apikey free
	'https://betabotz-api.herokuapp.com': 'BetaBotz',
}

// Other
global.owner = ['6283871223340']
global.premium = ['6288292024190']
global.packname = 'ARY BOTZ V17'
global.author = 'AryTuru'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./lib/riokun.jpg')
global.rio = fs.readFileSync('./lib/riokun.jpg')
global.turu = { url: 'https://telegra.ph/file/78ec2c976c9556232ab89.mp4' }
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
