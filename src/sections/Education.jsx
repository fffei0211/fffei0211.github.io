import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Education({ items, copy }) {
  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow={copy.index}
          title={copy.title}
          intro={copy.description}
          align="center"
        />

        <div className="education-path glass-card">
          <span className="education-path__line" aria-hidden="true"><b>成长路径</b></span>
          {items.map((item, index) => (
            <Reveal as="article" className="education-card" delay={index * 90} key={item.id}>
              <div className="education-card__image">
                <img src={item.image} width="900" height="560" loading="lazy" alt={item.imageAlt || '学校图片待补充'} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="education-card__body">
                <p>{item.period}</p>
                <h3>{item.school}</h3>
                <strong>{item.program} · {item.degree}</strong>
                <span>{item.summary}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
