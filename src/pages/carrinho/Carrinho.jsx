import { Link, useNavigate } from "react-router-dom";
import ItemCarrinho from "../../components/molecules/ItemCarrinho/ItemCarrinho";
import styles from './Carrinho.module.css';
import { useCarrinho } from "../../hooks/useCarrinho";
import { formatarMoeda } from "../../utils/moeda";


function Carrinho() {
    const navigate = useNavigate();
    const { itens, valorTotal } = useCarrinho();

     function finalizarCompra(){
        navigate('/pagamento');
    }

    if (itens.length === 0) {
        return (
            <section className={styles.container}>
                <h1 className={styles.titulo}>Carrinho de Compras</h1>
                <p className={styles.vazio}>Seu carrinho está vazio.</p>
                <Link to="/produtos" className={styles.link}>
                    Ver produtos
                </Link>
            </section>
        );
    }
    

    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>Carrinho de Compras</h1>
            <ul className={styles.lista}>
                {itens.map((item) => (
                    <ItemCarrinho key={item.id} item={item} />
                ))}
            </ul>
            <p className={styles.total}>Valor Total: {formatarMoeda(valorTotal)}</p>
            <button type="button" className={styles.botao} onClick={finalizarCompra}>
                Finalizar Compra
            </button>
        </section>
    );
}

export default Carrinho;