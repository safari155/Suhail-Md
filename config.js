const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260971816956";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_36_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOLzdydS9BbGtTL1h4MkQyT05iSWpoc3pidjlDTDJGcmpiZlk3TGFPZDZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFaVNLWlJaU1EwcXdBUGl6dXZrWXJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYzMjJhYTc2LWE5NGItNGZlZS04ZGMxLTE0YjRiNWNjMmM1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAyMDcsXG4gICAgICA4OSxcbiAgICAgIDE4LFxuICAgICAgMTI3LFxuICAgICAgOTYsXG4gICAgICA4OCxcbiAgICAgIDkxLFxuICAgICAgMTQzLFxuICAgICAgNDYsXG4gICAgICA0NixcbiAgICAgIDEzMyxcbiAgICAgIDcwLFxuICAgICAgMTk4LFxuICAgICAgMTY3LFxuICAgICAgMjM5LFxuICAgICAgMTA4LFxuICAgICAgMjM5LFxuICAgICAgODAsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDE2MyxcbiAgICAgIDI0NSxcbiAgICAgIDYxLFxuICAgICAgMTcyLFxuICAgICAgMjM0LFxuICAgICAgMTYwLFxuICAgICAgMjMzLFxuICAgICAgMTQyLFxuICAgICAgNTgsXG4gICAgICAxNzQsXG4gICAgICA5OCxcbiAgICAgIDEwMSxcbiAgICAgIDk3LFxuICAgICAgMTUxLFxuICAgICAgMSxcbiAgICAgIDQ4LFxuICAgICAgNzYsXG4gICAgICAxNDAsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTE0S0RZVkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3MTgxNjk1Njo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1ha29cIixcbiAgICBcImxpZFwiOiBcIjIxMzU2MzI3MjYwOTk3Mjo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS3Bsc2tFRVBianpiUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjl3dGdBeWhFdjdsRWRBQUpsMUFOZE82SzQzeVNPM3pQM0RnSmNLU09pbXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSTVmay92bkpmOXJOS0FXVWxIR2lURW4rTjhiNHZSa0l0VkRKa1piZDZIa1hMbDFYS0hOSmxRU2JSV2h4SVVtQnFkM1RqYzMzaitKaDdtTkRscW13Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGFSM1NGQ2ZlcHpEOWJSY0dZdlo0aEN4V2YraW9zK3pkTmNNNWpSVUF3S2FnakdhcFJ4YlVleGpMU3hUMHZHMVErRlNTWEJjelUwVmpLbVBUN3FmQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTcxODE2OTU2Ojg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkzOTAwMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MAKO💀",
  ownername:process.env.OWNER_NAME|| "😈MAKO😈",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
