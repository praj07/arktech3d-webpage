import '../../App.css'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import Herosection from '../HeroSection/HeroSection'

function Home() {
    return(
        <>
            <Herosection />
            <Cards />
            <Footer />
        </>
    );   
}

export default Home;