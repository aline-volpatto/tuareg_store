import { Routes, Route } from 'react-router';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import Carrinho from './pages/carrinho/Carrinho';
import Resultado from './pages/resultado/Resultado';
import Pagamento from './pages/pagamento/Pagamento';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Carrinho />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/resultado/:status" element={<Resultado />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;