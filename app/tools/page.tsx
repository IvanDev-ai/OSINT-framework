"use client"

import { useState, useEffect } from "react"
import { osintTools } from "../../data/osint-tools"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  ExternalLink,
  Shield,
  Lock,
  Globe,
  Mail,
  Phone,
  User,
  Image,
  MapPin,
  Share2,
  Clock,
  EyeOff,
  DollarSign,
  FileText,
  PenToolIcon as Tool,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/utils/translations"
import React from "react"

const categoryIcons: { [key: string]: React.ElementType } = {
  "Google Dorking": Search,
  "Correos Electrónicos": Mail,
  "Números de Teléfono": Phone,
  "Alias o Nombres de Usuario": User,
  "Direcciones IP y Dominios": Globe,
  "Fotos y Metadatos": Image,
  Geolocalización: MapPin,
  "Redes Sociales": Share2,
  "Historial y Contenido Eliminado": Clock,
  "Dark Web": EyeOff,
  "Información Financiera Personal": DollarSign,
  "Antecedentes Penales": FileText,
  "Otras Herramientas": Tool,
}

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = translations[language as keyof typeof translations]

  const filteredTools = osintTools
    .map((category) => ({
      ...category,
      category: t.categories[category.category as keyof typeof t.categories] || category.category,
      subcategories: (category.subcategories || [])
        .map((subcategory) => ({
          ...subcategory,
          name: t.subcategories[subcategory.name as keyof typeof t.subcategories] || subcategory.name,
          description:
            typeof subcategory.description === "object" ? subcategory.description[language] : subcategory.description,
          tools: (subcategory.tools || []).filter((tool) => {
            const toolName = tool.name.toLowerCase()
            const toolDescription =
              typeof tool.description === "object"
                ? tool.description[language].toLowerCase()
                : (tool.description || "").toLowerCase()
            const searchTermLower = searchTerm.toLowerCase()
            return toolName.includes(searchTermLower) || toolDescription.includes(searchTermLower)
          }),
        }))
        .filter((subcategory) => {
          const subcategoryNameLower = subcategory.name.toLowerCase()
          const subcategoryDescriptionLower = subcategory.description.toLowerCase()
          const searchTermLower = searchTerm.toLowerCase()
          return (
            subcategoryNameLower.includes(searchTermLower) ||
            subcategoryDescriptionLower.includes(searchTermLower) ||
            subcategory.tools.length > 0
          )
        }),
    }))
    .filter((category) => (category.subcategories || []).length > 0)

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 cybersecurity-bg">
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-8 text-center">{t.toolsTitle}</h1>
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder={t.searchPlaceholder}
              className="pl-10 py-6 text-lg rounded-full shadow-lg bg-background border-input text-foreground focus:border-primary focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={24} />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={expandedCategory === category.category ? "col-span-full" : ""}
            >
              <Card
                className={`h-full transition-all duration-300 bg-card border-border ${
                  expandedCategory === category.category
                    ? "shadow-2xl shadow-primary/10"
                    : "hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                <CardHeader
                  className="bg-gradient-to-r from-card to-card/90 cursor-pointer"
                  onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
                >
                  <CardTitle className="text-2xl font-bold flex items-center space-x-3 text-card-foreground">
                    {React.createElement(categoryIcons[category.category] || Shield, {
                      size: 28,
                      className: "text-muted-foreground",
                    })}
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {expandedCategory === category.category ? (
                    <Accordion type="single" collapsible className="w-full space-y-2">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <AccordionItem
                          key={subIndex}
                          value={`subcategory-${index}-${subIndex}`}
                          className="border border-border rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="text-xl font-medium p-4 bg-accent/10 hover:bg-accent/20 transition-colors">
                            {subcategory.name}
                          </AccordionTrigger>
                          <AccordionContent className="p-4 bg-card">
                            <p className="text-base text-muted-foreground mb-4">{subcategory.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {subcategory.tools.map((tool, toolIndex) => (
                                <Card
                                  key={toolIndex}
                                  className="bg-accent/5 hover:bg-accent/10 transition-shadow border-accent/20"
                                >
                                  <CardHeader>
                                    <CardTitle className="text-lg font-bold flex items-center space-x-2 text-card-foreground">
                                      <Lock className="w-5 h-5 text-muted-foreground" />
                                      <span>{tool.name}</span>
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    <p className="text-sm text-muted-foreground">
                                      {typeof tool.description === "object"
                                        ? tool.description[language]
                                        : tool.description}
                                    </p>
                                    {tool.example && (
                                      <p className="text-sm font-medium text-card-foreground">
                                        <span className="font-bold">{t.example}:</span> {tool.example}
                                      </p>
                                    )}
                                    {tool.url && (
                                      <Link
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/90 inline-flex items-center space-x-1 mt-2"
                                      >
                                        <span>{t.visitSite}</span>
                                        <ExternalLink size={14} />
                                      </Link>
                                    )}
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <button
                      onClick={() => setExpandedCategory(category.category)}
                      className="w-full text-left text-muted-foreground hover:text-card-foreground"
                    >
                      {t.viewMore}
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

