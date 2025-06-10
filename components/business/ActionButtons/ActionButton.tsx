import { motion } from "framer-motion";
import { ContactInfo } from "@/types/contact";
import { ANIMATION_VARIANTS } from "@/constants/animations";
import { Phone, Mail, Download, Share } from "lucide-react";
import { openExternalLink } from "@/utils/external-links";

export const ActionButtons = ({ 
    contact, 
    hasDownloaded, 
    onAddToContacts, 
    onShareContact 
  }: {
    contact: ContactInfo
    hasDownloaded: boolean
    onAddToContacts: () => void
    onShareContact: () => void
  }) => (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      className="space-y-3 mt-6"
    >
      <div className="flex gap-3">
        <button 
          onClick={() => openExternalLink(contact.phone, 'tel')}
          className="flex-1 bg-[#0476D9] hover:bg-[#0476D9]/80 text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0476D9] focus:ring-offset-2"
          aria-label={`Call ${contact.name}`}
        >
          <Phone className="w-4 h-4" aria-hidden="true" /> 
          Call
        </button>
        <button 
          onClick={() => openExternalLink(contact.email, 'mailto')}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          aria-label={`Email ${contact.name}`}
        >
          <Mail className="w-4 h-4" aria-hidden="true" /> 
          Email
        </button>
      </div>
  
      {!hasDownloaded ? (
        <button 
          onClick={onAddToContacts}
          className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Add contact to your phone"
        >
          <Download className="w-4 h-4" aria-hidden="true" /> 
          Add to Contacts
        </button>
      ) : (
        <button 
          onClick={onShareContact}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          aria-label="Share your contact information"
        >
          <Share className="w-4 h-4" aria-hidden="true" /> 
          Share your Contact
        </button>
      )}
    </motion.div>
  )