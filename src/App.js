import './App.css';
import Header from './components/Header/Header.js'
import HeroBanner from './components/hero-banner/heroBanner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import BookVisit from './components/bookVisit/bookVisit';
import Footer from './components/Footer/Footer'
import LocationMap from './pages/locationMap/locationMap';
import FloorPlan from './pages/floor plan/FloorPlan';
import Contact from './pages/contact us/Contact';
import SideBar from './components/SideBar/SideBar';

function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/', element:<Home/>},
      {path:'/map-location', element:<LocationMap/>},
      {path:'/floorPlan', element:<FloorPlan/>},
      {path:'/contact', element:<Contact />},
      // {path:'/', element:<SideBar/> }
     

    ]
  )
  return routes;
}

function App() {
  return (
    <div>
       <Router>
          <Header/>
          <HeroBanner/>
          <SideBar/>
          <AppRoutes />
          <BookVisit/>
          <Footer/>
        </Router>
   </div>
  );
}

export default App;
