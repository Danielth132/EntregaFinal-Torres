function ResumenCart({resumen,confirmo}) {
    console.log("ejecuta")
    if(confirmo){
        return ( 
        <>
        <article>
                <h3>Resumen</h3>
                <p>Nombre: {resumen.nombre}</p>
                <p>Mail:{resumen.email} </p>
                <p>Telefono:{resumen.telefono}</p>
  
        </article>
        </>
        );
    }
    

    
}

export default ResumenCart;