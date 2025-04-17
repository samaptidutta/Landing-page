
import './App.css'
import Features from './components/Features'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import PricingSystem from './components/PricingSystem'
import Testimonials from './components/Testimonials'
import Workflow from './components/Workflow'


function App() {


  return (
    <>
      <Navbar/>

    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <Herosection/>
    <Features/>
    <Workflow/>
    <PricingSystem/>
    <Testimonials/>
    </div>

      
    </>
  )
}

export default App
 