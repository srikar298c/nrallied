"use client"

import { ANIMATION_VARIANTS } from "@/constants/animations"
import {  VisitorInfo } from "@/types/contact"
import useVisitorModal from "@/hooks/useVisitorModal"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import { useState, useCallback, useMemo } from "react"
import toast, { Toaster } from "react-hot-toast"
import { downloadVCF } from "@/utils/downloadVCF"
import { BackgroundPattern } from "@/components/ui/BackgroundPattern/contact-card"
import { ProfileHeader } from "@/components/business/ProfileHeader/ProfileHeader"
import { ContactItem } from "@/components/ui/ContactItem/ContactItem"
import { openExternalLink } from "@/utils/external-links"
import { ActionButtons } from "@/components/business/ActionButtons/ActionButton"
import { VisitorModal } from "@/components/business/VistorModal/VisitorModal"
import { SAURABH_SURANA_CONTACT_DATA } from "@/constants/contact-data"


// Main Component
export default function ContactCard() {
  const [hasDownloaded, setHasDownloaded] = useState(false)
  const { showModal, visitorInfo, openModal, closeModal, updateVisitorInfo } = useVisitorModal()

  const contact = useMemo(() => SAURABH_SURANA_CONTACT_DATA, [])

  const handleAddToContacts = useCallback(() => {
    try {
      downloadVCF(contact)
      setHasDownloaded(true)
      setTimeout(openModal, 300)
      toast.success('Contact downloaded successfully!')
    } catch (error) {
      toast.error('Failed to download contact. Please try again.')
      console.error('Download error:', error)
    }
  }, [contact, openModal])

  const handleModalSubmit = useCallback((info: VisitorInfo) => {
    try {
      // In a real app, this would send to an API
      console.log('Visitor Info:', info)
      
      toast.success(`Thanks ${info.name}, your info was submitted!`)
      closeModal()
    } catch (error) {
      toast.error('Failed to submit information. Please try again.')
      console.error('Submit error:', error)
    }
  }, [closeModal])

  return (
    <>
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
          },
        }}
      />

      <motion.main
        variants={ANIMATION_VARIANTS.container}
        initial="initial"
        animate="animate"
        className="min-h-screen bg-gradient-to-br from-[#011532] to-[#012951] text-white p-8 rounded-3xl shadow-2xl max-w-lg mx-auto mt-10 font-sans relative overflow-hidden"
        role="main"
        aria-label="Contact card for Yogesh Goyal"
      >
        <BackgroundPattern />
        
        <div className="relative z-10">
          <motion.div
            variants={ANIMATION_VARIANTS.stagger}
            initial="initial"
            animate="animate"
          >
            <ProfileHeader contact={contact} />

            <motion.section 
              variants={ANIMATION_VARIANTS.item}
              className="space-y-4"
              aria-label="Contact information"
            >
              <ContactItem
                icon={Phone}
                primary={contact.phone}
                secondary="Click to call"
                onClick={() => openExternalLink(contact.phone, 'tel')}
                isClickable
              />

              <ContactItem
                icon={Mail}
                primary={contact.email}
                secondary="Click to email"
                onClick={() => openExternalLink(contact.email, 'mailto')}
                isClickable
              />

              <ContactItem
                icon={MapPin}
                primary={contact.address.street}
                secondary={`${contact.address.state}, ${contact.address.zip}`}
              />

              <ContactItem
                icon={Globe}
                primary={contact.website}
                secondary="Visit website"
                href="/"
                isClickable
              />
            </motion.section>

            <ActionButtons
              contact={contact}
              hasDownloaded={hasDownloaded}
              onAddToContacts={handleAddToContacts}
              onShareContact={openModal}
            />
          </motion.div>
        </div>
      </motion.main>

      <VisitorModal
        isOpen={showModal}
        visitorInfo={visitorInfo}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
        onUpdateInfo={updateVisitorInfo}
      />
    </>
  )
}