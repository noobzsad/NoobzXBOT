//Bodoamat
//Credit -DappaUhuy
//Jangan Hapus Credit Babi

//wa connection
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const request = require('request')
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./dappauhuy/color')
const { animesaran } = require('./dappauhuy/animesaran')
const { animesaran2 } = require('./dappauhuy/animesaran2')
const { help } = require('./dappauhuy/help')
const { rules } = require('./dappauhuy/rules')
const { sewabot } = require('./dappauhuy/sewabot')
const { listsurah } = require('./dappauhuy/listsurah')
const { donasi } = require('./dappauhuy/donasi')
const { fetchJson } = require('./dappauhuy/fetcher')
const { recognize } = require('./dappauhuy/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./dappauhuy/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const FormData = require('form-data')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./dappa')

//kontak
const vcard = 'BEGIN:VCARD\n'  // Jangan di ubah biar ga error
            + 'VERSION:3.0\n'  // Jangan di ubah biar ga error
            + 'FN:AdminNoobzXBot\n'  // Ganti jadi namamu
            + 'ORG: Pengembang NoobzXBOT~;\n'  // Ganti jadi Namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6285876154630:+6285876154630\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // jangan di ubah
            
//settings            
const dapuhy = JSON.parse(fs.readFileSync('./dapsettings/dappa.json'))
const {
    botName,
    ownerName,
    authorName,
    apivhtear,
    ZeksApi,
    shizukaapi,
    TobzKey,
    LolHuman,
    ownerNumber,
    Yt,
    Ig,
    Gc,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerBngst
} = dapuhy
prefix = botPrefix
blocked = []   
limitawal = UserLimitz
memberlimit = GrupLimitz
cr = CeerBngst
cr = '*_NoobzXBOT 0.4_*'
vr = '*by. NoobzX*\n*@6285876154630*'
fakeimage = fs.readFileSync(`./dapganz/afk`)

//file json
const _leveling = JSON.parse(fs.readFileSync('./dapp/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./dapp/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./dapp/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./dapp/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./dapp/bot/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./dapp/user/banned.json'))
const samih = JSON.parse(fs.readFileSync('./dapp/bot/simi.json'))
const isBanned = JSON.parse(fs.readFileSync('./dapp/user/banned.json'))
const event = JSON.parse(fs.readFileSync('./dapp/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./dapp/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./dapp/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./dapp/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./dapp/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./dapp/group/badword.json'))
const antifirtex = JSON.parse(fs.readFileSync('./dapp/group/antifirtex.json'))

//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./dapp/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./dapp/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./dapp/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./dapp/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./dapp/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./dapp/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./dapp/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./dapp/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./dapp/user/limit.json', JSON.stringify(_limit))
            }
        }


        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const dappa = new WAConnection()
   dappa.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('(+)','white'),color('DappaUhuy','red'),color('(+)','white'),color('SQAN CODENYA!!','blue'),color('YOU','white'),color('TUBE','red'),color('DappaUhuy','yellow'))
})

dappa.on('credentials-updated', () => {
	const authInfo = dappa.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./dappauhy.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./dappauhy.json') && dappa.loadAuthInfo('./dappauhy.json')
dappa.connect();


dappa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await dappa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await dappa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* yang betah ya di sini`
				let buff = await getBuffer(ppimg)
				dappa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await dappa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋🍁`
				let buff = await getBuffer(ppimg)
				dappa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	dappa.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	dappa.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = dappa.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = dappa.contacts[sender] != undefined ? dappa.contacts[sender].vname || dappa.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await dappa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
                    const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isBanned = ban.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dappa.sendMessage(from, teks, text, {quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				dappa.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dappa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : dappa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    dappa.sendMessage(from, teks, image, {quoted: mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			dappa.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    dappa.sendMessage(from, audio, mp3, {quoted: mek})
		    }
	        /*****************END SCURITY FEATURE ********/

			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return dappa.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            dappa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./dapp/user/limit.json', JSON.stringify(_limit))
                        dappa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    dappa.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./dapp/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
          
// ANTI LINK GRUP
               	        if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        dappa.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        dappa.groupRemove(from, [kic]).catch((e)=>{reply(`*NoobzXBOT~ HARUS JADI ADMINâ—*`)})
		        }, 3000)
		        setTimeout( () => {
			        dappa.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        dappa.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        dappa.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }
		  
		  if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           dappa.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								dappa.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								dappa.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								dappa.updatePresence(from, Presence.composing)
								reply("semoga emak lu sehat")
							}, 2000)
								setTimeout( () => {
								dappa.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								dappa.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberlimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => dappa.groupRemove(from, sender))
                        .then(() => {
                            dappa.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => dappa.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }

           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mPRIVATE\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mLOL\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mGROUP\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mLOL\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				case 'dompet':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
			case 'baka2':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/baka?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'bj':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/bj?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'wallpaperanime':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'pictlolicon':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.group)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=lolikawai&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					dappa.sendMessage(from, nye, image, { caption: 'HALLO ONII CHAN!!', quoted: mek })
					break
					case 'pictwaifu':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.group)
					reply(ind.wait())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=waifu`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					dappa.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					break
					case 'nsfw_avatar':
		                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolHuman}`)
		                    dappa.sendMessage(from, buffer, image, { quoted: mek })
		                    break
					case 'pictneko':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.group)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoanimekawai&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					dappa.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					break
			case 'senku':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=senku&apikey=${apivhtear}`, {method: 'get'})
					var sen = JSON.parse(JSON.stringify(anu.result));
					var ku =  sen[Math.floor(Math.random() * sen.length)];
					nye = await getBuffer(ku)
					dappa.sendMessage(from, nye, image, { caption: 'senku!!', quoted: mek })
					await limitAdd(sender)
					break
			case 'kurumi2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${apivhtear}`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					dappa.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					break
				case 'nakanomiku':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					dappa.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					break
			case 'wibu': 
        // fix by OzanDesu
        if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
        reply(ind.wait())
        anu = `http://api.lolhuman.xyz/api/random/anime?apikey=${LolHuman}`
        buffer = await getBuffer(anu)
        dappa.sendMessage(from, buffer, image, { quoted: mek })
        await limitAdd(sender)
        break
			case 'quotes2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				dappa.sendMessage(from, ''+tes+'\n\n_By : ~NoobzX._', text, { quoted: mek })
				await limitAdd(sender)
				break
			case 'triggered':
			case 'tg':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${LolHuman}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        dappa.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break
			case 'gtav':
if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await dappa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 dappa.sendMessage(from, hedhe, image, {quoted: mek})
} else {
  reply('reply imagenya kak!')
}
break
			case 'gay':
if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await dappa.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
dappa.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
	case 'nightbeach':
if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await dappa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 dappa.sendMessage(from, hehpe, image, {quoted: mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'laptop':
	if (isBanned) return reply(ind.baned())
if (!isRegistered) return reply( ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await dappa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 dappa.sendMessage(from, dhehe, image, {quoted: mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'linephoto':
if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await dappa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 dappa.sendMessage(from, hehet, image, {quoted: mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'wanted':
if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await dappa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hsehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 dappa.sendMessage(from, hsehe, image, {quoted: mek})
} else {
  reply('reply imagenya kak!')
}
break
			case 'nhentai':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				husw = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${husw}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					dappa.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
			case 'ramaljadian':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=${apivhtear}`, {method: 'get'})
					reply(anu.result.hasil)
					break
			case 'memeindo':  
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEME🗿*'})
					await limitAdd(sender)
					break 
			case 'galaxstyle':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=PEPEQ-MIKASA&text=${ct}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
			case 'thunder':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/thunder?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'bokeh':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bokeh?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'strawberry':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/strawberry?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'metaldark':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/metaldark?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'cerpen':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${LolHuman}`)
			dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			reply(anu.result.cerpen)
			await limitAdd(sender) 
			break  
			case 'quotesimage':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`http://api.lolhuman.xyz/api/quotesimage?apikey=${LolHuman}`)
			dappa.sendMessage(from, `${anu.result}`, image, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'jokerlogo':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
			case 'toxic':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/toxic?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'bloodfrosted':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'imagetext':
				case 'itext':
				case 'itxt':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}MR KING TEAM`)
                imageToBase64(`https://api.vhtear.com/textxgif?text=${args[0]}&apikey=${apivhtear}`).then((response) => {var buf = Buffer.from(response, 'base64');
                dappa.sendMessage(from, buf, image, {quoted: mek, caption: "DONE BOS✓"})})
                break
				case 'halloween':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'firework':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/fireworksparkle?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'hororblood':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'glitch':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				if (!q.includes('|')) return  reply(ind.wrongf())
				txt1 = args.join(" ")
	                    	txt2 = args.join(" ")
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/glitch?apikey=${LolHuman}&txt1=${txt1}&txt2=${txt2}=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
					case 'megumin':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/megumin?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'shinobu':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/shinobu?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'baka':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/baka?apikey=${LolHuman}`)
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					break
					case 'smile':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/smile?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'happy':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/happy?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'dance':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/dance?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'slapnime':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/slap?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'bj':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/bj?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					break
					case 'neko3':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/neko?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'trap':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/trap?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'blackpink':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/blackpink?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
			case 'goldplay':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/goldplaybutton?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
			case 'hologram':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(9)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'textbyname':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'herrypoter':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'greanneon':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'metallogo':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'waifu2':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/waifu?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'pasangan':
		if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=RAMLANGANTENG`, {method: 'get'})
				dappa.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
			await limitAdd(sender) 
			break 
			case 'qoutesnime':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/qoutesnime?apikey=${LolHuman}`)
					reply(anu.data.quote)
					await limitAdd(sender)
					break
			case 'shota':			
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/shota?apikey=${LolHuman}`, {method: 'get'})
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
		case 'sagiri':				
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/sagiri?apikey=${LolHuman}`, {method: 'get'})
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'ytsearch':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limitend(pushname2))
					query = args.join(" ")
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${LolHuman}&query=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
			case 'puisiimg':
                   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname2))
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${apivhtear}`, {method: 'get'})
                   dappa.sendMessage(from, pus, image, {quoted: mek})
                   break 
                  case 'playstore':
                  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname2)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${ZeksApi}&q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
			case 'yaoi':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${LolHuman}`, {method: 'get'})
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'yuri':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/yuri?apikey=${LolHuman}`, {method: 'get'})
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'wancak':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${LolHuman}`, {method: 'get'})
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'kitsune':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kitsune`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'kusonimesearch':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${LolHuman}`, {method: 'get'})
                    get_result = get_result.result
                    text += `Title : ${get_result.title}\n`
                    text += `Japanese : ${get_result.japanese}\n`
                    text += `Genre : ${get_result.genre}\n`
                    text += `Seasons : ${get_result.seasons}\n`
                    text += `Producers : ${get_result.producers}\n`
                    text += `Type : ${get_result.type}\n`
                    text += `Status : ${get_result.status}\n`
                    text += `Total Episode : ${get_result.total_episode}\n`
                    text += `Score : ${get_result.score}\n`
                    text += `Duration : ${get_result.duration}\n`
                    text += `Released On : ${get_result.released_on}\n`
                    text += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
			case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              dappa.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					dappa.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
		case 'textdaun':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (args.length < 1) return reply(ind.wait())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/natureleaves?apikey=${LolHuman}&text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break
                    case 'femdom':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/femdom`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'waifukawai':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'kemonomimi':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "ONII CHAN BAKA!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'kuni':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN*!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'nsfwloli3':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						res = await fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey=${apivhtear}`, {method: 'get'})
						buffer = await getBuffer(res.url)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'neko2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "NYANG!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                 case 'holo':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/holo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "NIH OM!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'anime': 
        // fix by OzanDesu
        if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
        reply(ind.wait())
        anu = `http://api.lolhuman.xyz/api/random/anime?apikey=${LolHuman}`
        buffer = await getBuffer(anu)
        dappa.sendMessage(from, buffer, image, { quoted: mek })
        await limitAdd(sender)
        break
				case 'animesaran':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					dappa.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
			case 'listsurah':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					dappa.sendMessage(from, listsurah() , text, tescuk, cr)
					break
			case 'audio':
				dappa.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				 ayam = fs.readFileSync('./dappauhuy/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                dappa.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: mek})
				break
			case 'kdu':
				dappa.updatePresence(from, Presence.composing) 
 			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				 data = fs.readFileSync('./dappauhuy/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.teks.image)
                dappa.sendMessage(hasil, image, mek, '\`\`\`Husbu\`\`\`')
				break
			case 'ganteng':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                    case 'beban':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname2[Math.floor(Math.random() * msd.length)]
					teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
                    case 'cantik':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					membr = []
					const meo = groupMembers
					const msk = groupMembers
					const siaps = meo[Math.floor(Math.random() * meo.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
			case 'gecg':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/gecg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                case 'avatar':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/avatar`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'wallpapernime':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/wallpaper`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "Nih om"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'wallpaperty':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					reply(ind.wait())
					paper = body.slice(7)
					u = await fetchJson(`http://lolhuman.herokuapp.com/api/wallpaper/querty=${paper}?apikey=apiKey`, {method: 'get'})
					var per = JSON.parse(JSON.stringify(u.result));
					var trest =  pin[Math.floor(Math.random() * per.length)];
					pinehg = await getBuffer(trest)
					dappa.sendMessage(from, pinehg, image, { caption: '*Wallpaper*\n\n*Hasil Pencarian : '+paper+'*', quoted: mek })
					break
			case 'amv':
				dappa.updatePresence(from, Presence.composing) 
			 reply(`*Sedang di Prosess...*`)
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				 data = fs.readFileSync('./dappauhuy/amv.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                dappa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
			case 'runtime':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				dappa.updatePresence(from, Presence.composing, cr) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
			case 'husbu2':
				dappa.updatePresence(from, Presence.composing) 
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					 data = fs.readFileSync('./dappauhuy/husbu.js');
        		         jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
				break
			case 'animesaran2':
                                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        costum( animesaran2(prefix), text, tescuk, vr)
                                        break
				case 'ram':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					dappa.sendMessage(from, nye, image, { caption: 'ram chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'batle':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					gh = `${body.slice(7)}`
					reply(ind.wait())
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana kak?')
					data = await getBuffer(`https://ferdiz-api.herokuapp.com/api/battlefield?text=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(data.result)
					frhan.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'ssweb':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					dappa.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
				case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        dappa.sendMessage(from, fku, text, {quoted: mek})
				const afk = fs.readFileSync('./dapganz/afk');
                dappa.sendMessage(from, afk, MessageType.image, {quoted: mek, caption: '*KAKA INI  SEDANG AFK  JANGAN DI GANGGU YA!!*'})
                 break 
                                       break
				case 'unafk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('sukess!!?')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *TELAH KEMBALI DARI AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        dappa.sendMessage(from, kl7, text, {quoted: mek})
                                        break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
//CASE BADWORD
                 case 'addbadword':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./dapp/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./dapp/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		case 'katakatadilan':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'katadoi':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'hemkel':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
					//case 'pantun':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/Pantun.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
					case 'quoterandom':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
                  case 'nobadword':
                  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('lel🗿')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./dapp/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./dapp/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
		//rules
		case 'rules':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                   costum( rules(prefix), text, tescuk, cr)
                    break
			//randommenu
		case 'spamcall':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                reply('Otw Spam 1x')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('85648910195')) return reply('Gagal tidak dapat spam nomer bot')
                                       if (args[0].startsWith('85876154630')) return reply('Gagal tidak dapat spam nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=${ZeksApi}`, {method: 'get'})
                                       break
        case 'spamtext':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                reply('Otw Spam 1x')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('85648910195')) return reply('Gagal tidak dapat spam nomer bot')
                                       if (args[0].startsWith('85876154630')) return reply('Gagal tidak dapat spam nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=${ZeksApi}`, {method: 'get'})
                                       break                           
		case 'googleimage':
				   dappa.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${apivhtear}`, {method: 'get'})
					reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					dappa.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					await limitAdd(sender)
					break
		case 'nsfwblowjob':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
						buffervv = await getBuffer(res.result)
						dappa.sendMessage(from, buffervv, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
		case 'quran':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
				quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
				dappa.sendMessage(from, quran, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LolHuman}&text=${txt}`)
                    dappa.sendMessage(from, buffer, image)
                    break
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolHuman}&text=${txt}`)
                    dappa.sendMessage(from, buffer, image)
                    break
		case 'delete':
		case 'del':
		case 'd':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			dappa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
		case 'dxd':
				try {
				 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						bufferqq = await getBuffer(res.result)
						dappa.sendMessage(from, bufferqq, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						dappa.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
		case 'loli3':
	if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
           res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzKey}`, {method: 'get'})
           buffer = await getBuffer(res.result)
           dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*LOLI IS LIFE*'})
		await limitAdd(sender)
           break
		case 'waifu':
                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        dappa.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
		case 'dadu':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			dappa.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
				case 'darkjoke': 
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${LolHuman}`, {method: 'get'})
				dappa.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285876154630@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				   checkLimit(sender)
					break
			//ANIME
			case 'kurumi':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					dappa.sendMessage(from, nye, image, { caption: 'KURUMI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'miku':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					dappa.sendMessage(from, nye, image, { caption: '*I LOVE MIKUâ™¥*', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'naruto':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					dappa.sendMessage(from, nye, image, { caption: '**UZUMAKI NARUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					dappa.sendMessage(from, nye, image, { caption: '*MINATO NAMIKAZE*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					dappa.sendMessage(from, nye, image, { caption: '*UZUMAKI BORUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					dappa.sendMessage(from, nye, image, { caption: '*HINATA HYOUGA*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					dappa.sendMessage(from, nye, image, { caption: '*SASUKE UCIHA', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					dappa.sendMessage(from, nye, image, { caption: '*SAKURA*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rem':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					dappa.sendMessage(from, nye, image, { caption: '*REM-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'chika':
                                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					dappa.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'kurumi2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					dappa.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())  
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					dappa.sendMessage(from, nye, image, { caption: '*KANEKI-KUN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'touka':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					dappa.sendMessage(from, nye, image, { caption: '*TOUKA-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					dappa.sendMessage(from, nye, image, { caption: '*RIZE-CHAN*', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					dappa.sendMessage(from, nye, image, { caption: 'AKIRA-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					dappa.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break
			//MAKER
			case 'vinta':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply(ind.wrongf())
					vin = body.slice(7)
					reply(ind.wait())
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					dappa.sendMessage(from, vintage, image, {caption: 'nih anjim ${vin}', quoted: mek})
					await limitAdd(sender)
					break
                 case 'avengers':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					if (!q.includes('|')) return  reply(ind.wrongf())
                   const aruga1 = q.substring(0, q.indexOf('|') - 0)
                    const aruga2 = q.substring(q.lastIndexOf('|') + 1)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'summer':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sandwrite':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'metaldark':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'dropwater':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'grenneon':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'neontext':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'toxic':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sumery':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'blood':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'firework':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					arugazzz = body.slice(10)
					reply(ind.wait())
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					dappa.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'lava':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomexo':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizukaa = await fetchJson(`https://api-shizuka.herokuapp.com/randomexo?apikey=itsmeiky633`)
					shizuka = await getBuffer(shizukaa.result)
					dappa.sendMessage(from, shizuka, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'blackpink':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/blackpink?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomanime':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/randomanime?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomhusbu':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api.shizukaa.xyz/api/husbu?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomislamic':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpislamic?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomcyberspace':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpcyberspace?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomgame':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpgame?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'neko':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/neko?apikey=${LolHuman}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'randommountain':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpmountain?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomloli':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/randomloli?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomprogramer':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpprogramer?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					dappa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'silktext':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (args.length < 1) return reply(ind.wrongf())
					silk = body.slice(10)
					if (silk.length > 7) return reply('Teksnya kepanjangan Tod, maksimal 6 karakter')
					buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${apivhtear}`)
					reply(ind.wait())
		    			dappa.sendMessage(from, buffer, image, {quoted: mek})
		    			await limitAdd(sender)	
		    			break
					case 'slide':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*Textnya mana Tod?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait)
					dappa.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'cpubg':
					case 'pubg':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
				 	if (args.length > 10) return reply('karakter minimal 10')
					cpubg = `${body.slice(7)}`
					cpubg1 = cpubg.split("/")[0];
					cpubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${cpubg1}&text2=${cpubg2}&apikey=${TobzKey}`, {method: 'get'})
					cpubg = await getBuffer(anu.result)
					dappa.sendMessage(from, cpubg, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'cml':
					case 'ml':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
                     			if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&apikey=${apivhtear}`, {method: 'get'})
					dappa.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'glitch':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
              	   			 if (args.length < 1) return reply('teksnya mana gan?')
                    			hm = `${body.slice(8)}`
                    			text1 = hm.split("/")[0];
                    			text2 = hm.split("/")[1];                    
                    			glitch = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${text1}&text2=${text2}&apikey=${VthearApi}`, {method: 'get'})
                    			dappa.sendMessage(from, glitch, image, {quoted: mek, caption: 'nih gan'})
			     		await limitAdd(sender) 
			     		break
			case 'kuncitext':   
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return dappa.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/padlock?text1=${teks}&text2=${teks}&apikey=${apivhtear}`, {method: 'get'})
                    dappa.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
		await limitAdd(sender)
		break
			case 'wasted':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/editor/${wasted}?apikey=${LolHuman}&img=${ini_url}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

                                             case 'drawing':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())                    
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await dappa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 dappa.sendMessage(from, hehqe, image, {quoted: mek})
} else {
  reply('reply imagenya kak!')
}
break
                case '1cak':
				    try {
					    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					    if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
					case 'antilinkgrup':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						fs.writeFileSync('./dapp/group/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
						dappa.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./dapp/group/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                   case 'quotes':
                   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${LolHuman}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
					break 
                case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					dappa.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						dappa.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    dappa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    dappa.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(enmedia)
					await dappa.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya,Wangy sekali😗')
					break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dappa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dappa.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
				case 'sewabot':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					dappa.sendMessage(from, sewabot(prefix) , text, { quoted: mek })
					break 
					case 'meme': 
        // fix by OzanDesu
        if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
        reply(ind.wait())
        anu = `http://api.lolhuman.xyz/api/random/meme?apikey=${LolHuman}`
        buffer = await getBuffer(anu)
        dappa.sendMessage(from, buffer, image, { quoted: mek })
        await limitAdd(sender)
        break
				//case 'pinterest': 
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Mau Nyari Foto Apa???')
					if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=${query}`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
				case 'chiisaihentai':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                  if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
        reply(ind.wait())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'husbu':
                case 'wallnime':
                if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
     
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'nekonime':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(10)
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(anu.result.result)
					dappa.sendMessage(from, buffer, image, { caption: 'Save loli, Pukul furry', quoted: mek})
					await limitAdd(sender)
					break
				case 'neko':
                		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
               			if (isLimit(sender)) return reply(ind.limitend(pusname))
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(res.result)
					dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
				case 'ranime':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					dappa.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'ero':
				    try {
                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/ero`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwpussy':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwyuri':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/yuri`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwtrap':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${LolHuman}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwloli2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffer = await getBuffer(res.url)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'sideoppai':

				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/sideoppai?apikey=${LolHuman}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
			case 'nsfwwaifu':
				    try {
				 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/waifu?apikey=${LolHuman}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'ecchi':
				    try {
				 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/ecchi?apikey=${LolHuman}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
			case 'solo':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/solo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'waifu2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${LolHuman}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '*:)*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nsfwneko':
				try {  
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'wibu2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`)
					reply(ind.wait())
					buffer = await getBuffer(data.result.foto)
					dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '^W^'})
					await limitAdd(sender)
					break
			case 'nekopoi':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
			if (!isGroup) return reply(ind.groupo()) 
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
			reply(ind.wait())
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			//case 'hentai':
				    try {
				    if (!isNsfw) return reply(ind.nsfwoff())
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
			case 'randomhentong':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(15)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					reply(ind.wait())
					buffer = await getBuffer(anu.result)
					dappa.sendMessage(from, buffer, image, { caption: 'Comli teross', quoted: mek})
					await limitAdd(sender)
					break			
			case 'blowjob':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(ind.stikga())
				buffer = fs.readFileSync(rano)
				dappa.sendMessage(from, buffer, sticker, {quoted: mek})
				fs.unlinkSync(rano)
				
				})
				break
			case 'nangis':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.stikga())
					buffer = fs.readFileSync(rano)
					dappa.sendMessage(from, buffer, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					
					})
					break
		case 'resepmasakan':  
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                reply(ind.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${apivhtear}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*BAHAN² YG DIPERLUKAN*\n${anu.result.bahan}\n\n*CARA MASAKNYA*\n${anu.result.cara}`
                   dappa.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
                   case 'stalkig':
                   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.result.picture)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.result.username}_ \n *Nama??* : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following?* : _${anu.result.follow}_ \n *Jumlah Post?* : _${anu.result.post_count}_ \n *Biografi?? :* _${anu.result.biography}`
                    dappa.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			       break 
                    case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			if (!isGroupAdmins) return reply(ind.admin())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					dappa.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    			dappa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'soundquran':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					reply(`[❗] Wait Bro Rada Lama Durasinya 30 Menit`)
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/18?apikey=${LolHuman}`)
					dappa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `masyaallah.mp3`, quoted: mek })
					break
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
					dappa.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group NoobzXBOT~ :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					dappa.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					case 'blocklist':
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					dappa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
		case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('*Umur harus berupa angka!*')       
                if (namaUser.length >= 30) return reply(`*why is your name so long it's a name or a train*`)
                if (umurUser > 20) return reply(`*UMUR KAMU TERLALU TUA*`)
                if (umurUser < 10) return reply(`*UMUR KAMU TERLALU MUDA*`)
		try {
		ppimg = await dappa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await dappa.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    reply('Terima Kasih Sudah Absen')
		    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await dappa.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
		    reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`Nih Untukmu Owner♥ ${one}Xp `)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					dappa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					dappa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
         			  case 'apakah':
         			  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					dappa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					dappa.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    //case 'nulis2':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				buffer = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=${LolHuman}&text=${ct}`)
				dappa.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		//case 'nulis3':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				buffer = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${buffer}&apikey`, {method: 'get'})
				dappa.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'quran':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					dappa.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
			case 'pasangan':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				dappa.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
				await limitAdd(sender) 
				break 
	  case 'seberapagay':
           if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
		teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
		   break
				case 'pbucin':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           			if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				dappa.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
			//case 'pantun':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'infogempa':
		     if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname2))
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    dappa.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                    break
		case 'anime':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait())
					pok = await getBuffer(anu.result)
					dappa.sendMessage(from, pok, image, { quoted: mek , caption: 'nihhh'})
					await limitAdd(sender) 
					break  
                case 'kucing':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					dappa.sendMessage(from, pok, image, { quoted: mek , caption: '*nyang🐈*'})
					await limitAdd(sender) 
					break 
					
		case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag|pesan|balasanbot]\n\nContoh : ${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var target = gh.split("|")[0];
					var bot = gh.split("|")[1];
					dappa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'ntahlah':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query={body.slice(11)}&apikey=${apivhtear}`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					dappa.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
	case 'hobby':
	case 'hobi':
           if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Nonton Wibu']
					const by = hob[Math.floor(Math.random() * hob.length)]
					dappa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'wibu': 
        // fix by OzanDesu
        if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
        reply(ind.wait())
        anu = `http://api.lolhuman.xyz/api/random/meme?apikey=${LolHuman}`
        buffer = await getBuffer(anu)
        dappa.sendMessage(from, buffer, image, { quoted: mek })
        await limitAdd(sender)
        break
				case 'memeindo':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					dappa.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
         	case 'ping':
          	if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           	await dappa.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
		break
				case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
                    wew = fs.readFileSync(`./dappauhuy/logo.jpg`)
                    dappaganz = `
╔═════ ❰ *USER* ❱ ═══════
║┣❥ *Nama* : ${pushname}
║┣❥ *Nomer* : wa.me/${sender.split("@")[0]}
║┣❥ *Uang mu* : Rp${uangku}
║┣❥ *XP* : ${getLevelingXp(sender)}/${reqXp}
║┣❥ *Level* : ${getLevelingLevel(sender)}
║┣❥ *User register* : ${_registered.length}
╠════ ⸨ *NoobzXBOT~* ⸩ ══════
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *кєтιк ${prefix}newmenu* _menu baru_ ⸩
║⧐ ⸨ *ρяєfιχ ѕααт ιиι ${prefix}* ⸩
║⧐ ⸨ *кєтιк ${prefix}rules* _peraturan bot_ ⸩
║⧐ ⸨ *кєтιк ${prefix}info* _info bot_ ⸩
║⧐ ⸨ *кєтιк ${prefix}lpr* _untuk lapor bug_ ⸩
║⧐ ⸨ *кєтιк ${prefix}req* _untuk request menu_ ⸩
║▬▭▬▭▬▭▬▭▬▭
╚═════════════════════
*IG* = _*https://instagram.com/noobz.sad.offc_?igshid=k9d8ckp6krkc*_
*OWNER* = _*wa.me//6285876154630*_
══════════════════════
*ʙᴇʙᴇʀᴀᴘᴀ ꜰɪᴛᴜʀ ᴍᴀꜱɪ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇᴇʙᴀɪᴋᴀɴ!!*
══════════════════════
╔════════════════════❍
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *Owner : @6285876154630 ${ownerName}* ⸩
║⧐ ⸨ *Nomer : wa.me//6285876154630* ⸩
║▬▭▬▭▬▭▬▭▬▭
╠════════════════════❍
║┣❥ *${prefix}sertimenu* [untuk melihat menu sertifikat]
║┣❥ *${prefix}newmenu* [untuk melihat menu baru]
║┣❥ ingin sewa bot? *${prefix}sewabot*
╠═════════════════════
║> *_Menu NoobzXBOT~_*
╠═════════════════════
║┏━━⊱ ❰ *MAKER MENU* ❱ ⊰━━❤︎
║┣❥ *${prefix}sticker* (jika video max. 9det)
║┣❥ *${prefix}︎shadow*
║┣❥︎ *${prefix}cup*
║┣❥︎ *${prefix}cup1*
║┣❥︎ *${prefix}romance*
║┣❥︎ *${prefix}smoke*
║┣❥︎ *${prefix}burnpaper*
║┣❥︎ *${prefix}lovemessage*
║┣❥︎ *${prefix}undergrass*
║┣❥︎ *${prefix}love*
║┣❥︎ *${prefix}coffe*
║┣❥︎ *${prefix}woodheart*
║┣❥︎ *${prefix}flowerheart*
║┣❥︎ *${prefix}woodenboard*
║┣❥︎ *${prefix}summer3d*
║┣❥︎ *${prefix}hartatahta*
║┣❥︎ *${prefix}wolfmetal*
║┣❥︎ *${prefix}nature3d*
║┣❥︎ *${prefix}underwater*
║┣❥︎ *${prefix}golderrose*
║┣❥︎ *${prefix}summernature*
║┣❥︎ *${prefix}letterleaves*
║┣❥︎ *${prefix}glowingneon*
║┣❥︎ *${prefix}fallleaves*
║┣❥︎ *${prefix}flamming*
║┣❥︎ *${prefix}harrypotter*
║┣❥︎ *${prefix}carvedwood
║┣❥︎ *${prefix}wetglass*
║┣❥︎ *${prefix}multicolor3d*
║┣❥︎ *${prefix}watercolor*
║┣❥︎ *${prefix}luxurygold*
║┣❥︎ *${prefix}galaxywallpaper*
║┣❥︎ *${prefix}lighttext*
║┣❥︎ *${prefix}beautifulflower*
║┣❥︎ *${prefix}puppycute*
║┣❥︎ *${prefix}royaltext*
║┣❥︎ *${prefix}heartshaped*
║┣❥︎ *${prefix}birthdaycake*
║┣❥︎ *${prefix}galaxystyle
║┣❥︎ *${prefix}hologram3d*
║┣❥︎ *${prefix}glossychrome*
║┣❥︎ *${prefix}greenbush
║┣❥︎ *${prefix}metallogo*
║┣❥︎ *${prefix}noeltext*
║┣❥︎ *${prefix}glittergold*
║┣❥︎ *${prefix}textcake*
║┣❥︎ *${prefix}starsnight*
║┣❥︎ *${prefix}wooden3d*
║┣❥︎ *${prefix}textbyname*
║┣❥︎ *${prefix}writegalacy*
║┣❥︎ *${prefix}galaxybat*
║┣❥︎ *${prefix}snow3d*
║┣❥︎ *${prefix}birthdayday*
║┣❥︎ *${prefix}freefire*
║┣❥︎ *${prefix}kuncitext*
║┣❥︎ *${prefix}textdaun*
║┣❥︎ *${prefix}nulis*
║┣❥︎ *${prefix}silktext*
║┣❥︎ *${prefix}makequote*
║┣❥︎ *${prefix}toimg*
║┣❥︎ *${prefix}ocr*
║┣❥︎ *${prefix}galaxstyle*
║┣❥︎ *${prefix}jokerlogo*
║┣❥︎ *${prefix}toxic*
║┣❥︎ *${prefix}bloodfrosted*
║┣❥︎ *${prefix}hororblood*
║┣❥︎ *${prefix}halloween*
║┣❥︎ *${prefix}firework*
║┣❥︎ *${prefix}glitch*
║┣❥︎ *${prefix}blackpink*
║┣❥︎ *${prefix}goldplay*
║┣❥︎ *${prefix}hologram*
║┣❥︎ *${prefix}textbyname*
║┣❥︎ *${prefix}herrypoter*
║┣❥︎ *${prefix}greenneon*
║┣❥︎ *${prefix}metallogo*
║┣❥︎ *${prefix}ttp*
║┣❥︎ *${prefix}thunder*
║┣❥︎ *${prefix}bokeh*
║┣❥︎ *${prefix}strawberry*
║┣❥︎ *${prefix}metaldark*
║┣❥ *${prefix}kuncitext*
║┣❥ *${prefix}textdaun*
║┣❥ *${prefix}nulis*
║┣❥ *${prefix}silktext*
║┣❥ *${prefix}makequote*
║┣❥ *${prefix}toimg*
║┣❥ *${prefix}ocr*
║┣❥ *${prefix}galaxstyle*
║┣❥ *${prefix}jokerlogo*
║┣❥ *${prefix}toxic*
║┣❥ *${prefix}triggered*
║┣❥ *${prefix}gtav*
║┣❥ *${prefix}gay*
║┣❥ *${prefix}nigthbeach*
║┣❥ *${prefix}laptop*
║┣❥ *${prefix}linephoto*
║┣❥ *${prefix}raindrop*
║┣❥ *${prefix}sketch*
║┣❥ *${prefix}wanted*
║┣❥ *${prefix}crossgun*
║┣❥ *${prefix}bloodfrosted*
║┣❥ *${prefix}hororblood*
║┣❥ *${prefix}halloween*
║┣❥ *${prefix}firework*
║┣❥ *${prefix}glitch*
║┣❥ *${prefix}blackpink*
║┣❥ *${prefix}goldplay*
║┣❥ *${prefix}hologram*
║┣❥ *${prefix}textbyname*
║┣❥ *${prefix}herrypoter*
║┣❥ *${prefix}imagetext*
║┣❥ *${prefix}greenneon*
║┣❥ *${prefix}metallogo*
║┣━━⊱  ❰ *FUN MENU* ❱  ⊰━━━❤︎
║┣❥︎ *${prefix}spamcall*
║┣❥︎ *${prefix}spamtext*
║┣❥ *${prefix}mining*
║┣❥ *${prefix}playstore*
║┣❥ *${prefix}bisakah*
║┣❥ *${prefix}kapankah*
║┣❥ *${prefix}apakah*
║┣❥ *${prefix}seberapagay*
║┣❥ *${prefix}rate*
║┣❥ *${prefix}truth*
║┣❥ *${prefix}dare*
║┣❥ *${prefix}hobby*
║┣❥ *${prefix}memeindo*
║┣❥ *${prefix}darkjoke*
║┣❥ *${prefix}cerpen*
║┣❥ *${prefix}quotesimage*
║┣❥ *${prefix}fitnah*
║┣❥ *${prefix}pasangan*
║┣❥ *${prefix}ntahlah*
║┣❥ *${prefix}slap*
║┣❥ *${prefix}hemkel*
║┣❥ *${prefix}quotes2*
║┣❥ *${prefix}katadoi*
║┣❥ *${prefix}katakatadilan*
║┣❥ *${prefix}qoutes*
║┣❥ *${prefix}caklontong*
║┣❥ *${prefix}family100*
║┣❥ *${prefix}tebakin*
║┣❥ *${prefix}kbbi*
║┣❥ *${prefix}dadu*
║┣❥ *${prefix}artinama*
║┣━━⊱  ❰ *ANIME MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}miku2*
║┣❥ *${prefix}nino*
║┣❥ *${prefix}ichika*
║┣❥ *${prefix}ecchi*
║┣❥ *${prefix}violet*
║┣❥ *${prefix}sideoppai*
║┣❥ *${prefix}neko4*
║┣❥ *${prefix}baka2*
║┣❥ *${prefix}senku2*
║┣❥ *${prefix}animeboy*
║┣❥ *${prefix}animegirl*
║┣❥ *${prefix}itsuki*
║┣❥ *${prefix}kurumi3*
║┣❥ *${prefix}pinterest2* [untuk tempat]
║┣❥ *${prefix}igdlw*
║┣❥ *${prefix}yotsuba*
║┣❥ *${prefix}doujinimage*
║┣❥ *${prefix}testhusbu*
║┣❥ *${prefix}nekojav*
║┣❥ *${prefix}erodoujin*
║┣❥ *${prefix}jadwaltv*
║┣❥ *${prefix}elaina*
║┣❥ *${prefix}animesaran*
║┣❥ *${prefix}animesaran2*
║┣❥ *${prefix}husbu2*
║┣❥ *${prefix}anime*
║┣❥ *${prefix}wallpaperanime*
║┣❥ *${prefix}trap* (udh work)
║┣❥ *${prefix}baka2*
║┣❥ *${prefix}wallpapernime*
║┣❥ *${prefix}animefanart*
║┣❥ *${prefix}megumin*
║┣❥ *${prefix}shinobu*
║┣❥ *${prefix}baka*
║┣❥ *${prefix}eroyuri*
║┣❥ *${prefix}happy*
║┣❥ *${prefix}dance*
║┣❥ *${prefix}neko3*
║┣❥ *${prefix}smile*
║┣❥ *${prefix}wallpaper*
║┣❥ *${prefix}slapnime*
║┣❥ *${prefix}shota*
║┣❥ *${prefix}sagiri*
║┣❥ *${prefix}femdom*
║┣❥ *${prefix}waifukawai*
║┣❥ *${prefix}kuni*
║┣❥ *${prefix}nsfwloli3*
║┣❥ *${prefix}kitsune*
║┣❥ *${prefix}yuri*
║┣❥ *${prefix}yaoi*
║┣❥ *${prefix}wancak*
║┣❥ *${prefix}quotesnime*
║┣❥ *${prefix}waifu2*
║┣❥ *${prefix}bj* (udh work)
║┣❥ *${prefix}ram*
║┣❥ *${prefix}pictlolicon*
║┣❥ *${prefix}pictneko*
║┣❥ *${prefix}testwaifu*
║┣❥ *${prefix}nsfw_avatar*
║┣❥ *${prefix}senku*
║┣❥ *${prefix}pictwaifu*
║┣❥ *${prefix}kurumi2*
║┣❥ *${prefix}nakanomiku*
║┣❥ *${prefix}wibu*
║┣❥ *${prefix}wibu2*
║┣❥ *${prefix}boruto*
║┣❥ *${prefix}rize*
║┣❥ *${prefix}kaneki*
║┣❥ *${prefix}kemonomimi*
║┣❥ *${prefix}holo*
║┣❥ *${prefix}naruto*
║┣❥ *${prefix}amv*
║┣❥ *${prefix}minato*                                                                               ║┣❥ *${prefix}tagall*
║┣❥ *${prefix}gecg*
║┣❥ *${prefix}avatar*
║┣❥ *${prefix}miku*
║┣❥ *${prefix}kurumi*
║┣❥ *${prefix}hinata*
║┣❥ *${prefix}sasuke*
║┣❥ *${prefix}sakura*
║┣❥ *${prefix}akura*
║┣❥ *${prefix}itori*
║┣❥ *${prefix}touka*
║┣❥ *${prefix}rem*
║┣❥ *${prefix}chika*
║┣━━⊱  ❰ *ISLAM MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}quran*
║┣❥ *${prefix}listsurah*
║┣━━⊱  ❰ *MEDIA MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}beritahoax*
║┣❥ *${prefix}brainly*
║┣❥ *${prefix}pinterest*
║┣❥ *${prefix}husbu*
║┣❥ *${prefix}waifu2*
║┣❥ *${prefix}waifu*
║┣❥ *${prefix}loli*
║┣❥ *${prefix}loli2*
║┣❥ *${prefix}neko*
║┣❥ *${prefix}neko2*
║┣❥ *${prefix}nekonime*
║┣❥ *${prefix}randomanime*
║┣❥ *${prefix}randomhusbu*
║┣❥ *${prefix}randomcyberspace*
║┣❥ *${prefix}randomexo*
║┣❥ *${prefix}blackpink*
║┣❥ *${prefix}randomgame*
║┣❥ *${prefix}randommountain*
║┣❥ *${prefix}randomloli*
║┣❥ *${prefix}randomprogramer*
║┣❥ *${prefix}meme*
║┣❥ *${prefix}memeindo*
║┣❥ *${prefix}tts*
║┣❥ *${prefix}play*
║┣❥ *${prefix}lirik*
║┣❥ *${prefix}ssweb*
║┣❥ *${prefix}map*
║┣❥ *${prefix}stalkig*
║┣❥ *${prefix}afk*
║┣❥ *${prefix}unafk*
║┣❥ *${prefix}asupan*
║┣❥ *${prefix} cecan*
║┣❥ *${prefix}cogan*
║┣❥ *${prefix}boboboi*
║┣❥ *${prefix}exo*
║┣❥ *${prefix}bts*
║┣━━⊱  ❰ *LIMIT MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}limit*
║┣❥ *${prefix}buylimit*
║┣❥ *${prefix}dompet*
║┣━━⊱  ❰ *NSFW MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}pokemon*
║┣❥ *${prefix}anjing*
║┣❥ *${prefix}nsfwloli*
║┣❥ *${prefix}nsfwneko*
║┣❥ *${prefix}solo*
║┣❥ *${prefix}nsfwtrap*
║┣❥ *${prefix}nsfwpussy*
║┣❥ *${prefix}nsfwyuri*
║┣❥ *${prefix}ero*
║┣❥ *${prefix}nsfwloli2*
║┣❥ *${prefix}sideoppai*
║┣❥ *${prefix}nsfwwaifu*
║┣❥ *${prefix}ecchi*
║┣❥ *${prefix}nekopoi* <judul>
║┣━━⊱  ❰ *GROUP MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}hidetag*
║┣❥ *${prefix}del*
║┣❥ *${prefix}grouplist*
║┣❥ *${prefix}level*
║┣❥ *${prefix}leaderboard*
║┣❥ *${prefix}linkgc*
║┣❥ *${prefix}tagall*
║┣❥ *${prefix}setpp*
║┣❥ *${prefix}add*
║┣❥ *${prefix}kick*
║┣❥ *${prefix}setname*
║┣❥ *${prefix}setdesc*
║┣❥ *${prefix}demote*
║┣❥ *${prefix}promote*
║┣❥ *${prefix}listadmin*
║┣❥ *${prefix}group* [buka/tutup]
║┣❥ *${prefix}leveling* [enable/disable]
║┣❥ *${prefix}nsfw* [1/0]
║┣❥ *${prefix}simih* [1/0]
║┣❥ *${prefix}welcome* [1/0]
║┣━━⊱  ❰ *OWNER MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}bc*
║┣❥ *${prefix}bcgc*
║┣❥ *${prefix}kickall* Mau Ngapain Tod? >:
║┣❥ *${prefix}setreply*
║┣❥ *${prefix}setprefix*
║┣❥ *${prefix}antilinkgrup* [1/0]
║┣❥ *${prefix}clearall*
║┣❥ *${prefix}ban*
║┣❥ *${prefix}unban*
║┣❥ *${prefix}block*
║┣❥ *${prefix}unblock*
║┣❥ *${prefix}setmemberlimit*
║┣❥ *${prefix}addbadword* <teks>
║┣❥ *${prefix}listbadword*
║┣❥ *${prefix}nobadword* <enable/disable>
║┣❥ *${prefix}listblock*
║┣❥ *${prefix}leave*
║┣❥ *${prefix}event* [1/0]
║┣❥ *${prefix}clone*
║┣❥ *${prefix}setppbot*
║┣━━⊱ ❰ *TQTO* ❱ ⊰━━❤︎
║┣➣ *Allah SWT*
║┣➣ *DappaUhuy* 
║┣➣ *DHARG TEAM*
║┣➣ * OZAN DESU*
║┣➣ *ADIT*
║┗━━⊱  ⸨ *NoobzXBOT~* ⸩  ⊰━━━
╚═════════════════════` 
                    dappa.sendMessage(from, wew, image, { quoted: mek, caption: dappaganz })
					break
					case 'newmenu':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					const rekXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const duitku = checkATMuser(sender)
                    wew = fs.readFileSync(`./dappauhuy/logo.jpg`)
                    uptime = process.uptime()
		            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
              var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
              const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
              const ramadhan = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=12&bulan=4')
		      const ucapan = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
                    dappaganz = `
╔═════ ❰ *USER* ❱ ═══════
║┣❥ *Nama* : ${pushname}
║┣❥ *Nomer* : wa.me/${sender.split("@")[0]}
║┣❥ *Uang mu* : Rp${duitku}
║┣❥ *XP* : ${getLevelingXp(sender)}/${rekXp}
║┣❥ *Level* : ${getLevelingLevel(sender)}
║┣❥ *User register* : ${_registered.length}
╠════ ⸨ *NoobzXBOT~* ⸩ ══════
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *ρяєfιχ ѕααт ιиι ${prefix}* ⸩
║⧐ ⸨ *кєтιк ${prefix}rules* _peraturan bot_ ⸩
║⧐ ⸨ *кєтιк ${prefix}info* _info bot_ ⸩
║⧐ ⸨ *кєтιк ${prefix}lpr* _untuk lapor bug_ ⸩
║⧐ ⸨ *кєтιк ${prefix}req* _untuk request menu_ ⸩
║▬▭▬▭▬▭▬▭▬▭
╚═════════════════════
${ramadhan.data.result}
║┣❏ 🕰Jam : ${jam}:${menit}:${detik} ${ampm}
║┣❏ 🗓️Tanggal : ${day} - ${myMonths[bulan]} - ${year}
*IG* = _*https://instagram.com/noobz.sad.offc_?igshid=k9d8ckp6krkc*_
*OWNER* = _*@6285876154630*_
══════════════════════
*ʙᴇʙᴇʀᴀᴘᴀ ꜰɪᴛᴜʀ ᴍᴀꜱɪ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇᴇʙᴀɪᴋᴀɴ!!*
══════════════════════
╔════════════════════❍
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *Owner : @6285876154630 ${ownerName}* ⸩
║⧐ ⸨ *Nomer : wa.me//6285876154630* ⸩
║▬▭▬▭▬▭▬▭▬▭
╠════════════════════❍
║┣❥ *${prefix}sertimenu* [untuk melihat menu sertifikat]
║┣❥ ingin sewa bot? *${prefix}sewabot*
╠═════════════════════
║> *_New Menu NoobzXBOT~_*
╠═════════════════════
║┏━━⊱ ❰ *MAKER NEW MENU* ❱ ⊰━━❤︎
║┣❥ *${prefix}ttp*
║┣❥ *${prefix}ttp2*
║┣❥ *${prefix}ttp3*
║┣❥ *${prefix}ttp4*
║┣❥ *${prefix}attp*
║┣❥ *${prefix}purba*
║┣❥ *${prefix}matrix*
║┣❥ *${prefix}bakarnama*
║┣❥ *${prefix}nulis*
║┣❥ *${prefix}nulis2*
║┣❥ *${prefix}nulis3*
║┣❥ *${prefix}nulis4*
║┣❥ *${prefix}nulis5*
║┣❥ *${prefix}komunis*
║┣❥ *${prefix}costumwp*
║┣❥ *${prefix}imgtourl*
║┣❥ *${prefix}pantaimalam*
║┣❥ *${prefix}bakar*
║┣❥ *${prefix}skytext*
║┣❥ *${prefix}sandwrite*
║┣❥ *${prefix}firework*
║┣❥ *${prefix}watercolor*
║┣❥ *${prefix}snowwrite*
║┣❥ *${prefix}crismes*
║┣❥ *${prefix}retrotext*
║┣❥ *${prefix}epep*
║┣❥ *${prefix}text3d*
║┣❥ *${prefix}text3dbox*
║┣❥ *${prefix}textlight**
║┣❥ *${prefix}leavestext*
║┣❥ *${prefix}cslogo*
║┣❥ *${prefix}breakwall*
║┣❥ *${prefix}dropwater*
║┣❥ *${prefix}glowtext*
║┣❥ *${prefix}flametext*
║┣❥ *${prefix}silktext*
║┣❥ *${prefix}crosslogo*
║┣❥ *${prefix}valorantbanner*
║┣❥ *${prefix}codwarzone*
║┣❥ *${prefix}juventusshirt*
║┣❥ *${prefix}bannerlol*
║┣❥ *${prefix}qrcode2*
║┣❥ *${prefix}emojitoimg*
║┣❥ *${prefix}tolol*
║┣❥ *${prefix}pornhub*
║┣❥ *${prefix}glitch*
║┣❥ *${prefix}avenger*
║┣❥ *${prefix}space*
║┣❥ *${prefix}ninjalogo*
║┣❥ *${prefix}marvelstudio*
║┣❥ *${prefix}lionlogo*
║┣❥ *${prefix}wolflogo*
║┣❥ *${prefix}steel3d*
║┣❥ *${prefix}wallgravity*
║┣❥ *${prefix}blackpink*
║┣❥ *${prefix}neon*
║┣❥ *${prefix}greenneon*
║┣❥ *${prefix}advanceglow*
║┣❥ *${prefix}futureneon*
║┣❥ *${prefix}sandwriting*
║┣❥ *${prefix}sandsummer*
║┣❥ *${prefix}sandengraved*
║┣❥ *${prefix}metaldark*
║┣❥ *${prefix}neonlight*
║┣❥ *${prefix}holographic*
║┣❥ *${prefix}text1917*
║┣❥ *${prefix}minion*
║┣❥ *${prefix}deluxesilver*
║┣❥ *${prefix}newyearcard*
║┣❥ *${prefix}bloodfrosted*
║┣❥ *${prefix}halloween*
║┣❥ *${prefix}jokerlogo*
║┣❥ *${prefix}fireworksparkle*
║┣❥ *${prefix}natureleaves*
║┣❥ *${prefix}bokeh*
║┣❥ *${prefix}toxic*
║┣❥ *${prefix}strawberry*
║┣❥ *${prefix}box3d*
║┣❥ *${prefix}roadwarning*
║┣❥ *${prefix}breakwall*
║┣❥ *${prefix}icecold*
║┣❥ *${prefix}luxury*
║┣❥ *${prefix}cloud*
║┣❥ *${prefix}summersand*
║┣❥ *${prefix}horrorblood*
║┣❥ *${prefix}thunder*
║┣❥ *${prefix}darkttp*
║┣❥ *${prefix}colorttp*
║┣❥ *${prefix}amongus*
║┣❥ *${prefix}mememaker*
║┣❥ *${prefix}ytkomen*
║┣❥ *${prefix}temoji*
║┣❥ *${prefix}lionmaker*
║┣❥ *${prefix}marvelmaker*
║┣❥ *${prefix}pornmaker*
║┣❥ *${prefix}pubg2*
║┣❥ *${prefix}avmaker*
║┣❥ *${prefix}glit*
║┣❥ *${prefix}telesticker*
║┣❥ *${prefix}nickff* _[id ff kalian]_
║┣❥ *${prefix}ceknamaff* _[id epep lu]_
║┣❥ *${prefix}ceknamaml* _[id em el lu]_
║┣❥ *${prefix}namaninja*
║┣❥ *${prefix}faketoko*
║┣❥ *${prefix}gplaybutton*
║┣❥ *${prefix}splaybutton*
║┣❥ *${prefix}darkneon*
║┣❥ *${prefix}candlemug*
║┣❥ *${prefix}lovemsg*
║┣❥ *${prefix}mugflower*
║┣❥ *${prefix}narutobanner*
║┣❥ *${prefix}paperonglass*
║┣❥ *${prefix}shadowtext*
║┣❥ *${prefix}romancetext*
║┣❥ *${prefix}coffeecup*
║┣❥ *${prefix}coffeecup2*
║┣❥ *${prefix}underwater*
║┣❥ *${prefix}glowingneon*
║┣❥ *${prefix}hpotter*
║┣❥ *${prefix}woodblock*
║┣❥ *${prefix}tiktok*
║┣❥ *${prefix}arcade8bit*
║┣❥ *${prefix}battlefield4*
║┣❥ *${prefix}pubg*
║┣❥ *${prefix}phcomment*
║┣❥ *${prefix}googletext*
║┣❥ *${prefix}ktpmaker*
║┏━━⊱ ❰ *MEDIA NEW MENU* ❱ ⊰━━❤︎
║┣❥ *${prefix}happymod*
║┣❥ *${prefix}soundcloud*
║┣❥ *${prefix}fml*
║┣❥ *${prefix}mediafire*
║┣❥ *${prefix}igstory*
║┣❥ *${prefix}hashidentifier*
║┣❥ *${prefix}becrypt*
║┣❥ *${prefix}decoctal*
║┣❥ *${prefix}encoctal*
║┣❥ *${prefix}decbinary*
║┣❥ *${prefix}encbinary*
║┣❥ *${prefix}encode32*
║┣❥ *${prefix}decode32*
║┣❥ *${prefix}decode64*
║┣❥ *${prefix}encode64*
║┣❥ *${prefix}dorking*
║┣❥ *${prefix}sidshort*
║┣❥ *${prefix}urlshort*
║┣❥ *${prefix}listdaerah*
║┣❥ *${prefix}searchfilm*
║┣❥ *${prefix}filmapikdrama*
║┣❥ *${prefix}filmapikterbaru*
║┣❥ *${prefix}shopee*
║┣❥ *${prefix}hoax*
║┣❥ *${prefix}kbbi*
║┣❥ *${prefix}indbeasiswa*
║┣❥ *${prefix}jadwalbola*
║┣❥ *${prefix}kodepos*
║┣❥ *${prefix}lk21*
║┣❥ *${prefix}wattpadsearch*
║┣❥ *${prefix}wattpad*
║┣❥ *${prefix}tribunews*
║┣❥ *${prefix}liputan6*
║┣❥ *${prefix}foxnews*
║┣❥ *${prefix}newsinfo*
║┣❥ *${prefix}covidindo*
║┣❥ *${prefix}covidglobal*
║┣❥ *${prefix}faktaunik*
║┣❥ *${prefix}gimage2*
║┣❥ *${prefix}gimage*
║┣❥ *${prefix}wallpapersearch2*
║┣❥ *${prefix}wallpapersearch*
║┣❥ *${prefix}konachan*
║┣❥ *${prefix}stickerwa*
║┣❥ *${prefix}google*
║┣❥ *${prefix}zippyshare*
║┣❥ *${prefix}xhamster*
║┣❥ *${prefix}xhamstersearch*
║┣❥ *${prefix}pixivdl*
║┣❥ *${prefix}pixiv*
║┣❥ *${prefix}character*
║┣❥ *${prefix}manga*
║┣❥ *${prefix}nhentaisearch*
║┣❥ *${prefix}nhentaipdf*
║┣❥ *${prefix}heroml*
║┣❥ *${prefix}brainly*
║┣❥ *${prefix}brainly*
║┣❥ *${prefix}translate*
║┣❥ *${prefix}jadwaltvnow*
║┣❥ *${prefix}cnninternasional*
║┣❥ *${prefix}cnnnasional*
║┣❥ *${prefix}cnnindonesia*
║┣❥ *${prefix}lirik2*
║┣❥ *${prefix}getpic*
║┣❥ *${prefix}tiktokmusic*
║┣❥ *${prefix}ahegao*
║┣❥ *${prefix}drakorongoing*
║┣❥ *${prefix}spotifysearch*
║┣❥ *${prefix}spotify*
║┣❥ *${prefix}cuaca*
║┣❥ *${prefix}tiktokstalk*
║┣❥ *${prefix}tiktokdl*
║┣❥ *${prefix}twitterdl*
║┣❥ *${prefix}moddroid*
║┣❥ *${prefix}cocofundl*
║┣❥ *${prefix}apkpure*
║┣❥ *${prefix}pinterest*
║┣❥ *${prefix}pinterestdl*
║┣❥ *${prefix}ytsearch*
║┣❥ *${prefix}ytstalk*
║┣❥ *${prefix}ytstalk2*
║┣❥ *${prefix}play*
║┣❥ *${prefix}play2*
║┣❥ *${prefix}play3*
║┣❥ *${prefix}ytmp33*
║┣❥ *${prefix}ytmp32*
║┣❥ *${prefix}ytmp42*
║┣❥ *${prefix}imagesearch*
║┣❥ *${prefix}github*
║┣❥ *${prefix}igstalk*
║┣❥ *${prefix}jadwaltv*
║┣❥ *${prefix}fbdl*    *_[ facebook ]_*
║┣❥ *${prefix}igdl*    *_[ ig ]_*
║┣❥ *${prefix}spamsms*
║┣❥ *${prefix}nekopoi*
║┣❥ *${prefix}otakudesusearch*
║┣❥ *${prefix}otakudesu*
║┣❥ *${prefix}kusonimesearch*
║┣❥ *${prefix}kusonime*
║┣❥ *${prefix}bokepsearch*
║┣❥ *${prefix}bokep*
║┣❥ *${prefix}xnxxsearch*
║┣❥ *${prefix}xnxx*
║┣❥ *${prefix}ssweb*
║┣❥ *${prefix}wiki*
║┏━━⊱ ❰ *ANIME NEW MENU* ❱ ⊰━━❤︎
║┣❥ *${prefix}nsfwcheck*
║┣❥ *${prefix}itori*
║┣❥ *${prefix}akira**
║┣❥ *${prefix}rize*
║┣❥ *${prefix}rikka*
║┣❥ *${prefix}animesad**
║┣❥ *${prefix}yotsuba*
║┣❥ *${prefix}rem*
║┣❥ *${prefix}kuni*
║┣❥ *${prefix}kemonomimi**
║┣❥ *${prefix}waifukawai*
║┣❥ *${prefix}art*
║┣❥ *${prefix}elf*
║┣❥ *${prefix}loli*
║┣❥ *${prefix}neko*
║┣❥ *${prefix}neko2*
║┣❥ *${prefix}neko3*
║┣❥ *${prefix}neko4*
║┣❥ *${prefix}waifu*
║┣❥ *${prefix}shota*
║┣❥ *${prefix}husbu*
║┣❥ *${prefix}sagiri*
║┣❥ *${prefix}shinobu*
║┣❥ *${prefix}megumin*
║┣❥ *${prefix}wallnime*
║┣❥ *${prefix}bj*
║┣❥ *${prefix}ero*
║┣❥ *${prefix}cum*
║┣❥ *${prefix}feet*
║┣❥ *${prefix}yuri*
║┣❥ *${prefix}lewd*
║┣❥ *${prefix}feed*
║┣❥ *${prefix}eron*
║┣❥ *${prefix}solo*
║┣❥ *${prefix}solo2*
║┣❥ *${prefix}gasm*
║┣❥ *${prefix}poke*
║┣❥ *${prefix}anal*
║┣❥ *${prefix}holo*
║┣❥ *${prefix}tits*
║┣❥ *${prefix}kuni*
║┣❥ *${prefix}kiss*
║┣❥ *${prefix}erok*
║┣❥ *${prefix}smug*
║┣❥ *${prefix}baka*
║┣❥ *${prefix}solog*
║┣❥ *${prefix}feetg*
║┣❥ *${prefix}lewdk*
║┣❥ *${prefix}waifu*
║┣❥ *${prefix}pussy*
║┣❥ *${prefix}femdom*
║┣❥ *${prefix}cuddle*
║┣❥ *${prefix}hentai*
║┣❥ *${prefix}eroyuri*
║┣❥ *${prefix}cum_jpg*
║┣❥ *${prefix}blowjob*
║┣❥ *${prefix}erofeet*
║┣❥ *${prefix}holoero*
║┣❥ *${prefix}classic*
║┣❥ *${prefix}erokemo*
║┣❥ *${prefix}fox_girl*
║┣❥ *${prefix}futanari*
║┣❥ *${prefix}lewdkemo*
║┣❥ *${prefix}wallpaper*
║┣❥ *${prefix}pussy_jpg*
║┣❥ *${prefix}kemonomimi*
║┣❥ *${prefix}nsfw_avatar*
║┣❥ *${prefix}chiisaihentai*
║┣❥ *${prefix}trap*
║┣❥ *${prefix}trap2*
║┣❥ *${prefix}blowjob*
║┣❥ *${prefix}yaoi*
║┣❥ *${prefix}ecchi*
║┣❥ *${prefix}hentai*
║┣❥ *${prefix}ahegao*
║┣❥ *${prefix}hololewd*
║┣❥ *${prefix}sideoppai*
║┣❥ *${prefix}animefeets*
║┣❥ *${prefix}animebooty*
║┣❥ *${prefix}animethighss*
║┣❥ *${prefix}hentaiparadise*
║┣❥ *${prefix}animearmpits*
║┣❥ *${prefix}hentaifemdom*
║┣❥ *${prefix}lewdanimegirls*
║┣❥ *${prefix}biganimetiddies*
║┣❥ *${prefix}animebellybutton*
║┣❥ *${prefix}hentai4everyone*
║┏━━⊱ ❰ *ISLAM NEW MENU* ❱ ⊰━━❤︎
║┣❥ *${prefix}quotemuslim*
║┣❥ *${prefix}tahlil*
║┣❥ *${prefix}bacaansholat*
║┣❥ *${prefix}niatsholat*
║┣❥ *${prefix}doaharian*
║┣❥ *${prefix}ayatkursi*
║┣❥ *${prefix}alquranaudio*
║┣❥ *${prefix}alquran*
║┣❥ *${prefix}asmaul*
║┣❥ *${prefix}kisahnabi* [nama nabi]
║┣❥ *${prefix}jadwalsholat* _[daerah kalian]_
║┏━━⊱ ❰ *GABUT NEW MENU* ❱ ⊰━━❤︎
║┣❥ *${prefix}fasst*
║┣❥ *${prefix}gemuk*
║┣❥ *${prefix}bass*
║┣❥ *${prefix}blub*
║┣❥ *${prefix}tupai**
║┣❥ *${prefix}slow*
║┣❥ *${prefix}quotesanime*
║┣❥ *${prefix}randomnama*
║┣❥ *${prefix}bucin*
║┣❥ *${prefix}pantun*
║┣❥ *${prefix}katabijak*
║┣❥ *${prefix}caklontong*
║┣❥ *${prefix}family100*
║┣❥ *${prefix}tebakgambar*
║┣❥ *${prefix}besarkecil*
║┣❥ *${prefix}purba*
║┣❥ *${prefix}bacotanhacker*
║┣❥ *${prefix}tebakcok*
║┣❥ *${prefix}cerhor*
║┣❥ *${prefix}tebakumur*
║┣❥ *${prefix}jadian*
║┣❥ *${prefix}jodoh*
║┣❥ *${prefix}weton*
║┣❥ *${prefix}fakedonald*
║┣❥ *${prefix}semoji*
║┣❥ *${prefix}asupan*
║┣❥ *${prefix}katadilan*
║┣❥ *${prefix}katabucin*
║┣❥ *${prefix}katabucin2*
║┣❥ *${prefix}katacinta*
║┣❥ *${prefix}alay*
║┣❥ *${prefix}wancak*
║┣❥ *${prefix}katabijak*
║┣❥ *${prefix}katailham*
║┣━━⊱ ❰ *TQTO* ❱ ⊰━━❤︎
║┣➣ *Allah SWT*
║┣➣ *DappaUhuy* 
║┣➣ *DHARG TEAM*
║┣➣ *OZAN DESU*
║┣➣ *ADIT*
║┗━━⊱  ⸨ *NoobzXBOT~* ⸩  ⊰━━━
╚═════════════════════` 
                    dappa.sendMessage(from, wew, image, { quoted: mek, caption: dappaganz })
					break
				case 'menuserti':
				case 'sertimenu':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					const pekXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const puitku = checkATMuser(sender)
                    wew = fs.readFileSync(`./dappauhuy/logo.jpg`)
                    dappaganz = `
╔═════ ❰ *USER* ❱ ═══════
║┣❥ *Nama* : ${pushname}
║┣❥ *Nomer* : wa.me/${sender.split("@")[0]}
║┣❥ *Uang mu* : Rp${puitku}
║┣❥ *XP* : ${getLevelingXp(sender)}/${pekXp}
║┣❥ *Level* : ${getLevelingLevel(sender)}
║┣❥ *User register* : ${_registered.length}
╠════ ⸨ *NoobzXBOT~* ⸩ ══════
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *ρяєfιχ ѕααт ιиι ${prefix}* ⸩
║⧐ ⸨ *кєтιк ${prefix}rules* _peraturan bot_ ⸩
║⧐ ⸨ *кєтιк ${prefix}info* _info bot_ ⸩
║⧐ ⸨ *кєтιк ${prefix}lpr* _untuk lapor bug_ ⸩
║⧐ ⸨ *кєтιк ${prefix}req* _untuk request menu_ ⸩
║▬▭▬▭▬▭▬▭▬▭
╚═════════════════════
*IG* = _*https://instagram.com/noobz.sad.offc_?igshid=k9d8ckp6krkc*_
*OWNER* = _*@6285876154630*_
══════════════════════
*ʙᴇʙᴇʀᴀᴘᴀ ꜰɪᴛᴜʀ ᴍᴀꜱɪ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇᴇʙᴀɪᴋᴀɴ!!*
══════════════════════
╔════════════════════❍
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *Owner : @6285876154630 ${ownerName}* ⸩
║⧐ ⸨ *Nomer : wa.me//6285876154630* ⸩
║▬▭▬▭▬▭▬▭▬▭
╠════════════════════❍
║┣❥ *${prefix}newmenu* [untuk melihat menu baru]
║┣❥ ingin sewa bot? *${prefix}sewabot*
╠═════════════════════
║> *_New Menu NoobzXBOT~_*
╠═════════════════════
║┏━━⊱ ❰ *SERTI MENU* ❱ ⊰━━❤︎
║┣❥ *${prefix}fftourserti*
║┣❥ *${prefix}youtuberserti*
║┣❥ *${prefix}jametserti*
║┣❥ *${prefix}fucekboyserti*
║┣❥ *${prefix}goodlookingserti*
║┣❥ *${prefix}editodberkelasserti*
║┣❥ *${prefix}goodboyserti*
║┣❥ *${prefix}goodgirlserti*
║┣❥ *${prefix}badboyserti*
║┣❥ *${prefix}badgirlserti*
║┣❥ *${prefix}pinterserti*
║┣❥ *${prefix}surgaserti*
║┣❥ *${prefix}sadboyserti*
║┣❥ *${prefix}pacarserti*
║┣❥ *${prefix}gayserti*
║┣❥ *${prefix}bocilepepserti*
║┣❥ *${prefix}bucinserti*
║┣❥ *${prefix}ffserti*
║┣❥ *${prefix}babuserti*
║┣❥ *${prefix}hekelserti*
║┣❥ *${prefix}anakharamserti*
║┣❥ *${prefix}fftourserti5*
║┣❥ *${prefix}fftourserti4*
║┣❥ *${prefix}fftourserti3*
║┣❥ *${prefix}fftourserti2*
║┣❥ *${prefix}fftourserti*
║┣❥ *${prefix}pubgtourserti5*
║┣❥ *${prefix}pubgtourserti4*
║┣❥ *${prefix}pubgtourserti3*
║┣❥ *${prefix}pubgtourserti2*
║┣❥ *${prefix}pubgtourserti*
║┣❥ *${prefix}mltourserti5*
║┣❥ *${prefix}mltourserti4*
║┣❥ *${prefix}mltourserti3*
║┣❥ *${prefix}mltourserti2*
║┣❥ *${prefix}mltourserti*
║┣━━⊱ ❰ *TQTO* ❱ ⊰━━❤︎
║┣➣ *Allah SWT*
║┣➣ *DappaUhuy* 
║┣➣ *DHARG TEAM*
║┣➣ *OZAN DESU*
║┣➣ *ADIT*
║┗━━⊱  ⸨ *NoobzXBOT~* ⸩  ⊰━━━
╚═════════════════════` 
                    dappa.sendMessage(from, wew, image, { quoted: mek, caption: dappaganz })
					break
				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					dappa.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					break
					break
                case 'level':
		case 'lvl':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               dappa.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
					case 'info':
					case 'ingfo':
					case 'ingfokan':
					me = dappa.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *wa.me//6285876154630*\n*AUTHOR* : ${authorName}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block* : ${blocked.length}\n*Bot aktif selama* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					dappa.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					dappa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await dappa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					dappa.sendMessage(from, options, text)
					await limitAdd(sender)
					break
					case 'setmemberlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`memberlimit berhasil diubah menjadi ${memberlimit}`)
                    break
                case 'quotemaker':
		case 'makequote':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					dappa.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                    case 'truth':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/yVSNH1c/e38f592468c1.jpg`)
					dappa.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/yVSNH1c/e38f592468c1.jpg`)
					dappa.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break	
		case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					dappa.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					dappa.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					dappa.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		//MUSIC & MEDIA
		case 'chord':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=${TobzKey}`)
                dappa.sendMessage(from, anu.result, text, {quoted: mek})
                break
		case 'tomp3':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
                	dappa.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(ind.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						dappa.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 

		case 'fb':
		dappa.updatePresence(from, Presence.composing)    
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
		reply(ind.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(ind.error.Iv)
					reply(ind.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					dappa.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					dappa.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					dappa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
				case 'lirik':    
               			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					dappa.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					dappa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana Tod?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return dappa.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    dappa.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			    case 'fototiktok':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                dappa.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
                //case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			//tools
			case 'qrcode':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return dappa.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			dappa.sendMessage(from, buff, image, {quoted: mek})
			await limitAdd(sender)
			break
				//case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			dappa.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			dappa.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				//case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dappa.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
					case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./dapp/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./dapp/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
					
				case 'cogan':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    query = args.join("cowoganteng")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=cowoganteng`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'cecan':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    query = args.join("cewecantik")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=cewecantik`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'boboboi':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("boboboi")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=boboboi`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'miku2':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("nakano miku")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=nakano miku`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'nino':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("nakano nino")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=nino nakano`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'ichika':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("nakano ichika")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=ichika nakano`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'violet':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("violet evergarden")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=violet evergarden`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
		case 'ecchi':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bos'  })
                    break
		case 'sideoppai':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bos'  })
                    break
		case 'bts':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/bts?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bos'  })
                    break
		case 'exo':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/exo?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bos' })
                    break
			case 'cersex':
		if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${apivhtear}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply(ind.wait())
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   dappa.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
                   case 'baka2':
		if (!isRegistered) return reply(ind.noregis())
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/baka?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'neko4':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("neko ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=neko`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'kurumi3':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("kurumi")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=kurumi`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'animegirl':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("nakano itsuki")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=nakano itsuki`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'animegirl':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("anime girl")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=anime girl`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'animeboy':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("anime boy")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=anime boy`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'senku2':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("senku dr stone")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=senku dr stone`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'testwaifu':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("waifu")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=waifu`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'testhusbu':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("husbu")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=husbu`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'doujinimage':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("ero doujin")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=ero doujin`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'yotsuba':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("nakano yotsuba")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=nakano yotsuba`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'igdlw':
		if (!isRegistered) return reply(ind.noregis())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break
		case 'pinterest2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=${query}`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'ramalhp':
				if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('teks nya mana om')
					kj = body.slice(12)
					anu = await fetchJson(`https://api.vhtear.com/nomerhoki?no=${kj}&apikey=${apivhtear}`)
					reply(anu.result.hasil)
					break
			case 'nekojav':
				    try {
					         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						res = await fetchJson(`https://api.vhtear.com/nekohentai&apikey=${apivhtear}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'elaina':
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=elainamajonotabitabi&apikey=${apivhtear}`, {method: 'get'})
					var ela = JSON.parse(JSON.stringify(anu.result));
					var ina =  ela[Math.floor(Math.random() * ela.length)];
					nye = await getBuffer(ina)
					dappa.sendMessage(from, nye, image, { caption: 'elaina!!', quoted: mek })
					await limitAdd(sender)
					break
			
			case 'stickerwm':
			case 'stikerwm':
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await dappa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(from, mess.error.api, mek)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(from, mess.error.api, mek)
									dappa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && dappa.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, mek)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await dappa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					reply(from, mess.wait, qul)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(from, mess.error.api, mek)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(from, mess.error.api, mek)
									aqul.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)									
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					reply(from, `Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, id)
				}
				break
                  case 's':
            case 'stiker':
            case 'sticker':
            case 'stickergif':
            case 'stikergif':
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await dappa.downloadAndSaveMediaMessage(encmedia)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isRegistered) return reply(ind.noregis())
                    ran = getRandom('.webp')
                    await ffmpeg(`./${media}`)
                        .input(media)
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            reply(mess.error.stick)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            dappa.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await dappa.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    reply('[❗] SEDANG DI PROSES')
                    await ffmpeg(`./${media}`)
                        .inputFormat(media.split('.')[1])
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            reply(`❰❗❱ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            buffer = fs.readFileSync(ran)
                            dappa.sendMessage(from, buffer, sticker)
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                }
                await limitAdd(sender)
                break
        // case 'stes':
				    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dappa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dappa.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dappa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dappa.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
        //menu by NoobzX
        
        case 'ayat':
        if (args.length == 0) return reply(`Usage: ${prefix + command} Ayat|Surah\nExample: ${prefix + command} 18|1`)
        ayat = body.slice(6)
        ini = ayat.split("|")[0];
        surah = ayat.split("|")[1];
        get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/quran/${ini}/${surah}?apikey=${LolHuman}`)
        get_result = get_result.result
        txt = ""
        for (var x in get_result) {
        	txt +=`Nomor: ${get_result.nomor}\n`
            txt +=`Asma: ${get_result.asma}\n`
            txt +=`Surah: ${get_result.surah}\n`
            txt +=`Type: ${get_result.type}\n`
            txt +=`Ayat: ${get_result.ayat}\n`
            txt +=`Arab: ${get_result.arab}\n`
            txt +=`Latin: ${get_result.latin}\n`
            txt +=`Indo: ${get_result.indonesia}\n`
            txt +=`Keterangan: ${get_result.keterangan}\n`
            txt +=`Audio: wait...\n`
        }
        reply(txt)
        buffer = await getBuffer(`${get_result.audio}`)
                    dappa.sendMessage(from, buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
        break
        case 'surahaudio':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} Ayat|Surah\nExample: ${prefix + command} 18|1`)
                    reply(ind.wait())
                    audiosurah = body.slice(12)
                    ayat = audiosurah.split("|")[0];
                    surah = audiosurah.split("|")[1];
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/quran/audio/${ayat}/${surah}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
        case 'fakedata':
        query = args.join(" ")
        get_result = await fetchJson(`https://xinzbot-api.herokuapp.com/api/fakedata?country=${query}&apikey=XinzBot`)
        get_result = get_result.result
        txt = ""
        for (var x in get_result) {
        	txt +=`Name: ${get_result.name}\n`
            txt +=`Birthday: ${get_result.birthday}\n`
            txt +=`Address: ${get_result.address}\n`
            txt +=`City: ${get_result.city}\n`
            txt +=`Region: ${get_result.region}\n`
            txt +=`Country: ${get_result.country}\n`
            txt +=`Zip: ${get_result.zip}\n`
            txt +=`Phone Number: ${get_result.phone_number}\n`
            txt +=`Username: ${get_result.username}\n`
            txt +=`Email: ${get_result.email}\n`
            txt +=`Password: ${get_result.password}\n`
        }
        reply(txt)
        break
        //* ATAS GW MASIH DALAM PERKEMBANGAN
        
        case 'elang':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    query = args.join("elang")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=elang`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
        case 'tagimg':
                    if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await dappa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await dappa.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        dappa.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
        case 'tagstick':
                    if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await dappa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await dappa.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        dappa.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
        case 'quotesmotivasi':
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					dappa.sendMessage(from, ''+vasi+'\n\n_By : ~NoobzX._', text, { quoted: mek })
					await limitAdd(sender)
					break
        case 'wattpadsearch':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
     //   case 'ngif': //emror
           //     case 'nsfwnekogif':
           //     case 'randomhentaigif':
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolHuman}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        dappa.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
        case 'quotesislami':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					dappa.sendMessage(from, ''+vasi+'\n\n_By : ~NoobzX._', text, { quoted: mek })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					dappa.sendMessage(from, ''+vasi+'\n\n_By : ~NoobzX._', text, { quoted: mek })
					await limitAdd(sender)
					break	
		case 'quotescinta':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const cinta =['SABAR MASIH TAHAP PEMBUATAN, NITIP KATA-KATA NY AJH SAMA TAG ADMIN BOT','MASIH TAHAP PEMBUATAN,, NITIP KATA-KATA NY AJH SAMA TAG ADMIN BOT']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					dappa.sendMessage(from, ''+vasi+'\n\n_By : ~NoobzX._', text, { quoted: mek })
					await limitAdd(sender)
					break
        //case 'triggered': //api rest down kyak ny:v
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${LolHuman}&img=${ini_url}`
                    exec(`wget "${buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        dappa.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
        //case 'texttovn': //emror
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/gtts/id?apikey=${LolHuman}&text=${aruga}`)
					dappa.sendMessage(from, anu, audio, {quoted: mek, ptt:true})
					await limitAdd(sender)
					break
        case 'futureneon':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(12)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=${LolHuman}&text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
        case 'glossychrome':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(14)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto1/glossychrome?apikey=${LolHuman}&text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
        case 'newyearcard':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(13)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/newyearcard?apikey=${LolHuman}&text=${aruga}`)
					dappa.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
		case 'shortlink':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				dappa.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				dappa.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				dappa.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${LolHuman}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				dappa.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				dappa.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
        case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              dappa.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					dappa.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
        case 'kontak':
  					 // Fix Bug By AKIRA				
                 if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					dappa.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					dappa.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  				  break
            case 'pantun':
            if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolHuman}`)
             reply(get_result.result)
             break
	case 'memesticker':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  ct = body.slice(6)
	  atas = ct.split("/")[0];
      bawah = ct.split("/")[1];
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
        case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(8)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${LolHuman}&img=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
        case 'facebookpage':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
        case 'tebakbendera':
        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${LolHuman}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					dappa.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break
        case 'tagme':
				case 'wame':
				case 'wa.me':
if (isBanned) return reply('```Lu kebanned kontol```')
    
const tagme = {
  text: `@${sender.split("@")[0]} kasian gda yg tag yah:)`,
  contextInfo: {
mentionedJid: [sender]
  }
}
dappa.sendMessage(from, tagme, text)
break
        case 'shrtco':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				dappa.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${LolHuman}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
        case 'kalkulator':
				//Case By PojanGanz
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
        case 'fdeface': 
			case 'hack':
				argz = arg.split("|")
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await dappa.downloadMediaMessage(encmedia)
					dappa.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					dappa.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
        case 'toukachan'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					dappa.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
        case 'takestick':
        case 'takesticker':
        case 'takestiker':
		if (!isRegistered) return reply(ind.noregis())
                    if ((isMedia && !dappa.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Noobz|Gans`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await dappa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolHuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            dappa.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
        case 'listpenyimak': 
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(dappa.chats.get(ido).presences), dappa.user.jid]
			    dappa.sendMessage(from, '*CIE NYIMAK AJE LU*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*©POWERED BY RIU*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
              case 'shortlink2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?apikey=${LolHuman}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
		case 'togif':
                    if ((isMedia && !dappa.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await dappa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${LolHuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            dappa.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: file_name })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink?apikey=${LolHuman}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
		case 'ocr':
                    if (!isRegistered) return reply(ind.noregis())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        var filePath = await dappa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/ocr?apikey=${LolHuman}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        reply(`Result : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
        case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.8,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dappa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dappa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})

				break
case 'blub':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dappa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					case 'bass':        
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dappa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
				case 'gemok':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dappa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fasst':
				    if (args.length == 0) return reply('Tag Vn ny Kak')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3/m4a/ptt')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.4,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('NGEN(uh)')
						hah = fs.readFileSync(ran)
						dappa.sendMessage(from, hah, audio, {mimetype: 'audio/mp3/ptt/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
       case 'quotemuslim'://UPDATE NoobzGanz
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomquote/muslim?apikey=Mr.105P`, {method: 'get'})
				hasil = `*➸ Quote :* ${anu.result.text_id}`
				dappa.sendMessage(from, hasil, text, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
        case 'waifukawai'://UPDATE NoobzGanz
				    try {
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
			case 'kemonomimi'://UPDATE NoobzGanz
				    try {
	   			reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "ONII CHAN BAKA!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
		case 'kuni'://UPDATE NoobzGanz
				    try {
					if (!isPrem) return reply(ind.premium())
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					dappa.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN*!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break 
        case 'rem'://UPDATE NoobzGanz
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					dappa.sendMessage(from, nye, image, { caption: 'rem waifu owner', quoted: mek })
					await limitAdd(sender) 
					break
   case 'yotsuba'://UPDATE NoobzGanz
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yotsuba`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					dappa.sendMessage(from, nye, image, { caption: 'Kawaii kan', quoted: mek })
					await limitAdd(sender) 
					break
case 'animesad'://UPDATE NoobzGanz
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime sad`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					dappa.sendMessage(from, nye, image, { caption: 'Dah lah..', quoted: mek })
					await limitAdd(sender) 
					break
case 'rikka'://UPDATE NoobzGanz
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rikka`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					dappa.sendMessage(from, nye, image, { caption: 'Kawaii kan', quoted: mek })
					await limitAdd(sender) 
					break
        case 'rize'://UPDATE NoobzGanz
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					dappa.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira'://UPDATE NoobzGanz
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					dappa.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori'://UPDATE NoobzGanz
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					dappa.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
        case 'leavestext'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${body.slice(12)}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'textlight'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${body.slice(11)}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'text3dbox'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${body.slice(11)}`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'text3d'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${body.slice(8)}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'epep'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${body.slice(6)}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'retrotext'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
retro = wolflogo.split("|")[2];
anu = await fetchJson(`https://api.zeks.xyz/api/retro?text1=${wolf}&text2=${logo}&text3=${retro}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'snowwrite'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'watercolor'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
wolflogo = body.slice(12)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/watercolour?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'firework'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${body.slice(10)}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'sandwrite'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${body.slice(11)}`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'skytext'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/skytext?text=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'cslogo'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${body.slice(8)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'crosslogo'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'silktext'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'flametext'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
case 'glowtext'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'dropwater'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${body.slice(11)}`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'breakwall'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${body.slice(11)}`)
dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630'})
break
        case 'hartatahta':
				//UPDATE NoobzGanz
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Teksnya mana um')
				if (args.length < 1) return reply(`Teksnya Mana Cuy?\nContoh : ${prefix}hartatahta DappaGanz`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				dappa.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
        case 'listdaerah'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('Salah Ngab.. \n gini cuy: ${prefix}listdaerah [nama negara]')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=malang`, {method: 'get'})
teks = `${anu.listdaerah}`
dappa.sendMessage(from, teks, text, {quoted: mek})
break
        case 'urlshort'://UPDATE NoobzGanz ////UPDATE MR108P
case 'url'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${args[0]}&apikey=apivinz`, {method: 'get'})
teks = `${anu.result}`
dappa.sendMessage(from, teks, text, {quoted: mek})
break
        case 'sidshort'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${args[0]}`, {method: 'get'})
teks = `Short : ${anu.short}
Long : ${anu.long}
Create at :
Tanggal : ${anu.created_at.date}
Timezone Tipe : ${anu.created_at.timezone_type}
Timezone : ${anu.created_at.timezone}`
dappa.sendMessage(from, teks, text, {quoted: mek})
break
//SEMENTARA case 'simi'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${body.slice(6)}`, {method: 'get'})
teks = `${anu.result}`
dappa.sendMessage(from, teks, text, {quoted: mek})
break
        case 'dorking':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				reply(ind.wait())
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					dappa.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
			if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				dappa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
					if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  dappa.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
        case 'happymod'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('apa yg mau dicari bruh?')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nama Apk : ${i.title}
Rating : ${i.rating}
Url : ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
        case 'kbbi'://UPDATE NoobzGanz ////UPDATE MR108P
        if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('apa yg mau dicari bruh?')
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/kbbi?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
teks = `Arti : Dari ${body.slice(6)} ${anu.result}
Source : ${anu.source}`
dappa.sendMessage(from, teks, text, {quoted: mek})
break
        case 'nulis'://UPDATE NoobzGanz ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
        if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('apa yg mau ditulis bruh?')
reply('Sabar Bro Lagi nulis')
teks = body.slice(7)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek})
break
case 'nulis2'://UPDATE NoobzGanz ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('apa yg mau ditulis bruh?')
reply('Wait.....')
teks = body.slice(8)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek})
break
case 'nulis3'://UPDATE NoobzGanz ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length == 0) return reply('apa yg mau ditulis bruh?')
reply('tunggu sebentar⏳')
teks = body.slice(3)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
dappa.sendMessage(from, buffer, image, {quoted: mek})
break
        //*case 'pantun'://UPDATE NoobzGanz
					 // Fix Bug By ItsmeikyXSec404				
                 if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					break
        case 'igstory'://UPDATE NoobzGanz ////UPDATE MR108P
        if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
					for (let i of anu.data) {
						teks += `Username : ${anu.username}
Total story : ${anu.stories_count}
Tipe : ${i.type}
Story : ${i.url}
Swipe Up Link : ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
					}
					reply(teks.trim())
break
case 'mediafire'://UPDATE NoobzGanz ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.name_file}
File Size : ${anu.file_size}
Tanggal Upload : ${anu.upload_date}
File Tipe : ${anu.file_type}
Link Download : ${anu.download}
Deskripsi : ${anu.description}`
dappa.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break

case 'fml'://UPDATE NoobzGanz	//UPDATE MR108P
					if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/fml`)
					hasil = data.result
					reply(hasil)
					break
        case 'soundcloud'://UPDATE NoobzGanz ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/soundcloud?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer1 = await getBuffer(anu.result.thumb)
teks = `Judul : ${anu.result.title}
Durasi : ${anu.result.duration}
Quality : ${anu.result.quality}
𝙏𝙪𝙣𝙜𝙜𝙪 𝙮𝙖 𝙠𝙖?? :)
Ni Biar Cepat :
${anu.result.download}`
dappa.sendMessage(from, buffer1, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.download)
dappa.sendMessage(from, buffer, audio, {quoted: mek})
break
        case '8bit'://UPDATE NoobzGanz//UPDATE MR108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix} 8bit NoobzGanz`)
   du = `${body.slice(5)}`
  ted1 = du.split("/")[0];
  ted2 = du.split("/")[1];
    reply(ind.wait())
bit = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${ted1}&text2=${ted2}`)
dappa.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
        case 'glowneon'://UPDATE NoobzGanz
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon NoobzGanz`)
tekas = body.slice(10)
reply(ind.wait())
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
dappa.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
case 'gsuggest'://UPDATE NoobzGanz
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest NoobzGanz/rem/bot`)
du = `${body.slice(10)}`
ted1 = du.split("/")[0];
ted2 = du.split("/")[1];
ted3 = du.split("/")[2];
reply(ind.wait())
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
dappa.sendMessage(from, sugetg, image, {quoted: mek})
await limitAdd(sender)
break
case 'candlemug'://UPDATE NoobzGanz
if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}candlemug NoobzGanz`)
ddu = body.slice(11)
reply(ind.wait())
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
dappa.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
        case 'profile'://UPDATE NoobzGanz
    				dappa.updatePresence(from, Presence.composing)
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
    				try {
					profil = await dappa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰─────────────────────`
					buff = await getBuffer(profil)
					dappa.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
        case 'xvideossearch':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
        query = args.join(" ")
        get_result = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideos?query=${query}&apikey=trial2k21`)
        get_result = get_result.result
        txt = ""
        for (var x in get_result) {
        	txt += `Title : ${get_result[x].title}\n`
        	txt += `Channel : ${get_result[x].channel}\n`
            txt += `Duration : ${get_result[x].duration}\n`
            txt += `Image : ${get_result[x].image}\n`
            txt += `Link : ${get_result[x].url}\n`
        }
        reply(txt)
        break
        case 'bannerlol':
        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply('Teksnya mana um')
        txt = args.join(" ")
        buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/photooxy3/bannerlol?apikey=Oz-san&text=${txt}`)
        dappa.sendMessage(from, buffer, image)
        break
         case 'juventusshirt':
         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
         cf = `${body.slice(15)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto2/juventusshirt?apikey=Oz-san&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
        case 'codwarzone':
        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
        cf = `${body.slice(12)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto2/codwarzone?apikey=Oz-san&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
         case 'valorantbanner':
         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
         cf = `${body.slice(16)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    txt3 = cf.split("/")[3];
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    txt3 = args[2]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto3/valorantbanner?apikey=Oz-san&text1=${txt1}&text2=${txt2}&text3=${txt3}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
        case 'bokep':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
        query = args.join(" ")
        get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/pornhub?apikey=Oz-san&url=${query}`)
        get_result = get_result.result
        txt = `Title : ${get_result.title}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Upload : ${get_result.upload}\n`
                    txt += `Negara : ${get_result.geo}\n`
                    video_kep = await getBuffer(get_result.media)
                    dappa.sendMessage(from, video_kep, video, { quoted: mek, caption: txt })
                    break
        case 'bokepsearch':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
        query = args.join(" ")
        get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/pornhubsearch?apikey=Oz-san&query=${query}`)
        get_result = get_result.result
        txt = ""
                    for (var x in get_result) {
                    	txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Rating : ${get_result[x].rating}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Uploader : ${get_result[x].uploader}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Upload : ${get_result[x].added}\n`
                    }
                    reply(txt)
                    break
        
        case 'cocofundl':
         if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
         if (args.length == 0) return reply(`link ny mna tuan??`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
        reply(ind.wait())
        anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cocofun?apikey=Oz-san&url=${body.slice(11)}`)
        buffer = await getBuffer(anu.result.nowm)
        teks = `*Title* :${anu.result.title}\n*Tag* :${anu.result.tag}\n*Likes* :${anu.result.likes}\n*Dislike* :${anu.result.dislike}\n*Views* :${anu.result.views}\n*Uploader* :${anu.result.uploader}\n*Duration* :${anu.result.duration}`
        dappa.sendMessage(from, buffer, video, { quoted: mek, caption: teks })
        break
        case 'moddroid':
        if (isBanned) return reply(ind.baned())
        if (args.length == 0) return reply(`apa yg mau dicari bruh?`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				nbx = body.slice(9)
				get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${nbx}&apikey=ZTORDNQE`)
				get_result = get_result.result
				buffer = await getBuffer(get_result)
				dappa.sendMessage(from, buffer, video, { quoted: mek })
				await limitAdd(sender)
				break
        case 'twitterdl':
                   if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                   if (args.length == 0) return reply(`link ny mna bruh?`)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				ini_link = args[0]
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter?apikey=Oz-san&url=${ini_link}`)
                get_result = get_result.result
                buffer = await getBuffer(ini_link)
                    dappa.sendMessage(from, buffer, video, { quoted: mek })
                    break
             case 'tolol': 
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${LolHuman}&name=${gatauda}`, {method: 'get'})
				dappa.sendMessage(from, buffer, image, {quoted: mek})
				break
        case 'anakharamserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'hekelserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'babuserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'ffserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(8)
				anu = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'bucinserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'bocilepepserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'gayserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'pacarserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'sadboyserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'surgaserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'pinterserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'badgirlserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'badboyserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'goodgirlserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'goodboyserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'editorberkelasserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				anu = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'goodlookingserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(17)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'fucekboyserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'jametserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'youtuberserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'fftourserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'fftourserti2'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'fftourserti3'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'fftourserti4'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'fftourserti5'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'mltourserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'mltourserti2'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'mltourserti3'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'mltourserti4'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'mltourserti5'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'pubgtourserti'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'pubgtourserti2'://UPDATE NoobzGanz 				
				//UPDATE NoobzGanz
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'pubgtourserti3'://UPDATE NoobzGanz 				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'pubgtourserti4'://UPDATE NoobzGanz 				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 NoobzGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
				case 'pubgtourserti5'://UPDATE NoobzGanz 				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 NoobzGanz`)
				reply(`[❕] Loading`)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				dappa.sendMessage(from, anu, image, { quoted: mek, caption: 'Jan Lupa Donasi Ke wa.me//6285876154630' })
				break
        case 'searchfilm':
                //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				film = await fetchJson(`http://zekais-api.herokuapp.com/film?query=${body.slice(12)}`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `Nama film : ${i.name}\nQuality : ${i.quality}\nLink : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'filmapikterbaru':
				//❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `Nama film : ${i.name}\nQuality : ${i.quality}\nRating : ${i.rating}\nLink : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'filmapikdrama':
				//❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `Nama film : ${i.name}\nQuality : ${i.quality}\nRating : ${i.rating}\nLink : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
        case 'fakedeface':
	if (!isRegistered) return reply(ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply(ind.baned())
	var nn = body.slice(11)
	var urlnye = nn.split("|")[0];
	var titlenye = nn.split("|")[1];
	var descnye = nn.split("|")[2];
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
	reply(ind.wait())
	owgi = await  dappa.downloadAndSaveMediaMessage(ger)
	anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
	deface = await getBuffer(anu.display_url)

	dappa.sendMessage(from, {

	text: `${urlnye}`,

	matchedText: `${urlnye}`,

	canonicalUrl: `${urlnye}`,

	description: `${descnye}`,

	title: `${titlenye}`,

	jpegThumbnail: deface
	}, 'extendedTextMessage', { detectLinks: false })
	} else {
    reply('tag Fotonya!!')
	}
	await limitAdd(sender)
	break
        case 'crossgun':
	//❗case by DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
        case 'pencil':
	//❗case by DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	//❗case by DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
        case 'pantaimalam':
	//❗case by DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(12)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imgtourl':
	//❗case by DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			reply(ind.wait())
			var media = await  dappa.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 IMGBB TO URL 」\n│\n│• ID : ${data.id}\n│• MimeType : ${data.image.mime}\n│• Extension : ${data.image.extension}\n│\n│• URL : ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(media)
			dappa.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
			})
			.catch(err => {
			throw err 
			})
			await limitAdd(sender) 	
			break
        case 'costumwp':
	//❗case by DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'komunis':
	//❗case by DappaUhuy
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await dappa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
	 dappa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
        case 'ayatkursi': 
		        //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/ayatkursi?apikey=dappabotwa`)
				teks = `➸ Arab : ${anu.result.data.arabic}\n➸ Latin : ${anu.result.data.latin}\n➸ Arti : ${anu.result.data.translation}\n➸ Tafsir : ${anu.result.data.tafsir}`
				dappa.sendMessage(from, teks, text, {quoted: mek})
				break
		        case 'doaharian': 
		        //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				dappa.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/doaharian?apikey=dappabotwa`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Nama Doa: : ${i.title}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTranslation : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/niatshalat?apikey=dappabotwa`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTerjemah : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		        case 'bacaansholat': 
		        //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/bacaanshalat?apikey=dappabotwa`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTerjemah : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
        case 'tahlil': 
                //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/tahlil?apikey=dappabotwa`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\nArab : ${i.arabic}\nTerjemah : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
       // case 'hartatahta':
				//❗case by DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta dappa`)
				dappa = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`http://zekais-api.herokuapp.com/hartatahta?text=${dapuhy}`)
				dappa.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
        case 'nulis5':
                //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis NoobzXGans`)
                dappa = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                dappa.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Donasi', quoted: mek})
                await limitAdd(sender)
                break
        case 'bakarnama':
				//❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				cuk = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${cuk}`)
				dappa.sendMessage(from, ct, image, {caption: 'Nih Jan Lupa Donasi', quoted: mek})
				await limitAdd(sender)
				break
        case 'matrix':
                //❗case by DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}matrix NoobzXGans`)
                dappa = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${dapuhy}`)
                dappa.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Donasi', quoted: mek})
                await limitAdd(sender)
                break
        case 'purba':
					case 'bpurba': 
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`Contoh: Sofyan AMV`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${LolHuman}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'BK':
					case 'bk':
					case 'besarkecil': 
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`Contoh: Sofyan AMV`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${LolHuman}&text=${gatauda}`)
					reply(anu.result)
					break
        case 'tebakgambar':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolHuman}`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					dappa.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case 'family100':
				if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolHuman}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					dappa.sendMessage(from, '*➸ Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, family, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LolHuman}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					dappa.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
        case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${LolHuman}&text=${ini_txt}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
        case 'tolol': 
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${LolHuman}&name=${gatauda}`, {method: 'get'})
				dappa.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'emojitoimg': 
				if (args.length < 1) return reply('Contoh: 😭')
				gatauda = body.slice(6)
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${gatauda}?apikey=${LolHuman}`, {method: 'get'})
				dappa.sendMessage(from, buffer, image, {quoted: mek})
				break
        case 'qrcode2':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/qrcode?apikey=${LolHuman}&text=${query}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                    case 'nulis4':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=${LolHuman}&text=${teks}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek})
                    break
        case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${LolHuman}&text=${ini_txt}`)
                    dappa.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break
                    case 'attp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/attp?apikey=${LolHuman}&text=${teks}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
        case 'shopee':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                shopp = `${body.slice(8)}`
                  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/shopee?apikey=${LolHuman}&query=${shopp}`, {method: 'get'})
                  shopee = '==========================\n'
                  for (let disho of anu.result){
                  shopee += `• Name: ${disho.name}\n• Terjual: ${disho.sold}\n• Stock: ${disho.stock}\n• Desk: ${disho.desc}\n• Lokasi: ${disho.shop_loc}\n• Link: ${disho.link_produk}\n• Gambar: ${disho.image_cover}\n==========================\n`
                  }
                  reply(shopee.trim())
                  break
                case 'google':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `• Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolHuman}&img=${x}`)
                        dappa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
        case 'konachan':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${LolHuman}&query=${query}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'wallpapersearch':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${LolHuman}&query=${query}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'wallpapersearch2':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${LolHuman}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
        case 'gimage':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${LolHuman}&query=${query}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'gimage2':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        dappa.sendMessage(from, ini_buffer, image)
                    }
                    break
        case 'faktaunik':
                case 'katabijak':
                case 'bucin':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolHuman}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LolHuman}`)
                    reply(anu.result)
                    break
        case 'quotesanime':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolHuman}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
        case 'wattpad':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${LolHuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'lk21':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
        case 'kodepos':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${LolHuman}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'lirik2':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${LolHuman}&query=${query}`)
                    reply(get_result.result)
                    break
        case 'cnnindonesia':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'jadwaltvnow':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'translate':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${LolHuman}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'heroml':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    dappa.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
        case 'nhentaipdf':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    dappa.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'manga':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
        case 'character':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
        case 'pixiv':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${LolHuman}&query=${query}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pixivdl':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'xhamstersearch':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${LolHuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
        case 'zippyshare':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
        case 'tiktokmusic':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolHuman}&url=${ini_link}`)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
                    break
        case 'ytmp42':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${LolHuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    dappa.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek})
                    break
        case 'ytmp32':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${LolHuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
        case 'ytmp33':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ytaudio2?apikey=${LolHuman}&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
		    get_audio = await getBuffer(get_result.link[0].size)
		    dappa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
        case 'getpic':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return 
					if (dappa.message.extendedTextMessage === undefined || dappa.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = dappa.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await dappa.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						dappa.sendMessage(from, buffer, image, {quoted: mek})
					} catch (e) {
						dappa.sendMessage(from, buffer, image, {quoted: mek})
					}
					break
        case 'superhero':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/superhero?apikey=${LolHuman}&query=${body.slice(11)}`)
                    get_result = get_result.result
		    txt = `Id : ${get_result.id}\n`
                    txt += `Nama : ${get_result.name}\n`
                    txt = `Status : ${get_result.powerstats.intelligence} - ${get_result.powerstats.strength} - ${get_result.powerstats.speed} - ${get_result.powerstats.durability} - ${get_result.powerstats.power} - ${get_result.powerstats.combat}\n`
                    txt += `BioGrap : ${get_result.biography.full-name} - ${get_result.biography.alter-egos}\n`
                    txt += `Series : ${get_result.aliases}\n`
                    txt += `Ultah : ${get_result.place-of-birth}\n`
                    txt += `Place : ${get_result.first-appearance}\n`
                    txt += `Publish : ${get_result.publisher}\n`
                    txt += `Rating : ${get_result.alignment}\n`
                    txt += `Gender : ${get_result.appearance.gender}\n`
                    txt += `Race : ${get_result.appearance.race}\n`
                    txt += `Height : ${get_result.appearance.height}\n`
                    txt += `Warna mata : ${get_result.appearance.eye-color}\n`
                    txt += `Warna rambut : ${get_result.appearance.hair-color}\n`
                    txt += `Work : ${get_result.work.occupation} - ${get_result.work.base} - ${get_result.work.connections}\n`
                    buffer = await getBuffer(get_result.image.url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
                    //NANI
        case 'apikeycek':
        case 'cekapikey':
        if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
		apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${apiKey}`)
                    get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
        case 'spambrutal':
					if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply('Otw.....')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('85876154630')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
					case 'spamcall':
					if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('85876154630')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
        case 'runtime':
					if (!isRegistered) return reply(ind.noregis())
				dappa.updatePresence(from, Presence.composing, cr) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
        case 'nsfw_avatar':
					if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
		                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolHuman}`)
		                    dappa.sendMessage(from, buffer, image, { quoted: mek })
		                    break
        case 'neonime':
		if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
					dappa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${apivhtear}`, {method: 'get'})
                    if (isLimit(sender)) return reply(limitend(pushname2))
                    reply(ind.wait())
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
        case 'bukatime':
		case 'opentime': 
		if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                if (!isGroupAdmins) return reply(ind.admin())
              dappa.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
		case 'tostk':
		if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
		case 'tos':
		if (isBanned) return reply(ind.baned())
		if (!isRegistered) return reply( ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp?apikey=${LolHuman}&text=${txt}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
        case 'wait2':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await dappa.downloadAndSaveMediaMessage(encmedia);
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${LolHuman}`, {...options })
                        get_result = get_result.result
                        console.log(get_result)
                        ini_video = await getBuffer(get_result.video)
                        txt = `Anilist id : ${get_result.anilist_id}\n`
                        txt += `MAL id : ${get_result.mal_id}\n`
                        txt += `Title Romaji : ${get_result.title_romaji}\n`
                        txt += `Title Native : ${get_result.title_native}\n`
                        txt += `Title English : ${get_result.title_english}\n`
                        txt += `at : ${get_result.at}\n`
                        txt += `Episode : ${get_result.episode}\n`
                        txt += `Eimilarity : ${get_result.similarity}`
                        dappa.sendMessage(from, ini_video, video, { quoted: mek, caption: txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
        case 'darkneon':
		if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (args.length < 1) return reply(`Contoh: ${prefix}darkneon Riu`)
			darkn = body.slice(9)
			darkne = await getBuffer(`https://videfikri.com/api/textmaker/darkneon/?text=${darkn}`)
			dappa.sendMessage(from, darkne, image, {quoted: mek, caption: 'FITUR UPDATE BY RIU'})
			await limitAdd(sender)
			break
			case 'paper':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (args.length < 1) return reply(`Contoh: ${prefix}darkneon Riu`)
			papg = body.slice(6)
			glass = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
			dappa.sendMessage(from, glass, image, {quoted: mek, caption: 'FITUR UPDATE BY RIU'})
			await limitAdd(sender)
			break
				//NANI
        case 'joox':
                    query = args.join(" ")
             if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
			if (args.length < 1) return reply(`Contoh: ${prefix}joox Kokoronashi`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
		    get_info = get_result.info
		    txt = '*_[ FITUR UP BY NoobzX]_*\n\n'
                    txt += `Judul : *${get_info.song}*\n`
                    txt += `Album : *${get_info.album}*\n`
                    txt += `Durasi : *${get_info.duration}*\n`
                    txt += `Penyanyi : *${get_info.singer}*\n`
                    txt += `Tanggal : *${get_info.date}*\n`
                    txt += `Lirik :\n *${get_result.lirik}*\n`
                    thumbnail = await getBuffer(get_result.image)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.song}.mp3`, quoted: mek })
                    break
        case 'req':
        case 'request':
        case 'reques':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Mau request apa?`)
                     const cfrr = body.slice(4)
                      if (cfrr.length > 300) return dappa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQ]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
                     var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    dappa.sendMessage('6285876154630@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner NICO, Requests yang dapat membebani owner  tidak akan ditanggapi.')
                    break
        case 'bug':
        case 'lapor':
        case 'lpr':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return dappa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[BUG]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    dappa.sendMessage('6285876154630@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
        case 'pornmaker':
				if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Mr.A43G`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'FITUR UP BY NOOBZX'  })
                    break
                    case 'marvelmaker':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Mr.A43G`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/marvelstudio?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'FITUR UP BY NOOBZX'  })
                    break
                    case 'lionmaker':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Mr.A43G`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'FITUR UP BY NOOBZX'  })
                    break
                    case 'temoji':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} `)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
                    case 'ytplay2':
                    if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(get_result.video)
                    dappa.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek})
                    break
                    case 'glit':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Mr.A43G`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/glitch?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'FITUR UP BY NOOBZX'  })
                    break
                    case 'avmaker':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Mr.A43G`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/avenger?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'FITUR UP BY NOOBZX'  })
                    break
                    case 'ahegao':
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'FITUR UP BY NOOBZX'  })
                    break
        case 'pubg2':
				if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/pubg?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: 'FITUR UP BY NOOBZX' })
                    break
        case 'cerhor': 
        case 'ceritahoror':
        case 'ceritahorror':
					 // Fix Bug By Sofyan AMV				
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ceritahoror?apikey=${LolHuman}`, {method: 'get'})
					get_result = get_result.result
					txt = `Title : ${get_result.title}\n`
					txt += `Desc : ${get_result.desc}\n`
					txt += `Story : ${get_result.story}\n`
					thumbnail = await getBuffer(get_result.thumbnail)
					dappa.sendMessage(from, thumbnail, image, {quoted: mek, caption: txt})
					await limitAdd(sender)
					break
        case 'imagesearch':
		if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${LolHuman}&query=${query}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
        case 'tebakcok':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/kuis/tebakgambar?apikey=dappabotwa`, {method: 'get'})
					buffer = await getBuffer(anu.result.images)
					setTimeout( () => {
					dappa.sendMessage(from, '* Jawaban :* '+anu.result.jawaban, text, {quoted: mek })
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dappa.sendMessage(from, buffer, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek })
					}, 0) // 1000 = 1s,
					break
        case 'ytstalk2':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ytk = `${body.slice(11)}`
					anu_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ytchannel?apikey=${LolHuman}&query=${ytk}`, {method: 'get'})
					anu_resutl = anu_result.search
					txt = `Chanel : ${get_search.channel_name}\n`
					txt += `Tentang : ${get_search.channel_about}\n`
					txt += `Created : ${get_search.channel_created}\n`
					txt += `Link Chanel : https://youtube.com/channel/${get_search.channel_id}\n`
					buffer = await getBuffer(get_search.picture)
					dappa.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
			case 'ytstalk':
					if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${LolHuman}&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••\n'
					for (let search of anu.result) {
						cari += `*Chanel* : ${search.channel_name}\n*Tentang* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					break
			case 'kisahnabi':
			if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
        case 'colorttp':
		if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp3?apikey=${LolHuman}&text=${txt}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
        case 'darkttp':
		if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp2?apikey=${LolHuman}&text=${txt}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
        case 'wiki':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
			query = args.join(" ")
                    wiki = await fetchJson(`http://lolhuman.herokuapp.com/api/wiki?apikey=${LolHuman}&query=${query}`)
                    reply(wiki.result)
                    break
			case 'ssweb':
			if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    ini_url = args[0]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ssweb?apikey=${LolHuman}&url=${ini_url}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'jadwalsholat':
			if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolHuman}`)
                    get_result = get_result.result
                    txt = `Wilayah : ${get_result.wilayah}\n`
                    txt += `Tanggal : ${get_result.tanggal}\n`
                    txt += `Sahur : ${get_result.sahur}\n`
                    txt += `Imsak : ${get_result.imsak}\n`
                    txt += `Subuh : ${get_result.subuh}\n`
                    txt += `Terbit : ${get_result.terbit}\n`
                    txt += `Dhuha : ${get_result.dhuha}\n`
                    txt += `Dzuhur : ${get_result.dzuhur}\n`
                    txt += `Ashar : ${get_result.ashar}\n`
                    txt += `Maghrib : ${get_result.imsak}\n`
                    txt += `Isya : ${get_result.isya}`
                    reply(txt)
                    break
			case 'jodoh':
			if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				nama1 = args[0]
                            nama2 = args[1]
				if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Riu`)
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/jodoh/${nama1}/${nama2}?apikey=${LolHuman}`)
				get_result = get_result.result
                    txt = `*Positif* : ${get_result.positif}\n`
                    txt += `*Negative* : ${get_result.negatif}\n`
                    txt += `*Desc* : ${get_result.deskripsi}\n`
                    reply(txt)
                    break
        case 'weton':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
        case 'tebakumur':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				name = args.join(" ")
				if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Riu`)
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/tebakumur?apikey=${LolHuman}&name=${name}`)
				get_result = get_result.result
                    txt = `*Name* : ${get_result.name}\n`
                    txt += `*Umur* : ${get_result.age}\n`
                    reply(txt)
                    break
        case 'asmaulhusna':
        case 'asmaul':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
        case 'jadian':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				tanggal = args[0]
                            bulan = args[1]
                            tahun = args[2]
				if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Riu`)
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${LolHuman}`)
				get_result = get_result.result
                    txt = `*Karakteristik* : ${get_result.karakteristik}\n`
                    txt += `*Desk* : ${get_result.deskripsi}\n`
                    reply(txt)
                    break
        case 'ytkomen':
		if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=${LolHuman}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'mememaker':
		if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    texttop = args[0]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolHuman}&texttop=${texttop}&textbottom=${body.slice(10)}&img=https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
         // NANIIII
        case 'amongus':
		if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${LolHuman}&text=${body.slice(9)}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
        case 'cuaca':
				daerah = args.join(" ")
				if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Riu`)
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/cuaca/${daerah}?apikey=${LolHuman}`)
				get_result = get_result.result
                    txt = `*Tempat* : ${get_result.tempat}\n`
                    txt += `*Latitude* : ${get_result.latitude}\n`
                    txt += `*Cuaca* : ${get_result.cuaca}\n`
                    txt += `*Angin* : ${get_result.angin}\n`
                    txt += `*Desk* : ${get_result.description}\n`
                    txt += `*Kelembapan* : ${get_result.kelembapan}\n`
                    txt += `*Suhu* : ${get_result.kelembapan}\n`
                    txt += `*Udara* : ${get_result.udara}\n`
                    txt += `*Permukaan* : ${get_result.permukaan_laut}`
                    reply(txt)
                    break
        case 'spotify':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${LolHuman}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                case 'spotifysearch':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'faketoko':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "LoL Human", code = "IDR", price = 1000000)
                    break
        case 'drakorongoing':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${LolHuman}`)
                    get_result = get_result.result
                    txt = "Ongoing Drakor\n\n"
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n`
                        txt += `Year : ${get_result[x].category}\n`
                        txt += `Total_episode : ${get_result[x].total_episode}\n`
                        txt += `Genre : ${get_result[x].genre.join(", ")}\n\n`
                    }
                    reply(txt)
                    break
        case 'telesticker':
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${LolHuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        buffer = await getBuffer(ini_sticker[sticker_])
                        dappa.sendMessage(from, buffer, sticker)
                    }
                    break
        case 'alquran':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length < 1) return reply('_Example: !alquran 108_')
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${LolHuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x in ayat) {
                        test = ayat[x]
                        arab = test.arab
                        nomor = test.ayat
                        latin = test.latin
                        indo = test.indonesia
                        txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    txt = txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    txt = txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    txt = txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(txt)
                    break
        case 'tribunews':
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					dappa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					dappa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					dappa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					dappa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': 
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					dappa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=${LolHuman}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
        case 'covidindo': 
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break		
		case 'covidglobal':    
				//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				dappa.updatePresence(from, Presence.composing) 
			    tels = body.slice(12)
				asu = await fetchJson(`http://lolhuman.herokuapp.com/api/corona/global?apikey=${LolHuman}`)
				ez = `*╠➥  Positif :* ${asu.result.positif}\n*╠➥  Sembuh :* ${asu.result.sembuh}\n*╠➥  Di Rawat :* ${asu.result.dirawat}\n*╠➥  Meninggal :* ${asu.result.meninggal}\n`
				reply(ez)
				await limitAdd(sender)
					break
		case 'ceknamaff': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/freefire/${gatauda}?apikey=${LolHuman}`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'ceknamaml': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/mobilelegend/${gatauda}?apikey=${LolHuman}`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'namaninja': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${LolHuman}&nama=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
      case 'igstalk':
        // Fix Bug By OzanDesu				
        if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
        hmm = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=apivinz`)
        buffer = await getBuffer(hmm.profile_pic)
        hasil = `Fullname : ${hmm.fullname}\nPengikut : ${hmm.follower}\nMengikuti : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nbio : ${hmm.bio}`
        dappa.sendMessage(from, buffer, image, { quoted: mek, caption: hasil })
        await limitAdd(sender)
        break
        case 'bacotanhacker': // Update By OzanDesu & RzkyO
        // Fix Bug By OzanDesu				
        if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
        anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=itsmeiky633`, { method: 'get' })
        reply(anu.result)
        await limitAdd(sender)
        break
        // ------------
        case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LolHuman}&text1=${txt1}&text2=${txt2}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
        
                        // Random Image //
                case 'art':
                case 'elf':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'chiisaihentai':
                case 'trap2':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap2':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo2':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
        case 'asupan':
                 if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${LolHuman}`)
                    buffer = await getBuffer(get_result.result)
                    dappa.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'nekopoi':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${LolHuman}&url=${ini_url}`)
                    get_result = get_result.result
                    console.log(get_result)
                    txt = `Title : ${get_result.anime}\n`
                    txt += `Porducers : ${get_result.producers}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Size : ${get_result.size}\n`
                    txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumb)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
        case 'nsfwcheck':
        case 'nsfwcek':
        if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if ((isMedia && !dappa.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await dappa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${LolHuman}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'semoji':
                         if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
                case 'fakedonald':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${LolHuman}&text=${txt}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'spamsms':
                         if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${LolHuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${LolHuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${LolHuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${LolHuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${LolHuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${LolHuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${LolHuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${LolHuman}&nomor=${nomor}`)
                    reply("Success")
                    break
                    case 'xnxxsearch':
                    if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Uploader : ${get_result[x].uploader}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    break
                    
        case 'xnxx':
                 if (!isRegistered) return reply(ind.noregis())
                 if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${LolHuman}&url=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Comment : ${get_result.comment}\n`
                    txt += `Tag : ${get_result.tag.join(", ")}\n`
                    txt += `Description : ${get_result.description}\n`
                    txt += "Link : \n"
                    link = get_result.link
                    for (var x in link) {
                        txt += `${link[x].type} - ${link[x].link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    break
        case 'igdl':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, video, { quoted: mek })
                    break
        case 'kusonime':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${LolHuman}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
                case 'kusonimesearch':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
                case 'otakudesu':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${LolHuman}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
                case 'otakudesusearch':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
                    
        case 'jadwaltv':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    channel = args[0]
                    tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${LolHuman}`)
                    tvnow = tvnow.result
                    txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in tvnow) {
                        txt += `${x} - ${tvnow[x]}\n`
                    }
                    reply(txt)
                    break
       
       
		case 'katadilan': 
					// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin': 
					// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin2': 
					// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katacinta':
					// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
        case 'alay':
					// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        await limitAdd(sender)
					break
               case 'wancak':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=RamlanID`, {method: 'get'})
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
        case 'katabijak':
			        // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bijak?apikey=itsmeiky633`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					dappa.sendMessage(from, katabijak, text, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'katailham':
			        // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanilham?apikey=itsmeiky633`, {method: 'get'})
				kata = anu.result
				dappa.sendMessage(from, kata, text, {quoted: mek })
				await limitAdd(sender)
				break
        case 'githubstalk':
        case 'github':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LolHuman}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					dappa.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
        case 'ytsearch':
        if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Tahu Bacem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Published : ${get_result[x].published}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n`
                        txt += `Link : https://www.youtube.com/watch?v=${get_result[x].videoId}\n\n`
                    }
                    reply(txt)
                    break
                case 'ytplay':
                case 'play':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(get_result.video[0].link)
                    dappa.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek})
                    break
                 case 'ytplay2':
                case 'play2':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek})
                    break
                 case 'ytplay3':
                case 'play3':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    dappa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_video = await getBuffer(get_result.video[0].link)
                    dappa.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek})
                    break
                case 'ytmp3':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=Oz-san&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    dappa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp4':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=Oz-san&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    dappa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    dappa.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'pinterest':
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolHuman}&query=${query}`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'pinterestdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestdl?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result["736x"]
                    buffer = await getBuffer(ini_url)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'nhentai':
                if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${LolHuman}`)
                    get_result = get_result.result
                    txt = `Title Romaji : ${get_result.title_romaji}\n`
                    txt += `Title Native : ${get_result.title_native}\n`
                    txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    txt += `Parodies : ${get_info.parodies}\n`
                    txt += `Character : ${get_info.characters.join(", ")}\n`
                    txt += `Tags : ${get_info.tags.join(", ")}\n`
                    txt += `Artist : ${get_info.artists}\n`
                    txt += `Group : ${get_info.groups}\n`
                    txt += `Languager : ${get_info.languages.join(", ")}\n`
                    txt += `Categories : ${get_info.categories}\n`
                    txt += `Pages : ${get_info.pages}\n`
                    txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(txt)
                    break
        case 'alquranaudio':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LolHuman}`)
                    dappa.sendMessage(from, buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
        case 'ktpmaker':
        if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${LolHuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    dappa.sendMessage(from, buffer, image, { quoted: mek })
                    break
           
		case 'apkpure':
				// Fix Case By buffer/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		
				case 'googletext':
                	if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(12)
					var buffer = gh.split("/")[0];
					var ganz = gh.split("/")[1];
					var abiez = gh.split("/")[2];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}googletext buffer/gans/abiezz`)
					reply(ind.wait())
					buffer = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${buffer}&text2=${ganz}&text3=${abiez}`)
					dappa.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'phcomment':
                	if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(11)
					var buffer = gh.split("/")[0];
					var cmnt = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}phcomment buffer/yahahaha`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${buffer}&msg=${cmnt}`)
					dappa.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
				
                case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} buffer`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    dappa.sendMessage(from, buffer, image, {caption: 'Jangan Cuma Make Doang Follow instagram.com/noobz.sad.offc_', quoted: mek})
         break
         case 'gplaybutton':
         case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} NoobzX`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    dappa.sendMessage(from, buffer, image, {caption: 'Jangan Cuma make doang Follow instagram.com/noobz.sad.offc_', quoted: mek})
         break
         case 'tiktoknowm':
         case 'tiktokdownload':
         case 'tiktokdl':
                  if (!isOwner) return reply(`maaf anda bukan member VIP \n maka nya ganteng komtol:v`)
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
        reply(ind.wait())
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${LolHuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    buffer = await getBuffer(get_result.result.link)
                    dappa.sendMessage(from, buffer, video, { quoted: mek })
                    await limitAdd(sender)
                    break
        case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return dappa.sendMessage(from, '𝘂𝘀𝗲r 𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[ERROR] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺e 𝘁𝗶𝗱𝗮𝗸 ??𝗮𝗹𝗶d?')
					}
					await limitAdd(sender)
				break
				//stop
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return dappa.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./dappauhuy/gtts')(args[0])
					if (args.length < 2) return dappa.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('lah teks nya kepanjangan bambang😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							dappa.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
				case 'say':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			 	if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://anuz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender) 
					break 
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return dappa.sendMessage(from, '𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶??𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await dappa.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    dappa.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await dappa.chats.all()
					dappa.setMaxListeners(25)
					for (let _ of anu) {
						dappa.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 dappa.updatePresence(from, Presence.composing) 
				 dappa.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					dappa.blockUser (`${body.slice(7)}@c.us`, "add")
					dappa.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    dappa.blockUser (`${body.slice(9)}@c.us`, "remove")
					dappa.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
				case 'leave':
        if (!isGroup) return reply(ind.groupo())
        if (!isOwner) return reply(ind.ownerb())
        setTimeout(() => {
          dappa.groupLeave(from)
        }, 2000)
        setTimeout(() => {
          dappa.updatePresence(from, Presence.composing)
          dappa.sendMessage(from, 'NoobzXBOT keluar yah.. 👋', text) // ur cods
        }, 0)
        break
        case 'join':
        if (!isOwner) return reply(ind.ownerb())
    if (args.length == 0) return piyo.reply(from, `Jika kalian ingin mengundang bot kegroup silahkan invite atau dengan\nketik ${prefix}join [link group]`, id)
    let linkgrup = body.slice(6)
    let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
    let chekgrup = await piyo.inviteInfo(linkgrup)
    if (!islink) return piyo.reply(from, 'Maaf link group-nya salah! silahkan kirim link yang benar', id)
    if (isOwnerBot) {
        await piyo.joinGroupViaLink(linkgrup)
              .then(async () => {
                  await piyo.sendText(from, 'Berhasil join grup via link!')
                  await piyo.sendText(chekgrup.id, `Halo Anjg~, Aink NoobzXBOT. Untuk Memulai Bot silahkan ketik  ${prefix}menu`)
              })
    } else {
        let cgrup = await piyo.getAllGroups()
        if (cgrup.length > groupLimit) return piyo.reply(from, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`, id)
        await piyo.sendContact(from, ownerNumber)
        if (cgrup.size < memberLimit) return piyo.reply(from, `Apanih member dikit bat ngentot ${memberLimit} people`, id)
        await piyo.joinGroupViaLink(linkgrup)
              .then(async () =>{
                  await piyo.reply(from, 'Berhasil join grup via link!', id)
              })
              .catch(() => {
                 piyo.reply(from, 'Gagal!', id)
             })
    }
    break
			case 'delete':
			case 'del':
			case 'd':
			if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
					dappa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await dappa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dappa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dappa.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('*_succes broadcast_* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*_succes broadcast_* ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await dappa.downloadAndSaveMediaMessage(mek)
                         await dappa.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengganti icon grub')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dappa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						dappa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						dappa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                  dappa.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  dappa.sendMessage(from, 'Tuh kontak NoobzXGans <•_•> ,Jangan Lupa Save Ya (*>*)',MessageType.text, { quoted: mek} )
		const DAPPAGANTENG = fs.readFileSync('./dapganz/DAPPAGANTENG');
                dappa.sendMessage(from, DAPPAGANTENG, MessageType.image, {quoted: mek, caption: '*INI OWNER GW , DAN AKU BOT NYA😙*'})
                 break
		break    
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                dappa.groupUpdateSubject(from, `${body.slice(9)}`)
                dappa.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                dappa.groupUpdateDescription(from, `${body.slice(9)}`)
                dappa.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           				case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dappa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
						dappa.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dappa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
						dappa.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴??𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱?? 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `asek dapat makanan,otw mengkickmu, 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dappa.groupRemove(from, mentioned)
					} else {
						mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						dappa.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		//no group feature
		case 'mutual':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        	break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dappa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						dappa.sendMessage(from, buffer, image, {quoted: mek, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                			 case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=${LolHuman}&text=${budy}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau yank')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./dapp/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./dapp/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./dapp/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./dapp/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./dapp/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./dapp/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./dapp/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./dapp/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                			case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./dapp/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./dapp/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(ind.satukos())
					}
					break
					
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await dappa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						dappa.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
					
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await dappa.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							dappa.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
       if (budy.includes(`assalamu`)) {
                  reply(`Waalaikumsallam, ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
        if (budy.includes(`asalamu`)) {
                  reply(`Waalaikumsallam, ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
        if (budy.includes(`Asalamu`)) {
                  reply(`Waalaikumsallam, ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
       if (budy.includes(`Assalamu`)) {
                  reply(`Waalaikumsallam, ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
       if (budy.includes(`Hai`)) {
                  reply(`iya kak, NoobzXBOT disini. ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
                  
        if (budy.includes(`hai`)) {
                  reply(`iya kak, NoobzXBOT disini. ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
        if (budy.includes(`Hallo`)) {
                  reply(`iya kak, NoobzXBOT disini. ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
                  
       if (budy.includes(`hallo`)) {
                  reply(`iya kak, NoobzXBOT disini. ketikan ${prefix}help untuk menu NoobZBOT`)
                  }
        if (budy.includes(`Sayang`)) {
                  reply(`Iya sayang knp😘`)
                  }
                  
        if (budy.includes(`sayang`)) {
                  reply(`iya sayang knp😘`)
                  }

		if (budy.includes(`Ngentod`)) {
                  reply(`Jaga Omongan😡`)
                  }
                  
        if (budy.includes(`ngentod`)) {
                  reply(`Jaga Omongan😡`)
                  }

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama Kak😁`)
                  }
                  
        if (budy.includes(`thanks`)) {
                  reply(`Sama Sama Kak😁`)
                  }
                  
        if (budy.includes(`tanks`)) {
                  reply(`Sama Sama Kak😁`)
                  }
                  
        if (budy.includes(`Tanks`)) {
                  reply(`Sama Sama Kak😁`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama Kak😁`)
                  }
                  
         if (budy.includes(`makasih`)) {
                  reply(`Sama Sama Kak😁`)
                  }
         if (budy.includes(`@6285876154630`)) {
                  reply(`Jangan Tag Majikan gw Broh, Dia Lagi Sibuk 🗣`)
                  }
		if (budy.includes(`bot`)) {
                  reply(`Iya NoobzXBOT~ disini ketik ${prefix}help ya kak`)
                  }
                  
        if (budy.includes(`Bot`)) {
                  reply(`Iya NoobzXBOT~ disini ketik ${prefix}help ya kak`)
                  }
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu NoobzXBOT~*`)
			  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
					} else {
						console.log(color('[DapBOT~]','yellow'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
