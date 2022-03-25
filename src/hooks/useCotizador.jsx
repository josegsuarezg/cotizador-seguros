import { useContext } from "react";
import CotizadorContext from "../context/CotizadorPrivider";

const useCotizador = () => {
  return useContext(CotizadorContext)
}

export default useCotizador;

