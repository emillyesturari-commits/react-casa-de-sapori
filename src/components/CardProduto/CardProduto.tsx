import type { CardProdutoProps } from '../../types/CardProdutoProps';
import './CardProduto.css';
import pizza_default from "../../assets/Logo.svg";
import { formatosServices } from "../../services/FormatosService"


export default function CardProduto({ nome, descricao, preco, imagem, id }: CardProdutoProps) {
    return (
        <div key={id} className="card_produto">
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${imagem}` : pizza_default} alt="Pepperoni artesanal, queijo premium e massa crocante. Sabor marcante em cada fatia." />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descrição não informada"}</p>
            <span>{formatosServices.PrecoBR(preco)}</span><br />
        </div>
    )
}


