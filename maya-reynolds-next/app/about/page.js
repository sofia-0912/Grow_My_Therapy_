import Image from "next/image";
import JsonLd from "../../components/JsonLd";
import CtaBand from "../../components/CtaBand";
import LinkButton from "../../components/LinkButton";
import Reveal from "../../components/Reveal";
import { OFFICE } from "../../lib/content";

export const metadata = {
  title: "About — Licensed Clinical Psychologist in Santa Monica, CA",
  description:
    "Meet Dr. Maya Reynolds, PsyD, a licensed clinical psychologist in Santa Monica, CA. Warm, collaborative therapy for anxiety, trauma & burnout using CBT, EMDR and mindfulness.",
  alternates: { canonical: "/about" },
};

const WHO_I_WORK_WITH = [
  {
    title: "Anxiety & chronic worry",
    text: "People living with worry, panic, or the constant background hum of “what if” that makes it hard to rest or focus.",
  },
  {
    title: "Trauma, single-incident & complex",
    text: "Survivors of single-incident trauma and of long-standing patterns stemming from childhood, relationships, or chronic stress.",
  },
  {
    title: "Burnout & high-pressure work",
    text: "Entrepreneurs, creatives, and professionals facing burnout, perfectionism, and high internal pressure.",
  },
  {
    title: "Feeling disconnected",
    text: "Anyone who feels disconnected from themselves after years of pushing through stress and wants to slow down and reconnect.",
  },
  {
    title: "Depth-oriented + practical",
    text: "Clients who want practical tools and space for reflection and depth — not one or the other.",
  },
  {
    title: "Statewide by telehealth",
    text: "Adults located anywhere in California who prefer secure video sessions, or who blend telehealth with in-person visits.",
  },
];

const CREDENTIALS = [
  "PsyD, Licensed Clinical Psychologist",
  "Cognitive-behavioral therapy (CBT)",
  "EMDR",
  "Mindfulness-based practices",
  "Body-oriented techniques",
  "Adults · In-person & telehealth",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maya Reynolds",
          honorificSuffix: "PsyD",
          jobTitle: "Licensed Clinical Psychologist",
          description:
            "Licensed clinical psychologist in Santa Monica, CA specializing in anxiety, trauma, and burnout.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "45 W 123rd Street",
            addressLocality: "Santa Monica",
            addressRegion: "CA",
            postalCode: "90401",
            addressCountry: "US",
          },
          knowsAbout: [
            "Anxiety",
            "Trauma",
            "EMDR",
            "Cognitive Behavioral Therapy",
            "Mindfulness",
            "Burnout",
          ],
        }}
      />

      <section className="bg-paper">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="bleed-pad pb-16 pt-16 lg:pb-24 lg:pt-24">
            <p className="eyebrow">About · Licensed clinical psychologist in Santa Monica</p>
            <h1 className="mt-10 font-serif text-[2.6rem] font-normal leading-[1.12] text-primary-deep md:text-[3.4rem] lg:mt-14 lg:text-[4rem]">
              Dr. Maya Reynolds, <em className="italic text-accent">PsyD</em>.
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-muted lg:mt-10">
              Licensed Clinical Psychologist offering warm, evidence-based therapy for adults — in
              person in Santa Monica and by secure telehealth across California.
            </p>
            <LinkButton href="/contact" variant="primary" className="mt-10">
              Request a Consultation
            </LinkButton>
          </div>
          <div className="flex justify-center px-6 pb-16 md:px-8 md:pb-20 lg:justify-start lg:px-10 lg:pb-24 lg:pr-16">
            <div className="relative h-[380px] w-full max-w-[320px] md:h-[440px] md:max-w-[360px] lg:mt-24 lg:h-[600px] lg:max-w-[480px]">
              <Image
                src="/headshot.png"
                alt="Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                fill
                priority
                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 34vw, 480px"
                className="rounded-sm object-contain object-center md:object-contain lg:object-cover lg:object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <Reveal className="mx-auto grid max-w-wide items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">My approach</p>
            <h2 className="mt-5 font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
              A Warm, Collaborative Approach
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted">
              I take a warm, collaborative, and grounded approach to therapy. Sessions are structured
              enough to feel supportive, while still leaving space for reflection and depth. I integrate
              evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based
              practices, and body-oriented techniques to help clients understand both the emotional and
              physiological sides of what they&apos;re experiencing.
            </p>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
              Trauma work is an important part of my practice. I work with adults who have experienced
              single-incident trauma as well as more complex, long-standing patterns that may stem from
              childhood, relationships, or chronic stress. My approach is paced carefully, with an
              emphasis on safety, stabilization, and helping clients feel more regulated in their daily
              lives — not just during sessions.
            </p>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
              In addition to trauma and anxiety, I frequently support clients dealing with professional
              burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or
              professionals who feel disconnected from themselves after years of pushing through stress.
              Therapy can become a space to slow down, reconnect, and develop more sustainable ways of
              living and working.
            </p>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
              I believe therapy works best when clients feel respected, understood, and actively
              involved in the process. My goal is not just symptom relief, but helping clients develop
              insight, resilience, and a stronger relationship with themselves over time.
            </p>
          </div>
          <div className="md:sticky md:top-28">
            <blockquote className="border-l-2 border-accent bg-paper px-7 py-6 font-serif text-[1.4rem] font-normal italic leading-snug text-primary-deep">
              “If you&apos;re looking for a therapist who combines practical tools with depth-oriented
              work — and who understands the realities of living and working in a fast-paced environment
              — I may be a good fit.”
              <cite className="mt-3.5 block font-sans text-[0.85rem] not-italic text-muted">
                — Dr. Maya Reynolds, PsyD
              </cite>
            </blockquote>
            <div className="mt-6 rounded-sm border border-line bg-paper px-6 py-5">
              <strong className="text-primary-deep">Credentials &amp; methods</strong>
              <ul className="mt-3 space-y-3">
                {CREDENTIALS.map((item) => (
                  <li key={item} className="relative pl-7 text-[0.97rem] text-muted before:absolute before:left-0 before:top-0 before:font-bold before:text-primary before:content-['✓']">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-wide">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Who I work with</p>
            <h2 className="mt-5 font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
              Adults navigating anxiety, trauma &amp; burnout
            </h2>
          </div>
          <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHO_I_WORK_WITH.map((group) => (
              <div key={group.title} className="rounded-sm border border-line bg-paper p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <h3 className="mb-2.5 font-serif text-[1.3rem] text-primary-deep">{group.title}</h3>
                <p className="text-[0.93rem] text-muted">{group.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-primary-mist">
        <Reveal className="mx-auto max-w-wide">
          <div className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">{OFFICE.eyebrow}</p>
              <h2 className="mt-5 font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
                {OFFICE.title}
              </h2>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-muted">{OFFICE.intro}</p>
            </div>
            <div className="rounded-sm border border-line bg-paper px-7 py-6 text-[0.94rem]">
              <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
                Location
              </p>
              <address className="not-italic text-ink">
                {OFFICE.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-7">
            {OFFICE.images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-primary-light"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-7">
            {OFFICE.pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-primary/20 pt-5">
                <h3 className="font-serif text-[1.35rem] font-normal text-primary-deep">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[0.95rem] text-muted">{pillar.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-7 border-t border-primary/20 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-[0.95rem] leading-relaxed text-muted">
              In-person sessions at the Santa Monica office, with a hybrid telehealth option for
              clients anywhere in California.
            </p>
            <LinkButton href="/contact" variant="primary">
              Book a session at the office
            </LinkButton>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Take the first step"
        text="Reaching out is often the hardest step. If any of the above sounds like your experience, I'd be glad to talk about whether we're a good fit."
      />
    </>
  );
}
