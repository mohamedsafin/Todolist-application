import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props){

const navigate =useNavigate()
const user=props.user
const setuser=props.setruser  

const[InpUsername,setInpUsername]=useState("")

const[Inppsw,setInppsw]=useState("")


const[ruser,setruser]=useState(true)



function checkusername(event){
setInpUsername(event.target.value)
}
function checkpassword(event){
setInppsw(event.target.value)
}
function checkuser(){

  var userfound=false

  user.forEach(function(item) {

    if(item.username===InpUsername && item.password===Inppsw){
      console.log("Login successful")
      userfound=true
      navigate("/landing" ,{state:{user:InpUsername}})

    }
    if(userfound===false){
      console.log("login failed")
      setruser(false)
    }
   
    
  });

}




   return( <div className="bg-black p-10">
    <div className="bg-[#efefef] p-10 border rounded-md">
      <h1 className="text-3xl font-semibold">Hey!hi</h1>
      {ruser?<p>I help you manage your activity after you login :)</p>:<p className="text-red-600">Please signup before you login</p>}
      
      <div className=" flex flex-col gap-2 my-2">
        <input value={InpUsername} onChange={checkusername}  placeholder="username.." className="border rounded-md w-52 bg-transparent p-1  border-black" type="text" />
        <input value={Inppsw} onChange={checkpassword} placeholder="password.." className="border rounded-md w-52 bg-transparent p-1 border-black" type="text" />
        <button onClick={checkuser} className="w-24 bg-[#8272da] rounded-md p-1">Login</button>
        <p>If you dont have account! <Link className="underline" to={"/signup"}>Sign up</Link></p>
      </div>
      
    </div>

    

  </div>

   )
  
}
export default Login;