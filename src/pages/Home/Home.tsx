
import './Home.css'
import type { CardCategoriaProps } from '../../types/CardCategoriaProps'
import CardCategoria from '../../components/CardCategoria/CardCategoria'
import { categorias } from '../../data/categorias'
import { Link } from 'react-router-dom'
import whatsapp_logo from '../../assets/WhatsApp.svg-removebg-preview 2.svg'
import Header from '../../components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="main_home imagem_fundo">
        <section className='container_home'>

          <h2 className='titulo_home'>Casa di Sapori</h2>

          <section className="secao_cards">
            <h1 className="acessivel">Pagina inicial</h1>

            {
              categorias.map((c: CardCategoriaProps) => (
                <CardCategoria
                  key={c.titulo}
                  rota={c.rota}
                  titulo={c.titulo}
                  classeCss={c.classeCss}
                  imgIconeCategorias={c.imgIconeCategorias}
                />
              ))
            }

          </section>

          <Link to={"https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."} className="whatsapp" >
            <img src={whatsapp_logo} alt="icone do whatsapp" />
          </Link>
        </section>
      </main>

    </>
  )
}

//  <section className="container_home">

//           <h1 className="acessivel">Pagina inicial</h1>
//           <h2 className="titulo_home">Casa Di Sapori</h2>
//           {
//             categorias.map((p: CardCategoriaProps) => (
//               <CardCategoria
//                 key={p.titulo}
//                 rota={p.rota}
//                 titulo={p.titulo}
//                 classeCss={p.classeCss}
//                 imgIconeCategorias={p.imgIconeCategorias}
//               />
//             ))
//           }
//           <Link to={"https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."} className="whatsapp" >
//             <img src={whatsapp_logo} alt="icone do whatsapp" />
//           </Link>
//         </section>
