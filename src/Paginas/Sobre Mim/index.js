import styles from './SobreMim.module.css';
import PostModelo from '../../Componentes/PostModelo';
import fotoCapa from '../../assets/sobre_mim_capa.png';
import fotoSobreMim from '../../assets/BannerFoto.jpg';


export default function SobreMim () {
    return(
        <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre Mim"
        >
           
            <h3 className={styles.subtitulo}>
                Olá! Eu sou o Rolemberg Junior.
            </h3>

            <img
            className={styles.fotoSobreMim}
            src={fotoSobreMim}
            alt="Foto Rolemberg Junior"
            />

            

        </PostModelo>
    )
} 