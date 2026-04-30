export type Lang = "en" | "ja" | "zh";

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English",  short: "EN" },
  { code: "ja", label: "日本語",    short: "JP" },
  { code: "zh", label: "简体中文",  short: "ZH" },
];

// ─── Type anchored on English ───────────────────────────────────────────────
const en = {
  nav: {
    features:    "Features",
    howItWorks:  "How it works",
    pricing:     "Pricing",
    about:       "About",
    bookDemo:    "Book Demo",
  },
  signIn:  "Try our beta",
  tryFree: "Try our beta",

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    badge:       "Private beta · Web",
    h1a:         "Your AI",
    h1b:         "Life Agent.",
    mission:     "We're building an AI that doesn't just talk — it gets real-world things done.",
    desc:        "Book restaurants, bridge language barriers, decode tax-refund steps, find what's nearby — all from one conversation.",
    cta:         "Try Ulypo free",
    howItWorks:  "How it works",
    stats: [
      { value: "7",      label: "AI Agents built in"         },
      { value: "30+",    label: "Languages live"             },
      { value: "1 chat", label: "Everything from one place"  },
    ],
    // Phone mockup
    phoneLabel:  "Ulypo AI",
    pills:       ["Restaurant","Hospital","Explorer","Translate","Booking"],
    msg1:        "Book me a quiet sushi place near Shibuya, Friday 7pm for two.",
    msg2:        "Found 3 options. Asuka has a counter table open at 7pm. Booked — confirmation sent.",
    msg3:        "Book Asuka.",
    booking:     "Booking…",
    confirm:     "✓  Booked — Asuka, Friday 7pm. Confirmation sent to your email.",
    placeholder: "Ask Ulypo anything…",
  },

  // ── Agent strip ───────────────────────────────────────────────────────────
  agentStrip: {
    label: "AI Agents",
    agents: [
      "Restaurant Reserve",
      "Hospital Reserve",
      "Japan Explorer",
      "Realtime Translation",
      "Find What You Want",
      "Web Booking",
      "Tax Refund Guide",
    ],
  },

  // ── Logos / actions ticker ────────────────────────────────────────────────
  logos: {
    heading: "Things Ulypo got done this week",
    actions: [
      "Booked Asuka · 7pm, Friday",
      "5-day Tokyo trip planned",
      "Hospital near Shinjuku found & booked",
      "JP→EN live translation active",
      "JR Pass reserved",
      "Tax refund tracked · ¥38,000",
      "Ramen in Sapporo found",
      "Dentist rescheduled + partner notified",
      "Headphones compared · best 3 picked",
      "Kyoto day trip route built",
    ],
  },

  // ── Agents section ────────────────────────────────────────────────────────
  agents: {
    chip: "Agents",
    h2:   "Seven specialists.\nOne conversation.",
    sub:  "Each agent is built for a specific real-world job — and they work together seamlessly.",
    items: [
      { name: "Restaurant Reserve",   desc: "Finds quiet sushi spots, reads Japanese menus, books and confirms." },
      { name: "Hospital Reserve",     desc: "Finds English-friendly clinics, books your slot, prepares a translated symptom sheet." },
      { name: "Japan Explorer",       desc: "Plans day trips, suggests off-the-beaten-path spots, adapts to weather and train delays." },
      { name: "Realtime Translation", desc: "30+ languages with live voice output and captions — taxis, shops, conversations." },
      { name: "Find What You Want",   desc: "Describe the item — Ulypo compares Amazon JP, Rakuten, Yodobashi and surfaces the best buy." },
      { name: "Web Booking",          desc: "Hotels, JR Pass, museum slots — Ulypo fills the forms, picks options, and asks before paying." },
      { name: "Tax Refund Guide",     desc: "Tracks eligible purchases, explains customs rules, walks you through the airport refund counter." },
    ],
  },

  // ── Features section ──────────────────────────────────────────────────────
  features: {
    chip: "Capabilities",
    h2:   "Everything in one conversation.",
    sub:  "Six powerful capabilities. One chat interface. No switching apps.",
    items: [
      { title: "Real-world actions",      desc: "Book restaurants, plan trips, find products, schedule appointments. Ulypo executes and confirms — it doesn't just suggest." },
      { title: "Live AI agent calls",     desc: "Voice-first, hands-free. Talk to your agent like a trusted friend — for planning, brainstorming, or thinking out loud." },
      { title: "Voice translation",       desc: "Speak any of 30+ languages and be understood instantly. Live captions and natural voice output — built for travel." },
      { title: "AI surprise videos",      desc: "Tell Ulypo the story — it creates a personalized video with music and overlays, ready to share in minutes." },
    ],
  },

  // ── How it works section ──────────────────────────────────────────────────
  howItWorks: {
    chip: "How it works",
    h2:   "From \"I wish someone would do this for me\"\n→ Ulypo does it.",
    steps: [
      { title: "Sign in",     desc: "Continue with Google. No password, no forms — 10 seconds and you're in." },
      { title: "Just ask",    desc: "Tell Ulypo what you need in plain language. Book, translate, plan, find — anything." },
      { title: "Ulypo acts",  desc: "Real bookings. Real follow-ups. You confirm before it charges a single credit." },
    ],
  },

  // ── Showcase section ──────────────────────────────────────────────────────
  showcase: {
    chip:    "In action",
    h2:      "Just ask.\nUlypo handles\nthe rest.",
    sub:     "Most AI gives you a wall of text. Ulypo books the table, plans the trip, and sends the confirmation. Every conversation ends with something actually done.",
    cta:     "See all capabilities",
    you:     "You",
    examples: [
      { you: "Book me a quiet sushi place near Shibuya, Friday 7pm for two.",    ulypo: "Found 3 spots. Asuka has a counter table free at 7pm. Booked — confirmation sent.",             tag: "Restaurant Reserve" },
      { you: "I need a doctor who speaks English near Shinjuku.",                ulypo: "Found a clinic with English staff. Booked for tomorrow 10am. Translated symptom sheet ready.", tag: "Hospital Reserve"  },
      { you: "Plan me 3 days in Kyoto. I like food and quiet temples.",          ulypo: "Day-by-day itinerary built. 2 restaurants pre-booked. Trains added to your calendar.",         tag: "Japan Explorer"    },
      { you: "How do I get my tax refund at Narita?",                            ulypo: "Here's exactly what to do at each counter — with your eligible receipts tracked.",             tag: "Tax Refund Guide"  },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: {
    chip: "Early users",
    h2:   "From \"wow\" to\n\"I can't go back.\"",
    items: [
      { quote: "I asked Ulypo to plan a Kyoto weekend and book the best ramen spot. It did both before my coffee was cold.",                        name: "Akari Tanaka",  role: "Designer · Tokyo"          },
      { quote: "Real-time voice translation in Ulypo means I never feel lost in Japan. Quietly my most-used app.",                                 name: "Aria Chen",     role: "Product lead · Singapore"  },
      { quote: "I had a rough week and asked Ulypo to find me a counselor I could talk to that night. Booked, confirmed, gentle.",                 name: "Rohan Mehta",   role: "Engineer · Bangalore"      },
      { quote: "The surprise video Ulypo made for my dad's 60th had us all in tears. I just told it the story.",                                   name: "Daniel Okafor", role: "Founder · Lagos"           },
    ],
  },

  // ── Pricing teaser ────────────────────────────────────────────────────────
  pricing: {
    chip:       "Pricing",
    h2:         "Free.\nNo credit card. No catch.",
    sub:        "Everything is free during our early access. Sign in and start using Ulypo — no payment required.",
    popular:    "",
    tiers: [
      {
        name:    "Early Access",
        price:   "$0",
        period:  "forever",
        desc:    "Full access to every feature. No card, no trial, no catch.",
        features: ["AI agent chat","Real-world actions","AI surprise videos","Live AI agent calls","Voice translation (30+ languages)"],
        cta:     "Get started — it's free",
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    chip: "FAQ",
    h2:   "Questions, answered.",
    items: [
      { q: "What can Ulypo actually do?",        a: "Ulypo books restaurants, plans trips, finds and compares products, schedules counselor sessions, generates AI surprise videos, runs live AI agent calls, and translates conversations in real time — all from a single chat." },
      { q: "How is it different from ChatGPT?",  a: "Most AI chats answer questions. Ulypo takes action. When you ask it to book Asuka at 7pm, it actually books Asuka at 7pm and confirms it back. Less reading, more done." },
      { q: "Is Ulypo really free?",               a: "Yes — completely free during early access. No credit card, no trial, no catch. Every feature is available from day one." },
      { q: "Which languages does Ulypo support?",a: "30+ languages with real-time voice translation. Japanese-first, with natural voice output and live captions. Switch language any time from settings." },
      { q: "Which platforms can I use it on?",   a: "Ulypo is currently available on the web. iOS and Android apps are coming soon." },
      { q: "Is my data private?",                a: "Always. We use end-to-end encryption and never train on your personal data. Your conversations and bookings belong only to you." },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    badge:    "Free during early access",
    h2a:     "Your AI Life Agent",
    h2b:     "is ready.",
    sub:     "Sign in with one tap. Everything is free — no card, no trial, no limits.",
    primary: "Try Ulypo free",
    ghost:   "See what's included",
    platforms: ["Web","iOS coming soon","Android coming soon","Always free"],
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Ulypo is your AI Life Agent — books, translates, plans, and acts from one conversation.",
    tryFree: "Try our beta",
    columns: [
      { title: "Product",  links: [{ href: "/features", label: "Features" },{ href: "/how-it-works", label: "How it works" },{ href: "/pricing", label: "Pricing" }] },
      { title: "Company",  links: [{ href: "/about", label: "About" },{ href: "/contact", label: "Contact" }] },
      { title: "Legal",    links: [{ href: "/privacy", label: "Privacy" },{ href: "/terms", label: "Terms" }] },
    ],
    rights: "All rights reserved.",
  },

  // ── Book Demo page ────────────────────────────────────────────────────────
  demo: {
    eyebrow:            "Book a Demo",
    title:              "See Ulypo in action",
    description:        "Schedule a personalised walkthrough with our team. We'll show you exactly how Ulypo fits your workflow.",
    nameLabel:          "Your name",
    emailLabel:         "Work email",
    companyLabel:       "Company",
    roleLabel:          "Your role",
    messageLabel:       "What do you want to see?",
    namePlaceholder:    "Jane Doe",
    emailPlaceholder:   "jane@example.com",
    companyPlaceholder: "Acme Corp",
    rolePlaceholder:    "Product Manager",
    messagePlaceholder: "Tell us your use case or any specific questions…",
    submit:             "Request a demo",
    successTitle:       "You're booked in.",
    successBody:        "We'll confirm your slot within one business day.",
  },

  // ── Features page ─────────────────────────────────────────────────────────
  featuresPage: {
    eyebrow: "Features",
    title:   "An AI agent that actually takes action.",
    desc:    "7 specialized agents in one conversation. Book, translate, plan, find — Ulypo handles the real-world details so you don't have to.",
    deepFeatures: [
      { title: "The action engine",          desc: "Tell it what you want — book, plan, find, pay, message — and it carries the action through to a real result.",                                 bullets: ["Restaurant reservations & confirmations","Travel: flights, hotels, day plans","Product research & comparisons","Always shows the plan before it acts"] },
      { title: "AI surprise videos",         desc: "Ulypo turns a story you tell into a polished, personalized video — perfect for birthdays and thank-yous.",                                      bullets: ["Custom instrumental music","Text overlays with zoom","Ready to share in minutes"] },
      { title: "Live AI agent calls",        desc: "Voice-first, hands-free. Talk to your agent like a trusted friend — planning, brainstorming, or just thinking out loud.",                      bullets: ["Hands-free voice conversations","Works through Bluetooth & CarPlay","First minute always free"] },
      { title: "Real-time voice translation",desc: "30+ languages with live captions and natural voice output — built for travel and global teams.",                                                bullets: ["30+ languages supported","Live captions on any call","Natural-sounding voice output"] },
      { title: "Counselor & peer support",   desc: "Ulypo connects you with licensed counselors and peer supporters — booked through the same chat.",                                              bullets: ["Licensed counselor matching","Same-day session booking","Concierge booking on us"] },
      { title: "Credits & transparency",     desc: "Every action has a clear, posted price. You see the cost before Ulypo acts. No surprise charges.",                                             bullets: ["Price shown before every action","Credits never expire","Cancel anytime, keep your data"] },
    ],
  },

  // ── About page ────────────────────────────────────────────────────────────
  aboutPage: {
    eyebrow: "About",
    title:   "Everyone deserves an AI that actually does things.",
    desc:    "Ulypo is a small, global team of designers, engineers, and creators building a new kind of AI — one that books, plans, creates, and follows through, so you can focus on what truly matters.",
    storyHeading: "Our story",
    story: [
      "We watched the AI revolution arrive — and felt let down. Chatbots could write essays but couldn't book a table. Assistants gave instructions instead of taking action. Every shiny new model traded our time for more reading. We wanted an agent that earned its keep.",
      "So we built Ulypo. An AI Life Agent that actually books, plans, calls, creates, and translates — all from one conversation. Born in Tokyo, multi-language by default, designed for the real messiness of life.",
      "Our mission is simple: every person should own an AI Life Agent that helps them unlock their potential and focus on what truly matters. We're early, we're listening, and we'd love for you to join us.",
    ],
    valuesChip:    "What we believe",
    valuesHeading: "Our values, in plain words.",
    values: [
      { title: "Action over advice",    desc: "If our agent can take the next step for you, it should. We measure ourselves on actions completed — not messages exchanged." },
      { title: "Your data is yours",    desc: "We don't train on your data, sell it, or share it. End-to-end encryption is the floor, not the ceiling." },
      { title: "Calm, capable, kind",   desc: "We design for human attention. Ulypo speaks less and does more — patient with your day, never noisy." },
      { title: "Built for everyone",    desc: "Multi-language by default, accessible by design, priced by usage. An AI Life Agent should not be a luxury." },
    ],
    teamChip:    "Team",
    teamHeading: "The humans behind Ulypo.",
    team: [
      { name: "Akari Tanaka",   role: "Co-founder & CEO"          },
      { name: "Daniel Okafor", role: "Co-founder & CTO"          },
      { name: "Aria Chen",      role: "Head of Design"            },
      { name: "Rohan Mehta",    role: "Head of AI"                },
      { name: "Sara Klein",     role: "Head of Research"          },
      { name: "Leo Nakamura",   role: "Head of Trust & Privacy"   },
    ],
  },

  // ── How it works page ─────────────────────────────────────────────────────
  howItWorksPage: {
    eyebrow: "How it works",
    title:   "From \"I wish someone would do this for me\" → Ulypo does it.",
    desc:    "Ulypo isn't a chatbot. It's an AI agent that can take real-world action on your behalf — and show you exactly what it did, every step of the way.",
    anatomyChip:    "Anatomy of one ask",
    anatomyHeading: "What \"Book me dinner\" really looks like.",
    anatomyBody:    "Behind every confirmation is a chain of careful steps — search, compare, propose, confirm, execute. You see it. You approve it. Ulypo does the rest.",
    flow: [
      { label: "You",            text: "Find me a sushi place in Shibuya for Friday 7pm, around ¥15,000.",                                                       badge: "" },
      { label: "Ulypo searches", text: "Compares restaurants, checks availability, reads reviews, filters by your taste.",                                         badge: "0.4s" },
      { label: "Ulypo proposes", text: "3 quiet sushi spots near you · Asuka has the best counter availability.",                                                  badge: "Awaiting confirm" },
      { label: "You",            text: "Book Asuka, 7pm, for two.",                                                                                               badge: "" },
      { label: "Ulypo acts",     text: "Reservation made · email confirmation sent · calendar event added · reminder set.",                                        badge: "Done" },
    ],
    pillarsChip:    "Four ideas, in plain English",
    pillarsHeading: "The agent feels obvious — until you try it.",
    pillars: [
      { title: "Talk to it like a friend",  desc: "Voice or text. English, Japanese, Hindi, Spanish — 30+ languages, with real-time translation built in." },
      { title: "It plans, you approve",     desc: "Ulypo always shows you what it's about to do — booking, sending, paying — and waits for your green light." },
      { title: "Then it actually does it",  desc: "Real bookings. Real videos. Real follow-ups. Receipts and confirmations land in your inbox." },
      { title: "It learns your taste",      desc: "Over time, Ulypo gets sharper — your favorite cuisines, your travel style, the people you care about." },
    ],
  },

  // ── Pricing page ──────────────────────────────────────────────────────────
  pricingPage: {
    eyebrow: "Pricing",
    title:   "Free during early access.",
    desc:    "Everything is free right now. No credit card, no trial period, no hidden charges. Sign in and use every feature.",
    tableHeading: "What's included",
    tableSub:     "Everything below is free during early access.",
    tableColAction: "Feature",
    tableColCost:   "Cost",
    tableColNote:   "Note",
    tableNote: "Pricing may be introduced in the future. We'll give you plenty of notice before anything changes.",
    costs: [
      { feature: "Agent chat (text)",                             cost: "Free",  note: "Unlimited"                      },
      { feature: "Real-world actions (booking, purchase, message)",cost: "Free", note: "Confirmed before every action"  },
      { feature: "Surprise AI video",                             cost: "Free",  note: "Personalized video generation"  },
      { feature: "Live AI agent call",                            cost: "Free",  note: "Voice-first, hands-free"        },
      { feature: "Real-time voice translation",                   cost: "Free",  note: "30+ languages supported"        },
    ],
  },

  // ── Contact page ──────────────────────────────────────────────────────────
  contactPage: {
    eyebrow: "Contact",
    title:   "Say hello.",
    desc:    "We read every message. Tell us what's on your mind — feedback, questions, ideas, or partnership requests.",
    emailCardTitle:  "Email us",
    emailCardDesc:   "Fastest path for support questions and product feedback.",
    pressCardTitle:  "Press",
    pressCardDesc:   "Working on a story about AI agents or wellbeing? We'd love to chat.",
    hoursCardTitle:  "Office hours",
    hoursCardDesc:   "We host weekly community office hours every Thursday at 4pm IST. Drop by and say hi.",
    reasons: ["General question","Press & media","Partnership","Careers","Privacy & security"],
    nameLabel:          "Your name",
    emailLabel:         "Email",
    reasonLabel:        "What can we help with?",
    messageLabel:       "Message",
    namePlaceholder:    "Jane Doe",
    emailPlaceholder:   "jane@example.com",
    messagePlaceholder: "Tell us what's on your mind…",
    submit:             "Send message",
    privacy:            "By submitting, you agree to our privacy policy. We'll never share your details.",
    successTitle:       "Got it — thank you.",
    successBody:        "We'll be in touch within one business day.",
  },
};

type Translations = typeof en;

// ─── Japanese ────────────────────────────────────────────────────────────────
const ja: Translations = {
  nav: {
    features:    "機能",
    howItWorks:  "仕組み",
    pricing:     "料金",
    about:       "会社概要",
    bookDemo:    "デモを予約",
  },
  signIn:  "サインイン",
  tryFree: "無料で試す",

  hero: {
    badge:       "プライベートベータ · iOS、Android & Web",
    h1a:         "あなたの AI",
    h1b:         "ライフエージェント。",
    mission:     "話すだけでなく、実際に動くAIを作っています。",
    desc:        "レストラン予約、言語の壁を突破、税還付ステップを解説、近くを発見 — 1つの会話からすべて。",
    cta:         "Ulypoを無料で試す",
    howItWorks:  "仕組みを見る",
    stats: [
      { value: "7",        label: "組み込みAIエージェント"  },
      { value: "30+",      label: "対応言語"               },
      { value: "1つの会話", label: "すべてを一か所で"       },
    ],
    phoneLabel:  "Ulypo AI",
    pills:       ["レストラン","病院","探索","翻訳","予約"],
    msg1:        "渋谷近くで静かな寿司屋を金曜19時、2名で予約して。",
    msg2:        "3か所見つけました。飛鳥が19時にカウンター席あります。予約完了 — 確認メール送信済み。",
    msg3:        "飛鳥を予約して。",
    booking:     "予約中…",
    confirm:     "✓  予約完了 — 飛鳥、金曜19時。確認メールをお送りしました。",
    placeholder: "Ulypoに何でも聞いて…",
  },

  agentStrip: {
    label: "AIエージェント",
    agents: [
      "レストラン予約",
      "病院予約",
      "日本エクスプローラー",
      "リアルタイム翻訳",
      "欲しいものを探す",
      "Webで予約",
      "税還付ガイド",
    ],
  },

  logos: {
    heading: "今週Ulypoが完了したこと",
    actions: [
      "飛鳥を予約 · 金曜19時",
      "5日間の東京旅行を計画",
      "新宿近くの病院を見つけて予約",
      "JP→EN ライブ翻訳アクティブ",
      "JRパスを予約",
      "税還付を追跡 · ¥38,000",
      "札幌のラーメンを発見",
      "歯医者を変更しパートナーに通知",
      "ヘッドフォンを比較・ベスト3を選択",
      "京都日帰り旅ルートを作成",
    ],
  },

  agents: {
    chip: "エージェント",
    h2:   "7つのスペシャリスト。\n1つの会話。",
    sub:  "各エージェントは特定の実世界の仕事のために構築されており、シームレスに連携します。",
    items: [
      { name: "レストラン予約",       desc: "静かな寿司屋を見つけ、日本語のメニューを読み、予約と確認をします。" },
      { name: "病院予約",             desc: "英語対応クリニックを見つけ、予約を取り、翻訳された症状シートを準備します。" },
      { name: "日本エクスプローラー", desc: "日帰り旅行を計画し、穴場スポットを提案、天気や電車の遅延にも適応します。" },
      { name: "リアルタイム翻訳",     desc: "30以上の言語でライブ音声出力とキャプション — タクシー、店舗、会話に最適。" },
      { name: "欲しいものを探す",     desc: "商品を説明するだけ — UlypoがAmazon JP、楽天、ヨドバシを比較して最良の買い物を提案。" },
      { name: "Webで予約",            desc: "ホテル、JRパス、美術館 — Ulypoがフォームを入力し、支払い前に確認します。" },
      { name: "税還付ガイド",         desc: "対象購入品を追跡し、税関規則を説明、空港の免税カウンターをナビゲート。" },
    ],
  },

  features: {
    chip: "機能",
    h2:   "すべてを1つの会話で。",
    sub:  "6つの強力な機能。1つのチャット。アプリ切り替え不要。",
    items: [
      { title: "リアルな行動",               desc: "レストランの予約、旅行の計画、商品の検索、予約のスケジュール。Ulypoは実行して確認します — 提案するだけではありません。" },
      { title: "ライブAIエージェント通話",   desc: "音声ファースト、ハンズフリー。信頼できる友人のようにエージェントと話せます — 計画、ブレインストーミング、または声に出して考えるために。" },
      { title: "音声翻訳",                   desc: "30以上の言語を話して瞬時に理解されます。ライブキャプションと自然な音声出力 — 旅行向け。" },
      { title: "AIサプライズビデオ",         desc: "ストーリーをUlypoに伝えると、音楽とオーバーレイ付きの個人化されたビデオを数分で作成して共有できます。" },
      { title: "カウンセラーコンシェルジュ", desc: "人生が辛くなったとき、Ulypoは同じ会話を通じてライセンス取得済みカウンセラーとつなぎます。" },
      { title: "アクション単位の支払い",     desc: "クレジットで予約、通話、ビデオを購入します。Ulypoが行動する前に明確な価格が表示されます。サブスクリプション不要。" },
    ],
  },

  howItWorks: {
    chip: "仕組み",
    h2:   "「誰かにやってもらえれば」\nが「完了」になる。",
    steps: [
      { title: "サインイン",       desc: "Googleで続ける。パスワードなし、フォームなし — 10秒でログイン。" },
      { title: "話しかけるだけ",   desc: "普通の言葉でUlypoに必要なことを伝えてください。予約、翻訳、計画、検索 — 何でも。" },
      { title: "Ulypoが動く",      desc: "リアルな予約。リアルなフォローアップ。クレジットを1つ使う前に確認します。" },
    ],
  },

  showcase: {
    chip:    "実際の動作",
    h2:      "聞くだけ。\nあとはUlypoが\n処理します。",
    sub:     "ほとんどのAIはテキストの壁を与えます。Ulypoはテーブルを予約し、旅行を計画し、確認を送ります。すべての会話は実際に完了することで終わります。",
    cta:     "すべての機能を見る",
    you:     "あなた",
    examples: [
      { you: "渋谷近く、金曜19時、2名の静かな寿司屋を予約して。",     ulypo: "3か所見つけました。飛鳥は19時にカウンター席が空いています。予約完了 — 確認メール送信済み。",                   tag: "レストラン予約" },
      { you: "新宿近くで英語が通じる医者が必要。",                    ulypo: "英語スタッフのいるクリニックを見つけました。明日10時に予約しました。翻訳済みの症状シートが準備できています。",   tag: "病院予約" },
      { you: "京都で3日間の計画を立てて。食べ物と静かな寺が好き。",   ulypo: "日ごとの旅程を作成。2か所のレストランを事前予約。電車をカレンダーに追加しました。",                         tag: "日本エクスプローラー" },
      { you: "成田での税還付の方法は？",                              ulypo: "各カウンターで何をすべきか正確にお伝えします — 対象レシートも追跡済み。",                                    tag: "税還付ガイド" },
    ],
  },

  testimonials: {
    chip: "初期ユーザー",
    h2:   "「すごい」から\n「もう戻れない」まで。",
    items: [
      { quote: "Ulypoに京都の週末を計画してもらい、最高のラーメン屋を予約してもらいました。コーヒーが冷めるよりも早く両方できました。",               name: "Akari Tanaka",  role: "デザイナー · 東京"          },
      { quote: "UlypoのリアルタイムVoice翻訳のおかげで日本で迷子になることがありません。こっそり一番使うアプリです。",                             name: "Aria Chen",     role: "プロダクトリード · シンガポール" },
      { quote: "つらい週で、その夜に話せるカウンセラーを見つけてほしいとUlypoに頼みました。予約済み、確認済み、親切でした。",                       name: "Rohan Mehta",   role: "エンジニア · バンガロール"      },
      { quote: "父の60歳の誕生日にUlypoが作ったサプライズビデオで全員泣きました。ストーリーを伝えただけです。",                                     name: "Daniel Okafor", role: "創業者 · ラゴス"             },
    ],
  },

  pricing: {
    chip:    "料金",
    h2:      "行動に対して支払う。\n約束ではなく。",
    sub:     "すべてのアクションには明確な価格があります。Ulypoが行動する前に費用を確認できます。",
    popular: "最も人気",
    tiers: [
      {
        name:    "無料",
        price:   "$0",
        period:  "から始める",
        desc:    "サインアップ時に25クレジット付与。カードなしで全機能を試せます。",
        features: ["AIエージェントチャット","リアルな行動（制限あり）","サプライズビデオ 1件","音声翻訳 · 30分"],
        cta:     "始める",
      },
      {
        name:    "コンパニオン",
        price:   "$14",
        period:  "/ 月",
        desc:    "毎月500クレジット。完全なUlypo体験。",
        features: ["無制限のエージェントチャット","リアルな予約","サプライズビデオ 10件/月","ライブAI通話 · 5時間","音声翻訳","カウンセラーコンシェルジュ"],
        cta:     "14日間トライアルを開始",
      },
      {
        name:    "トップアップ",
        price:   "$5",
        period:  "/ 100クレジット",
        desc:    "サブスクリプション不要。行動に応じた料金のみ。",
        features: ["1クレジット ≈ 1つの素早い行動","サプライズビデオ · 20クレジット","ライブAI通話 · 5クレジット/分","翻訳 · 2クレジット/分","クレジットは無期限"],
        cta:     "クレジットを購入",
      },
    ],
  },

  faq: {
    chip: "よくある質問",
    h2:   "質問にお答えします。",
    items: [
      { q: "Ulypoは実際に何ができますか？",          a: "Ulypoはレストランの予約、旅行の計画、商品の検索と比較、カウンセラーセッションのスケジュール設定、AIサプライズビデオの生成、ライブAIエージェント通話の実行、リアルタイムでの会話翻訳ができます — すべて1つのチャットから。" },
      { q: "ChatGPTとの違いは何ですか？",            a: "ほとんどのAIチャットは質問に答えます。Ulypoは行動を取ります。「飛鳥を19時に予約して」と頼むと、本当に19時に飛鳥を予約して確認を返します。読む量が減り、実際に完了します。" },
      { q: "クレジットシステムはどのように機能しますか？", a: "すべての行動には固定クレジット数がかかります — Ulypoが行動する前に表示されます。サインアップ時に25クレジット無料、毎月のバンドルを定期購読、または必要なときだけトップアップ。クレジットは無期限です。" },
      { q: "Ulypoはどの言語に対応していますか？",    a: "30以上の言語でリアルタイム音声翻訳。日本語ファーストで、自然な音声出力とライブキャプション。設定からいつでも言語を変更できます。" },
      { q: "どのプラットフォームで使えますか？",      a: "iOS、Android、Web。Ulypoをホーム画面に追加すると、ネイティブPWAとして動作します — オフライン対応、フルスクリーン、即時起動。" },
      { q: "データのプライバシーは守られますか？",    a: "常に保護されています。エンドツーエンド暗号化を使用し、個人データでトレーニングしたり、販売したり、共有したりしません。会話と予約はあなただけのものです。" },
    ],
  },

  cta: {
    badge:    "クレジットカード不要",
    h2a:     "AIライフエージェントが",
    h2b:     "準備できました。",
    sub:     "ワンタップでサインイン。最初の25クレジットは無料 — カード不要で全エージェントをお試しください。",
    primary: "Ulypoを無料で試す",
    ghost:   "料金を見る",
    platforms: ["iOS","Android","Web","クレジットカード不要"],
  },

  footer: {
    tagline: "UlypoはあなたのAIライフエージェント — 1つの会話から予約、翻訳、計画、行動します。",
    tryFree: "無料で試す",
    columns: [
      { title: "プロダクト",  links: [{ href: "/features", label: "機能" },{ href: "/how-it-works", label: "仕組み" },{ href: "/pricing", label: "料金" }] },
      { title: "会社",        links: [{ href: "/about", label: "会社概要" },{ href: "/contact", label: "お問い合わせ" }] },
      { title: "法律",        links: [{ href: "/privacy", label: "プライバシー" },{ href: "/terms", label: "利用規約" }] },
    ],
    rights: "全著作権所有。",
  },

  demo: {
    eyebrow:            "デモを予約",
    title:              "Ulypoを体験してみましょう",
    description:        "チームによる個別ウォークスルーをご予約ください。Ulypoがあなたのワークフローにどう合うかお見せします。",
    nameLabel:          "お名前",
    emailLabel:         "メールアドレス",
    companyLabel:       "会社名",
    roleLabel:          "役職",
    messageLabel:       "何を見たいですか？",
    namePlaceholder:    "田中 太郎",
    emailPlaceholder:   "taro@example.com",
    companyPlaceholder: "株式会社サンプル",
    rolePlaceholder:    "プロダクトマネージャー",
    messagePlaceholder: "ユースケースや質問をお書きください…",
    submit:             "デモをリクエスト",
    successTitle:       "予約完了しました。",
    successBody:        "1営業日以内にご確認のご連絡を差し上げます。",
  },

  featuresPage: {
    eyebrow: "機能",
    title:   "実際に行動するAIエージェント。",
    desc:    "1つの会話で7つの専門エージェント。予約、翻訳、計画、検索 — Ulypoが実世界の詳細を処理します。",
    deepFeatures: [
      { title: "アクションエンジン",          desc: "やりたいことを伝えて — 予約、計画、検索、支払い、メッセージ — 実際の結果まで実行します。",                    bullets: ["レストランの予約と確認","旅行：フライト、ホテル、日程","商品のリサーチと比較","行動前に必ず計画を表示"] },
      { title: "AIサプライズビデオ",           desc: "Ulypoはあなたが伝えたストーリーを洗練された個人化されたビデオに変換します — 誕生日やお礼に最適。",              bullets: ["カスタムインストゥルメンタルミュージック","ズーム付きテキストオーバーレイ","数分で共有準備完了"] },
      { title: "ライブAIエージェント通話",     desc: "音声ファースト、ハンズフリー。信頼できる友人のようにエージェントと話せます。",                               bullets: ["ハンズフリー音声会話","BluetoothとCarPlay対応","最初の1分間は常に無料"] },
      { title: "リアルタイム音声翻訳",         desc: "30以上の言語でライブキャプションと自然な音声出力 — 旅行とグローバルチームに最適。",                           bullets: ["30以上の言語対応","あらゆる通話でライブキャプション","自然な音声出力"] },
      { title: "カウンセラーとピアサポート",   desc: "Ulypoはライセンス取得済みのカウンセラーとピアサポーターをつなぎます — 同じチャットで予約。",                  bullets: ["ライセンス取得済みカウンセラーのマッチング","当日セッション予約","予約コンシェルジュは無料"] },
      { title: "クレジットと透明性",           desc: "すべてのアクションには明確な価格があります。Ulypoが行動する前に費用を確認できます。",                         bullets: ["すべてのアクション前に価格を表示","クレジットは無期限","いつでもキャンセル、データは保持"] },
    ],
  },

  aboutPage: {
    eyebrow: "会社概要",
    title:   "すべての人が実際に動くAIを持つべきです。",
    desc:    "Ulypoは、デザイナー、エンジニア、クリエイターからなる小さなグローバルチームで、新しい種類のAIを構築しています。",
    storyHeading: "私たちのストーリー",
    story: [
      "AI革命が到来するのを見てきました — そして失望しました。チャットボットはエッセイを書けましたが、テーブルを予約できませんでした。アシスタントは行動を取る代わりに指示を出しました。すべての新しいモデルが読むことに私たちの時間を費やしました。私たちは価値を発揮するエージェントを求めていました。",
      "そこでUlypoを作りました。予約、計画、通話、作成、翻訳を実際に行うAIライフエージェント — すべて1つの会話から。東京生まれ、デフォルトで多言語、実際の人生の混乱のためにデザインされています。",
      "私たちのミッションはシンプルです：すべての人が自分の可能性を解放し、本当に大切なことに集中できるAIライフエージェントを持つべきです。私たちはまだ初期段階で、皆さんの声を聞いています。ぜひ仲間に加わってください。",
    ],
    valuesChip:    "私たちが信じること",
    valuesHeading: "私たちの価値観、率直な言葉で。",
    values: [
      { title: "アドバイスよりアクション", desc: "エージェントが次のステップを取れるなら、そうすべきです。交わされたメッセージではなく、完了したアクションで自分たちを測ります。" },
      { title: "データはあなたのもの",     desc: "あなたのデータでトレーニングせず、売らず、共有しません。エンドツーエンド暗号化は最低限であり、最高限ではありません。" },
      { title: "穏やか、有能、親切",       desc: "私たちは人間の注意力のためにデザインします。Ulypoはより少なく話し、より多く行い — あなたの一日に忍耐強く、決してうるさくありません。" },
      { title: "すべての人のために",       desc: "デフォルトで多言語、デザインでアクセシブル、使用量で価格設定。AIライフエージェントはぜいたく品であってはなりません。" },
    ],
    teamChip:    "チーム",
    teamHeading: "Ulypoを作った人間たち。",
    team: [
      { name: "Akari Tanaka",   role: "共同創業者 & CEO"          },
      { name: "Daniel Okafor", role: "共同創業者 & CTO"          },
      { name: "Aria Chen",      role: "デザイン責任者"            },
      { name: "Rohan Mehta",    role: "AI責任者"                  },
      { name: "Sara Klein",     role: "リサーチ責任者"            },
      { name: "Leo Nakamura",   role: "信頼 & プライバシー責任者" },
    ],
  },

  howItWorksPage: {
    eyebrow: "仕組み",
    title:   "「誰かにやってほしい」から「完了」まで — 1つのチャットで。",
    desc:    "Ulypoはチャットボットではありません。実世界でアクションを取れるAIエージェントです — すべてのステップを正確に表示します。",
    anatomyChip:    "一つの依頼の解剖学",
    anatomyHeading: "「夕食を予約して」が実際にどんな見た目か。",
    anatomyBody:    "すべての確認の裏には慎重なステップのチェーンがあります — 検索、比較、提案、確認、実行。あなたはそれを見ます。承認します。Ulypoが残りをやります。",
    flow: [
      { label: "あなた",         text: "渋谷で金曜19時、約15,000円の寿司屋を見つけて。",                                   badge: "" },
      { label: "Ulypoが検索",    text: "レストランを比較、空き状況を確認、レビューを読み、好みでフィルタリング。",          badge: "0.4秒" },
      { label: "Ulypoが提案",    text: "近くの静かな寿司屋3か所 · 飛鳥が最高のカウンター席を持っています。",               badge: "確認待ち" },
      { label: "あなた",         text: "飛鳥、19時、2名で予約して。",                                                        badge: "" },
      { label: "Ulypoが行動",    text: "予約完了 · 確認メール送信 · カレンダーイベント追加 · リマインダー設定。",            badge: "完了" },
    ],
    pillarsChip:    "4つのアイデア、わかりやすく",
    pillarsHeading: "使ってみるまで当たり前のように感じるエージェント。",
    pillars: [
      { title: "友達のように話しかけて",   desc: "音声またはテキスト。英語、日本語、ヒンディー語、スペイン語 — 30以上の言語、リアルタイム翻訳内蔵。" },
      { title: "計画はUlypo、承認はあなた",desc: "Ulypoは常に何をしようとしているかを見せます — 予約、送信、支払い — そしてあなたのゴーサインを待ちます。" },
      { title: "そして実際にやります",     desc: "リアルな予約。リアルなビデオ。リアルなフォローアップ。領収書と確認があなたの受信トレイに届きます。" },
      { title: "あなたの好みを学びます",   desc: "時間が経つにつれて、Ulypoはより賢くなります — あなたの好みの料理、旅行スタイル、大切な人たち。" },
    ],
  },

  pricingPage: {
    eyebrow: "料金",
    title:   "正直なクレジット。隠れた請求なし。",
    desc:    "すべてのアクション — 予約、ビデオ、通話、翻訳 — は固定クレジット数がかかります。Ulypoが行動する前に価格を確認できます。常に。",
    tableHeading: "各機能のコスト",
    tableSub:     "使用するすべてのクレジットのクイックリファレンス。",
    tableColAction: "機能",
    tableColCost:   "費用",
    tableColNote:   "備考",
    tableNote: "クレジットは無期限です。残高と購入履歴はいつでもアプリ内で確認できます。",
    costs: [
      { feature: "エージェントチャット（テキスト）",          cost: "無料",           note: "コンパニオンで無制限"      },
      { feature: "リアルな行動（予約、購入、メッセージ）",    cost: "1〜3クレジット", note: "請求前に確認"              },
      { feature: "AIサプライズビデオ",                        cost: "20クレジット",   note: "≈ ビデオ1件あたり$1"      },
      { feature: "ライブAIエージェント通話",                  cost: "5クレジット / 分",note: "最初の1分は常に無料"      },
      { feature: "リアルタイム音声翻訳",                      cost: "2クレジット / 分",note: "30以上の言語対応"         },
      { feature: "カウンセラー予約コンシェルジュ",            cost: "無料",           note: "カウンセラー料金のみ"      },
    ],
  },

  contactPage: {
    eyebrow: "お問い合わせ",
    title:   "こんにちは。",
    desc:    "すべてのメッセージを読んでいます。フィードバック、質問、アイデア、パートナーシップのリクエストなど、何でもお聞かせください。",
    emailCardTitle:  "メールで問い合わせ",
    emailCardDesc:   "サポートの質問やフィードバックに最速の方法です。",
    pressCardTitle:  "プレス",
    pressCardDesc:   "AIエージェントやウェルビーイングに関する記事を書いていますか？ぜひお話ししましょう。",
    hoursCardTitle:  "オフィスアワー",
    hoursCardDesc:   "毎週木曜日16時（IST）にコミュニティオフィスアワーを開催しています。",
    reasons: ["一般的な質問","プレス・メディア","パートナーシップ","採用","プライバシー・セキュリティ"],
    nameLabel:          "お名前",
    emailLabel:         "メールアドレス",
    reasonLabel:        "どのようなご用件ですか？",
    messageLabel:       "メッセージ",
    namePlaceholder:    "田中 太郎",
    emailPlaceholder:   "taro@example.com",
    messagePlaceholder: "ご意見をお聞かせください…",
    submit:             "メッセージを送信",
    privacy:            "送信することで、プライバシーポリシーに同意したことになります。詳細を共有することはありません。",
    successTitle:       "承りました — ありがとうございます。",
    successBody:        "1営業日以内にご連絡いたします。",
  },
};

// ─── Chinese ─────────────────────────────────────────────────────────────────
const zh: Translations = {
  nav: {
    features:    "功能",
    howItWorks:  "工作原理",
    pricing:     "定价",
    about:       "关于我们",
    bookDemo:    "预约演示",
  },
  signIn:  "登录",
  tryFree: "免费试用",

  hero: {
    badge:       "私测版 · iOS、Android & Web",
    h1a:         "您的 AI",
    h1b:         "生活助手。",
    mission:     "我们正在构建一个不只是对话、而是真正完成事情的AI。",
    desc:        "预订餐厅、打破语言障碍、解码退税步骤、发现附近好去处 — 一次对话，搞定一切。",
    cta:         "免费试用Ulypo",
    howItWorks:  "了解工作原理",
    stats: [
      { value: "7",       label: "内置AI代理"    },
      { value: "30+",     label: "支持语言"      },
      { value: "1次对话", label: "一处搞定一切"  },
    ],
    phoneLabel:  "Ulypo AI",
    pills:       ["餐厅","医院","探索","翻译","预订"],
    msg1:        "帮我在涩谷附近订一家安静的寿司店，周五晚7点，两人。",
    msg2:        "找到3个选择。飞鸟7点有吧台位置。已预订 — 确认已发送。",
    msg3:        "预订飞鸟。",
    booking:     "预订中…",
    confirm:     "✓  已预订 — 飞鸟，周五晚7点。确认已发送到您的邮箱。",
    placeholder: "向Ulypo提问…",
  },

  agentStrip: {
    label: "AI代理",
    agents: [
      "餐厅预订",
      "医院预订",
      "日本探索",
      "实时翻译",
      "找到你想要的",
      "网上预订",
      "退税指南",
    ],
  },

  logos: {
    heading: "Ulypo本周完成的事",
    actions: [
      "预订飞鸟 · 周五晚7点",
      "规划5天东京之旅",
      "找到并预订新宿附近医院",
      "JP→EN 实时翻译激活",
      "预订JR Pass",
      "追踪退税 · ¥38,000",
      "发现札幌拉面店",
      "重新预约牙医并通知伴侣",
      "耳机比较 · 选出最佳3款",
      "构建京都一日游路线",
    ],
  },

  agents: {
    chip: "代理",
    h2:   "七位专家。\n一次对话。",
    sub:  "每个代理专为特定的现实任务构建，并无缝协作。",
    items: [
      { name: "餐厅预订",   desc: "找到安静的寿司店，阅读日文菜单，预订并确认。" },
      { name: "医院预订",   desc: "找到英语友好诊所，预约您的时段，准备翻译好的症状说明。" },
      { name: "日本探索",   desc: "规划一日游，推荐冷门景点，适应天气和列车延误。" },
      { name: "实时翻译",   desc: "支持30+语言，实时语音输出和字幕 — 适用于出租车、商店、对话。" },
      { name: "找到你想要的",desc: "描述物品 — Ulypo比较亚马逊JP、乐天、Yodobashi，推荐最佳购买。" },
      { name: "网上预订",   desc: "酒店、JR Pass、博物馆门票 — Ulypo填写表单，付款前征求确认。" },
      { name: "退税指南",   desc: "追踪符合条件的购买，解释海关规定，引导您完成机场退税流程。" },
    ],
  },

  features: {
    chip: "功能",
    h2:   "一次对话，搞定一切。",
    sub:  "六大强大功能。一个聊天界面。无需切换应用。",
    items: [
      { title: "真实操作",       desc: "预订餐厅、规划行程、寻找产品、安排预约。Ulypo执行并确认 — 不只是建议。" },
      { title: "实时AI代理通话", desc: "语音优先，免提操作。像与可信朋友交谈一样与代理沟通 — 规划、头脑风暴或大声思考。" },
      { title: "语音翻译",       desc: "说30+种语言，即时被理解。实时字幕和自然语音输出 — 专为旅行设计。" },
      { title: "AI惊喜视频",     desc: "告诉Ulypo故事 — 它创作带有音乐和叠加效果的个性化视频，几分钟内即可分享。" },
      { title: "心理咨询礼宾",   desc: "当生活变得沉重时，Ulypo通过同一对话为您联系持牌心理咨询师。" },
      { title: "按操作付费",     desc: "积分购买预订、通话和视频。Ulypo操作前显示明确价格。无需订阅。" },
    ],
  },

  howItWorks: {
    chip: "工作原理",
    h2:   "从\"希望有人帮我做\"\n到\"完成\"。",
    steps: [
      { title: "登录",       desc: "通过Google继续。无需密码，无需填写表单 — 10秒即可开始。" },
      { title: "直接提问",   desc: "用简单语言告诉Ulypo您需要什么。预订、翻译、规划、查找 — 任何事情。" },
      { title: "Ulypo行动",  desc: "真实预订。真实跟进。消耗任何积分前都会征得您的确认。" },
    ],
  },

  showcase: {
    chip:    "实际效果",
    h2:      "只需提问。\nUlypo处理\n其余一切。",
    sub:     "大多数AI给您一堆文字。Ulypo预订餐桌、规划旅程并发送确认。每次对话都以真正完成的事情结束。",
    cta:     "查看所有功能",
    you:     "您",
    examples: [
      { you: "在涩谷附近帮我订个安静的寿司店，周五晚7点，两人。",    ulypo: "找到3个选择。飞鸟7点有一个吧台位置。已预订 — 确认邮件已发送。",              tag: "餐厅预订" },
      { you: "我需要一位在新宿附近讲英语的医生。",                    ulypo: "找到一家有英语工作人员的诊所。预约明天上午10点。翻译好的症状说明已准备好。",  tag: "医院预订" },
      { you: "帮我规划京都3天行程。我喜欢美食和安静的寺庙。",        ulypo: "逐日行程已建立。2家餐厅已预订。火车已添加到日历。",                           tag: "日本探索" },
      { you: "我如何在成田机场办理退税？",                            ulypo: "这是每个柜台的具体操作步骤 — 您符合条件的收据已追踪好。",                    tag: "退税指南" },
    ],
  },

  testimonials: {
    chip: "早期用户",
    h2:   "从\"哇\"到\n\"再也回不去了\"。",
    items: [
      { quote: "我让Ulypo规划京都周末并预订最好的拉面店。在我的咖啡变凉之前，两件事都搞定了。",                   name: "Akari Tanaka",  role: "设计师 · 东京"          },
      { quote: "Ulypo的实时语音翻译让我在日本从不迷路。悄悄成了我最常用的应用。",                               name: "Aria Chen",     role: "产品负责人 · 新加坡"    },
      { quote: "那周很难熬，我请Ulypo帮我找一位当晚能聊的心理咨询师。已预约，已确认，温和体贴。",               name: "Rohan Mehta",   role: "工程师 · 班加罗尔"      },
      { quote: "Ulypo为我父亲60岁生日制作的惊喜视频让我们都哭了。我只是告诉了它这个故事。",                     name: "Daniel Okafor", role: "创始人 · 拉各斯"        },
    ],
  },

  pricing: {
    chip:    "定价",
    h2:      "为行动付费。\n而非承诺。",
    sub:     "每个操作都有明确的标价。在Ulypo采取行动之前，您可以看到费用。",
    popular: "最受欢迎",
    tiers: [
      {
        name:    "免费",
        price:   "$0",
        period:  "起始",
        desc:    "注册获得25积分。无需信用卡，试用所有功能。",
        features: ["AI代理聊天","现实操作（受限）","1个惊喜视频","语音翻译 · 30分钟"],
        cta:     "立即开始",
      },
      {
        name:    "伴侣",
        price:   "$14",
        period:  "/ 月",
        desc:    "每月500积分。完整Ulypo体验。",
        features: ["无限代理聊天","真实世界预订","每月10个惊喜视频","实时AI通话 · 5小时","语音翻译","心理咨询礼宾"],
        cta:     "开始14天试用",
      },
      {
        name:    "充值",
        price:   "$5",
        period:  "/ 100积分",
        desc:    "无订阅。仅为您采取的操作付费。",
        features: ["1积分 ≈ 1个快速操作","惊喜视频 · 20积分","实时AI通话 · 5积分/分钟","翻译 · 2积分/分钟","积分永不过期"],
        cta:     "购买积分",
      },
    ],
  },

  faq: {
    chip: "常见问题",
    h2:   "问题解答。",
    items: [
      { q: "Ulypo实际上能做什么？",        a: "Ulypo可以预订餐厅、规划旅行、查找和比较产品、安排心理咨询预约、生成AI惊喜视频、进行实时AI代理通话，以及实时翻译对话 — 全部通过一个聊天完成。" },
      { q: "它与ChatGPT有何不同？",        a: "大多数AI聊天回答问题。Ulypo采取行动。当您让它预订晚上7点的飞鸟时，它真的会预订飞鸟晚上7点并返回确认。少读多做。" },
      { q: "积分系统如何运作？",           a: "每个操作消耗固定数量的积分 — 在Ulypo操作前显示。注册获得25个免费积分，订阅获取每月套餐，或按需充值。积分永不过期。" },
      { q: "Ulypo支持哪些语言？",          a: "30+种语言的实时语音翻译。日语优先，配有自然语音输出和实时字幕。随时在设置中切换语言。" },
      { q: "我可以在哪些平台上使用？",     a: "iOS、Android和网页。将Ulypo添加到主屏幕，它就像原生PWA一样工作 — 支持离线，全屏，即时启动。" },
      { q: "我的数据是否私密？",           a: "始终私密。我们使用端到端加密，绝不用您的个人数据训练模型，也不出售或共享。您的对话和预订只属于您。" },
    ],
  },

  cta: {
    badge:    "无需信用卡",
    h2a:     "您的AI生活助手",
    h2b:     "已准备就绪。",
    sub:     "一键登录。前25积分免费 — 试用所有代理，无需信用卡。",
    primary: "免费试用Ulypo",
    ghost:   "查看定价",
    platforms: ["iOS","Android","Web","无需信用卡"],
  },

  footer: {
    tagline: "Ulypo是您的AI生活助手 — 通过一次对话预订、翻译、规划并采取行动。",
    tryFree: "免费试用",
    columns: [
      { title: "产品",  links: [{ href: "/features", label: "功能" },{ href: "/how-it-works", label: "工作原理" },{ href: "/pricing", label: "定价" }] },
      { title: "公司",  links: [{ href: "/about", label: "关于我们" },{ href: "/contact", label: "联系我们" }] },
      { title: "法律",  links: [{ href: "/privacy", label: "隐私" },{ href: "/terms", label: "条款" }] },
    ],
    rights: "版权所有。",
  },

  demo: {
    eyebrow:            "预约演示",
    title:              "亲眼见证 Ulypo",
    description:        "预约与我们团队的个性化演示，了解 Ulypo 如何融入您的工作流程。",
    nameLabel:          "您的姓名",
    emailLabel:         "工作邮箱",
    companyLabel:       "公司名称",
    roleLabel:          "职位",
    messageLabel:       "您想了解什么？",
    namePlaceholder:    "张三",
    emailPlaceholder:   "zhang@example.com",
    companyPlaceholder: "示例公司",
    rolePlaceholder:    "产品经理",
    messagePlaceholder: "请告诉我们您的使用场景或具体问题…",
    submit:             "申请演示",
    successTitle:       "预约成功。",
    successBody:        "我们将在一个工作日内确认您的时段。",
  },

  featuresPage: {
    eyebrow: "功能",
    title:   "真正采取行动的AI代理。",
    desc:    "一次对话中的7个专业代理。预订、翻译、规划、查找 — Ulypo处理现实世界的细节，让您无需操心。",
    deepFeatures: [
      { title: "操作引擎",        desc: "告诉它您想要什么 — 预订、规划、查找、支付、发消息 — 它将行动推进到真实结果。",           bullets: ["餐厅预订与确认","旅行：航班、酒店、日程规划","产品研究与比较","行动前始终显示计划"] },
      { title: "AI惊喜视频",      desc: "Ulypo将您讲述的故事转化为精美的个性化视频 — 非常适合生日和感谢场合。",                    bullets: ["自定义纯音乐","带缩放效果的文字叠加","几分钟内即可分享"] },
      { title: "实时AI代理通话",  desc: "语音优先，免提操作。像与可信朋友交谈一样与代理沟通。",                                     bullets: ["免提语音对话","支持蓝牙和CarPlay","首分钟始终免费"] },
      { title: "实时语音翻译",    desc: "30+种语言，实时字幕和自然语音输出 — 专为旅行和全球团队设计。",                             bullets: ["支持30+种语言","任意通话实时字幕","自然音色语音输出"] },
      { title: "心理咨询与同伴支持",desc: "Ulypo为您联系持牌咨询师和同伴支持者 — 通过同一聊天预约。",                              bullets: ["持牌咨询师匹配","当日预约","礼宾预约服务免费"] },
      { title: "积分与透明度",    desc: "每个操作都有明确的标价。在Ulypo操作前您可以看到费用。",                                     bullets: ["每次操作前显示价格","积分永不过期","随时取消，数据保留"] },
    ],
  },

  aboutPage: {
    eyebrow: "关于我们",
    title:   "每个人都应该拥有一个真正有所作为的AI。",
    desc:    "Ulypo是一支由设计师、工程师和创作者组成的小型全球团队，正在构建一种新型AI。",
    storyHeading: "我们的故事",
    story: [
      "我们见证了AI革命的到来 — 却感到失望。聊天机器人能写文章，却不能订桌。助手给出指示，而不是采取行动。每个闪亮的新模型都用我们的时间来换取更多阅读。我们想要一个真正有价值的代理。",
      "于是我们构建了Ulypo。一个真正能预订、规划、通话、创作和翻译的AI生活助手 — 全部来自一次对话。诞生于东京，默认多语言，专为真实生活的复杂而设计。",
      "我们的使命很简单：每个人都应该拥有一个AI生活助手，帮助他们释放潜力，专注于真正重要的事情。我们还在早期阶段，我们在倾听，欢迎您加入我们。",
    ],
    valuesChip:    "我们的信念",
    valuesHeading: "我们的价值观，用简单的话说。",
    values: [
      { title: "行动胜于建议",   desc: "如果我们的代理可以为您采取下一步，它就应该这样做。我们用完成的行动来衡量自己 — 而不是交换的消息。" },
      { title: "您的数据属于您", desc: "我们不用您的数据训练，不出售，不共享。端到端加密是底线，而不是上限。" },
      { title: "平静、能干、友善",desc: "我们为人类注意力而设计。Ulypo说得更少，做得更多 — 对您的一天耐心，从不嘈杂。" },
      { title: "为每个人而建",   desc: "默认多语言，设计上无障碍，按使用量定价。AI生活助手不应是奢侈品。" },
    ],
    teamChip:    "团队",
    teamHeading: "Ulypo背后的人。",
    team: [
      { name: "Akari Tanaka",   role: "联合创始人 & CEO"          },
      { name: "Daniel Okafor", role: "联合创始人 & CTO"          },
      { name: "Aria Chen",      role: "设计负责人"                },
      { name: "Rohan Mehta",    role: "AI负责人"                  },
      { name: "Sara Klein",     role: "研究负责人"                },
      { name: "Leo Nakamura",   role: "信任与隐私负责人"          },
    ],
  },

  howItWorksPage: {
    eyebrow: "工作原理",
    title:   "从\"希望有人帮我做\"到\"完成\" — 一次对话搞定。",
    desc:    "Ulypo不是聊天机器人。它是一个可以代表您采取真实世界行动的AI代理 — 并向您展示每一步它做了什么。",
    anatomyChip:    "一次请求的解剖",
    anatomyHeading: "「帮我订晚餐」的真实面貌。",
    anatomyBody:    "每次确认背后都有一系列谨慎的步骤 — 搜索、比较、提议、确认、执行。您看到它。您批准它。Ulypo完成其余部分。",
    flow: [
      { label: "您",         text: "在涩谷找一家周五晚7点的寿司店，约¥15,000。",                         badge: "" },
      { label: "Ulypo搜索",  text: "比较餐厅，检查可用性，阅读评价，按您的口味筛选。",                    badge: "0.4秒" },
      { label: "Ulypo提议",  text: "附近3家安静的寿司店 · 飞鸟有最佳吧台可用性。",                       badge: "等待确认" },
      { label: "您",         text: "预订飞鸟，晚7点，两人。",                                            badge: "" },
      { label: "Ulypo行动",  text: "预订已完成 · 确认邮件已发送 · 日历事件已添加 · 提醒已设置。",        badge: "完成" },
    ],
    pillarsChip:    "四个理念，用简单语言",
    pillarsHeading: "用过之前，感觉理所当然的代理。",
    pillars: [
      { title: "像与朋友交谈",  desc: "语音或文字。英语、日语、印地语、西班牙语 — 30+种语言，内置实时翻译。" },
      { title: "它规划，您审批",desc: "Ulypo始终向您展示它即将做什么 — 预订、发送、支付 — 并等待您的绿灯。" },
      { title: "然后它真正去做",desc: "真实预订。真实视频。真实跟进。收据和确认发到您的收件箱。" },
      { title: "它学习您的偏好",desc: "随着时间的推移，Ulypo变得更加敏锐 — 您最喜欢的菜系、旅行风格、您在乎的人。" },
    ],
  },

  pricingPage: {
    eyebrow: "定价",
    title:   "诚实积分。无隐藏收费。",
    desc:    "每个操作 — 预订、视频、通话、翻译 — 消耗固定数量的积分。在Ulypo操作前，您可以看到价格。始终如此。",
    tableHeading: "费用一览",
    tableSub:     "每项积分消耗的快速参考。",
    tableColAction: "操作",
    tableColCost:   "费用",
    tableColNote:   "备注",
    tableNote: "积分永不过期。您可以随时在应用内查看剩余余额和购买记录。",
    costs: [
      { feature: "代理聊天（文字）",             cost: "免费",          note: "伴侣套餐无限制"        },
      { feature: "真实操作（预订、购买、消息）",  cost: "1–3积分",       note: "收费前确认"            },
      { feature: "AI惊喜视频",                   cost: "20积分",        note: "≈ 每个视频$1"          },
      { feature: "实时AI代理通话",               cost: "5积分 / 分钟",  note: "首分钟始终免费"        },
      { feature: "实时语音翻译",                 cost: "2积分 / 分钟",  note: "支持30+种语言"         },
      { feature: "心理咨询礼宾预约",             cost: "免费",          note: "仅需支付咨询师费用"    },
    ],
  },

  contactPage: {
    eyebrow: "联系我们",
    title:   "说声你好。",
    desc:    "我们阅读每一条消息。告诉我们您的想法 — 反馈、问题、想法或合作请求。",
    emailCardTitle:  "发送邮件",
    emailCardDesc:   "对于支持问题和产品反馈，这是最快的方式。",
    pressCardTitle:  "媒体",
    pressCardDesc:   "正在撰写关于AI代理或健康的文章？我们很乐意交流。",
    hoursCardTitle:  "办公时间",
    hoursCardDesc:   "我们每周四下午4点（IST）举办社区办公时间活动。",
    reasons: ["一般问题","新闻与媒体","合作","招聘","隐私与安全"],
    nameLabel:          "您的姓名",
    emailLabel:         "邮箱地址",
    reasonLabel:        "我们能帮您什么？",
    messageLabel:       "消息",
    namePlaceholder:    "张三",
    emailPlaceholder:   "zhang@example.com",
    messagePlaceholder: "告诉我们您的想法…",
    submit:             "发送消息",
    privacy:            "提交即表示您同意我们的隐私政策。我们绝不会分享您的详细信息。",
    successTitle:       "收到了 — 谢谢您。",
    successBody:        "我们将在一个工作日内与您联系。",
  },
};

export const t: Record<Lang, Translations> = { en, ja, zh };
