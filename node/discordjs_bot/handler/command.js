const {readdirSync}  = require('fs');
const ascii = require('ascii-table')

const table = new ascii().setHeading('Command', 'Load status');

module.exports = (client) => {
  readdirSync('./commands/').forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter( file => file.endsWith('.js'));

    for (let file of commands) {
      let command = require(`../commands/${dir}/${file}`);
      if (command.name) {
        client.commands.set(command.name, command);
        table.addRow(file, '✅  Loaded');
      } else {
        table.addRow(file, '❌  -> missing something??');
      }

      if (command.aliases && Array.isArray(command.aliases)) {
        command.aliases.forEach(alias => client.aliases.set(alias, command.name))
      }
    }
  })

  console.log(table.toString());
}
