import type { CardCategoriaProps } from "../types/CardCategoriaProps";
import pizza_home from "../assets/pizza-home.png"
import molho_home from "../assets/card_home_molhos.png"
import lasanha_home from "../assets/card_lasanha.png"
import queijo_home from "../assets/card_queijo.png"
import massa_home from "../assets/card_massas.png"
import vinho_home from "../assets/card de vinhos 1.png"

export const categorias: CardCategoriaProps[] = [
  {
    rota: "/produtos/pizza",
    titulo: "pizzas",
    classeCss: "card_pizza",
    imgIconeCategorias: <img src={pizza_home} />
  },
  {
    rota: "/produtos/molhos",
    titulo: "Molhos",
    classeCss: "card_molhos",
    imgIconeCategorias: <img src={molho_home} />
  },
  {
    rota: "/produtos/lasanhas",
    titulo: "Lasanhas",
    classeCss: "card_lasanhas",
    imgIconeCategorias: <img src={lasanha_home} />
  },
  {
    rota: "/produtos/queijos",
    titulo: "Queijos",
    classeCss: "card_queijos",
    imgIconeCategorias: <img src={queijo_home} />
  },
  {
    rota: "/produtos/massas",
    titulo: "Massas",
    classeCss: "card_massas",
    imgIconeCategorias: <img src={massa_home} />
  },
  {
    rota: "/produtos/vinhos",
    titulo: "Vinhos",
    classeCss: "card_vinhos",
    imgIconeCategorias: <img src={vinho_home} />
  },
];
