// lib/google-sheets.ts
export interface ContactFormData {
  company: string
  name: string
  email: string
  phone: string
  inquiryType: string
  message: string
}

export async function appendToGoogleSheets(data: ContactFormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const json = await res.json().catch(() => ({}))
    throw new Error(json.error || 'Failed to submit form')
  }
  return true
}
