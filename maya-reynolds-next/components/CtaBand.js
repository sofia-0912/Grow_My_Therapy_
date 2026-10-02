import LinkButton from "./LinkButton";

export default function CtaBand({ title, text, micro, href = "/contact", label = "Request a Consultation" }) {
  return (
    <section className="bg-primary-deep section-pad text-center">
      <div className="mx-auto max-w-site">
        <h2 className="mb-4 font-serif text-3xl font-normal leading-tight text-white md:text-[2.7rem]">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-[40rem] text-[1.02rem] text-primary-light/85">{text}</p>
        <LinkButton href={href} variant="light">
          {label}
        </LinkButton>
        {micro && <p className="mt-5 text-[0.85rem] text-white/55">{micro}</p>}
      </div>
    </section>
  );
}
