import JsonLd from "../../components/JsonLd";
import LinkButton from "../../components/LinkButton";
import CtaBand from "../../components/CtaBand";
import { FAQS } from "../../lib/content";

export const metadata = {
  title: "FAQs — Santa Monica Therapist for Anxiety, Trauma & Burnout",
  description:
    "Answers to common questions about therapy with Dr. Maya Reynolds, PsyD in Santa Monica, CA: in-person and telehealth sessions, EMDR and trauma pacing, who she works with, and how to know if it's a good fit.",
  alternates: { canonical: "/faqs" },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-site">
          <p className="eyebrow">Questions · Santa Monica &amp; California telehealth</p>
          <h1 className="mt-5 font-serif text-[2.3rem] font-normal leading-snug text-primary-deep md:text-[3rem]">
            Before you reach out
          </h1>
          <p className="mt-5 max-w-[42rem] text-[1.02rem] text-muted">
            Deciding to start therapy raises a lot of practical questions. Here are honest answers to
            the ones I hear most often — and if yours isn&apos;t here, ask me directly.
          </p>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="mx-auto max-w-[760px]">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group mb-3 border-b border-line pb-4 open:pb-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-[1.35rem] font-normal text-primary-deep transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  className="mt-2 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}

          <div className="mt-12 rounded-sm border border-line bg-primary-mist px-7 py-8">
            <h2 className="font-serif text-[1.6rem] font-normal text-primary-deep">
              Still deciding whether to reach out?
            </h2>
            <p className="mt-3 max-w-lg text-[0.98rem] text-muted">
              That&apos;s a fine place to start. The consultation is a conversation, not a
              commitment — you can ask about approach, pacing, and fit before deciding anything.
            </p>
            <LinkButton href="/contact" variant="primary" className="mt-6">
              Request a Consultation
            </LinkButton>
          </div>
        </div>
      </section>

      <CtaBand
        title="Take the first step"
        text="Reaching out is often the hardest step. Tell me a little about what brings you in and I'll respond directly."
      />
    </>
  );
}
