import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES, ROUTE_PATHS } from './config/routes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import SMB from './pages/SMB'
import Corporate from './pages/Corporate'
import About from './pages/About'
import Contact from './pages/Contact'

export default function AppShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          {ROUTE_PATHS.filter((path) => path !== '/').map((path) => (
            <Route key={path} path={path} element={<Navigate to={`${path}/`} replace />} />
          ))}
          <Route path={ROUTES.smb} element={<SMB />} />
          <Route path={ROUTES.corporate} element={<Corporate />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.contact} element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
