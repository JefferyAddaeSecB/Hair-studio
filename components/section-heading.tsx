type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold leading-tight text-rosewood sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-ink/75 sm:text-lg">{description}</p>
    </div>
  );
}
