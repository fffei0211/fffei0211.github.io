const VALID_ALIGNMENTS = new Set(['start', 'center', 'end']);

export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'start',
}) {
  const safeAlign = VALID_ALIGNMENTS.has(align) ? align : 'start';

  return (
    <header className={`section-heading section-heading--${safeAlign}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="section-heading__title">{title}</h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </header>
  );
}
