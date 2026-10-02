import JsonLd from "../../components/JsonLd";
import ServiceCard from "../../components/ServiceCard";
import CtaBand from "../../components/CtaBand";
import { SERVICES, SPECIALTIES } from "../../lib/content";

export const metadata = {
  title: "Therapy Services in Santa Monica — Anxiety, Trauma, EMDR & Burnout",
  description:
    "Therapy services in Santa Monica, CA: anxiety therapy, trauma therapy & EMDR, burnout and perfectionism work, mindfulness and body-oriented therapy. In-person and California telehealth.",
  alternates: { canonical: "/services" },
};

const CHECKLIST = [
  "Warm, collaborative, and grounded — you stay actively involved in the process",
  "Evidence-based methods: CBT, EMDR, mindfulness-based and body-oriented techniques",
  "Goal is insight, resilience, and a stronger relationship with yourself — not just symptom relief",
  "Safety and stabilization come first, always",
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Therapy services offered by Dr. Maya Reynolds, PsyD",
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
          })),
        }}
      />

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-site">
          <p className="eyebrow">Services · Santa Monica &amp; California telehealth</p>
          <h1 className="mt-5 font-serif text-[2.3rem] font-normal leading-snug text-primary-deep md:text-[3rem]">
            Therapy services for adults in Santa Monica
          </h1>
          <p className="mt-5 max-w-[42rem] text-[1.02rem] text-muted">
            Every course of therapy is paced to you. Below are the areas I work with most often in my
            Santa Monica practice and with telehealth clients across California.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-site gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.num}
              id={SPECIALTIES[index]?.id}
              num={service.num}
              title={service.title}
              bullets={service.bullets}
            >
              {service.blurb}
            </ServiceCard>
          ))}
        </div>
      </section>

      <section className="bg-primary-mist section-pad">
        <div className="mx-auto max-w-site">
          <div className="mb-10 max-w-[46rem]">
            <div className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-widest text-accent">
              Good to know
            </div>
            <h2 className="font-serif text-3xl text-primary-deep md:text-4xl">How sessions work</h2>
          </div>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-ink">
                Sessions are structured enough to feel supportive, while still leaving space for
                reflection and depth. We move at your pace, with an emphasis on safety and stabilization
                before any deeper trauma work.
              </p>
              <p className="text-ink">
                I work with adults, in person at my Santa Monica office or by secure telehealth anywhere
                in California. Many people combine the two — in person when they want the room, online
                when life is full.
              </p>
            </div>
            <ul className="space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="relative pl-7 text-[0.97rem] text-muted before:absolute before:left-0 before:top-0 before:font-bold before:text-primary before:content-['✓']">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        text="You don't need to have the right words or the right label. Reach out and we'll figure out together whether we're a good fit and where to begin."
      />
    </>
  );
}
