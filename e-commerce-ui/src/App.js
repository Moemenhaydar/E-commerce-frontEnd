import Header from './components/header';
import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container className=''>
          <h1>welcome</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
