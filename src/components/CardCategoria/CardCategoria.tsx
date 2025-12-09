import { Link } from 'react-router-dom'
import './CardCategoria.css'
import type { CardCategoriaProps } from '../../types/CardCategoriaProps'



export default function CardCategoria({ rota, titulo, classeCss, imgIconeCategorias }: CardCategoriaProps) {
    return (
        <Link to={rota} className={`card_categoria ${classeCss}`} >
            {imgIconeCategorias}
            <h2>{titulo}</h2>
        </Link>
    )
}



