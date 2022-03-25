import useCotizador from "../hooks/useCotizador"

const Error = () => {
  const { error } = useCotizador();
  
  return (
    <div>
      <p className="bg-red-100 text-center border border-red-400 rounded uppercase text-red-700 p-2">{error}</p>
    </div>
  )
}

export default Error