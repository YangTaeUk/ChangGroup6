const { google } = require('googleapis');
const webpush = require('web-push');
const http = require('http');

// Initialize Google Sheets API
const sheets = google.sheets('v4');

// OAuth2 client initialization (Replace these with your own credentials)
const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URL'
);

oauth2Client.setCredentials({
  refresh_token: 'YOUR_REFRESH_TOKEN'
});

// Initialize web-push
const vapidKeys = {
  publicKey: 'YOUR_PUBLIC_VAPID_KEY',
  privateKey: 'YOUR_PRIVATE_VAPID_KEY'
};

webpush.setVapidDetails(
  'mailto:example@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const sendNotification = async () => {
  const res = await sheets.spreadsheets.values.get({
    auth: oauth2Client,
    spreadsheetId: 'YOUR_SPREADSHEET_ID',
    range: 'Sheet1', // Update this to your sheet's name and range
  });

  const rows = res.data.values;

  if (rows.length) {
    rows.map((row) => {
      const subscription = {
        endpoint: row[0],  // Update these indexes based on your actual column positions
        expirationTime: row[1],
        keys: {
          p256dh: row[2],
          auth: row[3]
        }
      };

      const payload = JSON.stringify({ title: row[4] }); // The "text to send" from your Google Sheet

      webpush.sendNotification(subscription, payload).catch((error) => {
        console.error(error.stack);
      });
    });
  }
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Trigger push notifications
setTimeout(sendNotification, 5000);
