import './App.css'
import './i18n/config' // Importar configuración de i18n
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
 
  return (
    <>
    <Header />
    {/*llamar al componente Header*/}
    <Hero />
    {/*llamar al componente Hero*/}
    <About />
    {/*llamar al componente About*/}
    <Projects />
    {/*llamar al componente Projects*/}
    <Contact />
    {/*llamar al componente Contact*/}
    <Footer />
    {/*llamar al componente Footer*/}
    </>
  )
}

export default App
