import { ANIMATION_VARIANTS } from "@/constants/animations"
import { VisitorInfo } from "@/types/contact"
import { motion, AnimatePresence } from "framer-motion"
import { User, Download, X } from "lucide-react"
import { useCallback } from "react"
import toast from "react-hot-toast"

export const VisitorModal = ({ 
    isOpen, 
    visitorInfo, 
    onClose, 
    onSubmit, 
    onUpdateInfo 
  }: {
    isOpen: boolean
    visitorInfo: VisitorInfo
    onClose: () => void
    onSubmit: (info: VisitorInfo) => void
    onUpdateInfo: (updates: Partial<VisitorInfo>) => void
  }) => {
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      
      if (!visitorInfo.name.trim() || !visitorInfo.mobile.trim()) {
        toast.error('Please fill in all required fields')
        return
      }
      
      onSubmit(visitorInfo)
    }, [visitorInfo, onSubmit])
  
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              variants={ANIMATION_VARIANTS.modal}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 id="modal-title" className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#0476D9]" aria-hidden="true" />
                  Visitor Information
                </h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 text-gray-600" aria-hidden="true" />
                </button>
              </div>
  
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="visitor-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="visitor-name"
                    type="text"
                    required
                    value={visitorInfo.name}
                    onChange={(e) => onUpdateInfo({ name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0476D9] focus:border-[#0476D9] outline-none transition-colors"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>
                
                <div>
                  <label htmlFor="visitor-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    id="visitor-mobile"
                    type="tel"
                    required
                    value={visitorInfo.mobile}
                    onChange={(e) => onUpdateInfo({ mobile: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0476D9] focus:border-[#0476D9] outline-none transition-colors"
                    placeholder="Enter your mobile number"
                    autoComplete="tel"
                  />
                </div>
  
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-[#0476D9] text-white rounded-lg hover:bg-[#0476D9]/80 flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0476D9] focus:ring-offset-2"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }