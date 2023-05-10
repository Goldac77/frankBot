const {SlashCommandBuilder} = require('discord.js');
require('dotenv').config();
const adminId = process.env.ADMINID;

// ID of users banned from using the bot
const botBannedUsersId = [];

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
            botBannedUsersId.push(`${user.id}`);
            await interaction.reply(`${user} you are banned from using the bot`);
        } else {
            await interaction.reply({content: `Oopsie, you aren't an Admin...`, ephemeral: true});
        }
    },

    botBannedUsersId: botBannedUsersId
}