import '../style/search.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
let WatchList=()=>{
    let [items,setItems]=useState([])
    

  //series
 
  useEffect(()=>{
    let fetchData=async()=>{
      let res=await axios.get('http://localhost:5001/watchlist')
      setItems(res.data)
     
    }
    fetchData()
  },[])


    

 
 

    return(
        <div className="search">
            
     <h1 className='text-white'>WatchList</h1>
            <div className="itemsList"> 
            {
  items.map((x)=>{
    if(x.field!='sports'){
      return(
        <div className="movies">
          
         <div className="iii">
         <Link to={`/singlePage/${x.id}`}><div class="carousel-item active">
      <img src={x.image} class="moviImage d-block" alt="..." height={190} width={195} />
      <div class="tt carousel-caption d-none d-md-block">
        <img id="tato" src={x.imgtitle} alt="" height={40}  width={90}/>
         </div>
         </div></Link>
         <div className="moviDetails">
        <div className="btnRow">
        <Link to={`/singlePage/${x.id}`}><button id="btn"><span class="material-symbols-outlined">
  play_arrow
  </span>Watch Now</button> </Link> <button className="wishList" >&#10003;</button>
        </div>
  <h6 className="me-1">{x.year} 
  <span id="dot">&#9734; </span>  {x.otherDetails} <span id="dot">&#9734; </span> {x.totalanguage} Language</h6>
  <p>{x.description}</p>
  
         </div> 
        </div>
        </div>
      )
      }
      if(x.field=='sports'){
        return(
          <div className="movies">
          
         <div className="iii">
         <Link to={`/singlePage/${x.id}`}><div class="carousel-item active">
      <img src={x.image} class="moviImage d-block" alt="..." height={190} width={195} />
      <div class="tt carousel-caption d-none d-md-block">
        
         </div>
         </div></Link>
         <div className="moviDetails">
        <div className="btnRow">
        <Link to={`/singlePage/${x.id}`}><button id="btn"><span class="material-symbols-outlined">
  play_arrow
  </span>Watch Now</button> </Link> <button className="wishList"  >&#10003;</button>
        </div>
  <h6 className="me-1">{x.year} 
  <span id="dot">&#9734; </span>  {x.title} <span id="dot">&#9734; </span> </h6>
  <p>{x.description}</p>
  
         </div> 
        </div>
        </div>
        )
        }
  })
}
            </div>
        </div>
    )

}
export default WatchList