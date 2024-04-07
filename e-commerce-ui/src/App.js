import Header from './components/header';
import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container className=''>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
