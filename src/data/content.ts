export const profile = {
  name: "Nitheesha Moturu",
  email: "nitheeshamoturu@gmail.com",
  resume: "/Nitheesha-Moturu-Resume.pdf",
  github: "https://github.com/Nitheesha-1025",
  linkedin: "https://www.linkedin.com/in/nitheesha-moturu-841968324",
  leetcode: "https://leetcode.com/u/nitheesham/",
  university: "Shiv Nadar University Chennai",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  dates: "Aug 2024 – Aug 2028",
  cgpa: "8.686",
}

export type PlateRow = {
  label: string
  detail: string
}

export type Project = {
  id: string
  index: string
  name: string
  kicker: string
  summary: string
  problem: string
  built: string
  decisions: string[]
  takeaway: string
  stack: string[]
  live?: string
  github?: string
  image?: string
  imageAlt: string
  tier: "lead" | "feature" | "closing"
  plate?: PlateRow[]
  note?: string
}

export const projects: Project[] = [
{
    id: "kumbh-kavach",
    index: "01",
    name: "Kumbh Kavach",
    kicker: "Crowd safety prototype",
    summary:
      "An offline-first progressive web app for Nashik–Trimbakeshwar Simhastha: crowd risk, SOS, lost and found, and volunteer dispatch when mobile data is jammed.",
    problem:
      "A large pilgrimage gathers people, medical camps, and volunteers in the same places, then takes the network away. A safety tool that only works on a live connection misses the moment it is needed.",
    built:
      "A React and Vite PWA with five flows: home, a crowd heatmap, hold-to-send SOS, lost and found, and MyBharat volunteer dispatch. The interface switches between English, Hindi, and Marathi. A jammed-network control moves SOS onto an SMS-style fallback instead of failing the screen.",
    decisions: [
      "Crowd density is simulated over Ramkund and the ghats with Leaflet. Voice notes and SMS routing are simulated too. The README is explicit that this demo does not call YOLO, Twilio, or Bhashini.",
      "The network-jam state is part of the product, not an error toast. SOS still names a route, the nearest medical camp, and an ETA.",
      "Lost-person matching asks for consent before family and volunteers are notified.",
    ],
    takeaway:
      "A safety prototype is only honest if the failure mode is designed. Here the interesting path is the one where the data connection is already gone.",
    stack: ["React", "Vite", "PWA", "Leaflet", "EN / हिं / मर"],
    live: "https://kumbhkavach.vercel.app/",
    github: "https://github.com/Nitheesha-1025/KumbhKavach",
    image: "/shots/kumbh.jpg",
    imageAlt: "Kumbh Kavach home screen with the tagline Safety when the network fails",
    tier: "lead",
    note: "Hackathon demo. Density, voice notes, and SMS delivery are simulated.",
  },
{
    id: "failure-forensics",
    index: "02",
    name: "Failure Forensics",
    kicker: "Document pipeline traces",
    summary:
      "A document pipeline that keeps a trace of every step, so a weak extraction or classification can be found even when the final summary still looks fine.",
    problem:
      "A document pipeline can finish with a summary that reads well while an earlier extraction or classification was weak. If only the last result is kept, that earlier failure stays hidden.",
    built:
      "Failure Forensics keeps the trace with the result. Extraction, classification, and the summary remain separate steps, so a weak earlier step can be found after the summary is already written.",
    decisions: [
      "The summary is one step, not the record of the run. The trace is what makes the earlier steps inspectable.",
      "Extraction and classification are reviewed as their own results. A weak one is still the finding when the summary looks fine.",
    ],
    takeaway:
      "A document pipeline is debuggable only when the steps remain after the summary is written.",
    stack: [],
    github: "https://github.com/Nitheesha-1025/Failure-Forensics",
    imageAlt: "Failure Forensics keeps a trace of extraction, classification, and the summary",
    tier: "lead",
    plate: [
      { label: "Trace", detail: "Every step is kept with the run" },
      { label: "Extraction", detail: "A weak step stays visible" },
      { label: "Classification", detail: "Read on its own result" },
      { label: "Summary", detail: "Can still look fine" },
    ],
  },
{
    id: "gigshield",
    index: "03",
    name: "GigShield",
    kicker: "Parametric income protection",
    summary:
      "A platform for q-commerce delivery partners that evaluates rain, waterlogging, bandh, and curfew against a protection plan, instead of asking the rider to file a claim by hand.",
    problem:
      "A delivery shift disappears when the street does. Heavy rain, flooding, a bandh, or a curfew stops the work, and a form filled in afterwards does not replace the day’s income.",
    built:
      "A React client with worker, admin, and live-operations views, an Express API, and a Python service layer for weather, payments, fraud signals, and scoring. The claim engine opens a scenario when rainfall crosses 35 mm/hr, when rain coincides with a sharp drop in deliveries, when a bandh signal is verified, or when a curfew flag is active. Payout is hourly income × lost hours × severity × the plan’s coverage.",
    decisions: [
      "Triggers are parametric. The condition is in the data, not in a narrative claim.",
      "Severity comes from a scoring function over rainfall, delivery drop, and curfew state. The Python payment module returns a simulated transaction record. It is not a live UPI settlement.",
      "Several coverage levels exist so the same disruption does not pay every plan the same amount.",
    ],
    takeaway:
      "The product is the trigger definition. If the threshold is vague, automating the payout only automates an argument.",
    stack: ["React", "Node.js", "Express", "Python", "PostgreSQL"],
    live: "https://gig-shield-main.vercel.app/",
    github: "https://github.com/Nitheesha-1025/GigShield-main",
    image: "/shots/gigshield.jpg",
    imageAlt: "GigShield application in the browser",
    tier: "feature",
    note: "Payout records in the Python service are simulated.",
  },
{
    id: "agrifair",
    index: "04",
    name: "AgriFair",
    kicker: "Mandi prices and a marketplace",
    summary:
      "An agriculture marketplace with mandi prices, farmer listings, buyer orders, and a price estimate built from recent market history.",
    problem:
      "A farmer deciding when to sell is looking at a mandi, a variety, a grade, and the last few weeks of prices. A single quoted rate hides that path.",
    built:
      "The app has four views: a price estimate, mandi prices, a farmer marketplace, and analytics. The estimate uses the previous price, 7-day and 30-day averages, the gap between those averages, a monthly seasonality factor for the crop, and a small grade adjustment. Crop, state, district, market, variety, and grade are all inputs. Listings, orders, mandi rows, and saved estimates go through the API to Supabase PostgreSQL, with SQLite if that connection is down.",
    decisions: [
      "The estimator in this repository is that feature calculation, not a fitted Random Forest. It is deterministic from the history it is given.",
      "PostgreSQL is the preferred store. SQLite is the fallback so the marketplace still opens when the hosted database does not.",
      "The API lives in the same project as the Vite client and exposes health, mandi prices, predictions, listings, and orders.",
    ],
    takeaway:
      "A price is a claim about a market. Showing the averages and the season it came from matters more than a single confident number.",
    stack: ["React", "TypeScript", "Vite", "Express", "PostgreSQL", "Supabase"],
    live: "https://agrifair-16e4.onrender.com",
    github: "https://github.com/Nitheesha-1025/AgriFair",
    image: "/shots/agrifair.jpg",
    imageAlt: "AgriFair price estimate and mandi form",
    tier: "feature",
  },
{
    id: "scaleurl",
    index: "05",
    name: "ScaleURL",
    kicker: "URL shortener and click path",
    summary:
      "A Java service that answers a redirect immediately, and records the click later, without treating those as the same kind of work.",
    problem:
      "Creating a short link, redirecting it, and remembering the click have different latency budgets. Putting analytics on the redirect path makes every visitor wait on a write they never see.",
    built:
      "Spring Boot on Java 21. POST /api/v1/urls creates a short code. GET /{shortCode} returns 302. PostgreSQL, migrated with Flyway, is the source of truth for URLs and stored clicks. Redis holds the redirect cache. A successful redirect publishes one click event to RabbitMQ from a bounded background executor, and a separate worker inserts it.",
    decisions: [
      "Redis is cache-aside, not the database. A miss loads PostgreSQL and stores the URL for one hour. If Redis cannot be read or written, the redirect still uses PostgreSQL.",
      "The create endpoint is rate limited with one Redis Lua script, so concurrent requests from the same address share a counter and a TTL. The client address is the socket address. X-Forwarded-For is ignored unless the caller is a trusted proxy.",
      "The 302 does not wait for the broker. The worker acknowledges a message after insert, skips a repeated event id, retries other persistence failures, and dead-letters what it still cannot store. k6 scripts exist for local experiments. No load-test result is committed, and those thresholds are not a production SLA.",
    ],
    takeaway:
      "Split the path a person waits on from the path that records what they did. Give messages that cannot be stored a queue of their own.",
    stack: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "Redis",
      "RabbitMQ",
      "Actuator",
      "Docker Compose",
      "React",
      "Vite",
      "k6",
    ],
    imageAlt: "Architecture of ScaleURL from the API through Redis, PostgreSQL, and RabbitMQ",
    tier: "closing",
    plate: [
      { label: "Create", detail: "POST /api/v1/urls · Redis rate limit" },
      { label: "Redirect", detail: "Redis cache, then PostgreSQL · HTTP 302" },
      { label: "Publish", detail: "Click event, without blocking the response" },
      { label: "Worker", detail: "Insert, retry, then dead-letter" },
      { label: "Read", detail: "Analytics and a React dashboard of live meters" },
      { label: "Ready", detail: "Actuator health after Flyway migrations" },
    ],
    note: "No public URL. No load-test numbers are published with the project.",
  },
{
    id: "rag",
    index: "06",
    name: "RAG Document QA",
    kicker: "Hybrid retrieval over PDFs",
    summary:
      "Question answering over a PDF collection: chunk the documents, search with vectors and keywords, rerank, then answer from that context.",
    problem:
      "A language model can sound sure about a document it never opened. Private PDFs need a retrieval step before generation, or the answer is only as good as the model’s memory.",
    built:
      "The pipeline extracts PDF text, chunks it (fixed windows with overlap, and a structure-aware path), embeds chunks with Sentence Transformers all-MiniLM-L6-v2, and indexes them in FAISS. A question is retrieved with dense search and BM25, combined, then reranked. Gemini, or a compatible LLM API, answers from the retrieved chunks. A Streamlit app is the interface, and a question-answer set is used to evaluate retrieval. The app is deployed.",
    decisions: [
      "Dense search and BM25 are kept together because wording and exact terms fail in different places. A medical or policy PDF often needs the keyword, not only the nearest vector.",
      "Reranking is a separate stage after the first retrieval, so the model sees a shorter context than the raw candidate list.",
      "The generation step is instructed to answer from the retrieved chunks. That is the grounding this project actually implements.",
    ],
    takeaway:
      "Retrieval quality is the product. Generation can only be as careful as the chunks that were handed to it.",
    stack: [
      "Python",
      "Sentence Transformers",
      "FAISS",
      "BM25",
      "Gemini",
      "Streamlit",
    ],
    live: "https://rag-project-7u4g.onrender.com",
    github: "https://github.com/Nitheesha-1025/RAG",
    imageAlt: "Retrieval path from PDFs through hybrid search to an answer",
    tier: "closing",
    plate: [
      { label: "PDFs", detail: "Extract text, then chunk with overlap" },
      { label: "Embed", detail: "Sentence Transformers · all-MiniLM-L6-v2" },
      { label: "Index", detail: "FAISS" },
      { label: "Retrieve", detail: "Dense search together with BM25" },
      { label: "Rerank", detail: "A second pass over the candidates" },
      { label: "Answer", detail: "Gemini, using the retrieved chunks" },
    ],
  }
]

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python", "C", "JavaScript", "SQL"],
  },
  {
    title: "CS fundamentals",
    items: [
      "Data structures & algorithms",
      "Object-oriented programming",
      "DBMS",
      "Operating systems",
      "Computer networks",
      "REST APIs",
    ],
  },
  {
    title: "AI and machine learning",
    items: ["Machine learning", "Natural language processing", "Deep learning", "Large language models", "Retrieval-augmented generation"],
  },
  {
    title: "Frameworks and libraries",
    items: [
      "Scikit-learn",
      "Sentence Transformers",
      "FAISS",
      "FastAPI",
      "React",
      "Spring Boot",
      "Spring AI",
      "Streamlit",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
]

export const achievements = [
  {
    title: "NPTEL — Introduction to LLMs",
    detail: "Top 1% marks.",
    href: "https://drive.google.com/file/d/1q_QryiSC-R9jy-_3FdIgQJ0lUuhTYX4s/view?usp=drive_link",
    hrefLabel: "Certificate",
  },
  {
    title: "Guidewire Hackathon",
    detail: "Qualified for the semifinals. Top 20 teams on the leaderboard.",
  },
  {
    title: "NSS Certification",
    detail: "National Service Scheme.",
  },
]
