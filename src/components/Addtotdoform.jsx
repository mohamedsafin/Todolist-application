import { useState } from "react";

function Addtodoform(props){

    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr

    const[newactivity,setnewactivity]=useState("") 

    function handleactivity(event){

        setnewactivity(event.target.value)
    }
    function additem(){

        setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])

        
        

    }




    return(
        <>
         <div>
            <h1 className="font-bold text-3xl">Manage your activity</h1>
            <input value={newactivity} onChange={handleactivity} className="bg-transparent p-1 border border-black my-2" placeholder="Enter your activity..." type="text" />
            <button onClick={additem} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
        </>
    )
}
export default Addtodoform;