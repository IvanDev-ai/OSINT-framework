export const osintTools = [
  {
    category: "Google Dorking",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Basic operators for immediate results",
          es: "Operadores básicos para resultados inmediatos",
        },
        tools: [
          {
            name: "site:",
            description: {
              en: "Search within a specific domain",
              es: "Buscar en un dominio específico",
            },
            example: "site:github.com password",
          },
          {
            name: "filetype:",
            description: {
              en: "Find specific file types",
              es: "Encontrar archivos específicos",
            },
            example: 'filetype:pdf "confidencial"',
          },
          {
            name: "intitle:",
            description: {
              en: "Search in page titles",
              es: "Búsqueda en títulos",
            },
            example: 'intitle:"index of /backup"',
          },
          {
            name: "inurl:",
            description: {
              en: "Search for words in URLs",
              es: "Buscar palabras en URLs",
            },
            example: "inurl:/wp-admin/login.php",
          },
          {
            name: "cache:",
            description: {
              en: "Access cached versions",
              es: "Acceder a versiones en caché",
            },
            example: "cache:example.com",
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Operators to refine searches",
          es: "Operadores para refinar búsquedas",
        },
        tools: [
          {
            name: '"frase exacta"',
            description: {
              en: "Search for literal matches",
              es: "Buscar coincidencias literales",
            },
            example: '"informe financiero 2023"',
          },
          {
            name: "intext:",
            description: {
              en: "Search text within the body",
              es: "Buscar texto en el cuerpo",
            },
            example: 'intext:"contraseña maestra"',
          },
          {
            name: "AND/OR",
            description: {
              en: "Combine search terms",
              es: "Combinar términos",
            },
            example: "confidencial OR secreto",
          },
          {
            name: "-",
            description: {
              en: "Exclude terms",
              es: "Excluir términos",
            },
            example: "ejército -juegos",
          },
          {
            name: "link:",
            description: {
              en: "Sites that link to a URL",
              es: "Sitios que enlazan a una URL",
            },
            example: "link:example.com",
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Specific or technical cases",
          es: "Casos específicos o técnicos",
        },
        tools: [
          {
            name: "daterange:",
            description: {
              en: "Search by dates",
              es: "Buscar por fechas",
            },
            example: "daterange:20230101-20231231",
          },
          {
            name: "related:",
            description: {
              en: "Similar sites",
              es: "Sitios similares",
            },
            example: "related:twitter.com",
          },
          {
            name: "info:",
            description: {
              en: "Site information",
              es: "Información del sitio",
            },
            example: "info:example.com",
          },
          {
            name: "phonebook:",
            description: {
              en: "Search phone numbers",
              es: "Buscar números telefónicos",
            },
            example: "phonebook:John+NY",
          },
          {
            name: "maps:/weather:",
            description: {
              en: "Geographic/weather data",
              es: "Datos geográficos/meteorológicos",
            },
            example: "maps:restaurantes Madrid",
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Use only if previous options fail",
          es: "Usar solo si las anteriores no dan resultados",
        },
        tools: [],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Complementary tools for Dorking",
          es: "Herramientas complementarias para Dorking",
        },
        tools: [
          {
            name: "Google Hacking Database (GHDB)",
            description: {
              en: "List of predefined dorks",
              es: "Lista de dorks predefinidos",
            },
            url: "https://www.exploit-db.com/google-hacking-database",
          },
          {
            name: "Exploit-DB",
            description: {
              en: "Dorks for vulnerabilities",
              es: "Dorks para vulnerabilidades",
            },
            url: "https://www.exploit-db.com/",
          },
          {
            name: "DorkSearch",
            description: {
              en: "Dork search engine",
              es: "Motor de búsqueda de dorks",
            },
            url: "https://dorksearch.com/",
          },
          {
            name: "DorkGenius",
            description: {
              en: "Automatic dork generator",
              es: "Generador automático de dorks",
            },
            url: "https://dorkgenius.com/",
          },
        ],
      },
    ],
  },
  {
    category: "Correos Electrónicos",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Maximum efficiency, quick results",
          es: "Máxima eficiencia, resultados rápidos",
        },
        tools: [
          {
            name: "Hunter.io",
            description: { en: "Find corporate emails", es: "Encontrar correos corporativos" },
            url: "https://hunter.io/",
          },
          {
            name: "Have I Been Pwned",
            description: { en: "Detect data breaches", es: "Detectar brechas de datos" },
            url: "https://haveibeenpwned.com/",
          },
          {
            name: "Holehe",
            description: { en: "Check platform records", es: "Verificar registros en plataformas" },
            url: "https://github.com/megadose/holehe",
          },
          {
            name: "EmailRep",
            description: { en: "Reputation and activity", es: "Reputación y actividad" },
            url: "https://emailrep.io/",
          },
          {
            name: "DeHashed",
            description: { en: "Search leaked passwords", es: "Buscar contraseñas filtradas" },
            url: "https://dehashed.com/",
          },
          {
            name: "LeakCheck",
            description: { en: "Massive leaks", es: "Filtraciones masivas" },
            url: "https://leakcheck.io/",
          },
          {
            name: "Epieos",
            description: { en: "Link with dark networks", es: "Vincular con redes oscuras" },
            url: "https://epieos.com/",
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Good results, but require more time",
          es: "Buenos resultados, pero requieren más tiempo",
        },
        tools: [
          {
            name: "EmailSherlock",
            description: { en: "Find associated networks", es: "Encontrar redes asociadas" },
            url: "https://www.emailsherlock.com/",
          },
          {
            name: "VoilaNorbert",
            description: { en: "Search professional emails", es: "Buscar correos profesionales" },
            url: "https://www.voilanorbert.com/",
          },
          {
            name: "Intel Techniques Email Search",
            description: { en: "Combine sources", es: "Combinar fuentes" },
            url: "https://inteltechniques.com/tools/Email.html",
          },
          {
            name: "FindThatEmail",
            description: { en: "Find business emails", es: "Encontrar correos empresariales" },
            url: "https://findthat.email/",
          },
          {
            name: "Snov.io",
            description: { en: "Verification and enrichment", es: "Verificación y enriquecimiento" },
            url: "https://snov.io/",
          },
          {
            name: "Clearbit Connect",
            description: { en: "Enriched data", es: "Datos enriquecidos" },
            url: "https://connect.clearbit.com/",
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Use if previous options fail",
          es: "Usar si las anteriores no dan resultados",
        },
        tools: [
          {
            name: "Email Format",
            description: { en: "Discover email format", es: "Descubrir formato de correo" },
            url: "https://email-format.com/",
          },
          {
            name: "MailTester",
            description: { en: "Validate existence", es: "Validar existencia" },
            url: "https://mailtester.com/",
          },
          {
            name: "EmailVerifier",
            description: { en: "Verify validity", es: "Verificar validez" },
            url: "https://emailverifier.com/",
          },
          {
            name: "That'sThem",
            description: { en: "Reverse search", es: "Búsqueda inversa" },
            url: "https://thatsthem.com/",
          },
          {
            name: "Pipl",
            description: { en: "In-depth search", es: "Búsqueda en profundidad" },
            url: "https://pipl.com/",
          },
          {
            name: "Social-Searcher",
            description: { en: "Social media monitoring", es: "Monitoreo en redes" },
            url: "https://www.social-searcher.com/",
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Use only if there are no other options",
          es: "Usar solo si no hay opciones",
        },
        tools: [
          {
            name: "Email2Phonenumber",
            description: { en: "Link email-phone", es: "Vincular correo-teléfono" },
            url: "https://github.com/martinvigo/email2phonenumber",
          },
          {
            name: "FullContact",
            description: { en: "Data enrichment", es: "Enriquecimiento de datos" },
            url: "https://www.fullcontact.com/",
          },
          {
            name: "Rapportive",
            description: { en: "LinkedIn extension (discontinued)", es: "Extensión de LinkedIn (descontinuada)" },
            url: "",
          },
          {
            name: "Spokeo Email Search",
            description: { en: "General search", es: "Búsqueda general" },
            url: "https://www.spokeo.com/email-search",
          },
          {
            name: "TraceFind",
            description: { en: "Leaks in databases", es: "Filtraciones en bases de datos" },
            url: "https://tracefind.io/",
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional suggested tools",
          es: "Herramientas adicionales sugeridas",
        },
        tools: [
          {
            name: "Buster",
            description: { en: "Check email patterns", es: "Verificar patrones de correo" },
            url: "https://github.com/sham00n/buster",
          },
          {
            name: "PhoneBook.cz",
            description: { en: "Associate emails with public profiles", es: "Asociar correos a perfiles públicos" },
            url: "https://phonebook.cz/",
          },
          {
            name: "Skymem",
            description: { en: "Extract emails from websites", es: "Extraer correos de sitios web" },
            url: "https://www.skymem.info/",
          },
        ],
      },
    ],
  },
  {
    category: "Números de Teléfono",
    icon: "phone",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for searching phone numbers",
          es: "Herramientas esenciales para búsqueda de números de teléfono",
        },
        tools: [
          {
            name: "PhoneInfoga",
            url: "https://github.com/sundowndev/phoneinfoga",
            description: {
              en: "International scan, operator, geolocation",
              es: "Escaneo internacional, operador, geolocalización",
            },
          },
          {
            name: "SEON",
            url: "https://seon.io/",
            description: { en: "Social media history", es: "Historial en redes sociales" },
          },
          {
            name: "Truecaller",
            url: "https://www.truecaller.com/",
            description: { en: "Identification and spam", es: "Identificación y spam" },
          },
          {
            name: "Twilio Lookup",
            url: "https://www.twilio.com/lookup",
            description: { en: "Operator and line type", es: "Operador y tipo de línea" },
          },
          {
            name: "Have I Been Pwned?",
            url: "https://haveibeenpwned.com/",
            description: { en: "Detect associated leaks", es: "Detectar filtraciones asociadas" },
          },
          {
            name: "Numverify",
            url: "https://numverify.com/",
            description: { en: "Global validation", es: "Validación global" },
          },
          {
            name: "Spytox",
            url: "https://www.spytox.com/",
            description: { en: "Link with social networks", es: "Vincular con redes sociales" },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for searching phone numbers",
          es: "Herramientas importantes para búsqueda de números de teléfono",
        },
        tools: [
          {
            name: "Sync.me",
            url: "https://sync.me/",
            description: { en: "Reverse search and social profile", es: "Búsqueda inversa y perfil social" },
          },
          {
            name: "EmobileTracker",
            url: "https://www.emobiletracker.com/",
            description: { en: "Geolocation and provider", es: "Geolocalización y proveedor" },
          },
          {
            name: "Whitepages",
            url: "https://www.whitepages.com/",
            description: { en: "Personal data and location", es: "Datos personales y ubicación" },
          },
          {
            name: "SpyDialer",
            url: "https://spydialer.com/",
            description: { en: "Voicemail recordings and basic data", es: "Grabaciones de buzón y datos básicos" },
          },
          {
            name: "TruePeopleSearch",
            url: "https://www.truepeoplesearch.com/",
            description: { en: "Public records", es: "Registros públicos" },
          },
          {
            name: "CallerID Test",
            url: "https://calleridtest.com/",
            description: { en: "Operator and approximate location", es: "Operador y ubicación aproximada" },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for searching phone numbers",
          es: "Herramientas normales para búsqueda de números de teléfono",
        },
        tools: [
          {
            name: "ZabaSearch",
            url: "https://www.zabasearch.com/",
            description: { en: "Associated name and address", es: "Nombre y dirección asociada" },
          },
          {
            name: "CocoFinder",
            url: "https://cocofinder.com/",
            description: { en: "Search on networks and records", es: "Búsqueda en redes y registros" },
          },
          {
            name: "Phone Validator",
            url: "https://www.phonevalidator.com/",
            description: { en: "Google Voice/VoIP", es: "Google Voice/VoIP" },
          },
          {
            name: "FastPeopleSearch",
            url: "https://www.fastpeoplesearch.com/",
            description: { en: "Public records", es: "Registros públicos" },
          },
          {
            name: "PeekYou",
            url: "https://www.peekyou.com/",
            description: { en: "Networks and court records", es: "Redes y registros judiciales" },
          },
          {
            name: "USPhoneBook",
            url: "https://www.usphonebook.com/",
            description: { en: "General reverse search", es: "Búsqueda inversa general" },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for searching phone numbers",
          es: "Herramientas de última instancia para búsqueda de números de teléfono",
        },
        tools: [
          {
            name: "411.com",
            url: "https://www.411.com/",
            description: { en: "Phone directory", es: "Directorio telefónico" },
          },
          {
            name: "AnyWho",
            url: "https://www.anywho.com/",
            description: { en: "Basic search", es: "Búsqueda básica" },
          },
          {
            name: "Intelius",
            url: "https://www.intelius.com/",
            description: { en: "Detailed reports", es: "Informes detallados" },
          },
          {
            name: "PeopleFinders",
            url: "https://www.peoplefinders.com/",
            description: { en: "Personal data", es: "Datos personales" },
          },
          {
            name: "ReversePhoneLookup",
            url: "https://www.reversephonelookup.com/",
            description: { en: "Generic reverse search", es: "Búsqueda inversa genérica" },
          },
          {
            name: "BeenVerified",
            url: "https://www.beenverified.com/",
            description: { en: "Consolidated reports", es: "Informes consolidados" },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for searching phone numbers",
          es: "Herramientas adicionales para búsqueda de números de teléfono",
        },
        tools: [
          {
            name: "OpenCelliD",
            url: "https://www.opencellid.org/",
            description: { en: "Geolocation by cell towers", es: "Geolocalización por torres celulares" },
          },
          {
            name: "Google Dorking",
            url: "https://www.google.com",
            description: {
              en: 'Advanced searches with "site:" + number',
              es: 'Búsquedas avanzadas con "site:" + número',
            },
          },
          {
            name: "CarrierLookup",
            url: "https://www.carrierlookup.com/",
            description: { en: "Technical details of the operator", es: "Detalles técnicos del operador" },
          },
        ],
      },
    ],
  },
  {
    category: "Alias o Nombres de Usuario",
    icon: "user",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for searching aliases or usernames",
          es: "Herramientas esenciales para la búsqueda de alias o nombres de usuario",
        },
        tools: [
          {
            name: "Sherlock",
            url: "https://github.com/sherlock-project/sherlock",
            description: { en: "300+ social networks and forums", es: "300+ redes sociales y foros" },
          },
          {
            name: "Maigret",
            url: "https://github.com/soxoj/maigret",
            description: { en: "Create a dossier with linked profiles", es: "Crear dossier con perfiles vinculados" },
          },
          {
            name: "WhatsMyName",
            url: "https://whatsmyname.app/",
            description: { en: "100+ platforms", es: "100+ plataformas" },
          },
          {
            name: "Social Analyzer",
            url: "https://github.com/qeeqbox/social-analyzer",
            description: { en: "Detect suspicious activity", es: "Detectar actividad sospechosa" },
          },
          {
            name: "SpiderFoot",
            url: "https://www.spiderfoot.net/",
            description: { en: "Automate dark web searches", es: "Automatizar búsquedas en dark web" },
          },
          {
            name: "Holehe",
            url: "https://github.com/megadose/holehe",
            description: { en: "Check associated data leaks", es: "Verificar fugas de datos asociadas" },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for searching aliases or usernames",
          es: "Herramientas importantes para la búsqueda de alias o nombres de usuario",
        },
        tools: [
          {
            name: "Namechk",
            url: "https://namechk.com/",
            description: { en: "Availability on networks and domains", es: "Disponibilidad en redes y dominios" },
          },
          {
            name: "Intel Techniques Username Tool",
            url: "https://inteltechniques.com/tools/Username.html",
            description: { en: "Combine public/dark sources", es: "Combinar fuentes públicas/oscuras" },
          },
          {
            name: "Keybase",
            url: "https://keybase.io/",
            description: { en: "Link aliases with PGP keys", es: "Vincular alias con claves PGP" },
          },
          {
            name: "UserSearch",
            url: "https://usersearch.org/",
            description: { en: "Hidden profiles in forums", es: "Perfiles ocultos en foros" },
          },
          {
            name: "Knowem",
            url: "https://knowem.com/",
            description: { en: "Brand monitoring", es: "Monitoreo de marcas" },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for searching aliases or usernames",
          es: "Herramientas normales para la búsqueda de alias o nombres de usuario",
        },
        tools: [
          {
            name: "UserRecon",
            url: "https://github.com/issamelferkh/userrecon",
            description: { en: "Search in technical communities", es: "Búsqueda en comunidades técnicas" },
          },
          {
            name: "CheckUsernames",
            url: "https://checkusernames.com/",
            description: { en: "Main networks", es: "Redes principales" },
          },
          {
            name: "HandleOSINT",
            url: "https://github.com/Dutchosintguy/handleosint",
            description: { en: "Focus on professional networks", es: "Enfoque en redes profesionales" },
          },
          {
            name: "ProfileChecker",
            url: "https://profilechecker.net/",
            description: { en: "Basic verification", es: "Verificación básica" },
          },
          {
            name: "SocialCheck",
            url: "https://socialcheck.io/",
            description: { en: "Superficial analysis", es: "Análisis superficial" },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for searching aliases or usernames",
          es: "Herramientas de última instancia para la búsqueda de alias o nombres de usuario",
        },
        tools: [
          {
            name: "FastPeopleSearch",
            url: "https://www.fastpeoplesearch.com/",
            description: { en: "Public records", es: "Registros públicos" },
          },
          {
            name: "MentionMapp",
            url: "https://mentionmapp.com/",
            description: { en: "Map connections between aliases", es: "Mapear conexiones entre alias" },
          },
          {
            name: "OSINT.industries",
            url: "https://osint.industries/",
            description: { en: "Search aliases in technical niches", es: "Buscar alias en nichos técnicos" },
          },
          {
            name: "SocialBearing",
            url: "https://socialbearing.com/",
            description: { en: "Social media analysis", es: "Análisis de redes sociales" },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for searching aliases or usernames",
          es: "Herramientas adicionales para la búsqueda de alias o nombres de usuario",
        },
        tools: [],
      },
    ],
  },
  {
    category: "Direcciones IP y Dominios",
    icon: "globe",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for searching IP addresses and domains",
          es: "Herramientas esenciales para la búsqueda de direcciones IP y dominios",
        },
        tools: [
          {
            name: "Shodan",
            url: "https://www.shodan.io/",
            description: { en: "Exposed devices and vulnerabilities", es: "Dispositivos expuestos y vulnerabilidades" },
          },
          {
            name: "Censys",
            url: "https://censys.io/",
            description: { en: "Servers, SSL certificates", es: "Servidores, certificados SSL" },
          },
          {
            name: "DNSDumpster",
            url: "https://dnsdumpster.com/",
            description: { en: "DNS/subdomain mapping", es: "Mapeo DNS/subdominios" },
          },
          {
            name: "VirusTotal",
            url: "https://www.virustotal.com/",
            description: { en: "Malware detection", es: "Detección de malware" },
          },
          {
            name: "GreyNoise",
            url: "https://www.greynoise.io/",
            description: { en: "Filter internet noise", es: "Filtrar ruido de internet" },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for searching IP addresses and domains",
          es: "Herramientas importantes para la búsqueda de direcciones IP y dominios",
        },
        tools: [
          {
            name: "SecurityTrails",
            url: "https://securitytrails.com/",
            description: { en: "DNS/WHOIS history", es: "Historial DNS/WHOIS" },
          },
          {
            name: "SpiderFoot",
            url: "https://www.spiderfoot.net/",
            description: { en: "Automated data correlation", es: "Correlación automatizada de datos" },
          },
          {
            name: "Maltego",
            url: "https://www.maltego.com/",
            description: { en: "Connection mapping", es: "Mapeo de conexiones" },
          },
          {
            name: "HackerTarget",
            url: "https://hackertarget.com/",
            description: { en: "Passive reconnaissance", es: "Reconocimiento pasivo" },
          },
          {
            name: "Robtex",
            url: "https://www.robtex.com/",
            description: { en: "Network and domain details", es: "Detalles de redes y dominios" },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for searching IP addresses and domains",
          es: "Herramientas normales para la búsqueda de direcciones IP y dominios",
        },
        tools: [
          {
            name: "ViewDNS",
            url: "https://viewdns.info/",
            description: { en: "Integrated DNS tools", es: "Herramientas DNS integradas" },
          },
          {
            name: "BuiltWith",
            url: "https://builtwith.com/",
            description: { en: "Website technologies", es: "Tecnologías de sitios web" },
          },
          {
            name: "Recon-ng",
            url: "https://github.com/lanmaster53/recon-ng",
            description: { en: "OSINT automation", es: "Automatización OSINT" },
          },
          {
            name: "Spyse",
            url: "https://spyse.com/",
            description: { en: "Asset enumeration", es: "Enumeración de activos" },
          },
          {
            name: "Domaintools",
            url: "https://www.domaintools.com/",
            description: { en: "Advanced research", es: "Investigación avanzada" },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for searching IP addresses and domains",
          es: "Herramientas de última instancia para la búsqueda de direcciones IP y dominios",
        },
        tools: [
          {
            name: "IPinfo",
            url: "https://ipinfo.io/",
            description: { en: "Basic geolocation", es: "Geolocalización básica" },
          },
          {
            name: "MXToolbox",
            url: "https://mxtoolbox.com/",
            description: { en: "Mail diagnostics", es: "Diagnóstico de correo" },
          },
          {
            name: "BinaryEdge",
            url: "https://www.binaryedge.io/",
            description: { en: "Data exposure", es: "Exposición de datos" },
          },
          {
            name: "ThreatCrowd",
            url: "https://www.threatcrowd.org/",
            description: { en: "Threat search", es: "Búsqueda de amenazas" },
          },
          {
            name: "ASNLookup",
            url: "https://asnlookup.com/",
            description: { en: "Network identification", es: "Identificación de redes" },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for searching IP addresses and domains",
          es: "Herramientas adicionales para la búsqueda de direcciones IP y dominios",
        },
        tools: [
          {
            name: "DNSlytics",
            url: "https://dnslytics.com/",
            description: { en: "DNS record analysis", es: "Análisis de registros DNS" },
          },
          {
            name: "IPVoid",
            url: "https://www.ipvoid.com/",
            description: { en: "Multiple checks", es: "Chequeos múltiples" },
          },
          {
            name: "Amass",
            url: "https://github.com/OWASP/Amass",
            description: { en: "Subdomain mapping", es: "Mapeo de subdominios" },
          },
          {
            name: "Nmap",
            url: "https://nmap.org/",
            description: { en: "Port and service scanning", es: "Escaneo de puertos y servicios" },
          },
          {
            name: "CentralOps",
            url: "https://centralops.net/",
            description: { en: "DNS/WHOIS diagnostics", es: "Diagnóstico DNS/WHOIS" },
          },
        ],
      },
    ],
  },
  {
    category: "Fotos y Metadatos",
    icon: "image",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for analyzing photos and metadata",
          es: "Herramientas esenciales para el análisis de fotos y metadatos",
        },
        tools: [
          {
            name: "ExifTool",
            url: "https://exiftool.org/",
            description: { en: "Extract metadata from images/docs", es: "Extraer metadatos de imágenes/docs" },
          },
          {
            name: "Google Reverse Image Search",
            url: "https://images.google.com/",
            description: { en: "Global reverse search", es: "Búsqueda inversa global" },
          },
          {
            name: "PimEyes",
            url: "https://pimeyes.com/",
            description: {
              en: "Search faces in networks/public images",
              es: "Buscar rostros en redes/imágenes públicas",
            },
          },
          {
            name: "FotoForensics",
            url: "https://fotoforensics.com/",
            description: { en: "Detect image manipulation", es: "Detectar manipulación de imágenes" },
          },
          {
            name: "TinEye",
            url: "https://tineye.com/",
            description: { en: "Track original sources", es: "Rastrear fuentes originales" },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for analyzing photos and metadata",
          es: "Herramientas importantes para el análisis de fotos y metadatos",
        },
        tools: [
          {
            name: "Yandex Images",
            url: "https://yandex.com/images/",
            description: { en: "Powerful reverse search", es: "Búsqueda inversa potente" },
          },
          {
            name: "Jeffrey's Image Metadata Viewer",
            url: "http://exif.regex.info/exif.cgi",
            description: { en: "View metadata online", es: "Visualizar metadatos en línea" },
          },
          {
            name: "Image Raider",
            url: "https://www.imageraider.com/",
            description: { en: "Track web usage", es: "Rastreo de usos en la web" },
          },
          {
            name: "Pic2Map",
            url: "https://www.pic2map.com/",
            description: { en: "Geolocate using EXIF", es: "Geolocalizar mediante EXIF" },
          },
          {
            name: "ExifLooter",
            url: "https://github.com/aydinnyunus/exiflooter",
            description: { en: "Automate metadata extraction", es: "Automatizar extracción de metadatos" },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for analyzing photos and metadata",
          es: "Herramientas normales para el análisis de fotos y metadatos",
        },
        tools: [
          {
            name: "Metapicz",
            url: "http://metapicz.com/",
            description: { en: "View EXIF online", es: "Visualizar EXIF en línea" },
          },
          {
            name: "ImgOps",
            url: "https://imgops.com/",
            description: { en: "Analyze metadata and codes", es: "Analizar metadatos y códigos" },
          },
          {
            name: "Social Catfish",
            url: "https://socialcatfish.com/",
            description: { en: "Detect fake profiles", es: "Detectar perfiles falsos" },
          },
          {
            name: "Bing Image Match",
            url: "https://www.bing.com/visualsearch",
            description: { en: "Basic alternative", es: "Alternativa básica" },
          },
          {
            name: "Photo Metadata Explorer",
            url: "https://www.photometadata.org/META-Viewer",
            description: { en: "Simple explorer", es: "Explorador sencillo" },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for analyzing photos and metadata",
          es: "Herramientas de última instancia para el análisis de fotos y metadatos",
        },
        tools: [
          {
            name: "AmberEye",
            url: "https://ambereye.io/",
            description: { en: "Facial search in dark networks", es: "Búsqueda facial en redes oscuras" },
          },
          {
            name: "InVID",
            url: "https://www.invid-project.eu/",
            description: { en: "Verification of videos/images", es: "Verificación de videos/imágenes" },
          },
          {
            name: "Exif Pilot",
            url: "https://www.colorpilot.com/exif.html",
            description: { en: "Advanced metadata editor", es: "Editor de metadatos avanzado" },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for analyzing photos and metadata",
          es: "Herramientas adicionales para el análisis de fotos y metadatos",
        },
        tools: [],
      },
    ],
  },
  {
    category: "Geolocalización",
    icon: "map-pin",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for geolocation",
          es: "Herramientas esenciales para la geolocalización",
        },
        tools: [
          {
            name: "Google Earth Pro",
            url: "https://www.google.com/earth/versions/#earth-pro",
            description: {
              en: "3D and historical satellite imagery",
              es: "Imágenes satelitales 3D e históricas",
            },
          },
          {
            name: "OpenStreetMap",
            url: "https://www.openstreetmap.org/",
            description: {
              en: "Open data and customization",
              es: "Datos abiertos y personalización",
            },
          },
          {
            name: "OpenCelliD",
            url: "https://www.opencellid.org/",
            description: {
              en: "Geolocation by cell towers",
              es: "Geolocalización por torres celulares",
            },
          },
          {
            name: "WiGLE",
            url: "https://wigle.net/",
            description: {
              en: "Map of Wi-Fi networks and devices",
              es: "Mapa de redes Wi-Fi y dispositivos",
            },
          },
          {
            name: "Liveuamap",
            url: "https://liveuamap.com/",
            description: {
              en: "Global events in real time",
              es: "Eventos globales en tiempo real",
            },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for geolocation",
          es: "Herramientas importantes para la geolocalización",
        },
        tools: [
          {
            name: "Google Maps Timeline",
            url: "https://www.google.com/maps/timeline",
            description: {
              en: "Location history",
              es: "Historial de ubicaciones",
            },
          },
          {
            name: "What3Words",
            url: "https://what3words.com/",
            description: {
              en: "Location using 3 words",
              es: "Ubicación mediante 3 palabras",
            },
          },
          {
            name: "USGS EarthExplorer",
            url: "https://earthexplorer.usgs.gov/",
            description: {
              en: "Historical satellite imagery",
              es: "Imágenes satelitales históricas",
            },
          },
          {
            name: "GeoNames",
            url: "https://www.geonames.org/",
            description: {
              en: "Global geographic data",
              es: "Datos geográficos globales",
            },
          },
          {
            name: "Satellites Pro",
            url: "https://satellites.pro/",
            description: {
              en: "Updated satellite imagery",
              es: "Imágenes satelitales actualizadas",
            },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for geolocation",
          es: "Herramientas normales para la geolocalización",
        },
        tools: [
          {
            name: "GeoSpyer",
            url: "https://geospyer.com/",
            description: {
              en: "Geolocate photos without metadata using AI",
              es: "Geolocalizar fotos sin metadatos con IA",
            },
          },
          {
            name: "KartaView",
            url: "https://kartaview.org/",
            description: {
              en: "Crowdsourced images",
              es: "Imágenes crowdsourced",
            },
          },
          {
            name: "GPS Visualizer",
            url: "https://www.gpsvisualizer.com/",
            description: {
              en: "Convert/visualize GPS data",
              es: "Convertir/visualizar datos GPS",
            },
          },
          {
            name: "CellMapper",
            url: "https://www.cellmapper.net/",
            description: {
              en: "Cell coverage maps",
              es: "Mapas de cobertura celular",
            },
          },
          {
            name: "Mapillary",
            url: "https://www.mapillary.com/",
            description: {
              en: "Geo-tagged photos",
              es: "Fotos geoetiquetadas",
            },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for geolocation",
          es: "Herramientas de última instancia para la geolocalización",
        },
        tools: [
          {
            name: "Hunchly Geolocation Tool",
            url: "https://www.hunch.ly/",
            description: {
              en: "Browser integration",
              es: "Integración con navegador",
            },
          },
          {
            name: "Instant Google Street View",
            url: "https://instantstreetview.com/",
            description: {
              en: "Quick access to Street View",
              es: "Acceso rápido a Street View",
            },
          },
          {
            name: "SunCalc",
            url: "https://www.suncalc.org/",
            description: {
              en: "Analyze shadows/times in photos",
              es: "Analizar sombras/horas en fotos",
            },
          },
          {
            name: "Bellingcat's Geolocation Tools",
            url: "https://www.bellingcat.com/resources/2020/11/12/geolocation-tools/",
            description: {
              en: "Specific guides and resources",
              es: "Guías y recursos específicos",
            },
          },
          {
            name: "Marble",
            url: "https://marble.kde.org/",
            description: {
              en: "Historical and comparative maps",
              es: "Mapas históricos y comparativos",
            },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for geolocation",
          es: "Herramientas adicionales para la geolocalización",
        },
        tools: [],
      },
    ],
  },
  {
    category: "Redes Sociales",
    icon: "share2",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for social media research",
          es: "Herramientas esenciales para la investigación en redes sociales",
        },
        tools: [
          {
            name: "Sherlock",
            url: "https://github.com/sherlock-project/sherlock",
            description: {
              en: "Track profiles by username on 300+ platforms",
              es: "Rastrear perfiles por username en 300+ plataformas",
            },
          },
          {
            name: "Social Searcher",
            url: "https://www.social-searcher.com/",
            description: {
              en: "Real-time search on networks and forums",
              es: "Búsqueda en tiempo real en redes y foros",
            },
          },
          {
            name: "Twint",
            url: "https://github.com/twintproject/twint",
            description: {
              en: "Scrape Twitter without API",
              es: "Scrapear Twitter sin API",
            },
          },
          {
            name: "CrowdTangle",
            url: "https://www.crowdtangle.com/",
            description: {
              en: "Monitor Facebook/Instagram",
              es: "Monitorear Facebook/Instagram",
            },
          },
          {
            name: "Maltego",
            url: "https://www.maltego.com/",
            description: {
              en: "Map connections between profiles",
              es: "Mapear conexiones entre perfiles",
            },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for social media research",
          es: "Herramientas importantes para la investigación en redes sociales",
        },
        tools: [
          {
            name: "Social Analyzer",
            url: "https://github.com/qeeqbox/social-analyzer",
            description: {
              en: "Detect fake accounts",
              es: "Detectar cuentas falsas",
            },
          },
          {
            name: "IntelTechniques Social Media Toolkit",
            url: "https://inteltechniques.com/tools/",
            description: {
              en: "Manual tools for FB/Twitter",
              es: "Herramientas manuales para FB/Twitter",
            },
          },
          {
            name: "Talkwalker",
            url: "https://www.talkwalker.com/",
            description: {
              en: "Sentiment and trend analysis",
              es: "Análisis de sentimiento y tendencias",
            },
          },
          {
            name: "PeekYou",
            url: "https://www.peekyou.com/",
            description: {
              en: "Add profiles and public records",
              es: "Agregar perfiles y registros públicos",
            },
          },
          {
            name: "TweetDeck",
            url: "https://tweetdeck.twitter.com/",
            description: {
              en: "Advanced Twitter monitoring",
              es: "Monitoreo avanzado de Twitter",
            },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for social media research",
          es: "Herramientas normales para la investigación en redes sociales",
        },
        tools: [
          {
            name: "Hootsuite",
            url: "https://www.hootsuite.com/",
            description: {
              en: "Multisocial management",
              es: "Gestión multisocial",
            },
          },
          {
            name: "Reddit Investigator",
            url: "https://www.redditinvestigator.com/",
            description: {
              en: "Analyze user history on Reddit",
              es: "Analizar historial de usuarios en Reddit",
            },
          },
          {
            name: "FollowerWonk",
            url: "https://followerwonk.com/",
            description: {
              en: "Analyze Twitter followers",
              es: "Analizar seguidores en Twitter",
            },
          },
          {
            name: "InstagramLocationTool",
            url: "https://github.com/bellingcat/instagram-location-search",
            description: {
              en: "Geolocate IG posts",
              es: "Geolocalizar posts en IG",
            },
          },
          {
            name: "GraphCommons",
            url: "https://graphcommons.com/",
            description: {
              en: "Visualize social networks as graphs",
              es: "Visualizar redes sociales como grafos",
            },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for social media research",
          es: "Herramientas de última instancia para la investigación en redes sociales",
        },
        tools: [
          {
            name: "Hashtagify",
            url: "https://hashtagify.me/",
            description: {
              en: "Track hashtag trends",
              es: "Rastrear tendencias de hashtags",
            },
          },
          {
            name: "Brand24",
            url: "https://brand24.com/",
            description: {
              en: "Basic social listening",
              es: "Escucha social básica",
            },
          },
          {
            name: "Osint.industries",
            url: "https://osint.industries/",
            description: {
              en: "Track users on niche platforms",
              es: "Rastrear usuarios en plataformas nicho",
            },
          },
          {
            name: "Bellingcat's Social Media Verification Tools",
            url: "https://www.bellingcat.com/resources/how-tos/2020/03/27/investigating-online-content-a-guide-to-verifying-user-generated-content/",
            description: {
              en: "Practical guides",
              es: "Guías prácticas",
            },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for social media research",
          es: "Herramientas adicionales para la investigación en redes sociales",
        },
        tools: [
          {
            name: "InVID",
            url: "https://www.invid-project.eu/",
            description: { en: "Verify videos on networks", es: "Verificar videos en redes" },
          },
        ],
      },
    ],
  },
  {
    category: "Historial y Contenido Eliminado",
    icon: "clock",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for recovering history and deleted content",
          es: "Herramientas esenciales para recuperar historial y contenido eliminado",
        },
        tools: [
          {
            name: "Wayback Machine (Internet Archive)",
            url: "https://archive.org/web/",
            description: {
              en: "Historical archive of websites",
              es: "Archivo histórico de sitios web",
            },
          },
          {
            name: "Archive.today (Archive.is)",
            url: "https://archive.is/",
            description: {
              en: "Snapshots of ephemeral content",
              es: "Snapshots de contenido efímero",
            },
          },
          {
            name: "ChangeDetection.io",
            url: "https://changedetection.io/",
            description: {
              en: "Monitor page changes",
              es: "Monitorear cambios en páginas",
            },
          },
          {
            name: "Google Cached Pages",
            url: "https://webcache.googleusercontent.com/",
            description: {
              en: "Access cached copies",
              es: "Acceder a copias en caché",
            },
          },
          {
            name: "Politwoops",
            url: "https://politwoops.com/",
            description: {
              en: "Deleted tweets from politicians",
              es: "Tweets eliminados de políticos",
            },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for recovering history and deleted content",
          es: "Herramientas importantes para recuperar historial y contenido eliminado",
        },
        tools: [
          {
            name: "CachedView",
            url: "https://cachedview.com/",
            description: {
              en: "Recover deleted pages",
              es: "Recuperar páginas eliminadas",
            },
          },
          {
            name: "Unddit/Removeddit",
            url: "https://www.unddit.com/",
            description: {
              en: "Deleted posts/comments on Reddit",
              es: "Posts/comentarios borrados en Reddit",
            },
          },
          {
            name: "Snap Bird",
            url: "http://snapbird.org/",
            description: {
              en: "Search old/deleted tweets",
              es: "Buscar tweets antiguos/eliminados",
            },
          },
          {
            name: "Resurrect Pages Plugin",
            url: "https://addons.mozilla.org/en-US/firefox/addon/resurrect-pages/",
            description: {
              en: "Extension to recover caches",
              es: "Extensión para recuperar cachés",
            },
          },
          {
            name: "Social Bearing",
            url: "https://socialbearing.com/",
            description: {
              en: "Analyze Twitter histories",
              es: "Analizar historiales de Twitter",
            },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for recovering history and deleted content",
          es: "Herramientas normales para recuperar historial y contenido eliminado",
        },
        tools: [
          {
            name: "Wayback Social",
            url: "https://waybacksocial.com/",
            description: {
              en: "Social media archive",
              es: "Archivo de redes sociales",
            },
          },
          {
            name: "The Hive",
            url: "https://thehive-project.org/",
            description: {
              en: "Deleted posts on Reddit/forums",
              es: "Posts eliminados en Reddit/foros",
            },
          },
          {
            name: "Ghostarchive",
            url: "https://ghostarchive.org/",
            description: {
              en: "Archive specialized in networks",
              es: "Archivo especializado en redes",
            },
          },
          {
            name: "ArchiveBox",
            url: "https://archivebox.io/",
            description: {
              en: "Create local site archives",
              es: "Crear archivos locales de sitios",
            },
          },
          {
            name: "PostGhost",
            url: "https://postghostapi.com/",
            description: {
              en: "Monitor deleted tweets",
              es: "Monitorear tweets eliminados",
            },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for recovering history and deleted content",
          es: "Herramientas de última instancia para recuperar historial y contenido eliminado",
        },
        tools: [
          {
            name: "PageFreezer",
            url: "https://www.pagefreezer.com/",
            description: {
              en: "Legal archive of sites and networks",
              es: "Archivo legal de sitios y redes",
            },
          },
          {
            name: "Dredge",
            url: "https://dredge.io/",
            description: {
              en: "OSINT for deleted content on networks",
              es: "OSINT para contenido borrado en redes",
            },
          },
          {
            name: "Tweetic",
            url: "https://tweetic.io/",
            description: {
              en: "Track massive deleted tweets",
              es: "Rastrear tweets eliminados masivos",
            },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for recovering history and deleted content",
          es: "Herramientas adicionales para recuperar historial y contenido eliminado",
        },
        tools: [],
      },
    ],
  },
  {
    category: "Dark Web",
    icon: "eye-off",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for Dark Web research",
          es: "Herramientas esenciales para la investigación en la Dark Web",
        },
        tools: [
          {
            name: "Intelligence X",
            url: "https://intelx.io/",
            description: {
              en: "Dark web search, leaks, and historical records",
              es: "Búsqueda en dark web, filtraciones y registros históricos",
            },
          },
          {
            name: "OnionScan",
            url: "https://github.com/s-rah/onionscan",
            description: {
              en: "Scan and detect vulnerabilities on .onion sites",
              es: "Escaneo y detección de vulnerabilidades en sitios .onion",
            },
          },
          {
            name: "DarkSearch.io",
            url: "https://darksearch.io/",
            description: {
              en: "Specialized search engine for the dark web",
              es: "Motor de búsqueda especializado para dark web",
            },
          },
          {
            name: "Ahmia",
            url: "https://ahmia.fi/",
            description: {
              en: "Directory of verified hidden services",
              es: "Directorio de servicios ocultos verificados",
            },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for Dark Web research",
          es: "Herramientas importantes para la investigación en la Dark Web",
        },
        tools: [
          {
            name: "Hunchly Dark Web",
            url: "https://www.hunch.ly/darkweb-osint/",
            description: {
              en: "Capture and organize evidence in hidden forums",
              es: "Captura y organización de evidencia en foros ocultos",
            },
          },
          {
            name: "OnionCrawler",
            url: "https://github.com/MikeMeliz/TorCrawl.py",
            description: {
              en: "Crawling and mapping the structure of the dark web",
              es: "Rastreo y mapeo de la estructura de la dark web",
            },
          },
          {
            name: "ExoneraTor",
            url: "https://metrics.torproject.org/exonerator.html",
            description: {
              en: "Verifies if an IP was a Tor exit node at a specific time",
              es: "Verifica si una IP fue nodo de salida Tor en un momento específico",
            },
          },
          {
            name: "DARKPOSEIDON",
            url: "https://darkposeidon.com/",
            description: {
              en: "Monitoring illegal markets and forums",
              es: "Monitoreo de mercados ilegales y foros",
            },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for Dark Web research",
          es: "Herramientas normales para la investigación en la Dark Web",
        },
        tools: [
          {
            name: "DeHashed",
            url: "https://dehashed.com/",
            description: {
              en: "Alerts for credentials exposed on the dark web",
              es: "Alertas de credenciales expuestas en la dark web",
            },
          },
          {
            name: "Tor66",
            url: "http://tor66sezptuu2nta.onion/",
            description: {
              en: "Uncensored search engine on the Tor network",
              es: "Buscador no censurado en la red Tor",
            },
          },
          {
            name: "TorFlow",
            url: "https://torflow.uncharted.software/",
            description: {
              en: "Visualization of traffic on the Tor network",
              es: "Visualización de tráfico en la red Tor",
            },
          },
          {
            name: "OnionLink",
            url: "https://onion.link/",
            description: {
              en: "Access .onion sites without a Tor browser",
              es: "Acceso a sitios .onion sin navegador Tor",
            },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for Dark Web research",
          es: "Herramientas de última instancia para la investigación en la Dark Web",
        },
        tools: [
          {
            name: "Tor Bulk Extractor",
            url: "https://github.com/simsong/bulk_extractor",
            description: {
              en: "Mass data extraction on the Tor network",
              es: "Extracción masiva de datos en la red Tor",
            },
          },
          {
            name: "OSINT Dark Web Framework",
            url: "https://github.com/DedSecInside/TorBot",
            description: {
              en: "Collection of tools for dark web analysis",
              es: "Colección de herramientas para análisis en dark web",
            },
          },
          {
            name: "DeepDotWeb Archives",
            url: "https://deepdotweb.com/",
            description: {
              en: "Access to records of closed dark web sites",
              es: "Acceso a registros de sitios dark web cerrados",
            },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for Dark Web research",
          es: "Herramientas adicionales para la investigación en la Dark Web",
        },
        tools: [],
      },
    ],
  },
  {
    category: "Información Financiera Personal",
    icon: "dollar-sign",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for researching personal financial information",
          es: "Herramientas esenciales para la investigación de información financiera personal",
        },
        tools: [
          {
            name: "Have I Been Pwned",
            url: "https://haveibeenpwned.com/",
            description: {
              en: "Detect breaches with financial data",
              es: "Detectar brechas con datos financieros",
            },
          },
          {
            name: "OpenCorporates",
            url: "https://opencorporates.com/",
            description: {
              en: "Global business records",
              es: "Registros empresariales globales",
            },
          },
          {
            name: "SEON",
            url: "https://seon.io/",
            description: {
              en: "Analyze spending patterns",
              es: "Analizar patrones de gasto",
            },
          },
          {
            name: "Glassdoor",
            url: "https://www.glassdoor.com/",
            description: {
              en: "Infer income by roles/companies",
              es: "Inferir ingresos por roles/empresas",
            },
          },
          {
            name: "Blockchair",
            url: "https://blockchair.com/",
            description: {
              en: "Track blockchain transactions",
              es: "Rastrear transacciones en blockchain",
            },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for researching personal financial information",
          es: "Herramientas importantes para la investigación de información financiera personal",
        },
        tools: [
          {
            name: "BitcoinAbuse",
            url: "https://www.bitcoinabuse.com/",
            description: {
              en: "Fraudulent BTC addresses",
              es: "Direcciones BTC fraudulentas",
            },
          },
          {
            name: "PACER",
            url: "https://pacer.uscourts.gov/",
            description: {
              en: "Financial court records in the US",
              es: "Registros judiciales financieros en EE.UU.",
            },
          },
          {
            name: "BuiltWith",
            url: "https://builtwith.com/",
            description: {
              en: "Detect payment technologies on websites",
              es: "Detectar tecnologías de pago en sitios web",
            },
          },
          {
            name: "LittleSis",
            url: "https://littlesis.org/",
            description: {
              en: "Connections between individuals and companies",
              es: "Conexiones entre individuos y empresas",
            },
          },
          {
            name: "Pipl",
            url: "https://pipl.com/",
            description: {
              en: "Deep/dark web search",
              es: "Búsqueda en deep/dark web",
            },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for researching personal financial information",
          es: "Herramientas normales para la investigación de información financiera personal",
        },
        tools: [
          {
            name: "Company Check",
            url: "https://companycheck.co.uk/",
            description: {
              en: "Directors and finances in the UK",
              es: "Directores y finanzas en Reino Unido",
            },
          },
          {
            name: "SpiderFoot",
            url: "https://www.spiderfoot.net/",
            description: {
              en: "Track crypto addresses",
              es: "Rastrear direcciones cripto",
            },
          },
          {
            name: "Truecaller",
            url: "https://www.truecaller.com/",
            description: {
              en: "Link numbers to financial records",
              es: "Vincular números a registros financieros",
            },
          },
          {
            name: "Social Mention",
            url: "http://socialmention.com/",
            description: {
              en: "Detect spending habits on networks",
              es: "Detectar hábitos de gasto en redes",
            },
          },
          {
            name: "Radaris",
            url: "https://radaris.com/",
            description: {
              en: "Add public records",
              es: "Agregar registros públicos",
            },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for researching personal financial information",
          es: "Herramientas de última instancia para la investigación de información financiera personal",
        },
        tools: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/",
            description: {
              en: "Infer income from work history",
              es: "Inferir ingresos por historial laboral",
            },
          },
          {
            name: "FinCEN Database",
            url: "https://www.fincen.gov/financial-intelligence",
            description: {
              en: "Suspicious activities",
              es: "Actividades sospechosas",
            },
          },
          {
            name: "Chainalysis",
            url: "https://www.chainalysis.com/",
            description: {
              en: "Advanced cryptocurrency tracking",
              es: "Rastreo avanzado de criptomonedas",
            },
          },
          {
            name: "Bazaar",
            url: "https://bazaar.abuse.ch/",
            description: {
              en: "Monitor dark web for financial data",
              es: "Monitorear dark web para datos financieros",
            },
          },
          {
            name: "PayScan",
            url: "https://payscan.app/",
            description: {
              en: "Analyze payment patterns on social networks",
              es: "Analizar patrones de pagos en redes sociales",
            },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for researching personal financial information",
          es: "Herramientas adicionales para la investigación de información financiera personal",
        },
        tools: [],
      },
    ],
  },
  {
    category: "Antecedentes Penales",
    icon: "file-text",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for researching criminal records",
          es: "Herramientas esenciales para la investigación de antecedentes penales",
        },
        tools: [
          {
            name: "NSOPW",
            url: "https://www.nsopw.gov/",
            description: {
              en: "Sex offenders in the US",
              es: "Delincuentes sexuales en EE.UU.",
            },
          },
          {
            name: "PACER",
            url: "https://pacer.uscourts.gov/",
            description: {
              en: "Federal court records US",
              es: "Registros judiciales federales EE.UU.",
            },
          },
          {
            name: "Federal Bureau of Prisons Inmate Locator",
            url: "https://www.bop.gov/inmateloc/",
            description: {
              en: "Federal prisons US",
              es: "Prisiones federales EE.UU.",
            },
          },
          {
            name: "CPIC",
            url: "https://www.cpic-cipc.ca/",
            description: {
              en: "Background checks in Canada",
              es: "Antecedentes en Canadá",
            },
          },
          {
            name: "Vinelink",
            url: "https://www.vinelink.com/",
            description: {
              en: "Inmate status in the US",
              es: "Estado de reclusos en EE.UU.",
            },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for researching criminal records",
          es: "Herramientas importantes para la investigación de antecedentes penales",
        },
        tools: [
          {
            name: "New York State Unified Court System",
            url: "https://iapps.courts.state.ny.us/webcrim_attorney/Login",
            description: {
              en: "State records NY",
              es: "Registros estatales NY",
            },
          },
          {
            name: "OpenCanada",
            url: "https://open.canada.ca/en",
            description: {
              en: "Public records Canada",
              es: "Registros públicos Canadá",
            },
          },
          {
            name: "Policía Nacional de Colombia",
            url: "https://antecedentes.policia.gov.co:7005/WebJudicial/",
            description: {
              en: "Background checks Colombia",
              es: "Antecedentes Colombia",
            },
          },
          {
            name: "Registro Nacional de Reincidencia (Argentina)",
            url: "https://www.argentina.gob.ar/justicia/reincidencia",
            description: {
              en: "Background checks Argentina",
              es: "Antecedentes Argentina",
            },
          },
          {
            name: "Ministerio del Interior de Chile",
            url: "https://www.interior.gob.cl/",
            description: {
              en: "Background checks Chile",
              es: "Antecedentes Chile",
            },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for researching criminal records",
          es: "Herramientas normales para la investigación de antecedentes penales",
        },
        tools: [
          {
            name: "Poder Judicial del Perú",
            url: "https://www.pj.gob.pe/",
            description: {
              en: "Background checks Peru",
              es: "Antecedentes Perú",
            },
          },
          {
            name: "Truora",
            url: "https://www.truora.com/",
            description: {
              en: "Multinational verification",
              es: "Verificación multinacional",
            },
          },
          {
            name: "SIJIN (Colombia)",
            url: "https://antecedentes.policia.gov.co:7005/WebJudicial/",
            description: {
              en: "Judicial inquiries Colombia",
              es: "Consultas judiciales Colombia",
            },
          },
          {
            name: "Disclosure and Barring Service (Reino Unido)",
            url: "https://www.gov.uk/government/organisations/disclosure-and-barring-service",
            description: {
              en: "Background checks UK",
              es: "Antecedentes Reino Unido",
            },
          },
          {
            name: "Casier Judiciaire National (Francia)",
            url: "https://casier-judiciaire.justice.gouv.fr/",
            description: {
              en: "Background checks France",
              es: "Antecedentes Francia",
            },
          },
        ],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for researching criminal records",
          es: "Herramientas de última instancia para la investigación de antecedentes penales",
        },
        tools: [
          {
            name: "Ministerio de Justicia (España)",
            url: "https://sede.mjusticia.gob.es/",
            description: {
              en: "Background checks Spain",
              es: "Antecedentes España",
            },
          },
          {
            name: "Central Criminal Records Bureau (Alemania)",
            url: "https://www.bundesjustizamt.de/EN/Topics/citizen_services/BZR/BZR_node.html",
            description: {
              en: "Background checks Germany",
              es: "Antecedentes Alemania",
            },
          },
          {
            name: "Interpol Notices",
            url: "https://www.interpol.int/How-we-work/Notices",
            description: {
              en: "International searches",
              es: "Búsquedas internacionales",
            },
          },
          {
            name: "RemoFirst",
            url: "https://www.remofirst.com/",
            description: {
              en: "Verification in 180+ countries",
              es: "Verificación en 180+ países",
            },
          },
          {
            name: "AIS International",
            url: "https://www.aisint.com/",
            description: {
              en: "International screening",
              es: "Cribado internacional",
            },
          },
        ],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for researching criminal records",
          es: "Herramientas adicionales para la investigación de antecedentes penales",
        },
        tools: [],
      },
    ],
  },
  {
    category: "Otras Herramientas",
    icon: "tool",
    subcategories: [
      {
        name: "ESENCIAL",
        description: {
          en: "Essential tools for OSINT",
          es: "Herramientas esenciales para OSINT",
        },
        tools: [
          {
            name: "LeakPeek",
            url: "https://leakpeek.com/",
            description: { en: "Search for data leaks", es: "Búsqueda de filtraciones de datos" },
          },
          {
            name: "Pentester",
            url: "https://pentester.com/",
            description: { en: "Penetration testing platform", es: "Plataforma de pruebas de penetración" },
          },
          {
            name: "Castrick Clues",
            url: "https://castrickclues.com/",
            description: { en: "OSINT investigation tools", es: "Herramientas de investigación OSINT" },
          },
          {
            name: "OSINT Rocks",
            url: "https://osint.rocks/",
            description: { en: "OSINT resources and tools", es: "Recursos y herramientas OSINT" },
          },
          {
            name: "WhatsApp Leak Checker",
            url: "https://whatsapp.checkleaked.cc/",
            description: { en: "Check WhatsApp leaks", es: "Verificar filtraciones de WhatsApp" },
          },
        ],
      },
      {
        name: "IMPORTANTE",
        description: {
          en: "Important tools for OSINT",
          es: "Herramientas importantes para OSINT",
        },
        tools: [
          {
            name: "Digital Digging Cache",
            url: "https://cache.digitaldigging.org/",
            description: { en: "Cache of OSINT tools", es: "Caché de herramientas OSINT" },
          },
          {
            name: "Bellingcat",
            url: "https://es.bellingcat.com/",
            description: { en: "Investigative journalism and OSINT", es: "Periodismo de investigación y OSINT" },
          },
          {
            name: "Gralhix",
            url: "https://gralhix.com/",
            description: { en: "Data analysis tools", es: "Herramientas de análisis de datos" },
          },
          {
            name: "Benjamin Strick",
            url: "https://benjaminstrick.com/",
            description: { en: "OSINT resources and tutorials", es: "Recursos y tutoriales OSINT" },
          },
        ],
      },
      {
        name: "NORMAL",
        description: {
          en: "Normal tools for OSINT",
          es: "Herramientas normales para OSINT",
        },
        tools: [],
      },
      {
        name: "ULTIMA INSTANCIA",
        description: {
          en: "Last resort tools for OSINT",
          es: "Herramientas de última instancia para OSINT",
        },
        tools: [],
      },
      {
        name: "ADICIONALES",
        description: {
          en: "Additional tools for OSINT",
          es: "Herramientas adicionales para OSINT",
        },
        tools: [],
      },
    ],
  },
]

