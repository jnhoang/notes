module.exports = {
  getMember: (message, toFind='') => {
    toFind = toFind.toLowerCase();
    let target = message.guild.members.cache.get(toFind);

    if (!target && message.mentions.members) {
      target = message.mentions.members.first();
    }

    if (!target && toFind) {
      target = message.guild.members.cache.find( (member) => {
        return member.displayName.toLowerCase().includes(toFind) ||
          member.user.tag.toLowerCase().includes(toFind)
      });
    }

    if (!target) {
      target = message.member;
    }

    return target;
  },
  formatDate: (date) => {
    return Intl.DateTimeFormat('en-US').format(date);
  },
  promptUser: async function (message, responder, time, validReactions) {
    // We put in the time as seconds, with this it's being transfered to MS
    time_as_ms = time * 1000;

    // For every emoji in the function parameters, react in the good order.
    for (const reaction of validReactions) {
      await message.react(reaction);
    }

    // Only allow reactions from the responder,
    // and the emoji must be in the array we provided.
    const filter = (reaction, user) => {
      return validReactions.includes(reaction.emoji.name) && user.id === responder.id
    };

    // And ofcourse, await the reactions
    return message
      .awaitReactions(filter, { max: 1, time: time_as_ms})
      .then(collected => collected.first() && collected.first().emoji.name);
  },
  addReaction: async (message, emoji) => await message.react(emoji),
}
