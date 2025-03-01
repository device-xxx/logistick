
import {google} from 'googleapis'

export async function POST(request) {
  try {
    const data = await request.json();


const credentials = {
  type: 'service_account',
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: process.env.GOOGLE_AUTH_URI,
  token_uri: process.env.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
}

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = '1t3zU4yQRroxFW4qlWR1FshpXuw6sNFKvlIJfyYMhGPE';  // Замените на ваш ID таблицы
const range = 'Лист1!A2'; // Попробуйте также 'Sheet1!A2' для другого формата



try {
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,

    valueInputOption: 'RAW',
    resource: {
      values: [[data.name, data.email]],  // Значения для добавления
    },
  });

  return new Response(JSON.stringify({info:response.data}))
} catch (error) {
    return new Response(JSON.stringify({info:error}))
}

  } catch (error) {
    console.error('Ошибка при добавлении данных в таблицу:', error.message);
    return new Response(JSON.stringify({info:error.message}))
  }
}
