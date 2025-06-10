import { ANIMATION_VARIANTS } from "@/constants/animations"
import { ContactInfo } from "@/types/contact"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const ProfileHeader = ({ contact }: { contact: ContactInfo }) => (
  <motion.div
    variants={ANIMATION_VARIANTS.item}
    className="flex flex-col items-center mb-6"
  >
    {/* Logo Section */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mb-4"
    >
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/logo.png"
          alt="NR Allied Company Logo"
          width={100}
          height={100}
          className="shadow-lg ring-[#0476D9]/30 rounded-lg"
          priority
        />
      </Link>
    </motion.div>

    {/* Profile Info Section */}
    <div className="flex items-center gap-4 text-center">
      {/* Profile Image */}
      <div className="relative w-18 h-18 rounded-full overflow-hidden ring-2 ring-[#0476D9]/40 shadow-md">
        <Image
          src={contact.image || "/profile-placeholder.png"} // fallback
          alt={contact.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name & Title */}
      <div className="text-left">
        <h1 className="text-xl font-bold text-white">{contact.name}</h1>
        <p className="text-[#0476D9] font-medium text-sm">{contact.title}</p>
      </div>
    </div>
  </motion.div>
)
