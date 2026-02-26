function Cards(props){
    return(
        <>
         
            <div style={{backgroundColor:props.bgcolor}} className=" py-10 px-5 border rounded flex-grow">
              <h1 className="text-3xl font-semibold">{props.title}</h1>
              <p className="font-medium">{props.subtitle}</p>
            </div>
         
        </>
    )
}


export default Cards