import { VisitorInfo } from "@/types/contact"
import { useCallback, useState } from "react"




const useVisitorModal = () => {
    const [showModal, setShowModal] = useState(false)
    const [visitorInfo, setVisitorInfo] = useState<VisitorInfo>({ name: '', mobile: '' })
  
    const openModal = useCallback(() => setShowModal(true), [])
    const closeModal = useCallback(() => {
      setShowModal(false)
      setVisitorInfo({ name: '', mobile: '' })
    }, [])
  
    const updateVisitorInfo = useCallback((updates: Partial<VisitorInfo>) => {
      setVisitorInfo((prev: VisitorInfo) => ({ ...prev, ...updates }))
    }, [])
  
    return {
      showModal,
      visitorInfo,
      openModal,
      closeModal,
      updateVisitorInfo
    }
  }

  export default useVisitorModal