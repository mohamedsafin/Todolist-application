import binimage from "../assets/images/bin.png"
function Todoitem(props){
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr

    function handlechange(deleteid){
        var temparr=activityarr.filter(function(item){
            if(item.id==deleteid){
                return false
            }
            else{
                return true
            }
            
        })
        setactivityarr(temparr)

    }

    return(
        <div className="flex justify-between">
            <p>{props.index+1}.{props.item.activity}</p>
            <button onClick={()=>handlechange(props.id)} ><img className="w-5 h-5" src={binimage} alt="" /></button>
           
        </div>
    )
}
export default Todoitem;