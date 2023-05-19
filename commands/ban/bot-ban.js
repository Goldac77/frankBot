const {SlashCommandBuilder} = require('discord.js');
require('dotenv').config();
const adminId = process.env.ADMINID;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bot-ban")
        .setDescription("Ban users from using the bot")
        .addUserOption(option => 
            option
            .setName("user")
            .setDescription("user to bot-ban")
            .setRequired(true)
        ),

    async execute(interaction) {
        if(interaction.user.id === adminId){
            const user = interaction.options.getUser("user");
            await interaction.reply({content: "This feature is not yet fully implemented", ephemeral: true});

            // TODO: STORE BANNED USER'S ID IN A DATABASE
        } else {
            await interaction.reply({content: `Oopsie, you aren't an Admin...`, ephemeral: true});
        }
    },
}