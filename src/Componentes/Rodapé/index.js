import styles from './Rodapé.module.css';
import { ReactComponent as MarcaRegistrada } from '../../assets/Marca_registrada.svg'


export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada/>

            Desenvolvido por Rolemberg com a ajuda da Alura
        </footer>
    )
}