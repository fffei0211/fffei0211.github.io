import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal.jsx'

function isPlaceholder(value) {
  return !value || value.includes('待补充') || value.includes('[')
}

export default function Contact({ identity, contact, copy }) {
  const [message, setMessage] = useState('')
  useEffect(() => {
  if (!message) return

  const timer = window.setTimeout(() => {
    setMessage('')
  }, 1000)

  return () => window.clearTimeout(timer)
}, [message])
  const emailReady = !isPlaceholder(contact.email)
  const contactReady = !isPlaceholder(contact.contactValue)

  const copyContact = async () => {
    if (!contactReady) {
      setMessage('请先在 src/data/profile.js 中补充联系方式。')
      return
    }

    try {
      await navigator.clipboard.writeText(contact.contactValue)
      setMessage('联系方式已复制~')
    } catch {
      setMessage(`复制失败，请手动复制：${contact.contactValue}`)
    }
  }

  return (
    <footer id="contact" className="section section--compact contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <p className="contact-panel__eyebrow">{copy.index}</p>
          <h2 id="contact-title">{copy.title}</h2>
          <p>{identity.status} · {identity.location}。{copy.description} {contact.note}</p>

          <div className="button-row contact-panel__actions">
            {emailReady ? (
              <a className="button button--mint" href={`mailto:${contact.email}`}>发送邮件</a>
            ) : (
              <button className="button button--mint" type="button" onClick={() => setMessage('请先在数据文件中补充邮箱。')}>{contact.emailLabel}</button>
            )}
            <button className="button contact-panel__ghost" type="button" onClick={copyContact}>复制联系方式</button>
            {contact.resumeUrl ? (
              <a className="button contact-panel__ghost" href={contact.resumeUrl} target="_blank" rel="noreferrer">下载简历</a>
            ) : (
              <button className="button contact-panel__ghost" type="button" onClick={() => setMessage('请先补充简历链接。')}>简历待补充</button>
            )}
          </div>
          <p className="contact-panel__message" aria-live="polite">{message}</p>

          <div className="contact-panel__footer">
            <div>
              <span>© {new Date().getFullYear()} {identity.name}</span>
              <span>更新于 {contact.updatedAt}</span>
            </div>
            <div className="social-list" aria-label="社交媒体链接">
              {contact.socials.map((social) => (
                social.url ? <a href={social.url} target="_blank" rel="noreferrer" aria-label={`${social.label}：${social.value}`} key={social.label}>{social.label}</a> : null
              ))}
            </div>
            <a className="back-to-top" href="#about">回到顶部 ↑</a>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
