// All bilingual content for the site
export type Lang = "mr" | "en";

export const content = {
  mr: {
    // Navbar
    nav: {
      links: [
        { label: "आमच्याबद्दल", href: "#about" },
        { label: "सेवा", href: "#services" },
        { label: "अभिप्राय", href: "#reviews" },
      ],
      cta: "प्रवेश घ्या",
      langLabel: "English",
    },

    // Hero
    hero: {
      badge: "इचलकरंजी, महाराष्ट्र — स्था. १९८५",
      headline1: "Confidence ने",
      headline2: "Driving",
      headline3: "शिका",
      sub: "इचलकरंजीतील सर्वोत्कृष्ट ड्रायव्हिंग प्रशिक्षण. तज्ज्ञ शिक्षक. रस्त्यावरील सराव. जन्मभर आत्मविश्वास.",
      stats: [
        { value: "४०+", label: "वर्षांचा अनुभव" },
        { value: "१५,०००+", label: "प्रशिक्षित चालक" },
        { value: "९८%", label: "यश दर" },
      ],
      cta1: "प्रशिक्षण सुरू करा",
      cta2: "WhatsApp करा",
      scroll: "खाली स्क्रोल करा",
    },

    // Stats
    stats: {
      label: "आमची कामगिरी",
      items: [
        { label: "वर्षांचा अनुभव" },
        { label: "प्रशिक्षित विद्यार्थी" },
        { label: "परवाना यश दर" },
        { label: "विद्यार्थी समाधान" },
      ],
    },

    // Gallery
    gallery: {
      sectionLabel: "आमची झलक",
      title1: "Behind The",
      titleHighlight: "WHEEL",
    },

    // About
    about: {
      sectionLabel: "आमची ओळख",
      title1: "वारसा,",
      titleHighlight: "विश्वास",
      title2: "आणि उत्कृष्टता",
      lead: "१९८५ पासून इचलकरंजीमध्ये ड्रायव्हिंग शिक्षणाचे अग्रणी केंद्र. प्रत्येक विद्यार्थी आमच्यासाठी एक जबाबदारी आहे.",
      stats: [
        { value: "१९८५", label: "स्थापना वर्ष" },
        { value: "४०+", label: "वर्षांचा अनुभव" },
        { value: "१५,०००+", label: "प्रशिक्षित चालक" },
        { value: "३+", label: "व्यावसायिक सेवा" },
      ],
      timeline: [
        {
          year: "१९८५",
          title: "श्री बालाजीची स्थापना",
          desc: "इचलकरंजीमध्ये ड्रायव्हिंग शिक्षणाचा पाया घालण्यात आला. एक माणूस, एक स्वप्न, एक ध्येय.",
        },
        {
          year: "१९९०s",
          title: "विस्तार आणि विश्वास",
          desc: "हजारो विद्यार्थ्यांनी परवाना मिळवला. शहरातील विश्वासू नाव म्हणून ओळख निर्माण झाली.",
        },
        {
          year: "२०००s",
          title: "RTO आणि PUC सेवांचा विस्तार",
          desc: "ड्रायव्हिंग शिक्षणापलीकडे — वाहन कागदपत्रे, विमा आणि PUC सेवा सुरू केल्या.",
        },
        {
          year: "आज",
          title: "संपूर्ण वाहन सेवा केंद्र",
          desc: "HSRP नंबर प्लेट ते आंतरराष्ट्रीय परवाना — आम्ही इचलकरंजीचे संपूर्ण ऑटोमोटिव्ह सेवा केंद्र आहोत.",
        },
      ],
      trustBadge: "आमचे मूल्ये",
      trustTitle: "विश्वास · अनुभव · व्यावसायिकता",
      pillars: ["विश्वास", "सुरक्षा", "कौशल्य"],
      cta: "आमच्याशी संपर्क करा",
    },

    // Services
    services: {
      sectionLabel: "आमच्या सेवा",
      title1: "संपूर्ण",
      titleHighlight: "वाहन",
      title2: "सेवा",
      lead: "ड्रायव्हिंग प्रशिक्षणापासून ते HSRP नंबर प्लेटपर्यंत — सर्व वाहन सेवा एकाच ठिकाणी.",
      cards: [
        {
          iconKey: "rto",
          title: "RTO Services",
          subtitle: "आरटीओ सेवा",
          desc: "ड्रायव्हिंग लायसन्स, नूतनीकरण, वाहन पासिंग, विमा आणि व्यावसायिक वाहन कागदपत्रे — सर्व RTO कामे आम्ही करतो.",
          items: ["नवीन परवाना", "नूतनीकरण", "वाहन पासिंग", "विमा", "व्यावसायिक वाहन", "आंतरराष्ट्रीय परवाना"],
        },
        {
          iconKey: "puc",
          title: "PUC Center",
          subtitle: "प्रदूषण तपासणी केंद्र",
          desc: "नोंदणीकृत PUC केंद्र. सर्व प्रकारच्या वाहनांसाठी जलद आणि अधिकृत प्रदूषण प्रमाणपत्र.",
          items: ["कार PUC", "बाईक PUC", "व्यावसायिक वाहन", "त्वरित प्रमाणपत्र"],
        },
        {
          iconKey: "hsrp",
          title: "HSRP Plates",
          subtitle: "हाय सिक्युरिटी नंबर प्लेट",
          desc: "सरकार मान्यताप्राप्त HSRP नंबर प्लेट बुकिंग आणि फिटिंग. जुन्या व नव्या वाहनांसाठी उपलब्ध.",
          items: ["HSRP बुकिंग", "जुन्या वाहनांसाठी", "नव्या वाहनांसाठी", "त्वरित फिटिंग"],
        },
      ],
      ctaBadge: "सेवेसाठी संपर्क करा",
      ctaTitle: "आजच आमच्याशी संपर्क करा — जलद, विश्वासू सेवा.",
      ctaBtn: "आत्ता चौकशी करा",
    },

    // Journey (kept for reference, not rendered)
    journey: {
      sectionLabel: "तुमचा प्रवास",
      title1: "भीतीपासून",
      titleHighlight: "आत्मविश्वासापर्यंत",
      title2: "UNSTOPPABLE",
      lead: "प्रत्येक तज्ज्ञ चालक एकेकाळी नवशिका होता. आम्ही ती दरी भरतो — आठवड्याने, वळणाने.",
      steps: [
        { num: "०१", title: "पहिला दिवस", desc: "गाडी ओळख आणि मूलभूत सुरक्षा." },
      ],
      cta: "प्रवास सुरू करा",
      photoOverlay1: "भीतीपासून",
      photoOverlay2: "आत्मविश्वासापर्यंत",
      photoSub: "एका ड्राइव्ह वेळी",
      chips: [{ label: "४ आठवडे", sub: "कार्यक्रम" }],
    },

    // Reels
    reels: {
      sectionLabel: "आमचा Instagram",
      title: "VIRAL",
      titleHighlight: "REELS",
      followBtn: "Instagram वर Follow करा",
    },

    // Reviews
    reviews: {
      sectionLabel: "विद्यार्थ्यांचे अनुभव",
      title1: "त्यांनी",
      titleHighlight: "विश्वास",
      title2: "ठेवला",
      lead: "खऱ्या विद्यार्थ्यांचे. खरे आत्मविश्वास. खऱ्या रस्त्यांवर.",
    },

    // Contact
    contact: {
      headline1: "आजच",
      headlineHighlight: "Driving",
      headline2: "सुरू करा",
      sub: "तुमचा पहिला धडा एक WhatsApp दूर आहे.",
      actions: [
        { label: "फोन करा", value: "+91 98501 14660" },
        { label: "WhatsApp", value: "आत्ता चॅट करा" },
        { label: "Instagram", value: "@balajimotorschool" },
        { label: "पत्ता", value: "इचलकरंजी, महाराष्ट्र" },
      ],
      formLabel: "त्वरित चौकशी",
      fields: [
        { label: "तुमचे नाव", placeholder: "पूर्ण नाव" },
        { label: "फोन नंबर", placeholder: "+91 XXXXX XXXXX" },
        { label: "वाहन प्रकार", placeholder: "कार / बाईक" },
        { label: "अनुभव पातळी", placeholder: "नवशिका / थोडा अनुभव" },
      ],
      msgLabel: "संदेश (ऐच्छिक)",
      msgPlaceholder: "कोणते प्रश्न किंवा विशेष आवश्यकता?",
      submitBtn: "चौकशी पाठवा →",
      successMsg: "धन्यवाद! आम्ही लवकरच WhatsApp वर संपर्क करू.",
      directions: "दिशानिर्देश मिळवा →",
    },

    // Footer
    footer: {
      tagline: "इचलकरंजीतील विश्वासू वाहन सेवा केंद्र. ड्रायव्हिंग · RTO · PUC · HSRP.",
      copyright: "© २०२५ श्री बालाजी मोटर ट्रेनिंग स्कूल. सर्व हक्क राखीव.",
      cols: {
        Training: "सेवा",
        Company: "कंपनी",
        Contact: "संपर्क",
      },
      links: {
        Training: ["RTO सेवा", "PUC केंद्र", "HSRP नंबर प्लेट", "ड्रायव्हिंग प्रशिक्षण"],
        Company: ["आमच्याबद्दल", "आमचे प्रशिक्षक", "अभिप्राय", "संपर्क"],
        Contact: ["+91 98501 14660", "WhatsApp", "Instagram", "इचलकरंजी, MH"],
      },
    },
  },

  en: {
    nav: {
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Reviews", href: "#reviews" },
      ],
      cta: "Enroll Now",
      langLabel: "मराठी",
    },

    hero: {
      badge: "Ichalkaranji, Maharashtra — Est. 1985",
      headline1: "Confidence ने",
      headline2: "Driving",
      headline3: "शिका",
      sub: "Professional driving training for beginners in Ichalkaranji. Expert instructors. Real traffic. Lifetime confidence.",
      stats: [
        { value: "40+", label: "Years" },
        { value: "15,000+", label: "Trained Drivers" },
        { value: "98%", label: "Pass Rate" },
      ],
      cta1: "Start Learning",
      cta2: "WhatsApp Now",
      scroll: "Scroll",
    },

    stats: {
      label: "Our Numbers",
      items: [
        { label: "Years of Experience" },
        { label: "Students Trained" },
        { label: "License Success Rate" },
        { label: "Student Satisfaction" },
      ],
    },

    gallery: {
      sectionLabel: "Training Moments",
      title1: "Behind The",
      titleHighlight: "WHEEL",
    },

    whyus: {
      sectionLabel: "Why Choose Us",
      title1: "THE",
      titleHighlight: "PREMIUM",
      title2: "DIFFERENCE",
      lead: "We don't just teach you to drive. We build the confidence to own every road.",
      features: [
        { num: "01", title: "Beginner-Friendly Teaching", desc: "Step-by-step approach designed for absolute beginners. No judgment, no pressure. Pure confidence building from day one." },
      ],
    },

    about: {
      sectionLabel: "Our Legacy",
      title1: "Heritage,",
      titleHighlight: "Trust",
      title2: "& Excellence",
      lead: "Ichalkaranji's most trusted automotive education and services hub since 1985. Every student is a lifelong responsibility.",
      stats: [
        { value: "1985", label: "Established" },
        { value: "40+", label: "Years Experience" },
        { value: "15,000+", label: "Trained Drivers" },
        { value: "3+", label: "Professional Services" },
      ],
      timeline: [
        {
          year: "1985",
          title: "Shree Balaji Founded",
          desc: "A legacy was born in Ichalkaranji. One man, one vision — to make every road safer, one driver at a time.",
        },
        {
          year: "1990s",
          title: "Growth & Community Trust",
          desc: "Thousands earned their licenses. Shree Balaji became a household name — synonymous with trust and safe driving.",
        },
        {
          year: "2000s",
          title: "Expanding Into Full RTO & PUC Services",
          desc: "Beyond driving — vehicle documentation, insurance assistance, and PUC testing services introduced.",
        },
        {
          year: "Today",
          title: "Complete Automotive Services Hub",
          desc: "From HSRP number plates to international driving licenses — a one-stop premium automotive services destination.",
        },
      ],
      trustBadge: "Our Pillars",
      trustTitle: "Trust · Experience · Professionalism",
      pillars: ["Trust", "Safety", "Expertise"],
      cta: "Contact Us",
    },

    services: {
      sectionLabel: "What We Offer",
      title1: "Complete",
      titleHighlight: "Automotive",
      title2: "Services",
      lead: "From driving training to HSRP number plates — every vehicle service you need, under one roof.",
      cards: [
        {
          iconKey: "rto",
          title: "RTO Services",
          subtitle: "Licensing & Documentation",
          desc: "New driving licenses, renewals, vehicle passing, insurance, and commercial vehicle documentation. We handle every RTO formality.",
          items: ["New License", "Renewal", "Vehicle Passing", "Insurance", "Commercial Vehicle", "International License"],
        },
        {
          iconKey: "puc",
          title: "PUC Center",
          subtitle: "Pollution Under Control",
          desc: "Government-registered PUC center. Fast, official Pollution Under Control certificates for all vehicle types.",
          items: ["Car PUC", "Bike PUC", "Commercial Vehicles", "Instant Certificate"],
        },
        {
          iconKey: "hsrp",
          title: "HSRP Plates",
          subtitle: "High Security Number Plates",
          desc: "Government-approved High Security Registration Plate booking and fitment. Available for old and new vehicles both.",
          items: ["HSRP Booking", "Old Vehicles", "New Vehicles", "Quick Fitment"],
        },
      ],
      ctaBadge: "Get In Touch",
      ctaTitle: "Contact us today for fast, trusted automotive services.",
      ctaBtn: "Enquire Now",
    },

    journey: {
      sectionLabel: "Your Transformation",
      title1: "FROM",
      titleHighlight: "NERVOUS",
      title2: "TO UNSTOPPABLE",
      lead: "Every expert driver was once a nervous beginner.",
      steps: [{ num: "01", title: "Day One", desc: "Vehicle familiarization and basic safety." }],
      cta: "Begin Your Journey",
      photoOverlay1: "From Nervous",
      photoOverlay2: "to Confident",
      photoSub: "One drive at a time.",
      chips: [{ label: "4 Weeks", sub: "Program" }],
    },

    reels: {
      sectionLabel: "Follow Our Journey",
      title: "VIRAL",
      titleHighlight: "REELS",
      followBtn: "Follow on Instagram",
    },

    reviews: {
      sectionLabel: "Student Stories",
      title1: "THEY",
      titleHighlight: "TRUSTED",
      title2: "US",
      lead: "Real students. Real confidence. Real roads.",
    },

    contact: {
      headline1: "आजच",
      headlineHighlight: "Driving",
      headline2: "सुरू करा",
      sub: "Your first lesson is just a WhatsApp away.",
      actions: [
        { label: "Call Us", value: "+91 98501 14660" },
        { label: "WhatsApp", value: "Chat with us instantly" },
        { label: "Instagram", value: "@balajimotorschool" },
        { label: "Location", value: "Ichalkaranji, Maharashtra" },
      ],
      formLabel: "Quick Inquiry",
      fields: [
        { label: "Your Name", placeholder: "Full name" },
        { label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
        { label: "Vehicle Type", placeholder: "Car / Bike" },
        { label: "Experience Level", placeholder: "Beginner / Some experience" },
      ],
      msgLabel: "Message (Optional)",
      msgPlaceholder: "Any questions or special requirements?",
      submitBtn: "Send Inquiry →",
      successMsg: "Thank you! We will contact you shortly on WhatsApp.",
      directions: "Get Directions →",
    },

    footer: {
      tagline: "Ichalkaranji's trusted automotive services hub since 1985. Driving · RTO · PUC · HSRP.",
      copyright: "© 2025 Shree Balaji Motor Training School. All rights reserved.",
      cols: { Training: "Services", Company: "Company", Contact: "Contact" },
      links: {
        Training: ["RTO Services", "PUC Center", "HSRP Number Plates", "Driving Training"],
        Company: ["About Us", "Our Instructors", "Reviews", "Contact"],
        Contact: ["+91 98501 14660", "WhatsApp", "Instagram", "Ichalkaranji, MH"],
      },
    },
  },
} as const;

export type Content = typeof content.mr;
