import { useState, useEffect } from "react"

export function Maybelline(){
  const [products, setProducts] = useState<products[]>([])
  const [loading, setLoading] = useState(true)

  interface products {
    id: number,
    name: string,
    product_type: string,
    brand: string,
    price: number,
    description: string,
    image_link: string,
    category: string,
    createdAt: string,
    updatedAt: string
  }

  
  useEffect(() => {
    const dataFetch = async () => {
      const url = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then(response => response.json())
      .then(data => setProducts(data))
    }

    dataFetch()

  },[])


  return (
    <main className="bg-slate-100">
    <section className="w-full min-h-screen text-black">
    <h1 className="text-3xl text-center py-10">Produtos Maybelline</h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-10 px-7">
        {

          products.map(product => (
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center  w-72 max-h-[600px] shadow">
                <div className=" flex flex-col shadow  mb-5 w-full px-2 py-1">
                <h1 className="text-center h-20 pb-3 text-xl text-gray-900">{product.name}</h1>
                <img src={product.image_link} alt={product.name[0].toUpperCase()} className="rounded-xl text-gray-500 hover:rotate-12 transition-transform m-3 hover:-translate-y-3" />
                </div>
                
                <div className="text-start self-start pl-5">
                <p>Marca: {product.brand[0].toUpperCase() + product.brand.substring(1)}</p>
                <p>Tipo: {product.product_type}</p>
                <p>${product.price}</p>
                </div>
                <div>
                  <button className="p-3 bg-pink-400 text-white rounded-md m-5 hover:brightness-125 transition">Mais informações</button>
                </div>
              </div>
              
            </div>
          ))
        }
      </div>
    </section>
  </main>
  )
}