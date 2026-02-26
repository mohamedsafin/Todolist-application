import { useState } from "react";
import Todoitem from "./Todoitem";
function Todolistcomp(props) {

   const activityarr=props.activityarr;
   const setactivityarr=props.setactivityarr

    return (
        <>
            <div className="bg-[#BEB4EB] p-4 flex-grow border rounded-md ">
                <h1 className="font-medium text-3xl">Today's Activity</h1>
                 {activityarr.length===0?<p>You have no activity</p>:""}
                {
                    activityarr.map(function(item,index){
                        return <Todoitem item={item} index={index} activityarr={activityarr} setactivityarr={setactivityarr} id={item.id}/>
                    })
                }
            </div>

        </>
    )
}
export default Todolistcomp;