import type { Metadata } from "next";
import SectionTag from "@/components/ui/SectionTag";
import DecorativeBlobs from "@/components/illustrations/DecorativeBlobs";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "join the waitlist — maisie",
  description:
    "Be the first to know when maisie is live. Get early access, founding member pricing, and first look at the Storyboard book.",
};

function BenefitCard({
  icon,
  accentColor,
  heading,
  body,
}: {
  icon: string;
  accentColor: string;
  heading: string;
  body: string;
}) {
  return (
    <div
      className="bg-white rounded-2xl p-7 flex flex-col gap-3 border-t-4"
      style={{ borderTopColor: accentColor }}
    >
      <span className="text-3xl" aria-hidden="true">{icon}</span>
      <h3 className="text-base font-semibold text-ink">{heading}</h3>
      <p className="text-sm font-light text-mid leading-relaxed">{body}</p>
    </div>
  );
}

export default function WaitlistPage() {
  return (
    <>
      {/* ─── 3.1 HERO ─── */}
      <section
        id="waitlist"
        className="relative bg-lilac py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* White decorative dots */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="5%" cy="15%" r="20" fill="white" fillOpacity="0.12" />
          <circle cx="15%" cy="70%" r="35" fill="white" fillOpacity="0.08" />
          <circle cx="80%" cy="20%" r="50" fill="white" fillOpacity="0.08" />
          <circle cx="92%" cy="65%" r="28" fill="white" fillOpacity="0.1" />
          <circle cx="50%" cy="5%" r="15" fill="white" fillOpacity="0.15" />
          <text x="88%" y="90%" fontSize="32" fill="white" fillOpacity="0.15">✦</text>
          <text x="8%" y="88%" fontSize="20" fill="white" fillOpacity="0.2">✦</text>
          <text x="45%" y="95%" fontSize="14" fill="white" fillOpacity="0.2">✦</text>
        </svg>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-6 text-center">
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold text-white leading-[1.15]">
            be the first to know
            <br />
            when maisie is live.
          </h1>
          <p className="text-[1.1rem] font-light text-white/80 leading-[1.8]">
            Join the waitlist and get early access, founding member pricing,
            and first look at the Storyboard book.
          </p>
        </div>
      </section>

      {/* ─── 3.2 FORM ─── */}
      <section className="bg-off py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-ink mb-8">
            tell us a little about you.
          </h2>
          <WaitlistForm />
        </div>
      </section>

      {/* ─── 3.3 WHY JOIN EARLY ─── */}
      <section className="bg-off py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionTag>✦ why join early</SectionTag>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink">
              early birds get the whole nest.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <BenefitCard
              icon="🎁"
              accentColor="#FACC15"
              heading="founding member pricing"
              body="First 500 members get a permanent discount on the annual subscription and the Storyboard book."
            />
            <BenefitCard
              icon="👀"
              accentColor="#A855F7"
              heading="first look"
              body="You'll see the app before anyone else and have a say in what gets built first."
            />
            <BenefitCard
              icon="📖"
              accentColor="#F472B6"
              heading="early storyboard access"
              body="Waitlist members get priority access to the hardcover Storyboard book when it launches."
            />
          </div>
        </div>
      </section>

      {/* ─── Decorative closing ─── */}
      <section className="relative bg-lilac-dark py-16 px-6 overflow-hidden">
        <DecorativeBlobs dark />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-2xl font-black italic text-white">future you will thank you.</p>
          <p className="text-sm font-light text-white mt-3">maisie — built with love in Ireland 🇮🇪</p>
        </div>
      </section>
    </>
  );
}
