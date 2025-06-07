"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin,  Download, X, User, Share } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ContactCard() {
  const [showModal, setShowModal] = useState(false)
  const [visitorInfo, setVisitorInfo] = useState({ name: '', mobile: '' })

  const generateVCF = () => {
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:Saurabh Surana
N:Surana;Saurabh;;;
TEL;TYPE=CELL:+919000004821
EMAIL:nrcommercialspvtltd@gmail.com
END:VCARD`
    return vcfContent
  }

  const downloadVCF = () => {
    const vcfContent = generateVCF()
    const blob = new Blob([vcfContent], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'saurabh-surana-contact.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const handleAddToContacts = () => {
    // downloadVCF()
    setTimeout(() => setShowModal(true), 500)
  }

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Visitor Info:', visitorInfo)
    setShowModal(false)
    setVisitorInfo({ name: '', mobile: '' })
    alert('Thank you! for your response.')
  }

  const handlePhoneClick = () => {
    window.open('tel:+919000004821', '_self')
  }

  const handleEmailClick = () => {
    window.open('mailto:nrcommercialspvtltd@gmail.com', '_self')
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-br from-[#011532] to-[#012951] text-white p-8 rounded-3xl shadow-2xl max-w-lg mx-auto mt-10 font-sans relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#0476D9] rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0476D9] rounded-full translate-y-16 -translate-x-16"></div>
        </div>

        {/* Header Section */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
                <Link href="/">
              <Image
                src="/logo.png"
                alt="NR Allied Logo"
                width={120}
                height={120}
                className="  shadow-lg ring-[#0476D9]/30"
              />
              </Link>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-right"
            >
              <div className="text-[#0476D9] text-sm font-medium">NR Allied</div>
              <div className="text-xs text-gray-300">Company</div>
            </motion.div> */}
          </div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-1">Saurabh Surana</h2>
              <p className="text-[#0476D9] font-medium text-sm">Managing Director</p>
              {/* <p className="text-gray-300 text-xs">NR Allied Company</p> */}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
          >
            <div 
              onClick={handlePhoneClick}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#0476D9]/20 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#0476D9]" />
              </div>
              <div>
                <p className="text-white font-medium hover:text-[#0476D9] transition-colors">+91 9866682202</p>
                <p className="text-gray-400 text-xs">Click to call</p>
              </div>
            </div>

            <div 
              onClick={handleEmailClick}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#0476D9]/20 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#0476D9]" />
              </div>
              <div>
                <p className="text-white font-medium hover:text-[#0476D9] transition-colors">nrcommercialspvtltd@gmail.com</p>
                <p className="text-gray-400 text-xs">Click to email</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-[#0476D9]/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0476D9]" />
              </div>
              <div>
                <p className="text-white font-medium">Kattedan, RR Dist</p>
                <p className="text-gray-400 text-xs">Hyderabad, 500077</p>
              </div>
            </div>

            {/* <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-[#0476D9]/20 rounded-xl flex items-center justify-center">
                <Building className="w-5 h-5 text-[#0476D9]" />
              </div>
              <div>
                <p className="text-white font-medium">NR Allied Company</p>
                <p className="text-gray-400 text-xs">Organization</p>
              </div>
            </div> */}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-3 mt-6"
          >
            <button 
              onClick={handlePhoneClick}
              className="flex-1 bg-[#0476D9] hover:bg-[#0476D9]/80 text-white py-3 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button 
              onClick={handleEmailClick}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </motion.div>

          {/* Add to Contacts Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4"
          >
            <button 
              onClick={handleAddToContacts}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Share className="w-4 h-4" />
              Share your Contact
            </button>
          </motion.div>

          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/10"
          >
            <div className="w-10 h-10 bg-white/10 hover:bg-[#0476D9]/20 rounded-xl flex items-center justify-center cursor-pointer transition-colors">
              <Linkedin className="w-5 h-5 text-[#0476D9]" />
            </div>
            <div className="w-10 h-10 bg-white/10 hover:bg-[#0476D9]/20 rounded-xl flex items-center justify-center cursor-pointer transition-colors">
              <Globe className="w-5 h-5 text-[#0476D9]" />
            </div>
          </motion.div> */}
        </div>
      </motion.div>

      {/* Modal (same as original, untouched) */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <User className="w-5 h-5 text-[#0476D9]" />
                Visitor Information
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={visitorInfo.name}
                  onChange={(e) => setVisitorInfo({ ...visitorInfo, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0476D9] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={visitorInfo.mobile}
                  onChange={(e) => setVisitorInfo({ ...visitorInfo, mobile: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0476D9] focus:border-transparent"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#0476D9] text-white rounded-lg hover:bg-[#0476D9]/80 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
