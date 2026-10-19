import styles from './ItemCarrinho.module.css';
import PropTypes from 'prop-types';
import { useCarrinho } from '../../../hooks/useCarrinho';
import { formatarMoeda } from '../../../utils/moeda';
import { calcularSubtotal } from '../../../utils/carrinho';

function ItemCarrinho({ item }) {

    const { alterarQuantidade, removerItem } = useCarrinho();

    return (
        <li className={styles.card}>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>Valor unitário: {formatarMoeda(item.preco)}</p>

            <div>
                <button
                    type="button"
                    onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}
                    disabled={item.quantidade <= 1}
                    aria-label={`Diminuir quantidade de ${item.nome}`}
                >
                    -
                </button>
                <span>{item.quantidade}</span>
                <button
                    type="button"
                    onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}
                    disabled={item.quantidade >= item.estoque}
                    aria-label={`Aumentar quantidade de ${item.nome}`}
                >
                    +
                </button>
            </div>

            <p>Subtotal: {formatarMoeda(calcularSubtotal(item))}</p>

            <button
                type="button"
                onClick={() => removerItem(item.id)}
            >
                Remover
            </button>
        </li>
    );
}


ItemCarrinho.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        preco: PropTypes.number.isRequired,
        quantidade: PropTypes.number.isRequired,
        estoque: PropTypes.number.isRequired,
        imagem: PropTypes.string.isRequired,
    }).isRequired,
};



export default ItemCarrinho;
