import Hero from "./components/hero/Hero";
import Navbar from "./components/nabvar/Navbar";
import Footer from './components/PiedePagina/Footer'

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App
