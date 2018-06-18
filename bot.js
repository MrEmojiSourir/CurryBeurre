const Discord = require('discord.js');
const prefix = "cb!";
const client = new Discord.Client();
const bot = new Discord.Client();
const { get } = require("snekfetch"); 
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const randomPuppy = require('random-puppy');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const YTDL = require("ytdl-core");
const low = require('lowdb');
const db = low(adapter);


client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('idle')
    client.user.setPresence({
      game: {
        name: 'cb!help | By Cecemel_PvP',
        type: 1
      }
  });
});

client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    
    if(message.content.startsWith(prefix + "play")) {
        var argsplay = message.content.substring(prefix.length).split(" ");
            if (!argsplay[1]) {
                message.channel.sendMessage("Merci d'envoyer le lien.");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("Tu dois être dans un channel vocal.");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(argsplay[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
                message.channel.send("Lancement de votre musique. \n En cas de problème, vérifier si c'est un lien ( et non un teste ), si celle-ci n'a pas de copyright ou est correcte.")
            });
            }
        if(message.content.startsWith(prefix + "skip")) {
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            message.channel.send("Musique skipé !\nEn cas de problème, vérifier si c'est un lien ( et non un teste ), si celle-ci n'a pas de copyright ou est correcte.")
            }
        if(message.content.startsWith(prefix + "stop")) {
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            message.channel.send("Musique arrêté.")
            }
    
    var answers = [
  "Comment faire pleurer un plombier ? En tuant toute sa famille.",
  "C'est l'histoire du ptit dej, vous la connaissez ? Pas de bol.",
  "Un monsieur visite un musée. Soudain il s'arrête et dit au guide :  \n- Ah, c'est moche ! \n- C'est du Picasso, répond le guide. \nPlus loin, il s'écrie de nouveau : \n- Ah, c'est vraiment moche ! \n- Ca Monsieur, c'est un miroir !",
  "C'est l'histoire du nain aux 26 enfants. \nElle est courte mais elle est bonne.",
  "C'est l'histoire d'un pingouin qui respire par les fesses. \nUn jour il s’assoit et il meurt.",
  "Un fils demande à son père : \n- Papa,c'est quoi la beauté? \n- Tu vois ta mère ? \n- Oui \n- Et ben c'est pas ça!",
  "Un chien et un homme son sur un bateau. Le chien pète, l'homme tombe à l'eau et se noie. Quelle est la race du chien ? \nUn pékinois. (un pet qui noie)"
]
    
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
	
	if(message.content.startsWith(prefix + "restart")) {
	if(message.author.id !== "252873409401323520") return;
                message.react('✅')
                    .then(message => client.destroy())
                    .then(() => client.login(process.env.BOT_TOKEN));
}
	

if(message.content.startsWith(prefix + "blague")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Une blague ? C'est parti")
	.setColor(0x00AE86)
	.addField(randomAnswer, "Curry Beurre")
	.setTimestamp()
message.channel.send({embed});
}
	
	if(message.content.startsWith(prefix + "heure")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Il est :")
	.setColor(0x00AE86)
	.setTimestamp()
message.channel.send({embed});
}
	
var args = message.content.slice(prefix.length).trim().split(/ +/g);
 
if(message.content.startsWith(prefix + "google")) {
    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}
    
if(message.content.startsWith(prefix + "youtube")) {
    let youtube = args.slice(1).join('+');
    let link = `https://www.youtube.com/results?search_query=` + youtube;
	message.channel.send(link);
}
	
	if (message.content.startsWith(prefix + "help")) {
		message.channel.send("Je vous ai envoyé un message en message privé. Marquez --hhelp pour envoyer ce message dans ce salon./I sent you a message in private message. Mark --hhelp to send this message to this channel.")
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("cb!help", "Cette commande/this command")
		.addBlankField(true)
		.addField("cb!blague", "Raconter une blague/Tell you a joke")
		.addBlankField(true)
		.addField("cb!heure", "Donner l'heure actuelle/Gives you the time")
		.addBlankField(true)
		.addField("cb!google", "Cherche votre argument sur Google/Search your argument on Google")
		.addBlankField(true)
		.addField("cb!youtube", "Chercher votre argument sur YouTube/Search your argument on Youtube")
		.addBlankField(true)
		.addField("cb!chat", "Chatter avec d'autres serveurs/Chat with other servers that have the bot")
		.addBlankField(true)
		.addField("cb!meow", "Images de chats au hasard/Random pictures of cats")
		
		message.author.send({embed})
	}
	
	if (message.content.startsWith(prefix + "hhelp")) {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("cb!help", "Cette commande/this command")
		.addBlankField(true)
		.addField("cb!blague", "Raconter une blague/Tell you a joke")
		.addBlankField(true)
		.addField("cb!heure", "Donner l'heure actuelle/Gives you the time")
		.addBlankField(true)
		.addField("cb!google", "Cherche votre argument sur Google/Search your argument on Google")
		.addBlankField(true)
		.addField("cb!youtube", "Chercher votre argument sur YouTube/Search your argument on Youtube")
		.addBlankField(true)
		.addField("cb!chat", "Chatter avec d'autres serveurs/Chat with other servers that have the bot")
		.addBlankField(true)
		.addField("cb!meow", "Images de chats au hasard/Random pictures of cats")
		
		message.channel.send({embed})
	}
	
	if(message.content.startsWith(prefix + "chat")) {
            let xoargs = message.content.split(" ").slice(1);
            let xo03 = xoargs.join(" ")
            var xo02 = message.guild.channels.find('name', 'u-chat');
            if(!xo02) return message.reply("Le channel **u-chat** est introuvable")
            if(message.channel.name !== 'u-chat') return message.reply("Commande à effectuer dans **u-chat**")
            if(!xo03) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs où je suis.")
            var embed = new Discord.RichEmbed()
            .setColor("0x88CC14")
            .setTitle("Message Interne")
            .addField("Pseudo de l'utilisateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
          client.channels.findAll('name', 'u-chat').map(channel => channel.send({embed}))
          message.delete();
}
       
		if(message.content.startsWith(prefix + 'meow')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setTitle(":smiley_cat: Un chat sauvage apparaît")
				.setImage(res.body.file)
				.setColor("0x88CC14")
				return message.channel.send({embed});
			});
		} catch(err) {
			return message.channel.send(error.stack);
		}
	}
	
	if(message.content.startsWith(prefix + "4k")) {
    if (!message.channel.nsfw) return message.reply("Tu peux utiliser cette commande que dans un salon NSFW");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("4k", client.user.avatarURL)
                .setFooter("© CurryBeurre | Tous droits réservés.")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}
	
if(message.content.startsWith(prefix + "8ball")) {
let responses = [
        'Oui',
        'Non',
        'Peut-être',
        'Surement',
        'Surement que non'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    // Form Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter(fetched);
    
    // Send Embed
    message.channel.send(embed);
    
}
	
if(message.content.startsWith(prefix + "trump")) {
    get(api).then(r => {
        let embed = new Discord.RichEmbed()
        .setTitle('Trump')
        .setDescription(r.body.message)
        .setColor('RANDOM')
        message.channel.send(embed)
    })
} 
	
if(message.content.startsWith(prefix + "botstats")) {
    let servers = client.guilds.size;
    let users = 0;
    let channels = client.channels.size;
    
    client.guilds.map(g => users += g.memberCount);
    
    const embed = new Discord.RichEmbed()
        .setTitle('Communauté')
        .addField('Serveurs', servers, true)
        .addField('Utilisateurs', users, true)
        .addField('Salons', channels, true);

    // Send Embed
    message.channel.send(embed);
    
}
	
if(message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== '252873409401323520') return;
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
  console.log(`\n${message.author.username}#${message.author.discriminator} Used .Eval Command On ${message.guild.name}`)
    let argresult = args.join(' ');
    if (message.author.id !==  '252873409401323520') {
           // Check if user have Permissions to use the command
          message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande !'); // Send Message to the channel if they dont have permissions
          return; // Returns the code so the rest doesn't run
        }
        if (!argresult) {
          return message.channel.send("Spécifie un code à executer !");
        }
  
        try {
  
          var evaled = eval(argresult);
  
          if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
         if (evaled.includes(process.env.BOT_TOKEN)) {
            console.log(`\n${message.author.username}#${message.author.discriminator} Try To Get The Bot Token On ${message.guild.name} (ServerID: ${message.guild.id}).\n`)
            return message.channel.send("", {
             embed: {
                color: 0xFF5733,
                title: ':exclamation::exclamation: Non :exclamation::exclamation:',
                description: `Nononononon, pas de token... !`
             }
            });
          }
  
          let embed = new Discord.RichEmbed()
          .addField(`${client.user.username} - JavaScript Eval:`, `** **`)
          .addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```")
          .addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```")
          .setColor(0xFF5733)
          .setFooter(message.createdAt, message.author.avatarURL)
          message.channel.send({embed})
  
        } catch (err){
  
          message.channel.send(new Discord.RichEmbed()
          .addField(`${client.user.username} - JavaScript Eval Error:`, "Il y a un poroblème, le code que tu as marqué ne marche pas!")
          .addField(":no_entry: ERROR", "```" + clean(err) + "```")
          .setColor(0xFF5733)
          .setFooter(message.createdAt, message.author.avatarURL))
          
              .catch( error => message.channel.send(`**ERROR:** ${error.message}`))
        }
}
	
});

client.login(process.env.BOT_TOKEN);
