import styles from './Poster.module.css'
import './Posters.css'
import { Route, Routes, useParams } from "react-router-dom";
import PostModelo from "../../Componentes/PostModelo";
import PostCard from "../../Componentes/PostCard";
import posters from '../../json/posts.json'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from '../NotFound';
import PaginaPadrao from '../../Componentes/PáginaPadrão'

export default function Post() {
    
    const parametros = useParams();

    const posts = posters.find(post => {
        return post.id === Number(parametros.id)
    })

    if(!posts){
        return <NotFound/>
    }

    const postsRecomendados = posters.filter(post => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)
    
    
    return(
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>


                <Route index element={
                    <PostModelo
                    fotoCapa={`/src/assets/posts/${posts.id}/capa.png`}
                    titulo={posts.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {posts.texto}
                            </ReactMarkdown>
                        </div>

                        <h1 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h1>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map( post => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    </PostModelo>

                }
                >

                </Route>

            </Route>
        </Routes>
    )
}

