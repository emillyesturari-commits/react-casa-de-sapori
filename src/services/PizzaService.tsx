import axios from "axios";
import type { Pizza } from "../types/Pizza";

export const getPizzas = async (): Promise<Pizza[]> => {
   try {
      const resposta = await axios.get("http://localhost:3000/pizzas")
      return resposta.data;
   } catch (error) {
      console.error("Error ao buscar os dados: ", error);
      throw error;
   }
}

export const deletePizza = async (idPizza: string): Promise<void> => {
   try{
      await axios.delete(`http://localhost:3000/pizza/${idPizza}`)
   } catch(error){
      console.error("Erro ao deletar o bolo:", error) ;
      throw error; 
   }
}

export const enviarFotoParaAPI = async (file: File): Promise<string | undefined> =>
   const formData=new FormData 