// All site content lives here. Edit this file to update the website.
const SITE = {
  name: "Israel Odeajo",
  fullName: "Israel Olanrewaju Odeajo",
  title: "AI Engineer · ML Researcher · Speaker",
  roles: ["AI Engineer", "ML Researcher", "NeurIPS 2026 Author", "Keynote Speaker", "Mentor"],
  tagline:
    "I build reliable, culturally grounded AI: safe LLM agents, multi-agent RAG, and NLP for African languages that works where resources are scarce.",
  openTo: "Open to PhD positions & AI / Research Engineer roles",
  location: "Ibadan, Nigeria",
  email: "iodeajo@gmail.com",
  avatar: "assets/portrait.jpg",
  resume: "",
  // Every form on the site is delivered to this address via FormSubmit (https://formsubmit.co).
  // The very first submission sends a one-time activation email to this inbox; click it once.
  formEmail: "iodeajo@gmail.com",
  bookingLink: "", // e.g. a Calendly / Cal.com link for mentoring sessions

  highlights: [
    { value: "2×", label: "NeurIPS 2026 papers" },
    { value: "Best Paper", label: "Deep Learning Indaba 2025" },
    { value: "#4", label: "Worldwide · FinEval 2026" },
  ],

  venues: [
    "NeurIPS", "EMNLP", "EACL · AfricaNLP", "Deep Learning Indaba", "EuroPython",
    "Global Data Festival", "Google DevFest", "OSACon", "ICLR · Zindi", "IndabaX Nigeria",
  ],

  researchStatement:
    "My research asks how to make AI systems trustworthy enough to act in the real world, and inclusive enough to serve the people most often left out of it. I'm pursuing a PhD to deepen this agenda at the intersection of agent reliability, low-resource NLP, and AI for social good.",

  researchInterests: [
    {
      title: "Reliable & safe LLM agents",
      description: "Runtime guarantees for agents that act on real systems: admission control, invariant envelopes, rollback and principled stopping.",
      evidence: "SysContract · NeurIPS 2026 MLForSys",
    },
    {
      title: "Low-resource African-language NLP & speech",
      description: "Text and speech systems for Nigerian Pidgin, Yoruba, Hausa and Igbo that run on CPUs and are built on consent-first community data.",
      evidence: "PidginAirAlert · EduNaija · NaijaAgroChat",
    },
    {
      title: "AI for finance, health & public good",
      description: "Multilingual financial understanding, inclusive financial guidance, and geospatial early warning for disease outbreaks.",
      evidence: "FinEval 2026 · Indaba 2025 Best Paper · GPSDD",
    },
  ],

  skills: [
    { group: "AI / ML", items: ["PyTorch", "TensorFlow", "Transformers", "scikit-learn", "XGBoost", "Computer Vision", "Speech / ASR"] },
    { group: "LLMs & Agents", items: ["LangChain", "LangGraph", "RAG", "FAISS", "Pinecone", "OpenAI / Azure OpenAI", "Llama", "Prompt & schema-constrained decoding"] },
    { group: "Engineering", items: ["Python", "FastAPI", "Flask", "Docker", "Kubernetes", "SQL / PostgreSQL", "Streamlit", "Databricks"] },
    { group: "Data & Analytics", items: ["Tableau", "Geospatial ML", "Time series", "Financial engineering", "Data pipelines"] },
  ],

  press: [
    {
      outlet: "Behind The Data",
      title: "Issue 018: Meet Israel Odeajo",
      date: "2025-02-27",
      url: "https://behindthedata.substack.com/p/issue-018-meet-israel-odeajo",
    },
    {
      outlet: "Behind The Data (episode)",
      title: "Rewiring Your Brain for AI Engineering",
      date: "2026-04-16",
      url: "https://behindthedata.substack.com/p/rewiring-your-brain-for-ai-engineering-333",
    },
    {
      outlet: "Africa Alliance of YMCAs",
      title: "African Changemakers: The Young Tech Master, Odeajo Israel",
      date: "",
      url: "https://africaymca.org/the-young-tech-master-odeajo-israel/",
    },
    {
      outlet: "OSACon",
      title: "Speaker profile: Odeajo Israel",
      date: "2024",
      url: "https://osacon.io/speakers/odeajo-israel/",
    },
  ],

  testimonials: [
    {
      quote: "Thank you so much, Israel Odeajo, for being such an important part of YDP Cohort 2. We are genuinely grateful for the time, knowledge, and experience you continue to share with our mentees.",
      author: "Mmesoma Okoronkwo",
      role: "Young Data Professionals",
      url: "https://www.linkedin.com/posts/mmesoma-okoronkwo-0988b9103_thank-you-so-much-israel-odeajo-fcss-for-activity-7505608825782099968-Gx57",
    },
    {
      quote: "Celebrating how your PidginAirAlert solution leverages low-resource NLP for field and incident reports by the locals in Rivers is amazing. Well done.",
      author: "Victor O.",
      role: "on LinkedIn",
      url: "https://www.linkedin.com/posts/odeajo-israel_neurips2026-neurips2026-africainai-activity-7515749054144872448-70Ob",
    },
    {
      quote: "Mentorship is a game-changer: Israel's career trajectory was profoundly shaped by the guidance of experienced mentors, proving the transformative power of learning from others.",
      author: "Ayoade Adegbite",
      role: "Founder, Behind The Data",
      url: "https://behindthedata.substack.com/p/issue-018-meet-israel-odeajo",
    },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/israelkingz", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/odeajo-israel", icon: "linkedin" },
    { name: "X", url: "https://x.com/israelkingz", icon: "x" },
    { name: "Medium", url: "https://israelkingz.medium.com", icon: "medium" },
    { name: "Kaggle", url: "https://www.kaggle.com/israelkingz", icon: "kaggle" },
    { name: "Zindi", url: "https://zindi.africa/users/israelkingz", icon: "zindi" },
  ],

  about: [
    "I'm an AI engineer, machine learning researcher, and technical leader with over a decade of experience across software engineering, database administration, and data science. I currently work as an AI Engineer at Turing, and have been a Data Science Researcher and Capacity Accelerator Network Fellow with the Global Partnership for Sustainable Development Data.",
    "My work focuses on production-grade multi-agent orchestration, LLMOps, and Retrieval-Augmented Generation, with a strong bias toward AI that serves African communities in their own languages: Yoruba, Hausa, Igbo, and Nigerian Pidgin. In 2026 I had four papers accepted at workshops at NeurIPS, EMNLP, and EACL.",
    "Beyond research, I'm a mentor and educator. I've facilitated with AI Saturdays Ibadan, Andela Learning Community, and TensorFlow Ibadan, organise with IndabaX Nigeria, and serve as a Zindi Africa Ambassador and Tableau DataDev Ambassador.",
  ],

  stats: [
    { value: "7", label: "Papers & posters" },
    { value: "10+", label: "Years in tech" },
    { value: "100+", label: "Open-source repos" },
    { value: "4700+", label: "LinkedIn followers" },
  ],

  publications: [
    {
      year: "2026",
      title: "SysContract: Stop–Check–Act Runtimes for Agents that Control Computer Systems",
      authors: "Israel Odeajo (first author) et al.",
      venue: "ML for Systems Workshop (MLForSys) @ NeurIPS 2026, Sydney",
      summary:
        "A deterministic admission-control runtime for LLM agents that tune schedulers, databases and inference servers. It restores a 100% invariant hold rate and cuts token use 4–4.5× by stopping post-plateau thrashing.",
      links: [
        { label: "Code", url: "https://github.com/israelkingz/syscontract" },
        { label: "Announcement", url: "https://www.linkedin.com/posts/odeajo-israel_to-god-be-the-glory-i-am-thrilled-and-honored-activity-7513590306093846528-PIIV" },
      ],
    },
    {
      year: "2026",
      title: "PidginAirAlert: Domain NLP for Community Soot and Health Alerts in Nigerian Pidgin",
      authors: "Israel Odeajo et al.",
      venue: "1st Africa in AI Workshop @ NeurIPS 2026",
      summary:
        "Low-resource, CPU-first NLP (≈1.2 ms per message, ≈118 KB model) that turns Pidgin WhatsApp messages and voice notes about soot and gas flares in the Niger Delta into a 6-way alert taxonomy with severity scores.",
      links: [
        { label: "Announcement", url: "https://www.linkedin.com/posts/odeajo-israel_neurips2026-neurips2026-africainai-activity-7515749054144872448-70Ob" },
      ],
    },
    {
      year: "2026",
      title: "PIO at FinEval 2026: An OpenRouter API Pipeline for Multilingual Financial Understanding",
      authors: "Israel Odeajo",
      venue: "FinNLP Workshop @ EMNLP 2026, Budapest",
      summary:
        "Solo shared-task system on Llama 3.3 70B with hybrid controllers and schema-constrained decoding. Placed 4th worldwide in Greek Financial NER (0.9051 F1) and 7th in Japanese Implicit Communication (0.9143 accuracy).",
      links: [
        { label: "DOI", url: "https://doi.org/10.18653/2026.finnlp-1.63" },
        { label: "Code", url: "https://github.com/israelkingz/finnlp-2026" },
        { label: "Announcement", url: "https://www.linkedin.com/posts/odeajo-israel_in-quantitative-finance-there-is-an-unspoken-activity-7500946468254482433-fus9" },
      ],
    },
    {
      year: "2026",
      title: "EduNaija AI Tutor: A Multi-Agent Retrieval-Augmented Generation System for Nigerian Curriculum Education",
      authors: "Israel Olanrewaju Odeajo, Edifon Emmanuel Jimmy",
      venue: "7th Workshop on African NLP (AfricaNLP 2026) @ EACL, Rabat · pp. 113–115",
      summary:
        "A multi-agent RAG tutor aligned with WAEC, NECO and JAMB curricula, with automated assessment generation and support for English, Yoruba, Hausa and Igbo.",
      links: [
        { label: "Paper (PDF)", url: "https://aclanthology.org/2026.africanlp-main.11.pdf" },
        { label: "ACL Anthology", url: "https://aclanthology.org/2026.africanlp-main.11/" },
      ],
    },
    {
      year: "2026",
      title: "NaijaAgroChat: A Multimodal RAG Assistant for Nigerian Smallholder Farmers",
      authors: "Israel Odeajo et al.",
      venue: "Poster, Deep Learning Indaba 2026, Lagos",
      summary:
        "Helps farmers access grants, pest-outbreak information and agricultural policy in Hausa, Igbo, Yoruba and Pidgin, with voice input and spoken responses.",
      links: [
        { label: "Indaba posters", url: "https://deeplearningindaba.com/2026/posters-2026/" },
      ],
    },
    {
      year: "2025",
      title: "Towards Inclusive Financial Guidance: A Multilingual Nigerian-Aware Chatbot Built with LangChain and NLLB-200",
      authors: "Israel Olanrewaju Odeajo",
      venue: "AI for Business & Finance in Africa Workshop @ Deep Learning Indaba 2025, Kigali · 🏆 Best Paper Award",
      summary:
        "A financial-guidance assistant for Nigerians that combines LangChain retrieval with Meta's NLLB-200 translation to serve users in English, Yoruba, Hausa and Pidgin.",
      links: [
        { label: "Workshop programme", url: "https://kelianm.github.io/ai-for-business-and-finance-in-africa.github.io/" },
        { label: "Code", url: "https://github.com/israelkingz/financial_ai" },
      ],
    },
    {
      year: "2025",
      title: "Ischemic Stroke Lesion Segmentation Using T1-MR Scans",
      authors: "Israel Odeajo",
      venue: "Poster, Deep Learning Indaba 2025, Kigali",
      summary: "Medical image segmentation of ischemic stroke lesions from T1-weighted MRI.",
      links: [
        { label: "Poster (PDF)", url: "https://storage.googleapis.com/download/storage/v1/b/indaba-2025-posters/o/Israel_Odeajo.pdf?generation=1755026572937103&alt=media" },
      ],
    },
  ],

  wins: [
    {
      date: "2026-10-13",
      title: "Second NeurIPS 2026 paper accepted: PidginAirAlert",
      description: "Accepted to the inaugural Africa in AI Workshop at NeurIPS 2026.",
      link: "https://www.linkedin.com/posts/odeajo-israel_neurips2026-neurips2026-africainai-activity-7515749054144872448-70Ob",
      tag: "Research",
    },
    {
      date: "2026-10-09",
      title: "Named Outstanding Mentor, DeepTech_Ready Program Cohort 3",
      description: "Recognised among the outstanding mentors of the DeepTech_Ready cohort.",
      link: "https://www.linkedin.com/posts/odeajo-israel_thanks-for-the-honour-mentor-deeptechready-activity-7514304340388651009-IYkK",
      tag: "Award",
    },
    {
      date: "2026-10-07",
      title: "First-author paper accepted at NeurIPS 2026 (MLForSys)",
      description: "SysContract accepted at the ML for Systems Workshop in Sydney, on my first NeurIPS submission.",
      link: "https://www.linkedin.com/posts/odeajo-israel_to-god-be-the-glory-i-am-thrilled-and-honored-activity-7513590306093846528-PIIV",
      tag: "Research",
    },
    {
      date: "2026-09-15",
      title: "Mentor, Young Data Professionals Cohort 2",
      description: "Thanked by YDP for mentoring and sharing knowledge with Cohort 2 mentees.",
      link: "https://www.linkedin.com/posts/mmesoma-okoronkwo-0988b9103_thank-you-so-much-israel-odeajo-fcss-for-activity-7505608825782099968-Gx57",
      tag: "Mentoring",
    },
    {
      date: "2026-09-02",
      title: "4th worldwide at FinEval 2026 + system paper accepted at EMNLP FinNLP",
      description: "Solo entry: 4th in Greek Financial NER, 7th in Japanese Implicit Communication.",
      link: "https://www.linkedin.com/posts/odeajo-israel_in-quantitative-finance-there-is-an-unspoken-activity-7500946468254482433-fus9",
      tag: "Competition",
    },
    {
      date: "2026-08-10",
      title: "Presented NaijaAgroChat at Deep Learning Indaba 2026",
      description: "Poster presentation at Pan-Atlantic University, Lagos.",
      link: "https://www.linkedin.com/posts/odeajo-israel_i-had-such-a-week-at-the-deep-learning-indaba-activity-7492535988485828608-URaw",
      tag: "Research",
    },
    {
      date: "2026-01-28",
      title: "EduNaija AI Tutor accepted at AfricaNLP 2026 (EACL)",
      description: "My first paper with my mentee Edifon Jimmy.",
      link: "https://www.linkedin.com/posts/odeajo-israel_artificialintelligence-nlp-africanlp2026-activity-7422164838296018944-RP54",
      tag: "Research",
    },
    {
      date: "2025-08-22",
      title: "Best Paper Award, AI for Business & Finance in Africa @ Deep Learning Indaba 2025",
      description: "For \"Towards Inclusive Financial Guidance: A Multilingual Nigerian-Aware Chatbot Built with LangChain and NLLB-200\", presented in Kigali, Rwanda.",
      link: "https://www.linkedin.com/posts/indabax-nigeria_dli2025-activity-7364526863777521666-0TPW",
      tag: "Award",
    },
    {
      date: "2026-04-16",
      title: "Featured on Behind The Data: \"Rewiring Your Brain for AI Engineering\"",
      description: "An episode on moving from software development into AI, storytelling with data, and the power of community.",
      link: "https://behindthedata.substack.com/p/rewiring-your-brain-for-ai-engineering-333",
      tag: "Press",
    },
    {
      date: "2025-02-27",
      title: "Featured in Behind The Data, Issue 018",
      description: "Interview on mentorship, resilience and blending technical rigour with creative problem-solving.",
      link: "https://behindthedata.substack.com/p/issue-018-meet-israel-odeajo",
      tag: "Press",
    },
    {
      date: "2023-05",
      title: "5th place, ICLR 2023 Kaggle/Zindi Hackathon",
      description: "Predict CO2 Emissions community hackathon. Best Zindi global rank: #38.",
      link: "https://www.kaggle.com/israelkingz/competitions",
      tag: "Competition",
    },
  ],

  projects: [
    {
      title: "SysContract",
      description: "Stop–Check–Act runtime that gates LLM agents writing to schedulers, database knobs and inference engines.",
      tags: ["LLM Agents", "AI Safety", "Python"],
      category: "Research",
      repo: "https://github.com/israelkingz/syscontract",
    },
    {
      title: "SabiPass",
      description: "Voice-first skill recognition for Nigeria's informal trades. Ask in Pidgin, Hausa, Yoruba or Igbo and get answers cited to national standards.",
      tags: ["Speech", "Multilingual", "EdTech"],
      category: "AI Products",
      repo: "https://github.com/israelkingz/sabipass",
    },
    {
      title: "FinNLP / FinEval 2026 System",
      description: "API-native pipeline for Greek NER, Japanese implicit communication and multilingual financial QA.",
      tags: ["NLP", "Finance", "LLMs"],
      category: "Research",
      repo: "https://github.com/israelkingz/finnlp-2026",
    },
    {
      title: "Multilingual Financial Advisor",
      description: "Nigeria-aware financial advisor in English, Yoruba, Hausa and Pidgin with RAG and text-to-speech.",
      tags: ["RAG", "TTS", "Fintech"],
      category: "AI Products",
      repo: "https://github.com/israelkingz/financial_ai",
    },
    {
      title: "Aura",
      description: "Skin-aware fashion try-on studio using YouCam Skin AI and Apparel virtual try-on.",
      tags: ["Computer Vision", "TypeScript"],
      category: "AI Products",
      repo: "https://github.com/israelkingz/aura",
    },
    {
      title: "Ben-Health",
      description: "Clinical decision support tool for frontline primary healthcare workers in Benue State, built on 10+ years of health and geospatial data.",
      tags: ["Public Health", "Geospatial ML"],
      category: "Data Science",
      repo: "",
    },
    {
      title: "LLM-powered Credit Card Fraud Detection",
      description: "KaggleX final project fusing ML models with LLM feedback for real-time fraud detection.",
      tags: ["LLMs", "Fraud Detection"],
      category: "Data Science",
      repo: "https://github.com/israelkingz/kagglex_ML_LLM_project",
    },
    {
      title: "Financial News Sentiment (BERT)",
      description: "Classifies financial news as positive, negative or neutral to support investment decisions.",
      tags: ["NLP", "Transformers"],
      category: "Data Science",
      repo: "https://github.com/israelkingz/financial_phrasebank_sentiment_analysis",
    },
    {
      title: "IVF Outcome Prediction",
      description: "Machine learning study of in vitro fertilisation cycle outcomes.",
      tags: ["Healthcare", "ML"],
      category: "Data Science",
      repo: "https://github.com/israelkingz/IVF_ML",
    },
    {
      title: "English–Yoruba Translator",
      description: "Flask web app translating English words to Yoruba.",
      tags: ["Yoruba", "Flask"],
      category: "AI Products",
      repo: "https://github.com/israelkingz/engtoyortranslator",
    },
  ],

  speaking: [
    {
      date: "2026-11-21",
      title: "Building Production-Ready Multi-Agent AI Systems with PyTorch",
      event: "Google DevFest Ibadan 2026",
      location: "Kakanfo Inn, Ibadan",
      type: "Talk",
      link: "https://www.linkedin.com/posts/gdg-ibadan_googledevfestibadan-googledevfestibadan2026-activity-7520092095068434432-kzwd",
    },
    {
      date: "2026-08",
      title: "NaijaAgroChat: Multimodal RAG for Smallholder Farmers",
      event: "Deep Learning Indaba 2026",
      location: "Lagos, Nigeria",
      type: "Poster",
      link: "https://www.linkedin.com/posts/odeajo-israel_i-had-such-a-week-at-the-deep-learning-indaba-activity-7492535988485828608-URaw",
    },
    {
      date: "2026-07",
      title: "EuroPython 2026",
      event: "EuroPython",
      location: "Kraków, Poland",
      type: "Speaker",
      link: "https://ep2026.europython.eu/",
    },
    {
      date: "2026-06",
      title: "Global Data Festival 2026",
      event: "Global Data Festival × Kenya Space Expo & Conference",
      location: "Nairobi, Kenya",
      type: "Speaker",
      link: "https://www.linkedin.com/posts/odeajo-israel_nairobi-is-truly-the-home-of-innovation-activity-7470846150670143489-2kgx",
    },
    {
      date: "2025-08-21",
      title: "Towards Inclusive Financial Guidance (Best Paper talk)",
      event: "AI for Business & Finance in Africa @ Deep Learning Indaba 2025",
      location: "University of Rwanda, Kigali",
      type: "Contributed Talk",
      link: "https://kelianm.github.io/ai-for-business-and-finance-in-africa.github.io/",
    },
    {
      date: "2025-05-10",
      title: "Building the Future Together: AI-powered Innovation with Google",
      event: "Build with AI, GDG Ibadan",
      location: "Notzero Innovation Hub, Ibadan",
      type: "Keynote",
      link: "https://www.linkedin.com/posts/odeajo-israel_buildwithai-googledevelopers-aiinnovation-activity-7325634149623451648-2VJ0",
    },
    {
      date: "2024-07",
      title: "Getting Started with NLP using TensorFlow",
      event: "Google I/O Extended, GDG Ibadan",
      location: "Ibadan, Nigeria",
      type: "Talk",
      link: "https://www.linkedin.com/posts/odeajo-israel_i-had-a-great-time-speaking-at-the-gdg-ibadan-activity-7221254938054561792-6Rvd",
    },
    {
      date: "2024-05",
      title: "Getting Started with Natural Language Processing",
      event: "DSC Adria 2024",
      location: "Workshop",
      type: "Workshop",
      link: "https://github.com/israelkingz/DSC-Adria2024",
    },
    {
      date: "2024",
      title: "From Raw Data to Insights: Introduction to Data Preprocessing",
      event: "Open Source Analytics Conference (OSACon)",
      location: "Virtual",
      type: "Talk",
      link: "https://osacon.io/speakers/odeajo-israel/",
    },
  ],

  speakingNote:
    "Also invited by Zindi communities in Uganda, Ghana and South Africa, ICLR, Data Science Africa, and Google Developer Clubs across Nigeria.",

  blog: [
    {
      date: "2022-09-05",
      title: "Data Engineering 102: Introduction to Python for Data Engineering",
      url: "https://israelkingz.medium.com/data-engineering-102-introduction-to-python-for-data-engineering-24575423098c",
    },
    {
      date: "2022-08-18",
      title: "Data Engineering 101: Introduction to Data Engineering",
      url: "https://israelkingz.medium.com/data-engineering-101-introduction-to-data-engineering-532b38133635",
    },
    {
      date: "2022-03-14",
      title: "The Power of Networking",
      url: "https://israelkingz.medium.com/the-power-of-networking-44cefaef41f7",
    },
    {
      date: "2022-03-03",
      title: "7 Keys to Moving in Your Tech Journey",
      url: "https://israelkingz.medium.com/7-keys-moving-in-your-tech-journey-de49ea4c9198",
    },
    {
      date: "2021-12-22",
      title: "Working with Database Systems: PostgreSQL",
      url: "https://israelkingz.medium.com/working-with-database-system-postgresql-ba5537990042",
    },
    {
      date: "2021-12-15",
      title: "Data Science Communities to Leverage for Growth",
      url: "https://israelkingz.medium.com/data-science-community-to-leverage-for-growth-ed4605e86f4a",
    },
    {
      date: "2021-12-03",
      title: "Model Deployment using Streamlit (A Practical Approach)",
      url: "https://israelkingz.medium.com/model-deployment-using-streamlit-a-practical-approach-deed7b915fb6",
    },
    {
      date: "2021-11-27",
      title: "Understanding the ABC of Data Analytics",
      excerpt: "Published in Geek Culture.",
      url: "https://medium.com/geekculture/understanding-the-abc-of-data-analytics-e19801b723e8",
    },
    {
      date: "2021-01-27",
      title: "My Tech Stories Part 1",
      url: "https://israelkingz.medium.com/my-tech-stories-part-1-3f2350da030a",
    },
    {
      date: "2020-07-02",
      title: "Starting a Tech Career Path",
      url: "https://israelkingz.medium.com/starting-a-tech-career-path-4f65066a24b9",
    },
  ],

  mentoring: {
    intro:
      "I've mentored through DeepTech_Ready (Outstanding Mentor, Cohort 3), Young Data Professionals, AI Saturdays Ibadan and Andela Learning Community, and co-authored my first AfricaNLP paper with a mentee. I offer one-on-one sessions for students and early-career engineers.",
    topics: [
      "Breaking into AI/ML and data science careers",
      "Turning a project into your first research paper",
      "Building production RAG and multi-agent systems",
      "Kaggle/Zindi competitions and portfolio reviews",
      "Public speaking and growing in tech communities",
    ],
  },

  education: [
    {
      period: "2025 – 2026",
      title: "M.Sc. Financial Engineering",
      org: "WorldQuant University",
      details: "",
    },
    {
      period: "2025",
      title: "Postgraduate Diploma, Criminology and Strategic Studies",
      org: "Institute of Criminology and Strategic Studies",
      details: "",
    },
    {
      period: "2021 – 2023",
      title: "B.Sc. Computer Science",
      org: "The West Africa Union University, Benin Republic",
      details: "",
    },
  ],

  certifications: [
    "DeepLearning.AI TensorFlow Developer Specialization (2022)",
    "DeepLearning.AI Deep Learning Specialization (2022)",
    "Google TensorFlow Developer Certified",
    "Google IT Support Specialist",
    "Google Mobile Web Specialist",
    "Microsoft Certified Data Scientist",
  ],

  experience: [
    {
      period: "Feb 2026 – Present",
      title: "AI Engineer",
      org: "Turing",
      details: "Building RL environments and data systems that train multimodal agents for coding and STEM reasoning.",
    },
    {
      period: "Dec 2025 – Present",
      title: "AI Engineer",
      org: "JL13 Concepts (Calgary, Canada)",
      details: "",
    },
    {
      period: "Apr 2025 – Present",
      title: "AI Engineer",
      org: "Loubby AI",
      details: "RAG pipeline over 100+ compliance policies (PCI DSS, ISO, NDPA) that cut review time by 80% with 92–97% retrieval accuracy.",
    },
    {
      period: "Feb 2024 – Jan 2026",
      title: "Data Science Researcher & CAN Data Fellow",
      org: "Global Partnership for Sustainable Development Data",
      details: "Geospatial ML for cholera and malaria outbreaks (88% accuracy, 4-week early warning); led Ben-Health; informed Nigeria's 2025 Climate-Health Preparedness Plan.",
    },
    {
      period: "Jan 2023 – Present",
      title: "AI Engineer",
      org: "Join Momentum",
      details: "Azure OpenAI grading for 500+ candidates a year, cutting manual evaluation by 85% and hiring cycles by 60%.",
    },
    {
      period: "Apr 2022 – Apr 2025",
      title: "Data Analyst",
      org: "Trifta",
      details: "",
    },
    {
      period: "Dec 2021 – Jan 2023",
      title: "Senior Solutions Engineer",
      org: "LoubbyAI / DivVerse Labs",
      details: "",
    },
    {
      period: "Jan 2020 – Present",
      title: "Head of Innovation",
      org: "Global Edge Technology",
      details: "Architected AISOOP, a no-code platform automating government workflows with MLOps and LLMOps.",
    },
    {
      period: "Jan 2019 – Jan 2021",
      title: "AI Engineer",
      org: "BCT Creative Labs (Germany)",
      details: "Hybrid OCR + LLM pipelines for invoice processing at 95%+ field-level accuracy.",
    },
  ],

  community: [
    "Organiser, IndabaX Nigeria",
    "Zindi Africa Ambassador",
    "Tableau DataDev Ambassador",
    "Co-organiser, TensorFlow User Group Ibadan",
    "Facilitator, AI Saturdays Ibadan & Andela Learning Community",
    "Member, Data Science Nigeria & Black in AI",
    "World YMCA Change Agent",
  ],
};
