import './Produtos.css';
import whatsapp from '../../assets/WhatsApp.svg-removebg-preview 2.svg';
import { useEffect, useState } from 'react';
import type { Pizza } from '../../types/Pizza';
import { getPizzas } from '../../services/PizzaService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';






export default function Produtos() {


  const [pizza, setPizzas] = useState<Pizza[]>([]);
  const location = useLocation();
  const parametrosPesquisados = new URLSearchParams(location.search);
  const termoPesquisado = parametrosPesquisados.get('query');

  const fetchPizzas = async () => {
    try {
      const dados = await getPizzas();
      // console.log("Dados retornados da API", dados);
      if (termoPesquisado) {
        const dados_filtrados = dados.filter(p =>
          p.nome.toLowerCase().includes(termoPesquisado.toLowerCase()) ||
          p.descricao.toLowerCase().includes(termoPesquisado.toLowerCase()) ||
          p.categorias.some(cat => cat.toLowerCase().includes(termoPesquisado.toLowerCase()))
        );
        setPizzas(dados_filtrados);
      } else
        setPizzas(dados);
    } catch (error) {
      console.error("Erro ao executar getPizzas", error)
    }
  }


  useEffect(() => {
    fetchPizzas();
    console.log("termo_pesquisado: ", termoPesquisado);
  }, [termoPesquisado])



  return (


    <>
      <Header />

      <main className='icone_fundo'>
        <Carrossel />
        {/* <section className="container_produtos"> */}
          <h1 className="acessivel">Pizzas</h1>
          <div className="titulo">
            <span>
              {
                termoPesquisado ? `Resultados para: ${termoPesquisado}` : "Nome da categoria"
              }
            </span>
            <hr />
          </div>

          <section className="cards" >

            {
              pizza.map((p: Pizza) => (
                <CardProduto
                  key={p.id}
                  nome={p.nome}
                  descricao={p.descricao}
                  preco={p.preco}
                  imagem={p.imagens[0] ?? ""} //?? usado p caso der erro na img 

                />
              ))
            }

          </section>

          <section>

          <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
            target="_blank">
            <img src={whatsapp} alt="icone do whatsapp" />
          </a>
          </section>
        {/* </section> */}
      </main >
    </>
  )
}

