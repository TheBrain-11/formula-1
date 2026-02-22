
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'
import '../Style/PgHome.css'
import '../Style/PgAbout.css'
function Home() {


  return (
    <>
<Navbar/>
<Section1 bgimage={`/BG!.jpg`}/>
<Section2/>
<Section3/>
<Section4/>
<Footer/>


    </>
  )
}

export default Home