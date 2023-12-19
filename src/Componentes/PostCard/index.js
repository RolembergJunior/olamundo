import { Link } from 'react-router-dom';
import Botao from '../Botao';
import styles from './Post.module.css';

export default function PostCard({ post }) {

    return(
        <Link to={`/posts/${post.id}`} >
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`./assets/posts/${post.id}/capa.png`}
                    alt="Capa do Post"
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                
                <Botao>Ler</Botao>
            </div>
        </Link>
    )
}