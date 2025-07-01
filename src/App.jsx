import Navbar from './components/Navbar';
//import Home from './components/Home';
import Footer from './components/Footer';
//import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <LoginPage />
      {/* <Home /> */}
      {/*<RegisterPage />*/}
      <Footer />
    </div>
  );
};

export default App;
