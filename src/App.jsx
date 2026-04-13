import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ProjectSlideshow from './components/ProjectSlideshow'

function App() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Routes>
          <Route path="/" element={<ProjectSlideshow />} />
          <Route path="/:projectId" element={<ProjectSlideshow />} />
        </Routes>
      </main>
    </>
  )
}

export default App
