import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import ConsultForm from "../../components/ConsultForm";
import { FAQS } from "../../lib/content";

export const metadata = {
  title: "Contact & Consultations — Santa Monica Therapist",
  description:
    "Request a consultation with Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA. In-person sessions at 45 W 123rd Street or secure telehealth across California.",
  alternates: { canonical: "/contact" },
};

const SHORT_FAQS = FAQS.slice(0, 5);

const INFO_BOXES = [
  {
    title: "Office",
    lines: ["Dr. Maya Reynolds, PsyD", "45 W 123rd Street", "Santa Monica, CA 90401"],
  },
  {
    title: "Direct",
    lines: ["Phone: [TO FILL]", "Email: [TO FILL]", "Hours: [TO FILL]"],
  },
  {
    title: "Telehealth",
    lines: ["Secure video sessions for clients located anywhere in California."],
  },
  {
    title: "In crisis?",
    lines: [
      "This practice is not an emergency service. If you are in crisis, call or text 988 (Suicide & Crisis Lifeline) or call 911.",
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Dr. Maya Reynolds, PsyD",
          url: "https://www.example.com/contact",
          mainEntity: {
            "@type": "Psychologist",
            name: "Dr. Maya Reynolds, PsyD",
            address: {
              "@type": "PostalAddress",
              streetAddress: "45 W 123rd Street",
              addressLocality: "Santa Monica",
              addressRegion: "CA",
              postalCode: "90401",
              addressCountry: "US",
            },
            telephone: "[TO FILL]",
            email: "[TO FILL]",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: SHORT_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-site">
          <p className="eyebrow">Contact · Santa Monica &amp; California telehealth</p>
          <h1 className="mt-5 font-serif text-[2.3rem] font-normal leading-snug text-primary-deep md:text-[3rem]">
            Request a consultation
          </h1>
          <p className="mt-5 max-w-[42rem] text-[1.02rem] text-muted">
            Reaching out is often the hardest step. Share a little about what brings you in, and
            I&apos;ll respond directly to talk about whether we&apos;re a good fit.
          </p>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="mx-auto grid max-w-site items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <ConsultForm />
          <div className="space-y-4">
            {INFO_BOXES.map((box) => (
              <div
                key={box.title}
                className="rounded-sm border border-line bg-secondary px-6 py-5 text-[0.96rem]"
              >
                <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
                  {box.title}
                </p>
                {box.lines.map((line) => (
                  <span
                    key={line}
                    className={box.title === "In crisis?" ? "text-[0.88rem] text-muted" : "text-ink"}
                  >
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-mist">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-10">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-5 font-serif text-[2rem] font-normal leading-snug text-primary-deep md:text-[2.4rem]">
              Before you reach out
            </h2>
          </div>
          {SHORT_FAQS.map((faq) => (
            <details key={faq.q} className="group mb-3 border-b border-primary/20 pb-4 open:pb-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-[1.3rem] font-normal text-primary-deep transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  className="mt-1.5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[62ch] text-[0.96rem] leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
          <p className="mt-8 text-[0.95rem] text-muted">
            More questions answered on the{" "}
            <Link
              href="/faqs"
              className="font-semibold text-primary underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
            >
              FAQs page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
