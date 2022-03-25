import {useCallback, useMemo, useRef} from 'react';
import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants";


const Resultado = () => {
  
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  const yearRef = useRef(year);
  
  const [nombreMarca] = useMemo(()=> MARCAS.filter(m => m.id === Number(marca)), [resultado]);
  const [nombrePlan] = useMemo(()=> PLANES.filter(p => p.id === Number(plan)), [resultado]);
  
  if (resultado === 0) return null;
  
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-3xl font-black text-gray-700">Resumen</h2>
      
      <p className="my-2 font-normal"> 
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2 font-normal"> 
        <span className="font-bold">Año del Auto: </span>
        {yearRef.current}
      </p>
      <p className="my-2 font-normal"> 
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className="my-2 font-bold text-3xl"> 
        <span className="font-normal">Cotización: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado