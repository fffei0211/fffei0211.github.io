import { useEffect } from 'react'
import FloatingNav from './components/FloatingNav.jsx'
import Hero from './sections/Hero.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import { profile } from './data/profile.js'

export default function App() {
  useEffect(() => {
    document.title = profile.site.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', profile.site.description)
  }, [])

  return (
    <div className="site-shell">
      <div className="ambient" aria-hidden="true">
        <span className="ambient__ring ambient__ring--one" />
        <span className="ambient__ring ambient__ring--two" />
        <span className="ambient__dot ambient__dot--one" />
        <span className="ambient__dot ambient__dot--two" />
      </div>

      <FloatingNav
        identity={profile.identity}
        navigation={profile.navigation}
        resumeUrl={profile.contact.resumeUrl}
        badge={profile.site.badge}
      />

      <main id="main-content" tabIndex="-1">
        <Hero identity={profile.identity} hero={profile.hero} resumeUrl={profile.contact.resumeUrl} />
        <Education items={profile.education} copy={profile.sectionCopy.education} />
        <Projects items={profile.projects} copy={profile.sectionCopy.projects} />
        <Experience items={profile.experiences} copy={profile.sectionCopy.experience} />
        <Skills items={profile.skills} copy={profile.sectionCopy.skills} />
        <Contact identity={profile.identity} contact={profile.contact} copy={profile.sectionCopy.contact} />
      </main>
    </div>
  )
}
