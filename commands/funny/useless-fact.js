const {SlashCommandBuilder} = require('discord.js');
const api = `https://uselessfacts.jsph.pl/api/v2/facts/today`;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("useless-fact")
        .setDescription("Tell the latest fact of today"),
    
    async execute(interaction) {
        fetch(api)
        .then(response => response.json())
        .then(data => {
            interaction.reply(`${data.text}`)
        })
        .catch(error => {
            interaction.reply(`There was an error fetching today's useless fact`);
            console.error("Error: ", error);
        })
    }
}