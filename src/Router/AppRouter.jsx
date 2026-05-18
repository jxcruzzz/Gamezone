import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Gallery from '../Pages/Gallery/Gallery'
import Contact from '../Pages/Contact/Contact'
import News from '../Pages/News/News'

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter