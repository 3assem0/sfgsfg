import React from 'react'

export default function Parent() {

    // const [product, setproduct] = useState([{
        
    // }]);

  return (
    <>
    {/* <h1>hii</h1> */}
    <div className="container p-8 mt-8 bg-red-700 mx-auto">

    <div className="grid gap-3 grid-cols-4"></div>
    {
        products.map((product)=>{
            return <div className="col-span-1 text-center p-4 rounded-lg bg-white text-slate-950">
                <h2>Lorem, ipsum dolor.</h2>
                <h2></h2>
                <h2></h2>
                <p></p>
            </div>
        })
    }
    </div>

    </>
  )
}
