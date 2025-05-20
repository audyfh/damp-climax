import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import EarthTimeLine from './pages/EarthTimeLine';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ecolearn" element={<Blog />} />
        <Route path="/ecolearn/:id" element={<BlogDetail />} />
        <Route path="/earthtimeline" element={<EarthTimeLine />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
