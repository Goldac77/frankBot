const fs = require("node:fs");

// Content of the .env file
const envContent = `
BOT_TOKEN="YOUR_BOT_TOKEN"
CLIENTID="YOUR_BOT_APPLICATION_ID"
GUILDID="YOUR_SERVER_ID"
ADMINID="SERVER_ADMIN_USER_ID"
`;

// Write the content to the .env file
fs.writeFile('.env', envContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('.env file created successfully.');
});