import Header from "../components/Header";
import Cards from "../components/Cards";
import Todolist from "../components/Todolist";
import { useLocation } from "react-router-dom"

function Landing(){

    const myLocation = useLocation();
  const user = myLocation.state?.user 
    return(
        <div>
      <div className="bg-black p-16 ">
        <div className="bg-[#EFEFEF] p-10">

          <Header name={user}/>

          <div className="flex flex-wrap justify-between gap-7 my-5">
            <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Cards bgcolor={"#FD666D"} title={"February 23"} subtitle={"15.55.34"} />
            <Cards bgcolor={"#FCA201"} title={"Build using"} subtitle={"React"} />


          </div>
          <Todolist/>
        


        </div>

      </div>
    </div>
    )
}
export default Landing;