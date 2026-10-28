import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Experience({ items, copy }) {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow={copy.index}
          title={copy.title}
          intro={copy.description}
          align="center"
        />

        <div className="timeline">
          {items.map((item, index) => (
            <Reveal
              as="article"
              className={`timeline__item ${index % 2 ? 'timeline__item--reverse' : ''}`}
              delay={Math.min(index * 70, 210)}
              key={item.id}
            >
              <div className="timeline__marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>

              <div className="timeline__card glass-card">
                <p className="timeline__period">{item.period}</p>
                <h3>{item.organization}</h3>
                <p className="timeline__role">{item.role}</p>
                <p>{item.summary}</p>
                <ul className="timeline__outcomes">
                  {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
                <ul className="tag-list" aria-label={`${item.organization}相关能力`}>
                  <li className="tag">{item.type}</li>
                  {item.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
                </ul>
              </div>

              <div className="timeline__visual glass-card">
                {item.image ? (
                  <img src={item.image} width="720" height="480" loading="lazy" alt={item.imageAlt || '经历配图待补充'} />
                ) : (
                  <div className="visual-placeholder" role="img" aria-label="经历配图待补充">
                    <span>FIELD NOTE</span>
                    <strong>{String(index + 1).padStart(2, '0')}</strong>
                    <small>IMAGE / 待补充</small>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
