import '../style/login.css'
import hotstar from '../image/hotstarlogo.svg'

import { Link } from 'react-router-dom';

import { useRef } from "react";
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


let Login=()=>{
    
    let [user,setUser]=useState([])
    let navigate=useNavigate()
    
    let Phno=useRef("")
    let pswd=useRef("")
    
    
    let Submit=(n)=>{
        n.preventDefault()
        let data={
            phno:Phno.current.value,
            password:pswd.current.value
        }
        
        axios.post('https://hotstar-clone-mo21.onrender.com/login',data).then((res)=>{
            alert(res.data.message)
            if(res.data.status==200){
                navigate('/home')
                     }
        })
        

    }
    
    return(
        <div className="loginpage">
 <marquee behavior="" direction="" scrollamount='10' id="marquee_hotstar">please wait!! fetching data will take sometime. </marquee>

            <div className="box">
            
            <div className="round">
                 <img src={hotstar} alt="" className='hotstar' height={70} width={70}/>
                 </div>

        
           <div className="login">
                 <form action="" onSubmit={Submit}>
              <input type="tel" ref={Phno} pattern='[0-9]{10}' placeholder='phone number'/>
                <input type="text" ref={pswd} placeholder='password'/><br />
                
                <div className="login_button">
                <button>Login</button>
                <span>/</span>  <Link to="/signUp">S<span style={{color:'red'}}>i</span>gnUp</Link>
                </div>
                
               </form>
            </div>
            </div>
       
        </div>
          
            
       


    )
}
export default Login;