import type { Metadata } from "next";
import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";
import DecorativeBlobs from "@/components/illustrations/DecorativeBlobs";

export const metadata: Metadata = {
  title: "The First Year — what nobody tells you",
  description:
    "The first year of motherhood is one of the most profound and vulnerable transitions a person can go through. Here is what the research says — and where to find support.",
  alternates: {
    canonical: "https://maisieapp.com/the-first-year",
  },
  openGraph: {
    url: "https://maisieapp.com/the-first-year",
    title: "The First Year — what nobody tells you",
    description:
      "1 in 7 mothers in Ireland experience postnatal depression. You are not alone. Resources and support for new mothers.",
  },
};

export default function TheFirstYearPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[860px] mx-auto flex flex-col items-center gap-6 text-center">
          <SectionTag>✦ for every mother</SectionTag>
          <h1 className="text-[clamp(2.4rem,4.5vw,4rem)] font-semibold text-ink leading-[1.15]">
            The first year.
            <br />
            What nobody tells you.
          </h1>
          <p className="text-[1.05rem] font-light text-mid leading-[1.9] max-w-[600px]">
            This page is not about maisie.
            <br />
            It is about you — and what you might be carrying
            <br />
            right now that deserves to be named.
          </p>
        </div>
      </section>

      {/* ─── PPD & MATRESCENCE ─── */}
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

      {/* ─── CLOSING CTA ─── */}
      <section className="bg-off py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[600px] mx-auto flex flex-col items-center gap-6 text-center">
          <p className="text-[1rem] font-light text-mid leading-[1.9]">
            If maisie sounds like something that could help — a daily practice of noticing,
            one small thing at a time — you can join the waitlist below.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center bg-lilac text-white font-semibold px-8 py-4 rounded-full hover:bg-lilac-dark hover:scale-[1.03] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2"
          >
            join the waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
