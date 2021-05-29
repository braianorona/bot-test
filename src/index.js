//import {config} from 'dotenv'
//config();
const {config} = require('dotenv')
config();

const {Client, MessageEmbed} = require('discord.js')
const client = new Client()

client.on('ready', () =>{
    console.log(`Bot is ready as ${client.user.tag}`);
});

client.on('message', message =>{
    // recibir mensaje
    console.log(message.content);
    if(message.content.includes('pinga')){
        message.reply('ponga');
        message.reply('a ella');
    }

    if(message.content === 'hello'){
        message.channel.send(`Hello ${message.author}!`);
    }

    if(message.content.includes('!test')){
        message.channel.send('Me alegro que estes testeando c:');
    }



    /*if(message.content === ('Nakz') || message.content === ('nakz')){
        const embednakz = new MessageEmbed()
        .setTitle('El nakz se la come xdxd')
        .setDescription('mira que facha el patas largas')
        .setImage('https://instagram.fuaq1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/145822783_688286508514613_6504572473162664198_n.jpg?tp=1&_nc_ht=instagram.fuaq1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=YGUVpsIjAAYAX8Fp2Kr&edm=AP_V10EBAAAA&ccb=7-4&oh=132e616186e8a9ff5c4b55f6589e05c6&oe=60B806DA&_nc_sid=4f375e')
        .setTimestamp()
        .setColor(0xFF0000)
        message.channel.send(embednakz);
        //message.channel.send('El nakz se la come xdxd');
    }*/

    /*if(message.content.includes('!nekolol')){
        const embednekolol = new MessageEmbed()
        .setTitle('Mira que facha el Nekolol')
        .setDescription('nashe')
        .setImage('https://instagram.fuaq1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/160247998_257227092553390_609241660785179863_n.jpg?tp=1&_nc_ht=instagram.fuaq1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QtX0VxVHdM0AX9YRvhU&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab386ffb698fdec410c25792a01c803&oe=60B7D65D&_nc_sid=4f375e')
        .setTimestamp()
        .setColor(0xFF0000)
        message.channel.send(embednekolol);
    }*/

    if(message.content.includes('puto')){
        message.channel.send('No, puto vos')
    }

    if(message.content === '!linkedin'){
        message.channel.send('https://www.linkedin.com/in/braianorona/');
    }

    if(message.content === '!mail'){
        message.channel.send('braianorona@gmail.com');
    }

    if(message.content === '!wow'){
        message.channel.send('https://www.youtube.com/watch?v=ltM5jHIJFw4');
    }

    if(message.content.includes('nya') || message.content.includes('Nya')){
        const nya = new MessageEmbed()
        .setColor(0xFFC105)
        .setImage('https://media1.tenor.com/images/cc43c387f59c31f6c16d9ef7325f65ed/tenor.gif?itemid=20551750');
        message.channel.send(nya);
    }

    if(message.content.includes('Fedox') || message.content.includes('fedox')){
        const embedfedox = new MessageEmbed()
        .setTitle('El fede se la come')
        .setDescription('xd')
        //.setImage('https://instagram.fuaq1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/13549562_1765536836994880_730129359_n.jpg?tp=1&_nc_ht=instagram.fuaq1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Y5_ecmZDyzwAX_jgl3a&edm=AP_V10EBAAAA&ccb=7-4&oh=f20e72f87c7ec071495fa2af82797ce8&oe=60B81228&_nc_sid=4f375e')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        message.channel.send(embedfedox);
        //message.channel.send('el fede se la come xd');
        
    }

    if(message.content.includes('Lauri') || message.content.includes('lauri')){
        message.channel.send('Beio');
    }

    if(message.content === '!embed'){
        const embed = new MessageEmbed()
        .setTitle('Chato primal')
        .setColor(0x888888)
        .setDescription('vivan los primos')
        .setAuthor(message.author.username)
        .setTimestamp()
        .setThumbnail('https://img1.freepng.es/20171220/hzq/number-8-png-5a3a87019ad472.4498720315137850896342.jpg')
        .setImage('https://img1.freepng.es/20171220/hzq/number-8-png-5a3a87019ad472.4498720315137850896342.jpg');
        message.channel.send(embed);
    }
});

client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if(!channel) return;
    channel.send(`Bienvenido Chatito ${member}`);
})

client.login(process.env.DISCORD_TOKEN)