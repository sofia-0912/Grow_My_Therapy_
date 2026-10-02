import Link from "next/link";
import LinkButton from "./LinkButton";

const NAVIGATE = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Maya" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-secondary">
      <div className="mx-auto max-w-wide section-pad">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          <div>
            <p className="font-serif text-2xl leading-snug text-primary-deep md:text-[1.7rem]">
              Warm, evidence-based therapy for anxiety, trauma &amp; burnout.
            </p>
            <p className="mt-4 max-w-sm text-[0.94rem] text-muted">
              In person in Santa Monica and by secure telehealth for clients located anywhere in
              California.
            </p>
            <LinkButton href="/contact" variant="primary" className="mt-6">
              Request a Consultation
            </LinkButton>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
              Navigate
            </h2>
            <ul className="space-y-2.5 text-[0.94rem]">
              {NAVIGATE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
              Contact
            </h2>
            <address className="space-y-2.5 text-[0.94rem] not-italic text-ink">
              <p>
                45 W 123rd Street
                <br />
                Santa Monica, CA 90401
              </p>
              <p>Phone: [TO FILL]</p>
              <p>Email: [TO FILL]</p>
              <p className="text-muted">Hours: [TO FILL]</p>
            </address>
          </div>

          <div>
            <h2 className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
              Practice
            </h2>
            <p className="text-[0.94rem] text-ink">Dr. Maya Reynolds, PsyD</p>
            <p className="mt-2.5 text-[0.94rem] text-muted">
              Licensed Clinical Psychologist
              <br />
              California License: [TO FILL]
            </p>
            <p className="mt-4 text-[0.88rem] text-muted">
              Anxiety · Trauma &amp; EMDR · Burnout · CBT · Mindfulness-based practices
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-7 text-[0.82rem] text-muted">
          <p>
            This practice is not an emergency service. If you are in crisis, call or text{" "}
            <span className="font-semibold text-ink">988</span> (Suicide &amp; Crisis Lifeline) or
            call <span className="font-semibold text-ink">911</span>.
          </p>
          <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
            <p>Santa Monica, California · Telehealth statewide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
