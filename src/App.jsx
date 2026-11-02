import { Route, Routes } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
import GuidePage from './pages/GuidePage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide-style" element={<GuidePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
