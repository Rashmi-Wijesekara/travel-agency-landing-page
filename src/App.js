import './App.css';
import {Booking, Destinations, Footer, HeroBanner, Logos, Services, Subscribe, Testimonials} from './containers'
import {Navbar} from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <Services />
      <Destinations />
    </div>
  );
}

export default App;
