import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ProjectsList from './pages/ProjectsList.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import CreateProject from './pages/CreateProject.jsx';
import OffersList from './pages/OffersList.jsx';
import CreateOffer from './pages/CreateOffer.jsx';
import Chat from './pages/Chat.jsx';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects/new" element={<CreateProject />} />
          <Route path="/offers" element={<OffersList />} />
          <Route path="/offers/new" element={<CreateOffer />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
