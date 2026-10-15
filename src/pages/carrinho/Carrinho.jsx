import {produtos} from "../../data/produtos";
import { useNavigate } from "react-router";
import ItemCarrinho from "../../components/itemCarrinho/ItemCarrinho";
import styles from './Carrinho.module.css';


function Carrinho() {
    const navigate = useNavigate();


    const valorTotal = produtos.reduce((total, itemCarrinho) => total + itemCarrinho.precoUnitario * itemCarrinho.quantidade, 0);

     function finalizarCompra(){
        navigate('/pagamento', { state: { valorTotal } });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Carrinho de Compras</h1>
            <ul className={styles.lista}>
                {produtos.map((itemCarrinho) => (
                    <ItemCarrinho key={itemCarrinho.id} itemCarrinho={itemCarrinho} />
                ))}
            </ul>
            <p className={styles.total}>Valor Total: {valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button className={styles.botao} onClick={finalizarCompra}>
                Finalizar Compra
            </button>
        </div>
    );
}

export default Carrinho;