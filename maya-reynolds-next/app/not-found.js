import LinkButton from "../components/LinkButton";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section-pad bg-paper text-center">
      <div className="mx-auto max-w-[36rem]">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-serif text-[2.1rem] font-normal leading-snug text-primary-deep md:text-[2.6rem]">
          This page seems to have wandered off
        </h1>
        <p className="mt-5 text-[1rem] text-muted">
          The page you&apos;re looking for doesn&apos;t exist. Everything about the practice —
          services, approach, and consultations — is one click away.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-9">
          <LinkButton href="/" variant="primary">
            Back to home
          </LinkButton>
          <LinkButton href="/contact" variant="accent">
            Request a Consultation
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
