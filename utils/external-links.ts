export const openExternalLink = (url: string, type: 'tel' | 'mailto' = 'tel'): void => {
    const protocol = type === 'tel' ? 'tel:' : 'mailto:'
    window.open(`${protocol}${url}`, '_self')
  }