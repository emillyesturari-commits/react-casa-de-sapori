import './Produtos.css'
import whatsapp from '../../assets/icone-whatsapp.png';
import { useEffect, useState } from 'react';
import type { Pizza } from '../../types/Pizza';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';
import Header from '../../components/Header/Header';
import { useLocation, useParams } from 'react-router-dom';
import { getProdutos } from '../../services/PizzaService';
// import casaDiSapori404 from '../../'


export default function Produtos() {


  const [produtos, setProdutos] = useState<Pizza[]>([]);
  const location = useLocation();
  const { categoria } = useParams<{ categoria: string }>();

  const parametrosPesquisados = new URLSearchParams(location.search);
  const termoPesquisado = parametrosPesquisados.get('query');
  
  const fetchProdutos = async () => {
  
    console.log(termoPesquisado);
    try {
      const dados = await getProdutos();
      // console.log("Dados retornados da API", dados);
      if (categoria) {
        const dados_filtrados = dados.filter(p =>
          p.categorias.some((cat: string) =>
            cat.toLowerCase() === categoria.toLowerCase()));
        setProdutos(dados_filtrados);
      }
      else if (termoPesquisado) {
        const dados_filtrados = dados.filter(p =>
          p.nome.toLowerCase().includes(termoPesquisado.toLowerCase()) ||
          p.descricao.toLowerCase().includes(termoPesquisado.toLowerCase()) ||
          // p.categorias.some((cat: string) => cat.toLowerCase().includes(termoPesquisado.toLowerCase()))
           p.categorias.some(cat => cat.toLowerCase()
            .includes(termoPesquisado
              .toLowerCase()))
        );
       
        setProdutos(dados_filtrados);

        console.log(dados_filtrados)
        console.log(produtos)
      } else {
        console.error("Nenhuma categoria ou termo de busca definidos.");
        setProdutos([]);
      }
    } catch (error) {
      console.error("Erro ao executar getPizzas", error)
    }
  }


  useEffect(() => {
    fetchProdutos();
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
                categoria
                  ? categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()
                  : termoPesquisado
                    ? `Resultados para: ${termoPesquisado}`
                    : "Nenhum filtro aplicado"
              }
          </span>
          <hr />
        </div>

        <section className="cards" >

          {
            produtos.map((p: Pizza) => (
              <CardProduto
                id={p.id}
                nome={p.nome}
                descricao={p.descricao}
                preco={p.preco}
                imagem={p.imagens[0] ?? ""} //?? usado p caso der erro na img 

              />
            ))
          }
           {/* {
              pizza.length == 0 && 
              <div className='jacquin404'>
                <h3>O termo pesquisado <br />não foi encontrado</h3>
                <img src={casaDiSapori404} alt="foto_termo_nao_encontrado" />
              </div>
            } */}
          {
            produtos.length == 0 &&
            <div className='casaDeSapori404'><h3>O termo pesquisado <br />Não foi encontrado</h3>

            </div>
          }

        </section>

        <section>

          <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
            target="_blank">
            <img src={whatsapp} alt="icone do whatsapp" />
          </a>
        </section>
      </main >
    </>
  )
}

