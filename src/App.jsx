import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/templates/Layout";
import Produtos from "./pages/produtos/Produtos";
import DetalheProduto from "./pages/detalheProduto/DetalheProduto";
import Carrinho from "./pages/carrinho/Carrinho";
import Pagamento from "./pages/pagamento/Pagamento";
import Sucesso from "./pages/sucesso/Sucesso";
import Falha from "./pages/falha/Falha";
import NaoEncontrada from "./pages/naoEncontrada/NaoEncontrada";
import RotaPrivada from "./routes/RotaPrivada";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/produtos" replace />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<DetalheProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/pagamento" element={
              <RotaPrivada>
                <Pagamento />
              </RotaPrivada>
            }
          />
          <Route path="/sucesso" element={<Sucesso />} />
          <Route path="/falha" element={<Falha />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
