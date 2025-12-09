
import './Home.css'
import type { CardCategoriaProps } from '../../types/CardCategoriaProps'
import CardCategoria from '../../components/CardCategoria/CardCategoria'
import { categorias } from '../../data/categorias'
import { Link } from 'react-router-dom'
import whatsapp_logo from '../../assets/WhatsApp.svg-removebg-preview 2.svg'

export default function Home() {
  return (
    <>
     <main>
      
        <h1 className="acessivel">Pagina inicial</h1>
        <h2 className="titulo_home">Casa Di Sapori</h2>
        {
            categorias.map((p: CardCategoriaProps) => (
              <CardCategoria
                key={p.titulo}
                rota={p.rota}
                titulo={p.titulo}
                classeCss={p.classeCss}
                imgIconeCategorias={p.imgIconeCategorias}
              />
            ))
          }

        

        <section className="conteudos">

        </section>

        <section className="container_home">
            
            </section>
        
         <Link to={"https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."} className="whatsapp" >
          <img src={whatsapp_logo} alt="icone do whatsapp" />
        </Link>

    </main>



    <footer>
        <p> Casa Di Sapori_Todos os Direitos Reservados.</p>
    </footer>
    </>
  )
}
