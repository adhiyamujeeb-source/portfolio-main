import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">Adhiya Mujeeb</span>
          <p>Building thoughtful products &amp; experiences.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/adhiya-mujeeb-560021380?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://share.google/VuGkaBeMqVD1TxEt6
" target="_blank" rel="noreferrer">GitHub</a>
          <a href="adhiyamujeeb@gmail.com">Email</a>
        </div>
        <div className="footer-copy">
          <span>© {new Date().getFullYear()} · Crafted with care</span>
        </div>
      </div>
    </footer>
  )
}
