import Link from "next/link";

const VARIANTS = {
  dark: "bg-ink text-paper hover:bg-primary-deep",
  light: "border border-white/60 text-white hover:bg-white hover:text-primary-deep",
  primary: "bg-primary text-white hover:bg-primary-deep",
  accent: "border border-accent text-accent hover:bg-accent hover:text-white",
};

export default function LinkButton({
  href,
  children,
  variant = "dark",
  className = "",
  ...rest
}) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:shadow-card";
  const classes = `${base} ${VARIANTS[variant] ?? VARIANTS.dark} ${className}`.trim();

  const external = /^(https?:|mailto:|tel:)/.test(href);
  const Component = external ? "a" : Link;

  return (
    <Component href={href} className={classes} {...rest}>
      {children}
      <span aria-hidden="true" className="text-[1.05em] leading-none transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Component>
  );
}
