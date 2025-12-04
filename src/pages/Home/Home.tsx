import './Home.css'

export default function Home() {
  return (
    <>
     <main>

        <h1 className="acessivel">Pagina inicial</h1>

        <h2 className="titulo_home">Casa Di Sapori</h2>

        <section className="conteudos">

        </section>

        <section className="container_home">
            

            <section className="secao_cards">

                <a className="card card_pizza" href="">
                    <img src="../assets/pizza-getty-1436376727281_v2_1920x1279 1.png" alt=""/>
                    <h2>Pizzas</h2>
                </a>



                <a className="card card_molhos" href="">
                    <img src="../assets/molho-para-salada 1.png" alt=""/>
                    <h2>Molhos</h2>
                </a>



                <a className="card card_lasanhas" href="">
                    <img src="../assets/I2 1.png" alt=""/>
                    <h2>Lasanhas</h2>
                </a>



                <a className="card card_queijos" href="">
                    <img src="../assets/delicious-pieces-cheese-1 1.png" alt=""/>
                    <h2>Queijos</h2>
                </a>



                <a className="card card_massas" href="">
                    <img src="../assets/macarrao 1.png" alt=""/>
                    <h2>Massas</h2>
                </a>



                <a className="card card_vinhos" href="">
                    <img src="../assets/Vinho-1 1.png" alt=""/>
                    <h2>Vinhos</h2>
                </a>

            </section>
        </section>


    </main>



    <footer>
        <p> Casa Di Sapori_Todos os Direitos Reservados.</p>
    </footer>
    </>
  )
}
