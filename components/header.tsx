"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/utils/translations"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Header() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-2 left-0 md:w-[60%] bg-background/20 mx-auto rounded-xl right-0 z-50 transition-all duration-300 ",
        scrolled ? "bg-background/50 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="w-4/5 mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">OSINT Tools</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link href="/tools" className="text-foreground hover:text-primary transition-colors">
              {t.tools}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t.about}
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

