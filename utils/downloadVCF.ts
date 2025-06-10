import { ContactInfo } from "@/types/contact"

export const generateVCF = (contact: ContactInfo): string => {
    return `BEGIN:VCARD
  VERSION:3.0
  FN:${contact.name}
  N:${contact.name.split(' ').reverse().join(';')};;;
  TEL;TYPE=CELL:${contact.phone}
  ADR;TYPE=home:;;${contact.address.street};${contact.address.city};;${contact.address.zip};${contact.address.country}
  EMAIL:${contact.email}
  URL:https://${contact.website}
  END:VCARD`
  }
  
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