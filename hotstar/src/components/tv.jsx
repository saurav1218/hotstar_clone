import { useState,useEffect } from "react"
import '../style/serials.css'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
let Tv=()=>{
    let [tv,setTv]=useState([])
    let [domi,setDomi]=useState([])
   let navigate=useNavigate()
   

   // Tv
  
   useEffect(()=>{
    let fetchData=async()=>{
      let res=await axios.get('https://hotstar-clone-mo21.onrender.com/items')
     
      let fields=res.data.filter((x)=>x.field=='tv')
      setTv(fields)
      setDomi(fields)
    }
    fetchData()
  },[])


   //for starsuvarna
   let starsuvarna=()=>{
    let res=domi.filter((x)=>x.channel=='starsuvarna')
    setTv(res)
  }

  //for starplus
  let starplus=()=>{
    let res=domi.filter((x)=>x.channel=='starplus')
    setTv(res)
    
  }

  //for starmaa
  let starmaa=()=>{
    let res=domi.filter((x)=>x.channel=='starmaa')
    setTv(res)
  }

  //for starpravah
  let starpravah=()=>{
    let res=domi.filter((x)=>x.channel=='starpravah')
    setTv(res)
  }

  //for asianet
  let asianet=()=>{
    let res=domi.filter((x)=>x.channel=='asianet')
    setTv(res)
  }


  //fav
  

  let addFav=(title)=>{
    tv.filter((x)=>{
      if(x.title==title){
        let data={
          id:x.id,
          field:x.field,
          type:x.type,
          image:x.image,
          imgtitle:x.imgtitle,
          title:x.title,
          totalanguage:x.totalanguage,
          language:x.language,
          year:x.year,
          description:x.description,
          genre:x.genre,
          channel:x.channel
         }
         axios.post('https://hotstar-clone-mo21.onrender.com/watchlist',data).then((res)=>{
          alert(res.data.message)
         })
      }
    })

  }
  
    return(
        <div className="serialField">
          <div className="type">
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/5525/1505525-a-f518f42c4dcd" alt="" onClick={starsuvarna} />
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4927/1424927-a-ef9d55486d37" alt="" onClick={starplus} />
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4940/1424940-a-6486777c0aa5" alt="" onClick={starmaa}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4941/1424941-a-b57c5a18e60c" alt="" onClick={starpravah}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4921/1424921-a-209a2f2e2af7" alt="" onClick={asianet}/>
          </div>
                   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {
            tv.map((x)=>{
              return(
                <div class="carousel-item active">
    <img src={x.image} class="d-block w-100" alt="..." height={600} width={1400} />
    <div class="details carousel-caption d-none d-md-block">
      <img src={x.imgtitle} alt="" height={70}  width={200}/>
        <h5 className="me-1">{x.year} * {x.otherDetails} {x.language.name}*</h5>
        <p>{x.description}</p>
        <h5>{x.genre}</h5>
        <h6>{x.language.name}</h6>
        <Link to={`/singlePage/${x.id}`}>
        <button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button></Link>
      </div>
    </div>

              )})}
    
    

  </div>


  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


{/* serialList */}
<div className="serialList">
<h2 className="text-white">Tv Shows</h2>

{
  tv.map((x)=>{
    return(
      <div className="movies">
        
       <div className="iii">
       <Link to={`/singlePage/${x.id}`}>
       <div class="carousel-item active">
    <img src={x.image} class="moviImage d-block" alt="..." height={190} width={195} />
    <div class="tt carousel-caption d-none d-md-block">
      <img id="tato" src={x.imgtitle} alt="" height={40}  width={90}/>
       </div>
       </div></Link>
       <div className="moviDetails">
      <div className="btnRow">
      <Link to={`/singlePage/${x.id}`}>
      <button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button></Link> <button className="wishList" onClick={()=>addFav(x.title)} >+</button>
      </div>
<h6 className="me-1">{x.year} 
<span id="dot">&#9734; </span>  {x.otherDetails} <span id="dot">&#9734; </span> {x.totalanguage} Language</h6>
<p>{x.description}</p>

       </div> 
      </div>
      </div>
    )
  })
}
</div>
        </div>
    )
}
export default Tv