import Link  from "next/link";


export const ContactItem = ({ 
    icon: Icon, 
    primary, 
    secondary, 
    onClick, 
    href,
    isClickable = false 
  }: {
    icon: React.ComponentType<{ className?: string }>
    primary: string
    secondary: string
    onClick?: () => void
    href?: string
    isClickable?: boolean
  }) => {
    const baseClasses = "flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm transition-colors duration-200"
    const interactiveClasses = isClickable 
      ? "hover:bg-white/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0476D9] focus:ring-offset-2 focus:ring-offset-transparent" 
      : ""
  
    const content = (
      <>
        <div className="w-10 h-10 bg-[#0476D9]/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-[#0476D9]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className={`font-medium break-words ${isClickable ? 'text-white hover:text-[#0476D9] transition-colors' : 'text-white'}`}>
            {primary}
          </p>
          <p className="text-gray-400 text-xs">{secondary}</p>
        </div>
      </>
    )
  
    if (href) {
      return (
        <Link 
          href={href} 
          className={`${baseClasses} ${interactiveClasses}`}
          aria-label={secondary}
        >
          {content}
        </Link>
      )
    }
  
    return (
      <div 
        className={`${baseClasses} ${interactiveClasses}`}
        onClick={onClick}
        onKeyDown={isClickable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick?.()
          }
        } : undefined}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        aria-label={isClickable ? secondary : undefined}
      >
        {content}
      </div>
    )
  }