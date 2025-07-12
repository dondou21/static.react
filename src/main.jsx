
import { createRoot } from 'react-dom/client'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import './index.css'


createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <MainContent />
  </>
)
