import type { Metadata } from "next";
import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";
import DecorativeBlobs from "@/components/illustrations/DecorativeBlobs";
import PhoneMockup from "@/components/illustrations/PhoneMockup";

export const metadata: Metadata = {
  title: "maisie — for mums who refuse to miss their baby's first year",
  description:
    "maisie is the daily app that helps new mums capture every moment of their baby's first year — photos, memories, tiny wins — ending in a beautiful hardcover Storyboard book. Join the waitlist.",
  alternates: {
    canonical: "https://maisieapp.com",
  },
  openGraph: {
    url: "https://maisieapp.com",
    title: "maisie — for mums who refuse to miss their baby's first year",
    description:
      "Capture every moment of your baby's first year. One daily habit. One beautiful book at the end. Join the waitlist.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "maisie — for mums who refuse to miss their baby's first year",
      },
    ],
  },
};

const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "maisie",
  description:
    "A daily capture and memory app for new mums. Documents the baby's first year and produces a beautiful hardcover Storyboard book.",
  operatingSystem: "iOS, Android",
  applicationCategory: "LifestyleApplication",
  offers: {
    "@type": "Offer",
    price: "39.99",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
  },
  creator: {
    "@type": "Organization",
    name: "maisie",
    url: "https://maisieapp.com",
  },
};

/* ─── Inline SVG illustrations for feature cards ─── */

function TeaCupIllustration() {
  return (
    <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72" className="mb-4">
      <rect x="14" y="38" width="38" height="26" rx="10" fill="#FACC15" />
      <path d="M52 48 C64 48 64 60 52 60" stroke="#FACC15" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M26 34 C26 24 34 20 30 10" stroke="#FB923C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M36 36 C36 26 44 22 40 12" stroke="#FB923C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="10" y="62" width="46" height="6" rx="3" fill="#FACC15" fillOpacity="0.5" />
    </svg>
  );
}

function FlexArmIllustration() {
  return (
    <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72" className="mb-4">
      <path
        d="M20 60 C18 48 22 40 30 34 C34 30 38 24 36 16 C40 18 48 24 44 34 C52 28 54 20 50 12 C62 22 66 38 54 48 C58 46 62 48 62 54 C62 60 54 66 46 66 L26 66 C22 66 20 64 20 60Z"
        fill="#A855F7"
      />
      <circle cx="38" cy="56" r="6" fill="#F3E8FF" />
    </svg>
  );
}

function BookIllustration() {
  return (
    <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72" className="mb-4">
      <rect x="12" y="14" width="26" height="48" rx="4" fill="#F472B6" />
      <rect x="36" y="14" width="26" height="48" rx="4" fill="#F9A8D4" />
      <rect x="10" y="14" width="4" height="48" rx="2" fill="#be185d" />
      <line x1="36" y1="14" x2="36" y2="62" stroke="#db2777" strokeWidth="2" />
      <line x1="22" y1="28" x2="32" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="34" x2="30" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="28" x2="54" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="34" x2="52" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIconIllustration() {
  return (
    <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" className="mx-auto">
      <rect x="12" y="4" width="32" height="48" rx="8" fill="#FACC15" />
      <rect x="16" y="10" width="24" height="22" rx="4" fill="white" fillOpacity="0.4" />
      <circle cx="28" cy="42" r="4" fill="white" />
      <circle cx="20" cy="21" r="6" fill="white" fillOpacity="0.6" />
      <path d="M20 21 L28 29 L32 25" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CalendarIconIllustration() {
  return (
    <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" className="mx-auto">
      <rect x="6" y="10" width="44" height="40" rx="8" fill="#A855F7" />
      <rect x="6" y="10" width="44" height="16" rx="8" fill="#7C3AED" />
      <rect x="6" y="18" width="44" height="8" fill="#7C3AED" />
      <circle cx="18" cy="6" r="4" fill="#F3E8FF" />
      <circle cx="38" cy="6" r="4" fill="#F3E8FF" />
      <text x="14" y="38" fontSize="8" fill="white" fontWeight="600">✓</text>
      <text x="24" y="38" fontSize="8" fill="white" fontWeight="600">✓</text>
      <text x="34" y="38" fontSize="8" fill="white" fontWeight="600">✓</text>
      <text x="14" y="46" fontSize="8" fill="white" fontWeight="600">✓</text>
    </svg>
  );
}

function BookIconIllustration() {
  return (
    <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" className="mx-auto">
      <rect x="8" y="8" width="20" height="38" rx="3" fill="#F472B6" />
      <rect x="28" y="8" width="20" height="38" rx="3" fill="#F9A8D4" />
      <rect x="6" y="8" width="3" height="38" rx="1.5" fill="#be185d" />
      <line x1="28" y1="8" x2="28" y2="46" stroke="#db2777" strokeWidth="1.5" />
    </svg>
  );
}

function Step({
  number,
  color,
  icon,
  heading,
  body,
}: {
  number: string;
  color: string;
  icon: React.ReactNode;
  heading: string;
  body: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-xs mx-auto">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: color + "22" }}>
        {icon}
      </div>
      <span className="text-5xl font-black leading-none" style={{ color }}>
        {number}
      </span>
      <h3 className="text-lg font-semibold text-ink">{heading}</h3>
      <p className="text-sm font-light text-mid leading-relaxed">{body}</p>
    </div>
  );
}

function FeatureCard({
  borderColor,
  illustration,
  tag,
  heading,
  body,
}: {
  borderColor: string;
  illustration: React.ReactNode;
  tag: string;
  heading: string;
  body: string;
}) {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-2 border-t-4"
      style={{ borderTopColor: borderColor }}
    >
      {illustration}
      <span className="text-xs font-normal text-mid uppercase tracking-widest">{tag}</span>
      <h3 className="text-lg font-semibold text-ink mt-1">{heading}</h3>
      <p className="text-sm font-light text-mid leading-relaxed">{body}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm">
      <span className="text-5xl text-lilac font-black leading-none select-none" aria-hidden="true">&ldquo;</span>
      <p className="text-sm font-light text-ink leading-relaxed -mt-4">{quote}</p>
      <p className="text-xs font-normal text-mid">— {author}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      {/* ─── 1.1 HERO ─── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-white py-20 px-6 md:px-12 lg:px-20">
        <DecorativeBlobs />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col gap-7 max-w-xl animate-fade-up">
            <SectionTag>✦ for every mother, everywhere</SectionTag>

            <h1 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold text-ink leading-[1.1]">
              for mums who refuse to
              <br />
              miss their baby&apos;s{" "}
              <em className="font-black not-italic text-lilac">first year.</em>
            </h1>

            <p className="text-[1.1rem] font-light text-ink leading-[1.8] max-w-[520px]">
              The first year goes faster than anyone tells you.
              maisie is the daily habit that makes sure you catch it —
              the big moments, the small ones, and the ones hiding in
              your camera roll that you almost scrolled past.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/waitlist"
                className="inline-flex items-center bg-lilac text-white font-semibold px-8 py-4 rounded-full hover:bg-lilac-dark hover:scale-[1.03] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2"
              >
                join the waitlist
              </Link>
              <Link
                href="/our-story"
                className="inline-flex items-center text-lilac font-semibold px-2 py-4 hover:underline underline-offset-4 transition-all"
              >
                hear our story ↓
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ─── 1.2 DAILY PRACTICE ─── */}
      <section id="what-is-maisie" className="bg-off py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-5 text-center">
            <SectionTag>✦ the daily practice</SectionTag>
            <h2 className="text-[clamp(2rem,3.2vw,3.2rem)] font-semibold text-ink leading-[1.2] max-w-xl">
              Even getting up and having
              <br />a shower counts.
            </h2>
            <p className="text-[1.05rem] font-light text-mid leading-[1.8] max-w-[640px]">
              Being newly postpartum is one of the hardest things a person can do.
              And we are so hard on ourselves through it. maisie exists to change that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <FeatureCard
              borderColor="#FACC15"
              illustration={<TeaCupIllustration />}
              tag="the daily moment"
              heading="one tiny win, every single day"
              body="Open maisie. Add a photo or a thought. Capture the best thing that happened — even if that best thing was surviving. That's it."
            />
            <FeatureCard
              borderColor="#A855F7"
              illustration={<FlexArmIllustration />}
              tag="the habit"
              heading="you're building a muscle"
              body="Gratitude isn't a personality trait. It's a practice. Every entry is a rep. Over weeks and months, you'll stop having to look for the light — you'll start seeing it in real time, as it happens."
            />
            <FeatureCard
              borderColor="#F472B6"
              illustration={<BookIllustration />}
              tag="the keepsake"
              heading="the year becomes a book"
              body="At the end of the year, maisie turns everything you captured into a beautiful hardcover Storyboard book. A physical record of love, in your hands, forever."
            />
          </div>
        </div>
      </section>

      {/* ─── 1.3 THE HONEST PART ─── */}
      <section className="relative bg-lilac-dark py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <DecorativeBlobs dark />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 bg-lilac-light rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <span
              className="absolute -top-4 -left-2 text-[8rem] font-black text-lilac/30 select-none leading-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="relative z-10 text-[1.05rem] font-light text-ink leading-[1.9] italic">
              On my worst week, I sat down to write in my calendar and
              thought I had nothing to say. Then I opened my camera roll.
              <br /><br />
              Stevie had sat up unaided for the first time.
              It had been there all along.
            </blockquote>
            <p className="mt-5 text-[1rem] font-semibold text-ink">— Sinead, maisie founder</p>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-white leading-[1.2]">
              Even the hard days.
              <br />
              Especially the hard days.
            </h2>
            <p className="text-[1rem] font-light text-white leading-[1.9]">
              The postpartum period has a pull toward darkness that nobody
              prepares you for. maisie was built as a gentle, daily counter
              to that pull.
              <br /><br />
              Not therapy. Not a tracker. Not another thing to feel guilty about.
              <br /><br />
              Just one small act of noticing — every day — that there was
              something worth celebrating. And on the very hardest days, that
              habit is what carries you through.
            </p>
            <p className="text-xl font-black italic text-white">
              future you will thank you.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 1.3b MATRESCENCE & MENTAL HEALTH ─── */}
      <section className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Subtle lilac gradient wash at top, fading to white */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #F3E8FF 0%, transparent 100%)" }}
          aria-hidden="true"
        />
        <DecorativeBlobs />

        <div className="relative z-10 max-w-[860px] mx-auto flex flex-col items-center gap-12">

          {/* Header */}
          <div className="flex flex-col items-center gap-5 text-center">
            <SectionTag>✦ you are not alone</SectionTag>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold text-ink leading-[1.2] max-w-xl">
              The first year is the most
              <br />
              vulnerable of your life.
              <br />
              Nobody talks about that enough.
            </h2>
          </div>

          {/* Lead paragraphs */}
          <div className="flex flex-col gap-5 text-[1.05rem] font-light text-ink leading-[1.9] text-center max-w-[680px]">
            <p>
              There is a word for what happens to a woman when she becomes a mother.
              It is called matrescence — and it is as seismic a transformation as adolescence.
              Your brain rewires. Your identity shifts. The person you were before is not gone,
              but she is changing at a pace nothing prepares you for.
            </p>
            <p>
              This is normal. It is not weakness. And it does not mean something is wrong with you.
            </p>
            <p>
              But it is also true that for many mothers, this transition tips into something heavier.
              Postnatal depression and anxiety are among the most common complications of new
              motherhood — and among the most silently suffered.
            </p>
          </div>

          {/* Statistics grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white border-2 border-lilac-light rounded-2xl p-8 flex flex-col items-center text-center gap-4">
              <span className="text-5xl font-black text-lilac leading-none">1 in 7</span>
              <p className="text-sm font-light text-ink leading-[1.8]">
                new mothers in Ireland experience postnatal depression — with many cases going
                unrecognised and untreated.
              </p>
              <p className="text-xs font-light text-mid leading-[1.6]">
                Source: Saolta Maternity Services / HSE —{" "}
                <a
                  href="https://uhgmaternity.com/supports/postnatal-depression-aware-ie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-lilac transition-colors"
                >
                  postnataldepressionaware.ie
                </a>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-lilac-light rounded-2xl p-8 flex flex-col items-center text-center gap-4">
              <span className="text-5xl font-black leading-none" style={{ color: "#F472B6" }}>14.2%</span>
              <p className="text-sm font-light text-ink leading-[1.8]">
                of first-time mothers in Ireland reported depression symptoms in the first year
                postpartum — with 1 in 5 reporting significant stress.
              </p>
              <p className="text-xs font-light text-mid leading-[1.6]">
                Source:{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7796545/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-lilac transition-colors"
                >
                  MAMMI Study
                </a>
                {" "}(Maternal health And Maternal Morbidity in Ireland), published in PMC
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-lilac-light rounded-2xl p-8 flex flex-col items-center text-center gap-4">
              <span className="text-5xl font-black leading-none" style={{ color: "#3B82F6" }}>1 in 10</span>
              <p className="text-sm font-light text-ink leading-[1.8]">
                women in the UK experience postnatal depression within the first year of giving
                birth. The Royal College of Psychiatrists estimates up to 85,000 mothers were
                affected in England in 2024 alone.
              </p>
              <p className="text-xs font-light text-mid leading-[1.6]">
                Source:{" "}
                <a
                  href="https://www.nhs.uk/mental-health/conditions/post-natal-depression/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-lilac transition-colors"
                >
                  NHS.uk
                </a>
                {" "}&amp;{" "}
                <a
                  href="https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/postnatal-depression"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-lilac transition-colors"
                >
                  rcpsych.ac.uk
                </a>
              </p>
            </div>
          </div>

          {/* Maisie context block */}
          <div className="bg-lilac-light rounded-2xl p-8 md:p-10 w-full text-center">
            <p className="text-[1rem] font-light text-ink leading-[1.9] max-w-[680px] mx-auto">
              maisie is not a substitute for professional support — and if you are struggling,
              please reach out to your GP, midwife, or a perinatal mental health service.
              <br /><br />
              What maisie is, is a daily practice of noticing. Of finding one thing — however
              small — that was worth something today. Research tells us that building this habit
              actively rewires how we experience our days. It does not cure. But it protects.
              It builds the muscle. And on the days when everything feels heavy,{" "}
              <span className="text-[1.05rem] font-semibold text-lilac">
                that muscle is what carries you through.
              </span>
            </p>
          </div>

          {/* Support links */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-light text-mid">If you need support right now:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://uhgmaternity.com/supports/postnatal-depression-aware-ie/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lilac-light text-lilac text-sm font-normal px-5 py-2.5 rounded-full hover:bg-lilac hover:text-white transition-all duration-200"
              >
                🇮🇪 Postnatal Depression Ireland
              </a>
              <a
                href="https://pandasfoundation.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lilac-light text-lilac text-sm font-normal px-5 py-2.5 rounded-full hover:bg-lilac hover:text-white transition-all duration-200"
              >
                🇬🇧 PANDAS Foundation UK
              </a>
              <a
                href="https://postpartum.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lilac-light text-lilac text-sm font-normal px-5 py-2.5 rounded-full hover:bg-lilac hover:text-white transition-all duration-200"
              >
                🌍 Postpartum Support International
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 1.4 HOW IT WORKS ─── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-5 text-center">
            <SectionTag>✦ how it works</SectionTag>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink">Three things. That&apos;s it.</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 w-full">
            <Step
              number="01"
              color="#FACC15"
              icon={<PhoneIconIllustration />}
              heading="capture the moment"
              body="A photo or a few words. Whatever you have the energy for. maisie makes it frictionless — because we know what your days look like."
            />
            <div className="hidden md:block self-center w-12 h-0.5 bg-lilac-light flex-shrink-0" />
            <Step
              number="02"
              color="#A855F7"
              icon={<CalendarIconIllustration />}
              heading="build the habit"
              body="Every day you show up — even imperfectly — is a rep. maisie celebrates you for it. You showed up. That's enough. That's everything."
            />
            <div className="hidden md:block self-center w-12 h-0.5 bg-lilac-light flex-shrink-0" />
            <Step
              number="03"
              color="#F472B6"
              icon={<BookIconIllustration />}
              heading="hold the year in your hands"
              body="At the end of the year, your entries become a gorgeous hardcover Storyboard book. Every page a memory. Every entry proof of how hard you loved."
            />
          </div>

          <Link
            href="/waitlist"
            className="bg-lilac text-white font-semibold px-8 py-4 rounded-full hover:bg-lilac-dark hover:scale-[1.03] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2"
          >
            be first to get access →
          </Link>
        </div>
      </section>

      {/* ─── 1.5 SOCIAL PROOF ─── */}
      <section className="bg-lilac-light py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionTag>✦ early community feedback — app coming soon</SectionTag>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink">mothers are waiting.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <TestimonialCard
              quote="I wish this had existed when I had my first. The second time round, I'm not missing a single thing."
              author="Sarah M., Dublin"
            />
            <TestimonialCard
              quote="This is the app I would have designed myself if I knew how. Finally something that gets what postpartum actually feels like."
              author="Lauren K., London"
            />
            <TestimonialCard
              quote="I teared up reading the concept. Take my money. Immediately."
              author="Emma R., Cork"
            />
          </div>

          <Link
            href="/waitlist"
            className="bg-lilac text-white font-semibold px-8 py-4 rounded-full hover:bg-lilac-dark hover:scale-[1.03] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2"
          >
            join them on the waitlist →
          </Link>
        </div>
      </section>
    </>
  );
}
