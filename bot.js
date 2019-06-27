const Discord = require('discord.js');
const devs = ['389090790984515594'];
const db = require('quick.db');
const premium = ['470896018603376640']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '+';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`${client.guilds.size} Server`,'+help','Type +help',`${client.users.size} Members`,'+inv','By: Martin | ii_Martin'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/Ninja`);
    }, ms);
    console.log(` الاسم |> Name: ${client.user.username}`);
 console.log(` عدد السيرفرات |> Servers: ${client.guilds.size}`);
 console.log(` الاعضاء |> Members: ${client.users.size}`);
 console.log(` الرومات |> Channels: ${client.channels.size}`);
 console.log(`لبرومات |> Channels: ${client.channels.size}`);
 console.log(` الايدي |> Id: ${client.user.id}`);

});

//امر help
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By Martin
    let pages = [`

        ***__General orders__***
**
${prefix}allbots/ to see all bots in the server
${prefix}server/to see all the information about the server
${prefix}bot/to see all information about the bot
${prefix}count/to see the members count with out bots
${prefix}invites/ to see how many invites do you have  
${prefix}invinfo <invitelink here> / to see informations about the invites
 example : invinfo martin
${prefix}invite-codes/to see the invite links in the server
${prefix}cal/calculator 
${prefix}trans <language> <any thing>/to translate from any language 
${prefix}short/to shortcut the links
${prefix}tag/to write the word with big style
${prefix}perms/to see your perms in the server
${prefix}rooms/to see all rooms in the server
${prefix}roles/to see all ranks in the server
${prefix}emojilist/to see all emojis in the server
${prefix}say/make the bot say what you say
${prefix}image/to see the server photo
${prefix}members/to see all members in this server
${prefix}id/to see info about you
${prefix}bans / to see the bans members
${prefix}avatar/to see your avator or other member avatar
${prefix}emoji <any things>/to write any word with emoji
${prefix}inv/to invite the bot to your server
**
  `
,`
        ***__Administrative Orders__***
**
${prefix}move @user /  to move member to your voice room 
${prefix}bc / to broadcast
${prefix}rolebc <everyone or @role> / to broadcast to a role
${prefix}role @user <rank> / to give user any role
${prefix}roleremove @user <rank> / to delete role from any user
${prefix}give all <rank> / to give everyone role
${prefix}give humans <rank> /to give role to members only
${prefix}give bots <rank> / to give role to bots only
${prefix}hchannel / to hide the chat
${prefix}schannel / to show the chat
${prefix}clr <number> / to delete the chat  with number
${prefix}clear / to delete the chat
${prefix}mute @user <time> / to mute any member
${prefix}unmute @user / to unmute anymember
${prefix}kick @user <reason> / to kick any member
${prefix}ban @user <reason> / to ban any member
${prefix}mutechannel / to close the chat
${prefix}unmutechannel / to open the chat
${prefix}dc / to delete all channels
${prefix}dr / to delete all roles
${prefix}ct <name> / to create a chat channel
${prefix}cv <name> / to create voice channel
${prefix}temp / to create a temp channel
${prefix}delet <name> / to delete any voice/chat channel
${prefix}make <number> / to create colors
${prefix}color <number> / to choose any color 
${prefix}deletecolors <number> / to delete the colors
**
  `
,`
        ***__other orders__***
 **       
${prefix}roll <number> / roll
=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
 to enable the welcome message create channel with '  welcome ' name 
+setwelcomer <text channel name> to choose the welcome channel
${prefix}voiceonline / to enable the voice online channel 
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('🔚').then( r => {
            msg.react('⏩')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '🔚' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 

const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**Showing Details Of** ${msg.guild.name}`)
      .addField('`Server Region`',`[${msg.guild.region}]`,true)
      .addField('`Roles Count`',`[${msg.guild.roles.size}]`,true)
      .addField('`Members Count`',`[${msg.guild.memberCount}]`,true)
      .addField('`Online Members`',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)
      .addField('`Text Channels`',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)
      .addField('`Voice Channels`',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`Server Owner`',`**${msg.guild.owner}**`,true)
      .addField('`Server Id`',`**${msg.guild.id}**`,true)
      .addField('`Server was created in`',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});
 client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO WarLegends Community ©`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ ! ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | Baron')
    })
}
});
 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+count')
	 
      message.reply(`**${message.guild.memberCount}**`);
    });
    client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
 client.on("message", async message => {
            if(!message.channel.guild) return;
             if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **i sent all the invite codes check the DM**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)  .catch(console.error);

    }
};
});
client.on('message', message => {
    if (message.content.startsWith("+trans")) {
      
    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`+trans [text] to [language]\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'WarLegends Community ©\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "WarLegends Community ©"
                }
            }}
            )
    })  .catch(console.error);

    }
});
client.on('message', message => { 
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
            
        });
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('pls type any word');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })

}
});
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});
client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

                  message.channel.send({embed:zPeRms});

    }
});
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "z5rf") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')

   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on('message', message => {
    if (message.content === "+rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
        
    }
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content.startsWith(prefix + "roles")){
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});
client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**this command to servers only**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**you do not have perm ** `ADMINISTRATOR`' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
  
 

if (command == "embed") {
if(!message.channel.guild) return message.channel.send('**this command to servers only**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**you do not have perm** `MANAGE_MESSAGES`' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("#FFD700")
    message.channel.sendEmbed(say);
    message.delete();
    
  }


});
client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
    client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing...";
}
if (z.bot) {
var w = 'BOT';
}else {
var w = 'MEMBER';
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`**INFO** ${z.username}`)
.addField('`Your Name`',`**<@` + `${z.id}` + `>**`, true)
.addField('`ID`', "**"+ `${z.id}` +"**",true)
.addField('`Status`','**'+y+'**' , true)
.addField('`Acount Type`',"**"+ w + "**",true)    
.addField('`Your Tag`',"**#" +  `${z.discriminator}**`,true)
.addField('`Your account created in`' ,year + "-"+ month +"-"+ day)    
.addField("`Entered the server in`", message.member.joinedAt.toLocaleString())    
.addField("`Last Message`", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**put the mention correct ? **')

}
});
client.on('message', message => {
    if (message.content.startsWith("+bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`Number of banned persons **${bans.size}** `))
}
});
client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "emoji")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});


   client.on('message', message => {
     if (message.content === "+support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/qEPMJgb**")
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");


client.users.get("434845976050794516").send(
    "\n" + "**" + "? server :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ? from : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ? the message : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: the message was sent to the bot creator')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Martin")
                                                

message.channel.send(embed);


}
    
});
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``type like this command: " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`you moved<@${usermentioned}>to your voice channel? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``i can not move "+ message.mentions.members.first() +" `must this member in a voice channel`")
}
} else {
 message.channel.send("**``you must be in vocie channel first`**")
}
} else {
message.react("?")
 }}});
 client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('!bc')) {
if(!message.channel.guild) return message.channel.send('**this command to servers only**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**you do not have perm** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "WarLegends Community ©";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**you must type any word to broadcast**');message.channel.send(`**are u sure ? \nbroad cast included** \` ${args}\``).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`? | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bk')) {
if(!message.channel.guild) return message.channel.send('**this command to servers only**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**you do not have perm** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`the message included ${args}`)
.setDescription(`with embed ??\nwithout embed? \n1m to choose`)
if (!args) return message.reply('**type any word to send the broadcast**');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: the message sent`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Message : ${args}`)
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: the message sent`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});
client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("type like this  | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("there is no any role like this name")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "server :" + "\n" +
              `${message.guild.name}` + "\n" +
              "from :" + "\n" +
              `${message.author.tag}` + "\n" +
              "message :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`the message was sent to ${message.guild.members.filter(m => m.roles.get(role.id)).size} member`)
        }
    });
    client.on('message', message => { 
        if (message.author.boss) return;
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
        if (command == "role") {
        if (!message.channel.guild) return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:you do not have perms **").then(msg => msg.delete(5000));;
        if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("i do not have perms ").then(msg => msg.delete(5000));;
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('**mention the member!!**').then(msg => {msg.delete(5000)});
        let MRole = message.content.split(" ").slice(2).join(" ");
        if(!MRole)return message.reply("add the role name").then(msg => {msg.delete(5000)});
        message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
        message.reply('** Done ? **').then(msg => {msg.delete(10000)});
        }
        });
        client.on('message', message => { 
        if (message.author.boss) return;
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
        if (command == "roleremove") {
        if (!message.channel.guild) return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:you do not have perms **").then(msg => msg.delete(5000));;
        if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("i do not have perms ").then(msg => msg.delete(5000));;
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('**mention the member!**').then(msg => {msg.delete(5000)});
        let MRole = message.content.split(" ").slice(2).join(" ");
        if(!MRole)return message.reply("add the role name").then(msg => {msg.delete(5000)});
        message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
        message.reply('** Done ? **').then(msg => {msg.delete(10000)});
        }
        });
        client.on('message', message => {
            let args = message.content.split(' ').slice(1);
            if(message.content.startsWith(prefix + 'give')) {
                let member = message.mentions.users.first();
                let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
                console.log(role);
                if(member) {
                      if(role.startsWith('-')) {
                        let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                        console.log(roleRe);
                        let role1 = message.guild.roles.find('name', roleRe);
                        console.log(`hi`);
                        if(!role1) return message.reply(`i can not find the role`);
                        message.guild.member(member).removeRole(role1.id);
                    } else if(!role.startsWith('-')) {
                        let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                        let role1 = message.guild.roles.find('name', roleRe);
                        if(!role1) return message.reply(`i can not find the role`);
                        message.guild.member(member).addRole(role1);
                    } else {
                        message.reply(`you must type the role name`);
                    } 
                }
         else if(args[0] == 'all') {
            if(role) {
            let role1 = message.guild.roles.find('name', role);
            if(!role1) return message.reply(`i can not find the role`);
            message.channel.send(`wait pls`).then(msg => {
                message.guild.members.forEach(m => {
                    message.guild.member(m).addRole(role1);
                });
                msg.edit(`done ${message.guild.members.size}`);
            });
        }
    } else if(args[0] == 'humans') {
        if(role) {
            let role1 = message.guild.roles.find('name', role);
            if(!role1) return message.reply(`i can not find the role`);
            message.channel.send(`wait pls`).then(msg => {
                message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                    message.guild.member(m).addRole(role1);
                });
                msg.edit(`done${message.guild.members.size}`);
            });
        }
    } else if(args[0] == 'bots') {
        if(role) {
            let role1 = message.guild.roles.find('name', role);
            if(!role1) return message.reply(`i can not find the role`);
            message.channel.send(`wait pls`).then(msg => {
                message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                });
    msg.edit(`done${message.guild.members.size}`);
    });
    }
    }
    }
    });
    client.on('message', message => {
        if(message.content === prefix + "hchannel") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
   }
  });
  client.on('message', message => {
        if(message.content === prefix + "schannel") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('Done  ')
   }
  });
  client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "clr") {
          const emoji = client.emojis.find("name", "wastebasket")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
      msg.channel.send("***```how many messages do u want me to delete ??```***").then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\ni deleted : " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });
  client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'clear')) {
 if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let request = `Requested By ${message.author.username}`;
 message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
 msg.react(':thumbsup:')
 .then(() => msg.react(':thumbsup:'))
 .then(() =>msg.react(':thumbsdown:'))
 
 let reaction1Filter = (reaction, user) => reaction.emoji.name === ':thumbsup:' && user.id === message.author.id;
 let reaction2Filter = (reaction, user) => reaction.emoji.name === ':thumbsdown:' && user.id === message.author.id;
 
 let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
 let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
 message.channel.send(`Chat will delete`).then(m => m.delete(5000));
 var msg;
         msg = parseInt();
 
       message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
       message.channel.sendMessage("", {embed: {
         title: "`` Chat Deleted ``",
         color: 0x06DF00,
         footer: {
 
         }
       }}).then(msg => {msg.delete(3000)});
 
 })
 reaction2.on("collect", r => {
 message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
 msg.delete();
 })
 })
 }
 });
 client.on('message', async message =>{
    const ms = require("ms");
    if (message.author.omar) return;
    if (!message.content.startsWith(prefix)) return;
    if(!message.channel.guild) return message.channel.send('**this command to servers only**').then(m => m.delete(5000));
    if(!message.member.hasPermission('MANAGE_ROLES')) return
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    var args = message.content.split(" ").slice(1);
        if(command == "mute") {
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("**mention first**:x: ") .then(m => m.delete(5000));
        if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**you don not have perm* `MANAGE_MASSAGEES`');
        let muterole = message.guild.roles.find(`name`, "muted");
        //start of create role
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "muted",
              color: "#000000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
        //end of create role
        let mutetime = args[1];
        if(!mutetime) return message.reply("**add the time of mute**:x:");
      
        await(tomute.addRole(muterole.id));
        message.reply(`<@${tomute.id}> muted for: ${ms(ms(mutetime))}`);
        setTimeout(function(){
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> **the mute is ended**:white_check_mark: `);
        }, ms(mutetime));
      
      
    
      }
    if(command === `unmute`) {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**you do not have perms**:x: ").then(m => m.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
    
      let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!toMute) return message.channel.sendMessage("**mention first**:x: ");
    
      let role = message.guild.roles.find (r => r.name === "muted");
      
      if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**this member is unmuted**:x:")
    
      await toMute.removeRole(role)
      message.channel.sendMessage("**done**:white_check_mark:");
    
      return;
    
      }
    
    });
    client.on('message', message => {
        if (message.author.x5bz) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
        let args = message.content.split(" ").slice(1);
      
        if (command == "kick") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');
               
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        if (message.mentions.users.size < 1) return message.reply("**mention the user**");
        if(!reason) return message.reply ("**type the resone**");
        if (!message.guild.member(user)
        .kickable) return message.reply("**i can not kick this member**");
      
        message.guild.member(user).kick();
      
        const kickembed = new Discord.RichEmbed()
        .setAuthor(`KICKED!`, user.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
        .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
        .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
        message.channel.send({
          embed : kickembed
        })
      }
      });
      client.on('message', message => {
        if (message.author.codes) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
        let args = message.content.split(" ").slice(1);
      
        if (command == "ban") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');
               
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**you do not have perms**");
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        
        if (message.mentions.users.size < 1) return message.reply("*mention the member**");
        if (!message.guild.member(user)
        .bannable) return message.reply("**i need a administrator role**");
      
      
        message.guild.member(user).ban(7, user);
      
      message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)
      
      }
      });
      client.on('message', message => {
        if(message.content === prefix + "mutechannel") {
                            if(!message.channel.guild) return message.reply('** This command only for servers**');
    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__u do not have perms__**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
    
               }).then(() => {
                   message.reply("**__i closed the chat__ :white_check_mark: **")
               });
                 }
    //FIRE BOT
     if(message.content === prefix + "unmutechannel") {
                         if(!message.channel.guild) return message.reply('** This command only for servers**');
    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__u do not have perms_**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: true
    
               }).then(() => {
                   message.reply("**__i opend the chat_:white_check_mark:**")
               });
     }
        
    });
    client.on('message', omar => {
        if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
        if (!omar.channel.guild) return;
        if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
        if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
        omar.guild.channels.forEach(m => {
        m.delete();
        });// omar jedol / Codes
        }// omar jedol / Codes
        if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
        if (!omar.channel.guild) return;
        if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES")) return omar.reply("**You Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
        if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES")) return omar.reply("**I Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
        omar.guild.roles.forEach(m => {
        m.delete();
        });// omar jedol / Codes
        omar.reply("`done`")
        }// omar jedol / Codes
        });
        client.on("message", (message) => {
        let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
        if (command == "ct") {
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                let args = message.content.split(" ").slice(1);
            message.guild.createChannel(args.join(' '), 'text');
        message.channel.sendMessage('done')
        
        }
        });
        client.on("message", (message) => {
            let command = message.content.split(" ")[0];
         command = command.slice(prefix.length);
       if (command == "cv") {
                   if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
               let args = message.content.split(" ").slice(1);
           message.guild.createChannel(args.join(' '), 'voice');
       message.channel.sendMessage('done')
       }
       });
       client.on("message", (message) => {
        let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    if (command == "delete") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(' ').slice(1);
            let channel = message.client.channels.find('name', args.join(' '));
            if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
            channel.delete()
        }
    });  
    client.on('message', bz => {
        let args = bz.content.split(" ").slice(1).join(" ")
if(bz.content.startsWith(prefix + 'make')) {
if(!args) return bz.channel.send('`Please Select Number!`');
if (!bz.member.hasPermission('MANAGE_ROLES')) return bz.channel.sendMessage('`** `[MANAGE_ROLES]` !**'); 
bz.channel.send(`**Created __${args}__ Colors**`);
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < `${parseInt(args)+1}`; x++){
bz.guild.createRole({name:x,
color: 'RANDOM'})
}
}
});
client.on('message', message => {
let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == '+color'){
const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number ** :x: `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


var a = message.guild.roles.find("name",`${args}`)
if(!a)return;
const embed = new Discord.RichEmbed()
    
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color Changed To Successfully** :white_check_mark: `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
if (!args)return;
setInterval(function(){})
  let count = 0;
  let ecount = 0;
for(let x = 1; x < 201; x++){

message.member.removeRole(message.guild.roles.find("name",`${x}`))

}
message.member.addRole(message.guild.roles.find("name",`${args}`));


}
});
client.on('message' , ReBeL => {
    if(ReBeL.author.bot) return;
    if(ReBeL.channel.type == 'dm') return;
    if(ReBeL.content.startsWith(prefix + "pl7a3rs")) {
    ReBeL.guild.roles.filter(rebel => isNaN(rebel)).forEach(codes => codes.delete())
    }
    });
    client.on('message', message => {
         if (message.author.bot) return;
    if (message.content.startsWith(prefix + "uptime")) {
        let uptime = client.uptime;
    
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let notCompleted = true;
    
        while (notCompleted) {
    
            if (uptime >= 8.64e+7) {
    
                days++;
                uptime -= 8.64e+7;
    
            } else if (uptime >= 3.6e+6) {
    
                hours++;
                uptime -= 3.6e+6;
    
            } else if (uptime >= 60000) {
    
                minutes++;
                uptime -= 60000;
    
            } else if (uptime >= 1000) {
                seconds++;
                uptime -= 1000;
    
            }
    
            if (uptime < 1000)  notCompleted = false;
    
        }
    
        message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");
    
    }
    });
    client.on('message', message => {
        if(message.content == '+vip-servers') {
                 if(!message.author.id === '434845976050794516') return;
        var gimg;
        var gname;
        var gmemb;
        var gbots;
        var groles;
        var servers = client.guilds;
        servers.forEach((g)=>{
        gname = g.name;
        gimg = g.iconURL;
        gmemb = g.members.size;
        gbots = g.members.filter(m=>m.bot).size;
        groles = g.roles.map(r=> {return r.name});
        let serv = new Discord.RichEmbed()
        .setAuthor(gname,gimg)
        .setThumbnail(gimg)
        .addField('Server Member Count',gmemb = g.members.size)
        .setColor('RANDOM')
        message.channel.send(`
        Server Name : **${gname}**
        Server MemberCount : **${gmemb} **
                
                `);
              message.channel.sendEmbed(serv);
        }) 
        }
        });
        client.on('guildCreate', guild => {
            const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle('Click Here To Add Bot .!')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
     .setDescription(`**
     New Server Add WarLegends Community © ?
   اسم السيرفر: ${guild.name}
   صاحب السيرفر: ${guild.owner}**`);
   client.channels.get("474127377245667328").sendEmbed(embed)
   });
   client.on('guildDelete', guild => {
            const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        .setTitle('Click Here To Add Bot .!')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
     .setDescription(`**
     Server Kicked WarLegends Community © :cry:
   اسم السيرفر: ${guild.name}
   صاحب السيرفر: ${guild.owner}**`);
   client.channels.get("474127377245667328").sendEmbed(embed)
   });

   client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('+ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('add number to roll');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', async message => {
    if(message.content.startsWith(prefix + "temp")) {
      await message.channel.send("type the room name").then(e => {
      let filter = m => m.author.id === message.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
  
     
      message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  
  
  
  e.edit("type the room time from 2 to 180")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return message.reply("numbers only and the time with mins");
  if(co.first().content > 180 || co.first().content < 2) return message.channel.send("not less than 2 and not more than 180")
    time = co.first().content
  co.first().delete()
    e.edit("choose the room type text, voice")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("type how many user can join")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("wait pls")
    message.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        message.channel.send("the room has ended")
      }, Math.floor(time*60000))
      
    })
    e.edit("done")
  
  })
  })
  })
  })
  })
  
    }
  })
  
  
  
  
  
  client.on('messageUpdate', (oldRebel, newRebel) => {
      console.log("عصو مآ يحآول التعديل.");
     if (newRebel.content.toUpperCase().match(/DISCORD.GG/i))
      {
          console.log(newRebel.author.name + " حاول النشر عبر تعديل الرسآلة - " + newRebel);
             newRebel.delete().catch(O_o=>{}); 
             newRebel.author.send("ممنوع روآبط الدسكورد. \n إذآ كنت تريد النشر توآصل من الإدآرة.");
      }
  });
  const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

let sWlc = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))   
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
   fs.writeFile('./setWlc.json', JSON.stringify(sWlc), (err) => {
if (err) console.error(err);
})
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", `${sChannel}`);
     yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['./w1.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(400, 200),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 400, 200);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
                                ctx.fillText(member.user.username, 200, 150);
                              
                              //NAMEً
                              ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
      ctx.fillText(`Welcome To Server`, 260, 125);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126); 

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
                          
      })
      })
      
      }
      });
   client.on('message',async message => {
  if(message.content.startsWith(prefix + "voiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  message.channel.send(':white_check_mark:| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});

const adminprefix = "$vip";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    message.reply("**`only for Bot Owner`**")
if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+users')){
if(!message.author.id === '434263373077544961') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id == 410835593451405312) return;
  
  
  if (message.content.startsWith(prefix + 'playing')) {
  if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
  client.user.setGame(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
  } else
  
  if (message.content.startsWith(prefix + 'streem')) {
  if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
  client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
      message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
  } else
  
  if (message.content.startsWith(prefix + 'setname')) {
  if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
    return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
  } else
  
  if (message.content.startsWith(prefix + 'setavatar')) {
  if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
  client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
  } else
  
  
  if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setActivity(argresult, {type : 'watching'});
   message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
  }
  });
  client.on('message', async message => {
    let messageArray = message.content.split(' ');
    let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + "invinfo")) {
      if(!args) return message.reply('**حدد اسم دعوة**');
      message.guild.fetchInvites().then(i => {
        let inv = i.get(args[0]);
        if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
        var iNv = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField('# - invite by',inv.inviter,true)
        .addField('# - room',inv.channel,true)
        .addField('# - expired at',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
        .addField('# - create in',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
        .addField('# - to',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
        .addField('# - for',inv.uses || inv.maxUses,true)
        message.channel.send(iNv);
      });
    }
  });
  client.on('guildMemberAdd', member => {
      let memberavatar = member.user.avatarURL
      let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(memberavatar)
          .addField('Hello Dude' , `Welcome to the server **${member}**`)
          .addField('User Id :', "**[" + `${member.id}` + "]**" )
                  .addField(' Member Number',`${member.guild.memberCount}`)
                 
                    .addField("Name:",`<@` + `${member.id}` + `>`, true)
                        
                                       .addField(' Server', `${member.guild.name}`,true)
  .setFooter(member.user.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
  
                                         
          .setTimestamp()
      
      member.createDM().then(function (channel) {
  return channel.send(embed)
      }
      )});
      client.on('message',   eyad =>{
    
        var  args = eyad.content.split(" ").slice(2).join(" ")
        var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
        var  mas = eyad.author
                                  if(eyad.content == '+sar7') {
                                  if(eyad.channel.type === "dm"){
    if(!args) return  eyad.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
    if(!men) return  eyad.channel.send(":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** ");
                          var currentTime = new Date(),
                Year = currentTime.getFullYear(),
                Month = currentTime.getMonth() + 1,
                Day = currentTime.getDate();
         var eyadandr3d = new Discord.RichEmbed()
         .setAuthor(eyad.author.username , eyad.author.avatarURL)
         .setThumbnail(men.avatarURL)
         .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
         .setTimestamp() 
         .setFooter(`- By , message.author.name .`)
         eyad.channel.send(eyadandr3d).then(message => {
     message.react('?').then(r=>{
     message.react('?').then(r=>{            
        var kk = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;    
        var nn = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;
        var kkk = message.createReactionCollector(kk, { time: 60000 });
        var nnn = message.createReactionCollector(nn, { time: 60000 });
    kkk.on("collect", r => {
              const embed = new Discord.RichEmbed()
                   .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
                   .setColor("RANDOM")
                   .addField('**• السلام عليكم ** ', `<@${men.id}>` , true)
                        .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                        .addField('**• تاريخ المصارحة**' , Day + "-" + Month + "-" + Year , true)
              client.users.get(men.id).sendEmbed(embed)
              eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
    message.delete()
              eyad.delete();
    })
    nnn.on("collect", r => {
    message.delete()
    eyad.reply("`تم الغاء الصراحة`")
    eyad.delete();
    })
    })
    }) 
    })
    }}
    });
    var EpicEdiTeD = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("name :", message.author.tag)
    .addField("level :", EpicEdiTeD[message.author.id].Level)
    .addField("xp :",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.25;
EpicEdiTeD[message.author.id].Money+= 0.25;
 
});
client.on("message", async message => {
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'fastrandom')) {
if(!message.channel.guild) return message.channel.send('**this command to servers only**').then(m => m.delete(5000));
if (message.author.id !== message.guild.owner.id) {     
message.channel.send('**هادا الامر لصاحب السيرفر فقط**' );
return;
}
const array = [];
message.guild.members.forEach((member) => {
array.push(member.user.tag);
});
const rand = array[Math.floor(Math.random() * array.length)];
message.channel.send(rand).then((m) => {
m.split('#');
m.edit(array);
});

};
});
client.on('message' , async (message) => {
if(message.content.startsWith("+topinvite")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
var invites = await message.guild.fetchInvites();
invites = invites.array();
arraySort(invites, 'uses', { reverse: true });
let possibleInvites = ['User Invited |  Uses '];
invites.forEach(i => {
 if (i.uses === 0) { 
     return;
 }
possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
if (i.uses === 30) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
   message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
})
const embed = new Discord.RichEmbed()
.setColor('#36393e')
.addField("Top Invites." ,`${(possibleInvites)}`)

message.channel.send(embed)
}
});
const voice = JSON.parse(fs.readFileSync("./voicerank.json", "utf8"));
 var returned;
client.on('voiceStateUpdate', (user, member) => {
  if(member.selfDeaf || member.selfMute || member.serverDeaf || member.serverMute) {
    returned = false;
  }
  if(!member.selfDeaf || !member.selfMute ||!member.serverDeaf || !member.serverMute) {
    returned = true;
  }
  setInterval(() => {
    if(returned === true) {
      if(member.bot) return;
      if(!member.voiceChannel) returned = false;
      if(!voice[member.id]) voice[member.id] = {
        xp: 1,
        level: 1
      };
      voice[member.id] = {
        xp: voice[member.id].xp + Math.floor(Math.random() * 4) + 1,
        level: voice[member.id].level
      };
      var curXp = voice[member.id].xp;
      var curLvl = voice[member.id].level;
      if(curXp >= 300) {
        voice[member.id] = {
          xp: 1,
          level: curLvl + 1
        };
      }
      fs.writeFile('./voicerank.json', JSON.stringify(voice, null, 4), (e) => {
        if(e) console.log(e);
      });
    } else if(returned === false) {
      return null;
    }
  },5000);
});
client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + 'voicerank')) {
message.channel.send(`Your XP : ${voice[message.member.id].xp}
Your Level : ${voice[message.member.id].level}`);
        if(e) console.log(e);
      };
}});
 client.on('message', message => {
if(message.content.startsWith(prefix + "slots")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (add any letter from the name do you want)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **search for member**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? search for:**\n " ${args1} "\n\n**? member count:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});
client.on('message',async message => {
    var room;
    var title;
    var duration;
    var gMembers;
    var filter = m => m.author.id === message.author.id;
    if(message.content.startsWith(prefix + "giveaway")) {
       //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
      if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
      message.channel.send(`:eight_pointed_black_star:| **type the room name**`).then(msgg => {
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ['time']
        }).then(collected => {
          let room = message.guild.channels.find('name', collected.first().content);
          if(!room) return message.channel.send(':heavy_multiplication_x:| **i cant find the room*');
          room = collected.first().content;
          collected.first().delete();
          msgg.edit(':eight_pointed_black_star:| **type the giveaway time like : 60**').then(msg => {
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 20000,
              errors: ['time']
            }).then(collected => {
              if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **the time is uncorrect``**');
              duration = collected.first().content * 60000;
              collected.first().delete();
              msgg.edit(':eight_pointed_black_star:| **what is the giveaway**').then(msg => {
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                }).then(collected => {
                  title = collected.first().content;
                  collected.first().delete();
                  try {
                    let giveEmbed = new Discord.RichEmbed()
                    .setAuthor(message.guild.name, message.guild.iconURL)
                    .setTitle(title)
                    .setDescription(`time : ${duration / 60000} m`)
                    .setFooter(message.author.username, message.author.avatarURL);
                    message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                       let re = m.react('??');
                       setTimeout(() => {
                         let users = m.reactions.get("??").users;
                         let list = users.array().filter(u => u.id !== m.author.id);
                         let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                           if(users.size === 1) gFilter = '**لم يتم التحديد**';
                         let endEmbed = new Discord.RichEmbed()
                         .setAuthor(message.author.username, message.author.avatarURL)
                         .setTitle(title)
                         .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                         .setFooter(message.guild.name, message.guild.iconURL);
                         m.edit(endEmbed);
                       },duration);
                     });
                    msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                  } catch(e) {
                    msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                    console.log(e);
                  }
                });
              });
            });
          });
        });
      });
    }
  });
  
var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});
 client.on('message', message => {
    if(message.content.startsWith (prefix  + 'user')) {
     moment.locale('ar-ly');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(':you join discord in', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField(':you join our server in', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('you invite', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});
client.on('message', async message => {
    if(message.content.includes('discord.gg')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
    .setColor("c91616")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `');


}
})
client.on('message', message => {
    if(message.content.startsWith(prefix + 'alljoin')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**no perms**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**done.**`)


     }
       });

       client.on('message', message => {
        if(message.content.startsWith(prefix + 'alljoin')) {
         if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
           if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
        if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
         var author = message.member.voiceChannelID;
         var m = message.guild.members.filter(m=>m.voiceChannel)
         message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
         m.setVoiceChannel(author)
         })
         message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)
    
    
         }
           });
           client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`ارسال الرساله .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});
client.on('message', message => {
if(message.content.includes("<@435392018693488641>")) {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
var json = JSON.parse(fs.readFileSync("json.json", "utf8"));

client.on("message", (message) => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.content.startsWith(prefix)) return;
    switch(command) {
        case "mut" : 
        
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : false,
                CONNECT : false
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : true};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Muted in the server!??**`);
        break;
        case "unmut" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(10000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : null,
                CONNECT : null
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : false};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Unmuted!??**`);
    }
})

client.login(process.env.BOT_TOKEN)
