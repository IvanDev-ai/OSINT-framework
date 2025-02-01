"use client"

import { useLanguage } from "@/components/language-provider"
import { translations } from "@/utils/translations"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Search, Lock, Database, Globe, UserCheck } from "lucide-react"

export default function LandingPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl md:pt-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {t.landingTitle}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t.landingSubtitle}</p>
          <Link href="/tools">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t.exploreTools}
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Shield, title: t.featureTitle1, description: t.featureDescription1 },
            { icon: Search, title: t.featureTitle2, description: t.featureDescription2 },
            { icon: Lock, title: t.featureTitle3, description: t.featureDescription3 },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-card-foreground">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t.whyChooseUs}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">{t.whyChooseUsDescription}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Database, title: t.benefitTitle1, description: t.benefitDescription1 },
            { icon: Globe, title: t.benefitTitle2, description: t.benefitDescription2 },
            { icon: UserCheck, title: t.benefitTitle3, description: t.benefitDescription3 },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              className="bg-accent/10 p-6 rounded-lg"
            >
              <benefit.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

