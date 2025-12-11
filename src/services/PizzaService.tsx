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

export const enviarFotoParaAPI = async (file: File): Promise<string | undefined> => {

   const formData = new FormData();
   formData.append("file", file);
 try{
   const res = await axios.post ("http://localhost:3000/upload", formData,{
     headers: {"Content-Type": "multpart/form-data"} 
   });
   return res.data.filrname;
 } catch (error){
   console.error("erro no upload da imagem: ", error);
   return undefined;
 }};

 export const postPizza = async (pizza : Pizza): Promise<void> => {
   try {
      await axios.post("http://localhost:3000/pizza", pizza);
   } catch (error) {
      console.error("Erro ao cadastra o bolo:", error);
      throw error;
   }
 };