import axios from "axios";
import type { Pizza } from "../types/pizza";

export const getPizzas = async (): Promise<Pizza[]> => {
   try {
    const resposta = await axios.get("http://localhost:3000/pizzas")
    return resposta.data; 
   } catch (error) {
    console.error("Error ao buscar os dados: ", error);
    throw error; 
   }
}