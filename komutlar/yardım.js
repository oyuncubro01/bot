const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Bot Hakkında Kısa Bilgi**\n\n\n' + '``.davet`` Yazarak Bot İle İlgili Bağlantıları Görebilirsiniz. \nSunucunuzda Resimli Giriş Çıkışın Çalışması İçin ``simba`` Adında Bir Metin Kanalı Olmalıdır.',
              '**Yenilikler**\n\n\n' + '``-``  .canlıdestek = Botun Sahibinden Bot İçin ``Destek Talebinde`` Bulunursun. \n``-``  .sunucunutanıt =  Sunucunuzu [Destek Sunucumda](https://discord.gg/k46tT4b) Tanıtırım. \n``-``  .kanalıkilitle = Komutu Kullandığınız Kanalda Belirttiğiniz Süre Boyunca Yazma Erişimine Kapatır.',
              '**Kullanıcı Ve Eğlence**\n\n\n' + '``-``  .profil = Level Ve GP (Gelişim Puanı)’nızı Gösterir. \n``-``  .rastgeleresim = Rastgele ``Cool ve Rahatlatıcı`` Resim Atar. \n``-``  .vaporwave = Yazdığınız Metni Estetik Bir Şekilde Yazar. \n``-``  .balıktut = Rastgele Bir Balık Tutarsınız. \n``-``  .döviz = Euro Ve Doların ``Alış-Satış`` Fiyatını Gösterir. \n``-``  .atatürk = Atatürk’ün Bulunduğu Resimleri GİF Olarak Atar. \n``-``  .alkış  = Jokerin Alkış GİF’ini Atar. \n``-``  .atom = Atom Bombası GİF’i Atar. \n``-``  .rastgele = Rastgele Resim Atar. \n``-``  .kahkaha = Kahkaha Atarsınız. \n``-``  .ortaparmak = Orta Parmak GİF’i Atar. \n``-``  .korkut = Korkunç GİF Atar. \n``-``  .stresçarkı = Stres Çarkı Çevirirsiniz. \n``-``  .ben = Kullanıcı Resminizi Atar.',
              '**Müzik**\n\n\n' + '``-``  +oynat = Youtubeda İstediğiniz Bir Şarkıyı Aratır Ve Oynatır. \n``-``  .duraklat = Oynatılan Şarkıyı Devam Etmek Üzere Durdurur. \n``-``  .devamet = Duraklatılan Şarkıyı Devam Ettir. \n``-``  .geç = Oynatılan Şarkıyı Geçer. \n``-``  .kuyruk = Kuyruk’ta Olan Müzikleri Gösterir. \n``-``  .çalan = Oynatılan Müziği Gösterir. \n``-``  .ses = Ses Seviyesini Ayarlarsınız.',
              '**Çerçeve/Profil**\n\n\n ' + '``-``  +hacked = Profilinize ``hacked`` Efekti Verir. \n``-``  .triggered = Profilinize ``triggered`` Efekti Verir. \n``-``  .wasted = Profilinize ``wasted`` Efekti Verir. \n``-``  .winner = Profilinize ``winner`` Efekti Verir. \n``-``  .sniper = Profilinize ``sniper`` Efekti Verir. \n``-``  .hpbalance = Profilinize ``hypesquad balance`` Efekti Verir. \n``-``  .hpbravery = Profilinize ``hypesquad bravery`` Efekti Verir. \n``-``  .hpbrilliance = Profilinize ``hypesquad brilliance`` Efekti Verilir. \n``-``  .dcbughunter = Profilinize ``bug hunter`` Efekti Verir. \n``-``  .hpevent = Profilinize ``hypesquad`` Efekti Verir. \n``-``  .dcpartner = Profilinize ``partner`` Efekti Verir. \n``-``  .dcstaff = Profilinize ``staff`` Efekti Verir. \n``-``  .atatürk = Profilinize ``atatürk`` Efekti Verir.',
              '**Bot Bilgi**\n\n\n' + '``-``  +davet = Bot İle İlgili Bağlantıları Görürsünüz. \n``-``  .ping = Botun Pingini Gösterir. \n``-``  .istatistik = Botun İstatistiklerini Gösterir.',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};