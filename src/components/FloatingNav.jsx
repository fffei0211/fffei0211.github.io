import { useEffect, useRef, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection.js'

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      )}
    </svg>
  )
}

export default function FloatingNav({ identity, navigation, resumeUrl, badge }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const sectionIds = navigation.map((item) => item.id)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="floating-nav container">
      <div className="floating-nav__bar glass-card">
        <a className="brand" href="#about" aria-label="返回关于我">
          <span className="brand__mark" aria-hidden="true">{identity.initials}</span>
          <span className="brand__word">{badge}</span>
        </a>

        <button
          className="nav-toggle"
          ref={toggleRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? 'primary-nav--open' : ''}`}
          aria-label="主导航"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              href={item.href}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {resumeUrl ? (
          <a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer">
            简历.pdf <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="resume-link resume-link--disabled" title="请在 src/data/profile.js 中补充简历链接">
            简历待补充
          </span>
        )}
      </div>
    </header>
  )
}
