import type { Metadata } from "next";
import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";
import DecorativeBlobs from "@/components/illustrations/DecorativeBlobs";
import FounderPortrait from "@/components/illustrations/FounderPortrait";
import NevePlaceholder from "@/components/illustrations/NevePlaceholder";
import TableScene from "@/components/illustrations/TableScene";

export const metadata: Metadata = {
  title: "Our Story — how maisie was born",
  description:
    "maisie was born on a hard day in Ireland. Founder Sinead built a daily gratitude practice during her postpartum year — and realised what she had built could change motherhood for every woman who came after her.",
  alternates: {
    canonical: "https://maisieapp.com/our-story",
  },
  openGraph: {
    url: "https://maisieapp.com/our-story",
    title: "Our Story — how maisie was born",
    description:
      "A hard week, a camera roll, and a revelation. The story behind maisie.",
    images: [
      {
        url: "/our-story/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Our Story — how maisie was born",
      },
    ],
  },
};

export default function OurStoryPage() {
  return (
    <>
      {/* ─── 2.1 SECTION INTRO ─── */}
      <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <DecorativeBlobs />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 max-w-2xl">
          <SectionTag>✦ the co-parents of maisie</SectionTag>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold text-ink leading-[1.1]">
            Built by mothers.
            <br />
            For mothers.
          </h1>
          <p className="text-[1.1rem] font-light text-mid leading-[1.8] max-w-[580px]">
            maisie was born on a hard day in Ireland, in the madness of the postpartum
            first year. Two women — one with the idea, one with the technical
            instinct to build it — decided that new mothers deserved better than
            what existed.
          </p>
        </div>
      </section>

      {/* ─── 2.2 FOUNDER STORY ─── */}
      <section className="relative bg-lilac-dark py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <DecorativeBlobs dark />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Table scene illustration */}
          <div className="flex-1 flex items-center justify-center">
            <TableScene />
          </div>

          {/* Copy */}
          <div className="flex-1 flex flex-col gap-7">
            <SectionTag dark>✦ the origin story</SectionTag>
            <h2 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-white leading-[1.2]">
              A hard week.
              <br />
              A camera roll.
              <br />
              A revelation.
            </h2>
            <div className="flex flex-col gap-5 text-[1rem] font-light text-white leading-[2]">
              <p>
                It was a hard week. The kind where the days blur into each other and
                exhaustion sits heavy in your chest.
              </p>
              <p>
                Sinead sat down to write in her calendar — a small daily practice she&apos;d
                built for herself, a cup of tea, a quiet moment to find the best part of
                each day — and her first thought was: &ldquo;I&apos;ve achieved nothing this week, I&apos;ve nothing to write here.&rdquo;
              </p>
              <p>So she scrolled through her camera roll.</p>
              <p>
                And there it was, hiding in plain sight: milestone after milestone, small
                joy after small joy. And then — Stevie, sitting up unaided for the very
                first time.
              </p>
              <p>The wins had always been there. She just needed a system to surface them.</p>
              <p>
                That night, she couldn&apos;t sleep. Not from exhaustion — but from clarity.
                What if other mothers didn&apos;t have to discover this by accident?
                What if the infrastructure already existed — beautiful, frictionless,
                waiting for them from day one?
              </p>
              <p className="font-semibold text-white">maisie was born that night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2.3 MEET THE CO-PARENTS ─── */}
      <section className="bg-off py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center">
            the co-parents of maisie.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Sinead card */}
            <div className="bg-white rounded-3xl border-2 border-lilac-light p-10 flex flex-col gap-6 relative overflow-hidden">
              {/* Yellow star accent */}
              <span className="absolute top-6 right-6 text-2xl" aria-hidden="true">✦</span>

              <div className="flex flex-col items-center gap-2">
                <FounderPortrait />
                <span className="text-2xl font-black text-lilac mt-2">sinead</span>
                <span className="text-xs font-normal text-mid uppercase tracking-widest bg-lilac-light text-lilac px-3 py-1 rounded-full">
                  Founder &amp; CEO
                </span>
              </div>

              <p className="text-sm font-light text-mid leading-[1.9]">
                Sinead built maisie from the inside out — as a mother living through
                the exact problem the app solves. She spent her first year postpartum
                building a daily gratitude practice that rewired how she experienced
                her days, and realised what she had built could change the experience
                of motherhood for every woman who came after her.
                <br /><br />
                Before maisie, Sinead spent 8+ years working in tech, including time
                at Google — which means she knows exactly what great product feels like,
                and exactly what has been missing for mothers.
              </p>
            </div>

            {/* Neve card — placeholder */}
            <div className="bg-white rounded-3xl border-2 border-lilac-light p-10 flex flex-col gap-6 relative overflow-hidden">
              {/* Mint dot accent */}
              <span className="absolute top-6 right-6 w-4 h-4 rounded-full bg-mint inline-block" aria-hidden="true" />

              <div className="flex flex-col items-center gap-2">
                <NevePlaceholder />
                {/* placeholder */}
                <span className="text-2xl font-black text-lilac mt-2">neve</span>
                <span className="text-xs font-normal text-mid uppercase tracking-widest bg-lilac-light text-lilac px-3 py-1 rounded-full">
                  Co-Founder &amp; CTO
                </span>
              </div>

              <p className="text-sm font-light text-mid leading-[1.9]">
                Neve and Sinead met at a previous company — colleagues before they were
                co-founders, friends before they were co-parents of maisie.
                <br /><br />
                Neve came to this as a mother who had lived the gap firsthand. When her
                son Rory was diagnosed as autistic, the baby apps she turned to for
                support quietly made things harder — milestone trackers built for a
                journey that looked nothing like theirs. She didn&apos;t need a chart. She
                needed somewhere to celebrate Rory&apos;s first year on his own terms.
                <br /><br />
                That&apos;s the version of maisie she is building. One that holds every
                journey, asks nothing of your baby, and meets every mother exactly
                where she is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2.4 THE NAME ─── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Typographic element */}
          <div className="flex-1 flex flex-col items-start select-none" aria-hidden="true">
            <span className="text-[clamp(5rem,12vw,9rem)] font-black text-lilac-light leading-[0.9]">
              Stevie
            </span>
            <span className="text-sm font-light text-mid ml-2 -mt-1">or</span>
            <span className="text-[clamp(5rem,12vw,9rem)] font-black text-lilac leading-[0.9] -mt-2">
              maisie
            </span>
            <span
              className="text-xs font-light italic text-lilac mt-4 ml-1 max-w-[280px] leading-[1.6]"
              style={{ transform: "rotate(-2deg)", display: "inline-block" }}
            >
              maisie (from Margaret) means &ldquo;pearl,&rdquo; a gem born of the moon&apos;s hidden
              light. This reflects the app&apos;s mission: finding the glow within the chaos.
            </span>
          </div>

          {/* Copy */}
          <div className="flex-1 flex flex-col gap-6">
            <SectionTag>✦ the name</SectionTag>
            <h3 className="text-2xl md:text-3xl font-semibold text-ink leading-[1.3]">
              The name we didn&apos;t choose —<br />now holds everything.
            </h3>
            <div className="flex flex-col gap-4 text-[1rem] font-light text-mid leading-[1.9]">
              <p>
                When Sinead was pregnant, they had two names for their girl. One became
                Stevie — bright, bold, full of life.
              </p>
              <p>
                The other became something else entirely: the name for an idea that
                would hold Stevie&apos;s entire first year.
              </p>
              <p>
                maisie is the name that didn&apos;t get chosen.
                And now she gets to hold everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-lilac-light py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink">
            be part of the story.
          </h2>
          <p className="text-[1.05rem] font-light text-mid max-w-md leading-[1.8]">
            maisie is coming. Join the waitlist and be the first to know when she&apos;s ready.
          </p>
          <Link
            href="/waitlist"
            className="bg-lilac text-white font-semibold px-8 py-4 rounded-full hover:bg-lilac-dark hover:scale-[1.03] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2"
          >
            join the waitlist ✦
          </Link>
        </div>
      </section>
    </>
  );
}
