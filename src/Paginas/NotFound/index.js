import styles from './NotFound.module.css';
import fotoCachorro from '../../assets/erro_404.png';
import Botao from '../../Componentes/Botao';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

    const navegacao = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! A página não foi encontrada.</h1>
                <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página principal</p>
            </div>
            <div className={styles.botaoContainer} onClick={() => navegacao(-1)}>
                <Botao tamanho="lg">
                    Voltar
                </Botao>
            </div>

            <img 
                className={styles.imagemCachorro}
                src={fotoCachorro}
                alt="Cachorro de óculos vestido como humano"
            />

            <div className={styles.espacoEmBranco}></div>
        </>
    )
}