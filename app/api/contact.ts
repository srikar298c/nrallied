// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'

interface ContactFormData {
  company: string
  name: string
  email: string
  phone: string
  inquiryType: string
  message: string
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID!
const CLIENT_EMAIL   = process.env.GOOGLE_SHEETS_CLIENT_EMAIL!
const PRIVATE_KEY    = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n')
const APPEND_RANGE   = 'Sheet1!A:G'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const data = req.body as ContactFormData
  const missing = (['company','name','email','phone','inquiryType','message'] as const)
    .filter(k => !data[k])
  if (missing.length) {
    return res.status(400).json({ error: `Missing fields: ${missing.join(', ')}` })
  }

  try {
    // JWT auth using googleapis
    const auth = new google.auth.JWT({
      email: CLIENT_EMAIL,
      key: PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const sheets = google.sheets({ version: 'v4', auth })

    // Append the row
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: APPEND_RANGE,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.company,
          data.name,
          data.email,
          data.phone,
          data.inquiryType,
          data.message,
        ]],
      },
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Sheets API error:', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
