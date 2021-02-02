
import Home from './components/home/home'
import Contact from './components/contact/contact'
import About from './components/about/about'
import Event from './components/events/events'
import Youtuber from './components/youtubers/youtubers'
import FoodRest from './components/food/foodsRestaurants'
import Automotive from './components/automotive/automotive'
import Entrepreneur from './components/entrepreneur/entrepreneur'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/layout/footer'
import NavbarPage from './components/layout/nav'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <NavbarPage />
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/events" component={Event}/>
        <Route path="/youtubers" component={Youtuber}/>
        <Route path="/foodsandrestaurants"  component={FoodRest}/>
        <Route path="/automotive" component={Automotive}/>
        <Route path="/entrepreneur" component={Entrepreneur}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
