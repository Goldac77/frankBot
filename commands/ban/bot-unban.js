const {SlashCommandBuilder} = require('discord.js');
const {botBan} = require("./bot-ban");
require('dotenv').config();
const adminId = process.env.ADMINID;

// ****THIS VARIABLE IS NECESSARY IN EACH SLASH COMMAND FILE****
//Access all bot-banned users ID
const botBannedUsersId = botBan.botBannedUsersId;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Bot-unban")
        .setDescription("Unbans users from using the bot")
        .addUserOption(option =>
            option 
            .setName("user")
            .setDescription("user to bot-unban")
            .setRequired(true)
        ),
    
    async execute(interaction) {
        // Allow command access to only admins
        if(interaction.user.id == adminId) {
            const user = interaction.options.getUser("user");
            let userIdIndex = botBannedUsersId.indexOf(user.id);

            if(userIdIndex != -1) {
                await interaction.reply(`${user} is already allowed to use me :)`);
            } else {
                await interaction.reply(`${user}, you're now allowed to use me :)`);
                botBannedUsersId.splice(userIdIndex, 1);
            }
        } else {
            await interaction.reply({content: `Oopsie, you aren't an Admin...`, ephemeral: true});
        }
    },
}