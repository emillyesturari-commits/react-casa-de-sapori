import './Produtos.css';
import banner_1 from '../../assets/massa.png';
import banner_2 from '../../assets/banner 3.png';
import banner_3 from '../../assets/banner vinho.png';
import whatsapp from '../../assets/WhatsApp.svg-removebg-preview 2.svg';
// import card_pepperoni from '../../assets/pizza-de-pepperoni-caseira-portal-minha-receita.webp'
// import card_brigadeiro from '../../assets/brigadeiro.png'
// import card_sensacao from '../../assets/Sensação.png'
// import card_quatro_queijos from '../../assets/quatro-queijo 1.png'
// import card_frango from '../../assets/Frango.png'
// import card_choc_mms from '../../assets/Pizza_mms 1.png'
import { useEffect, useState } from 'react';
import type { Pizza } from '../../types/Pizza';
import { getPizzas } from '../../services/PizzaService';
import CardProduto from '../../components/CardProduto/CardProduto';






export default function Produtos() {


  const [pizza, setPizzas] = useState<Pizza[]>([]);

  const fetchPizzas = async () => {
    try {
      const dados = await getPizzas();
      console.log("Dados retornados da API", dados);
      setPizzas(dados);
    } catch (error) {
      console.error("Erro ao executar getPizzas", error)
    }
  }


  useEffect(() => {
    fetchPizzas();
  }, [])



  return (

    

    <main className='icone_fundo'>

       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner_1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

      <section className="cards" >

{
                        pizza.map((p: Pizza) => ( 
                           <CardProduto
                                    nome={p.nome}
                                    descricao={p.descricao}
                                    preco={p.preco}
                                    imagem={p.imagens[0] ?? ""} //?? usado p caso der erro na img 
                                   
                                />
                      ))
                    }




      </section>

        <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={whatsapp} alt="icone do whatsapp" />
            </a>
    
    </main>
  )
}

