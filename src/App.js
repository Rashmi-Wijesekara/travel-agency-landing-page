import './App.css';
import {Booking, Destinations, Footer, HeroBanner, Logos, Services, Subscribe, Testimonials} from './containers'
import {Destination, Navbar, Review} from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <Services />
    </div>
  );
}

export default App;
