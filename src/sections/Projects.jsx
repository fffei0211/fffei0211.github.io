import { useMemo, useRef, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function ProjectDialog({ project, dialogRef }) {
  if (!project) return null

  return (
    <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-dialog-title">
      <div className="project-dialog__top">
        <div>
          <p>{project.index} / CASE FILE</p>
          <h2 id="project-dialog-title">{project.title}</h2>
        </div>
        <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="关闭项目详情">×</button>
      </div>
      <div className="project-dialog__grid">
        <section><h3>问题</h3><p>{project.problem}</p></section>
        <section><h3>我的角色</h3><p>{project.role}</p></section>
        <section><h3>我的贡献</h3><p>{project.contribution}</p></section>
        <section><h3>过程</h3><p>{project.process}</p></section>
        <section><h3>结果</h3><p>{project.result}</p></section>
        <section className="project-dialog__reflection"><h3>复盘</h3><p>{project.reflection}</p></section>
      </div>
      {project.url ? <a className="button button--primary project-dialog__link" href={project.url} target="_blank" rel="noreferrer">打开项目链接 <span aria-hidden="true">↗</span></a> : null}
    </dialog>
  )
}

export default function Projects({ items, copy }) {
  const [category, setCategory] = useState('全部')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const dialogRef = useRef(null)
  const categories = useMemo(() => ['全部', ...new Set(items.map((item) => item.category))], [items])
  const filteredItems = category === '全部' ? items : items.filter((item) => item.category === category)
  const project = filteredItems[currentIndex] || filteredItems[0]

  const selectCategory = (nextCategory) => {
    setCategory(nextCategory)
    setCurrentIndex(0)
  }

  const move = (direction) => {
    setCurrentIndex((index) => (index + direction + filteredItems.length) % filteredItems.length)
  }

  const openDetails = () => {
    if (dialogRef.current?.open) return
    setSelectedProject(project)
    window.requestAnimationFrame(() => {
      if (dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal()
    })
  }

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow={copy.index}
          title={copy.title}
          intro={copy.description}
        />

        <Reveal className="project-browser glass-card">
          <div className="project-filters" aria-label="按类别筛选项目">
            {categories.map((item) => (
              <button
                type="button"
                className={category === item ? 'is-active' : ''}
                aria-pressed={category === item}
                onClick={() => selectCategory(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>

          <article className="project-feature" key={project.id}>
            <div className="project-feature__media">
              <img src={project.cover} width="1000" height="720" loading="lazy" alt={project.coverAlt || `${project.title}项目占位封面`} />
              <span>{project.category}</span>
            </div>

            <div className="project-feature__copy">
              <div className="project-feature__meta">
                <span>{project.index}</span>
                <span>{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-feature__summary">{project.summary}</p>
              <dl>
                <div><dt>ROLE</dt><dd>{project.role}</dd></div>
                <div><dt>RESULT</dt><dd>{project.result}</dd></div>
              </dl>
              <ul className="tag-list" aria-label={`${project.title}标签`}>
                {project.tags.map((tag, tagIndex) => <li className="tag" key={`${project.id}-${tag}-${tagIndex}`}>{tag}</li>)}
              </ul>
              <button className="button button--primary" type="button" onClick={openDetails}>查看完整档案 <span aria-hidden="true">↗</span></button>
            </div>
          </article>

          <div className="project-controls">
            <p aria-live="polite"><strong>{String(currentIndex + 1).padStart(2, '0')}</strong> / {String(filteredItems.length).padStart(2, '0')}</p>
            <div>
              <button type="button" onClick={() => move(-1)} aria-label="上一个项目" disabled={filteredItems.length < 2}>←</button>
              <button type="button" onClick={() => move(1)} aria-label="下一个项目" disabled={filteredItems.length < 2}>→</button>
            </div>
          </div>
        </Reveal>
      </div>
      <ProjectDialog project={selectedProject} dialogRef={dialogRef} />
    </section>
  )
}
