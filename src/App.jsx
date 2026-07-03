import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SEO from './components/SEO'
import Home from './pages/Home'
import SMB from './pages/SMB'
import Corporate from './pages/Corporate'
import About from './pages/About'
import Contact from './pages/Contact'
import { LOCAL_BUSINESS_JSON_LD, PAGE_SEO } from './config/routes'

export default function App() {
  const { pathname } = useLocation()
  const seo = PAGE_SEO[pathname] ?? {}

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={pathname}
        jsonLd={pathname === '/' ? LOCAL_BUSINESS_JSON_LD : undefined}
      />
      <ScrollToTop />
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smb" element={<SMB />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
