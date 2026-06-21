import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-text/8 bg-bg text-body">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-xl text-text">Streamline South</p>
            <p className="mt-2 text-sm text-subtle">Hattiesburg, MS</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm md:flex-row md:gap-8">
            <Link to="/smb" className="transition-colors hover:text-highlight">SMB Services</Link>
            <Link to="/corporate" className="transition-colors hover:text-highlight">Corporate Services</Link>
            <Link to="/about" className="transition-colors hover:text-highlight">About</Link>
            <Link to="/contact" className="transition-colors hover:text-highlight">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-text/8 pt-8 text-center text-xs text-disabled">
          &copy; {new Date().getFullYear()} Streamline South LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
