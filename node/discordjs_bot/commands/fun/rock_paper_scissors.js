const { MessageEmbed } = require('discord.js');
const { promptUser } = require('../../functions.js');

const possibleChoices = ['🗻', '📰', '✂'];

module.exports = {
  name        :  'rock-paper-scissors',
  aliases     :  ['rps', 'rock-paper-scissor'],
  category    :  'fun',
  description :  'Rock Paper Scissors game. React to one of the emojis to play the game.',
  usage       :  'rps',
  run         :  async (client, message, args) => {
    const embed = new MessageEmbed()
      .setColor('#ffffff')
      // .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
      .setDescription('Add a reaction to one of these emojis to play the game!')
      .setTimestamp();

      const msg = await message.channel.send(embed);

      // Wait for a reaction to be added
      const userChoice =  await promptUser(msg, message.author, 30, possibleChoices);
      const botChoice  =  possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

      // evaluate game result and modify message with the result
      const result = await evaluateGame(botChoice, userChoice);

      embed
        .setDescription('')
        .addField(result, `${userChoice} vs ${botChoice}`);
      msg.edit(embed);
  }
}

function evaluateGame(botChoice, userChoice) {
  let result = '';
  if (  (botChoice === '🗻' && userChoice === '✂')  ||
        (botChoice === '📰' && userChoice === '🗻') ||
        (botChoice === '✂'  && userChoice === '📰')
  ) {
    result = 'You won!';
  } else if (botChoice === userChoice) {
    result = "It's a tie!";
  } else {
    result = 'You lost!';
  }

  return result;
}
