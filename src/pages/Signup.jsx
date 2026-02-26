import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props){

  const user=props.user
  const setuser=props.setuser

  const navigate=useNavigate()

  const[InpUsername,setInpUsername]=useState("")
  
  const[Inppsw,setInppsw]=useState("")

  function checkusername(event){
setInpUsername(event.target.value)
}
function checkpassword(event){
setInppsw(event.target.value)
}
function addlogin()
{
setuser([...user,{username:InpUsername,password:Inppsw}])
navigate("/")
}
  return( <div className="bg-black p-10">
    <div className="bg-[#efefef] p-10 border rounded-md">
      <h1 className="text-3xl font-semibold">Hey!hi</h1>
      <p>I help you manage your activity after you login :)</p>
      <div className=" flex flex-col gap-2 my-2">
        <input value={InpUsername} onChange={checkusername} placeholder="username.." className="border rounded-md w-52 bg-transparent p-1  border-black" type="text" />
        <input value={Inppsw} onChange={checkpassword} placeholder="password.." className="border rounded-md w-52 bg-transparent p-1 border-black" type="text" />
        <input placeholder="confirm password.." className="border rounded-md w-52 bg-transparent p-1 border-black" type="text" />
        <button onClick={addlogin} className="w-24 bg-[#FAA200] rounded-md p-1">Sign up</button>
        <p>If you already have account! <Link className="underline" to={"/"}>Login</Link></p>
      </div>
      
    </div>

    

  </div>

   )
}
export default Signup;