import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-196px)] md:w-[80%] md:mx-auto md:px-2 px-4 my-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
