import { useState } from "react"
import Addtodoform from "./Addtotdoform"
import Todolistcomp from "./Todolistcomp"

function Todolist() {

     const [activityarr, setactivityarr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Go to gym"
        },
        {
            id: 3,
            activity: "Drink 2 litres of water"
        }
    ])



    return (
        <>
    
    <div>
        <div className="flex flex-row gap-4 flex-wrap">
            <Addtodoform activityarr={activityarr} setactivityarr={setactivityarr} />
            <Todolistcomp activityarr={activityarr} setactivityarr={setactivityarr}/>

       
       
        </div>
    </div>
    </>
    )

}
export default Todolist