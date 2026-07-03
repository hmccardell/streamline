import { useLocation } from 'react-router-dom'
import SEO from './components/SEO'
import AppShell from './AppShell'

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <SEO canonicalPath={pathname} />
      <AppShell />
    </>
  )
}
