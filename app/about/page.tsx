"use client"

import { useLanguage } from "@/components/language-provider"
import { translations } from "@/utils/translations"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-background text-foreground cybersecurity-bg pt-24">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">{t.aboutTitle}</h1>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <p className="text-lg mb-4 text-foreground">{t.aboutParagraph1}</p>
            <p className="text-lg mb-4 text-foreground">{t.aboutParagraph2}</p>
            <p className="text-lg text-foreground">{t.aboutParagraph3}</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

