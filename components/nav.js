import { useState } from 'react'
import styles from 'styles/nav.module.css'
import Link from 'next/link'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <sapn className={styles.bar}></sapn>
        <span className="sr-only">MENU</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a onClick={closeNav}>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a onClick={closeNav}>PROFILE</a>
          </Link>
        </li>
        <li>
          <Link href="/notes">
            <a onClick={closeNav}>NOTES</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
