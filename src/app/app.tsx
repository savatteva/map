import { Routes, Route } from 'react-router-dom';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MainPage } from '@/pages';
import { QueryProvider } from './providers';
import "../shared/styles/variables.css"
import "../shared/assets/fonts.css"

/**приложение */
function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </QueryProvider>
  )
}

export default App