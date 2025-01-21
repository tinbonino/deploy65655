import { collection, getDocs,getFirestore, query, where } from "firebase/firestore";
import { useEffect } from "react";


function Query() {

    const db=getFirestore();

    useEffect(() => {
      // Creo la referencia a la collection

      const refItems=collection(db,"items");

      // Generamos la consulta (query)

    //   const refItemsFiltrados = query(refItems,where("price","<",100));
      const refItemsFiltrados = query(refItems,where("categoryId","==","gorros"));

      getDocs(refItemsFiltrados).then(snapshot=>{
        if(snapshot.size===0){
            console.log("No hay resultados para la búsqueda");
        } else {
            snapshot.docs.map(prod=>console.log(prod.data()))
        }
      })

    },[])

  return (
    <div>Probamos una query</div>
  )
}

export default Query