import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Skills({ items, copy }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = items[currentIndex]

  const drawCard = () => {
    if (items.length < 2) return
    setCurrentIndex((index) => {
      const offset = Math.floor(Math.random() * (items.length - 1)) + 1
      return (index + offset) % items.length
    })
  }

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow={copy.index}
          title={copy.title}
          intro={copy.description}
          align="center"
        />

        <Reveal className="skill-lab glass-card">
          <div className="skill-deck">
            <div className="skill-deck__cards" aria-hidden="true">
              <span /><span /><span />
              <div><b>{current.category}</b><strong>{current.title}</strong><small>{String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</small></div>
            </div>
            <button className="button button--primary" type="button" onClick={drawCard}>随机抽一张 <span aria-hidden="true">✦</span></button>
            <p>每次点击都会从配置文件中随机选择一项真实能力。</p>
          </div>

          <article className="skill-file" style={{ '--skill-accent': current.accent }} aria-live="polite">
            <div className="skill-file__top"><span>AI NATIVE / PERSONAL FILE</span><span>{String(currentIndex + 1).padStart(2, '0')}</span></div>
            <div className="skill-orbit" aria-hidden="true"><span>{identityLabel(current.title)}</span></div>
            <p className="skill-file__category">{current.category}</p>
            <h3>{current.title}</h3>
            <p>{current.scene}</p>
            <dl>
              <div><dt>TOOLS</dt><dd>{current.tools.join(' · ')}</dd></div>
              <div><dt>RELATED</dt><dd>{current.relatedProject}</dd></div>
              <div><dt>EVIDENCE</dt><dd>{current.evidence}</dd></div>
            </dl>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

function identityLabel(title) {
  return title.replace(/\[|\]|待补充|技能|能力/g, '').trim().slice(0, 2) || 'ME'
}
