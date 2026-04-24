import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ProjectSlideshow from './components/ProjectSlideshow'
import VideoSlideshow from './components/VideoSlideshow'

function App() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Routes>
          <Route path="/" element={<ProjectSlideshow />} />
          <Route path="/video" element={<VideoSlideshow />} />
          <Route path="/:projectId" element={<ProjectSlideshow />} />
        </Routes>
      </main>
    </>
  )
}

export default App
