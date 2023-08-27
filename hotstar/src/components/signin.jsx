import '../style/login.css'
import hotstar from '../image/hotstarlogo.svg'

import { useRef } from "react";
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


let SignUp=()=>{

    let navigate=useNavigate()
    let name1=useRef('')
    let phno1=useRef("")
    let password1=useRef("")
    let confirmpassword1=useRef("")

    let inputOTP=useRef("")
  let otp=Math.trunc(Math.random()*10000)
 let getOpt=(n)=>{
    n.preventDefault()
  alert(otp)

 }
   let submit=(n)=>{
    n.preventDefault()
    let data={
        username:name1.current.value,
        phno:phno1.current.value,
        password:password1.current.value,
        confirmpassword:confirmpassword1.current.value
    }
    
    if(data.username && data.phno && data.password && data.password==data.confirmpassword){
     if(inputOTP.current.value==otp){
       
        axios.post('https://hotstar-clone-mo21.onrender.com/signUp',data).then((res)=>{
            alert(res.data.message)
            if(res.data.status==200){
                navigate('/')
                     }
        })
      
        
      
    }
    else{
        alert('invalid Otp')
    }
}
else{
    alert('invalid credential')
}

   
  

 }
    return(
        <div className="loginpage">
 <marquee behavior="" direction="" scrollamount='10' id="marquee_hotstar">please wait!! fetching data will take sometime. </marquee>

            <div className="box">
            
            <div className="round">
                 <img src={hotstar} alt="" className='hotstar' height={70} width={70}/>
                 </div>

        
           <div className="login">
            <h2 className='text-white'>SignUp</h2>
                 <form action="" onSubmit={submit}>
                <input type="text" ref={name1} placeholder="user name"/>
                <input type="tel" ref={phno1} pattern="[0-9]{10}" placeholder='Phone Number' />
                <button onClick={getOpt}>Get OTP</button>
                <input type="text" ref={inputOTP} placeholder='Enter OTP' id='otp'  /><br/>
                <input type="password"  ref={password1} placeholder="enter password"/>
                <input type="password" ref={confirmpassword1} placeholder="confirm password"/> <br />
          <div className="button">

                <button className='px-3'>Submit</button> <span>/</span><Link to={'/'}>S<span style={{color:'red'}}>i</span>gn I<span style={{color:'red'}}>n</span></Link>
               </div>
               </form>
            </div>
            </div>
       
        </div>
          
            
       


    )
}
export default SignUp;