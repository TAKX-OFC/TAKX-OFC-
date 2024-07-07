//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kanjumatakundacharles@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/TAKX-OFC/TAKX-OFC-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.THUMB_IMAGE = process.env.THUM || process.env.IMAGE || "https://telegra.ph/file/7d111363f2d5cd83157b7.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "263785192250";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/686bbd0f0375bb881df15.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NqUFFpWkRueHAvT0EyM0oyNWlVMEQ5MS90b1lIYitEM3dhaDFjTzJVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLytqaHgyZ01RZ1l5ZVBwYWFQN0pDMWwySTZFZzJEV3Mra2VQcDdabUFtdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTnpNWHh1TUE5My94bU1rVFBndXhXNXJoYWJxOXVaR0xIVjJTTDVaYjAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOY1NtSGRZR2J5VVZLL20wcnFBUEVwL3Q1dGZjV0xGRFd1SWhROEQ3TXdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFISmV6V2lZT05peWRMKzc0RGcxaVBLZEZmOEV4SWpIZXdrOGRvWk9BMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHN3AvbVk2bCtleUpydVNVdC9OazlKVUF5bEtwd0w1WW5mY1hFZjVlV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BDOHBwQXpFWjZPcFpCeEt2VVdVMzcveHF0dmtoQ3Y0U1N4ZnlnVXFsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXZqcG9PK2orcmczb053VXJVUmNEWk1sak1hUGN1ZVgwd2sxNUZvRVFIYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZhaDRwajk5NjRsaXl5OVhldGpwQkQ3MmNxc3VZeW8rMmRzY3NCeFo1aUU3bHp6OS9XSFJtbTAxb3FzdjdPYldwUnpVQWxGVGxwa1ZmQzBDRW9NVER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6Im1SRlAxaTB3SkRERGlGSUYwNFFrakRVNzRzbW5LTDl3cGRuSis1ajhTems9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE0NzczODk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ2OTdEMTZDMTJBRENGMzY2NUFCQTZGOEUzNDg3MTFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzMTE3OTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNDc3Mzg5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRjA4NjIwREI2RDgxNzQyNTU3NEI5REY4MERFMUM1RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzExNzk2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPa2hqamhGd1FZU2xFZnoxWGRaLWhRIiwicGhvbmVJZCI6ImU0OGQ4NjdjLWUyMDAtNDYzNi1hZjNjLWJkMmNiMzczNGZjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJibXhnSHdGVHI3WXJGeTJhQ2R4OXVNbXdJbTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2xRWWJDck9BZXBpN25hQkVybzZMZEhmaDRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZUQ01FVDUxIiwibWUiOnsiaWQiOiIyNjM3MTQ3NzM4OTg6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLJqs2l4bSbza1z4bekIOG0jc2r4bSHzaQg4p2l4oOd8J+Hv/Cfh7zil4jwnZSx8J2UnvCdlKjwnZSy8J2Uq/CdlKHwnZSeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdmhoWklIRU9PL3A3UUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1aGhzK1M2eUR6VmkrMDgyQlN1ZnRlMGE0ZTlzUjBhMWFnNnhxRDh1TnhRPSIsImFjY291bnRTaWduYXR1cmUiOiJvdS9hZDRlOTBQdjVDb0ErNFJBWG5xZU8xUGpPTVZXckZrTzZXc1NqQm9RWFFZYUhWWUZRQVhXOWk1OXpkN2RKbmwvVXVGK2NoM2hhV0M4WmNzNkJEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYWRjcklBUUFKUzZSTitTd3E1UmdGWDQrMGg4RjlVYi9XSlpOazZGSnpBUFFwRSt3elJlN0ZhL01YS08rWEZ0Sm5NcGs0WTNnaVlSVStvZTRZNXRORFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTQ3NzM4OTg6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlWVliUGt1c2c4MVl2dFBOZ1VybjdYdEd1SHZiRWRHdFdvT3NhZy9MamNVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzExNzkyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpiZSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  author: process.env.PACK_AUTHER || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  ownername: process.env.OWNER_NAME || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  errorChat: process.env.ERROR_CHAT || "263785192250",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
