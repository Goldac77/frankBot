const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("remind-me")
        .setDescription("Reminds you after set minutes")
        .addIntegerOption(option =>
            option
            .setName("reminder-minutes")
            .setDescription("be reminded after how many minutes")
            .setRequired(true)
        ),
    
    async execute(interaction) {
        const minutes = interaction.options.getInteger('reminder-minutes');
        if(minutes <= 0) {
            interaction.reply({content: `Beep boop!, you need to enter at least 1 minute`, ephemeral: true});
        }
        interaction.reply({content: `Beep boop!, you will be reminded in ${minutes}.01 minutes`, ephemeral: true});

        setTimeout(() => {
            interaction.followUp({content: `${interaction.user} here's that reminder you mentioned`, ephemeral: true});
        }, 1000 * 60 * minutes)
    },
}