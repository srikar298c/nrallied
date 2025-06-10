
export interface VisitorInfo {
    name: string
    mobile: string
  }
  
 export interface ContactInfo {
    image: string
    name: string
    title: string
    phone: string
    email: string
    address: {
      street: string
      city: string
      state: string
      zip: string
      country: string
    }
    website: string
  }