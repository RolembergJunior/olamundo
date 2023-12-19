import styles from './Botao.module.css';

export default function Botao ({ children, tamanho }) {
    return (
        <button
            className={`
            ${styles.botaoPrincipal}
            ${styles[tamanho]}    
        `}
        >
            {children}
        </button>
    )
}