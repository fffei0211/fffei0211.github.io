import Reveal from '../components/Reveal.jsx'

export default function Hero({ identity, hero, resumeUrl }) {
  const photoAlt = identity.portraitAlt || '个人照片待补充占位图'

  return (
    <section id="about" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <p className="hello-pill"><span aria-hidden="true">●</span> {hero.eyebrow}</p>
          <h1 id="hero-title">
            Hi，<br />我是<span>{identity.name}</span>
          </h1>
          <p className="hero__role">{identity.role}</p>
          <p className="hero__statement">{identity.statement}</p>

          <ul className="tag-list hero__tags" aria-label="能力标签">
            {identity.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
          </ul>

          <div className="button-row hero__actions">
            <a className="button button--primary" href={hero.primaryAction.href}>{hero.primaryAction.label} <span aria-hidden="true">↘</span></a>
            <a className="button button--secondary" href={hero.secondaryAction.href}>{hero.secondaryAction.label}</a>
            {resumeUrl ? <a className="button button--secondary" href={resumeUrl} target="_blank" rel="noreferrer">{hero.resumeAction.label}</a> : null}
          </div>

          <div className="hero__file glass-card" aria-label="个人状态">
            <span>MY FILE / 当前状态</span>
            <strong>{identity.status}</strong>
            <span>{identity.location}</span>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={120}>
          <div className="portrait-stage">
            <span className="portrait-stage__halo" aria-hidden="true" />
            <span className="portrait-stage__bubble portrait-stage__bubble--one" aria-hidden="true" />
            <span className="portrait-stage__bubble portrait-stage__bubble--two" aria-hidden="true" />
            <div className="portrait-stage__frame">
              <img src={identity.portrait} width="760" height="920" alt={photoAlt} fetchPriority="high" />
            </div>
            <div className="status-note glass-card">
              <small>NOW</small>
              <strong>{identity.status}</strong>
              <span>{identity.location}</span>
            </div>
            <div className="portrait-stamp" aria-hidden="true">
              <span>{identity.initials}</span>
              <small>CREATE · LEARN · GROW</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
