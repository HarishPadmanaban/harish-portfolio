import Navbar from './components/Navbar.jsx';
import Cards from './sections/Cards.jsx';
import Contact from './sections/Contact.jsx';
import Hero from './sections/Hero.jsx';
import ShowCaseSection from './sections/ShowCaseSection.jsx';
import TechStack from './sections/TechStack.jsx';
import Footer from './sections/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCaseSection />
      <Cards />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App