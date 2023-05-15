const { SlashCommandBuilder } = require('discord.js');
const {botBan} = require("../ban/bot-ban");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	

	async execute(interaction) {
		// Reply for everyone else
		await interaction.reply(`Pong!`);
	},
};