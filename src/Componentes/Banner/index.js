import styles from  '../Banner/Banner.module.css'
import minhaFoto from '../../assets/BannerFoto.jpg'
import circuloColorido from '../../assets/CirculoColorido.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Rolemberg Junior, aprendiz na formação de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Rolemberg Junior"
                />

            </div>
        </div>
    )
}