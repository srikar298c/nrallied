import { ContactInfo } from "@/types/contact";

export const generateVCF = (contact: ContactInfo): string => {
  const [firstName = '', lastName = ''] = contact.name.split(' ');

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${contact.name}`,
    `N:${lastName};${firstName};;;`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `ADR;TYPE=home:;;${contact.address.street};${contact.address.city};;${contact.address.zip};${contact.address.country}`,
    `EMAIL:${contact.email}`,
    `URL:${contact.website.startsWith('http') ? contact.website : 'https://' + contact.website}`,
    'END:VCARD'
  ].join('\r\n'); // VCF spec recommends CRLF line breaks
};

  
 export const downloadVCF = (contact: ContactInfo): void => {
    const vcfContent = generateVCF(contact)
    const blob = new Blob([vcfContent], { type: 'text/vcard' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `${contact.name.toLowerCase().replace(/\s+/g, '-')}-contact.vcf`
    link.setAttribute('aria-label', `Download ${contact.name} contact card`)
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }