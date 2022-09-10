function FindProxyForURL(url, host){
var Proxy="PROXY 127.0.0.1:6080";
var ProxyD="PROXY 127.0.0.1:7890";
var patterns = new Array("steamcommunity.com",
"store.steampowered.com",
"*.steampowered.com",
"steam-chat.com",
"*.pixiv.net",
"pixiv.net",
"*.secure.pixiv.net",
"pximg.net",
"*.pximg.net",
"wikipedia.org",
"*.wikipedia.org",
"*.ubi.com",
"e-hentai.org",
"*.e-hentai.org",
"twitch.tv",
"www.twitch.tv",
"*.twitch.tv",
"*.chat.twitch.tv",
"usher.ttvnw.net",
"discord.com",
"discordapp.com",
"*.discordapp.com",
"*.discordapp.net",
"*.s3.amazonaws.com",
"*.akamaihd.net",
"*.chat.twitch.tv",
"*.uploads-regional.twitch.tv",
"*.help.twitch.tv",
"*.dev.twitch.tv");

var bypass = new Array("*.qq.com",
"*.ptlogin2.qq.com",
"*.baidu.com");

for (i in patterns) {
if(shExpMatch(host.toLowerCase(),"*" + patterns[i].toLowerCase() + "*")){return Proxy;};
};
for (i in bypass) {
if(shExpMatch(host.toLowerCase(),"*" + bypass[i].toLowerCase() + "*")){return "DIRECT";};
};


return ProxyD;
}
