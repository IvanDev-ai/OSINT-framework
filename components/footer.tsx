"use client";
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/utils/translations"
import { Shield, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">OSINT Tools</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.home}
            </Link>
            <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.tools}
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.about}
            </Link>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/IvanDev-ai" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ivan-lumbreras-martin/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">{t.footerText}</div>
      </div>
    </footer>
  )
}

