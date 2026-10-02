import Image from "next/image";
import JsonLd from "../components/JsonLd";
import LinkButton from "../components/LinkButton";
import Reveal from "../components/Reveal";
import {
  EXPERTISE_TAGS,
  OFFICE,
  PSYCHOLOGIST_SCHEMA,
  SPECIALTIES,
  WHO_I_HELP,
} from "../lib/content";

export const metadata = {
  alternates: { canonical: "/" },
};

const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Therapy services in Santa Monica, CA",
  itemListElement: SPECIALTIES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "MedicalTherapy",
      name: service.title,
      description: service.text,
      url: `https://www.example.com/services#${service.id}`,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={PSYCHOLOGIST_SCHEMA} />
      <JsonLd data={SERVICES_SCHEMA} />

      {/* Hero */}
      <section className="bg-paper">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="bleed-pad pb-16 pt-16 lg:pb-24 lg:pt-24">
            <p className="eyebrow">
              Online &amp; in-person therapy in Santa Monica &amp; across California
            </p>
            <h1 className="mt-10 font-serif text-[2.6rem] font-normal leading-[1.12] text-primary-deep md:text-[3.4rem] lg:mt-14 lg:text-[4rem]">
              A Santa Monica therapist for anxiety, trauma &amp;{" "}
              <em className="italic text-accent">burnout</em>.
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-muted lg:mt-10">
              I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica, California.
              I help adults understand anxiety, work through trauma, and recover from burnout using
              evidence-based methods — cognitive-behavioral therapy, EMDR, mindfulness, and
              body-oriented techniques — paced to what feels safe for you.
            </p>
            <LinkButton href="/contact" variant="primary" className="mt-10">
              Request a Consultation
            </LinkButton>
          </div>
          <div className="flex justify-center px-6 pb-16 md:px-8 md:pb-20 lg:justify-start lg:px-10 lg:pb-24 lg:pr-16">
            <div className="relative h-[380px] w-full max-w-[320px] md:h-[440px] md:max-w-[360px] lg:mt-24 lg:h-[600px] lg:max-w-[480px]">
              <Image
                src="/headshot.png"
                alt="Dr. Maya Reynolds, PsyD — licensed clinical psychologist in Santa Monica, CA"
                fill
                priority
                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 34vw, 480px"
                className="rounded-sm object-contain object-center lg:object-cover lg:object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hope band */}
      <section className="bg-secondary">
        <div className="grid items-center lg:grid-cols-[1.6fr_1fr]">
          <div className="bleed-pad py-20 lg:py-28">
            <h2 className="max-w-2xl font-serif text-[2.1rem] font-normal leading-snug text-primary-deep md:text-[2.8rem]">
              You don&apos;t have to keep pushing through on your own.
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
                  Therapy that meets you where you are
                </p>
                <p className="mt-6 text-[0.98rem] leading-relaxed text-muted">
                  Most of the people I work with are capable on the outside and exhausted on the
                  inside. They&apos;ve been managing worry, old painful experiences, or years of high
                  pressure for a long time — often without anywhere to put it down.
                </p>
              </div>
              <p className="text-[0.98rem] leading-relaxed text-muted">
                Therapy here is collaborative and practical. We begin with safety and stabilization,
                build tools you can use during a hard week, and make room for something beyond
                symptom relief: insight, resilience, and a steadier relationship with yourself.
              </p>
            </div>
          </div>
          <div className="py-20 lg:py-28">
            <div className="relative h-[380px] md:h-[480px] lg:h-[620px]">
              <Image
                src="/how-i-work.png"
                alt="A calm therapy setting with two chairs and soft daylight"
                fill
                sizes="(max-width: 1023px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who I work with */}
      <section className="section-pad bg-paper">
        <div className="mx-auto max-w-wide">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Who I work with</p>
            <h2 className="mt-5 font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
              Adults in Santa Monica and across California
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-7">
            {WHO_I_HELP.map((group) => (
              <article key={group.title} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-primary-light">
                  <Image
                    src={group.image}
                    alt={group.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-6 font-serif text-[1.5rem] font-normal text-primary-deep">
                  {group.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-muted">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/cta-coast.png"
          alt="Quiet coastline light near Santa Monica, California"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-deep/60" aria-hidden="true" />
        <div className="relative bleed-pad py-20 lg:py-28">
          <blockquote className="max-w-4xl font-serif text-[1.9rem] font-normal leading-snug text-white md:text-[2.6rem]">
            The goal isn&apos;t only to feel better.{" "}
            <em className="italic">
              It&apos;s to understand yourself more clearly and build a life that doesn&apos;t
              require so much pushing through.
            </em>
          </blockquote>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section-pad bg-paper">
        <div className="mx-auto max-w-site text-center">
          <h2 className="font-serif text-[1.9rem] font-normal text-primary-deep md:text-[2.3rem]">
            My areas of expertise
          </h2>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            {EXPERTISE_TAGS.map((tag) => (
              <li
                key={tag}
                className="text-[0.74rem] font-bold uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
              >
                {tag}
              </li>
            ))}
            <li className="font-serif text-[1.15rem] italic text-primary">&hellip;and more.</li>
          </ul>
          <p className="mx-auto mt-10 max-w-xl text-[0.98rem] text-muted">
            Every plan is built around the person in front of me — the methods are chosen for your
            goals, not the other way around.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto grid max-w-wide items-center gap-16 md:grid-cols-2 md:gap-16">
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-primary-light">
              <Image
                src="/help-adults.png"
                alt="Morning light in a private Santa Monica therapy office"
                fill
                sizes="(max-width: 767px) 100vw, 44vw"
                className="object-cover"
              />
            </div>
            <div className="relative mx-auto -mt-14 w-[54%] -translate-x-[22%] overflow-hidden rounded-sm border-[10px] border-secondary bg-paper shadow-card">
              <div className="relative aspect-square">
                <Image
                  src="/help-burnout.png"
                  alt="A notebook in warm light, representing burnout recovery work"
                  fill
                  sizes="(max-width: 767px) 50vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow">How I work</p>
            <h2 className="mt-5 font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
              A collaborative approach, paced to you.
            </h2>
            <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
              Safety and stabilization come first
            </p>
            <p className="mt-6 max-w-lg text-[1.02rem] text-muted">
              I draw on cognitive-behavioral therapy, EMDR, mindfulness-based practices, and
              body-oriented techniques. Which of those we use — and how quickly we move — depends on
              your history and your nervous system. With trauma especially, pacing matters: the work
              should leave you more regulated in daily life, not only stirred up during sessions.
            </p>
            <p className="mt-5 max-w-lg text-[1.02rem] text-muted">
              You stay actively involved in every decision. Therapy works best when you feel
              respected, understood, and clear on why we&apos;re doing what we&apos;re doing — so
              insight turns into change that holds.
            </p>
            <LinkButton href="/about" variant="primary" className="mt-9">
              Learn more about my approach
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-pad bg-paper">
        <div className="mx-auto max-w-wide">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
              Honoring where you&apos;ve been — and where you want to go.
            </h2>
            <h3 className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
              My specialties include
            </h3>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr] lg:gap-16">
            <ul className="divide-y divide-line border-y border-line">
              {SPECIALTIES.map((service) => (
                <li key={service.id} className="py-8 first:pt-0 last:pb-0 md:py-9">
                  <h4 className="font-serif text-[1.6rem] font-normal text-primary-deep">
                    {service.title}
                  </h4>
                  <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
                    {service.text}
                  </p>
                  <LinkButton href={`/services#${service.id}`} variant="accent" className="mt-5">
                    Learn more
                  </LinkButton>
                </li>
              ))}
            </ul>

            <div className="relative hidden aspect-[3/4] w-full overflow-hidden rounded-sm bg-primary-light lg:block">
              <Image
                src="/help-trauma.png"
                alt="Soft coastal light, reflecting the pacing of trauma therapy in Santa Monica"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our office — new section */}
      <section id="office" className="section-pad bg-primary-mist">
        <div className="mx-auto max-w-wide">
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
        </div>
      </section>

      {/* Schedule */}
      <section className="section-pad bg-paper">
        <div className="mx-auto grid max-w-wide items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Schedule an appointment</p>
            <h2 className="mt-5 font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
              Find a therapist who is the right fit for you.
            </h2>
            <p className="mt-6 max-w-lg text-[1.02rem] text-muted">
              Reaching out is often the hardest step, and you don&apos;t need the right words to do
              it. Share a little about what brings you in and I&apos;ll respond directly to talk
              through whether we&apos;re a good fit.
            </p>
            <p className="mt-5 max-w-lg text-[1.02rem] text-muted">
              Consultations are available in person at the Santa Monica office or by secure video
              anywhere in California. There&apos;s no pressure to commit to anything after our first
              conversation.
            </p>
            <LinkButton href="/contact" variant="primary" className="mt-9">
              Book now
            </LinkButton>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-primary-light">
            <Image
              src="/cta-coast.png"
              alt="Calm Santa Monica coastline at the start of a therapy journey"
              fill
              sizes="(max-width: 767px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
