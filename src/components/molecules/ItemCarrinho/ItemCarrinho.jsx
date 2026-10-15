import styles from './ItemCarrinho.module.css';

function ItemCarrinho({ itemCarrinho }) {

    const subtotal = itemCarrinho.precoUnitario * itemCarrinho.quantidade;

    return (
        <li className={styles.card}>
            <h3>{itemCarrinho.nome}</h3>
            <p>Valor unitário: {itemCarrinho.precoUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>Quantidade: {itemCarrinho.quantidade}</p>
            <p>Subtotal: {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </li>
    );
}

export default ItemCarrinho;
