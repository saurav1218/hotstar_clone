import { useState,useEffect } from "react"
import '../style/movie.css'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
let Movies=()=>{
    let [movies,setMovie]=useState([])
    let [domi,setDomi]=useState([])

    let navigate=useNavigate()

    // Movies
  
  useEffect(()=>{
    let fetchData=async()=>{
      let res=await axios.get('https://hotstar-clone-mo21.onrender.com/items')
     
      let fields=res.data.filter((x)=>x.field=='movies')
      setMovie(fields)
      setDomi(fields)
    }
    fetchData()
  },[])

  //for kannada
  let kannada=()=>{
    let res=domi.filter((x)=>x.type=='kannada')
    setMovie(res)
  }

  //for English
  let english=()=>{
    let res=domi.filter((x)=>x.type=='english')
    setMovie(res)
  }

  //for hindi
  let hindi=()=>{
    let res=domi.filter((x)=>x.type=='hindi')
    setMovie(res)
  }

  //for kannada
  let telugu=()=>{
    let res=domi.filter((x)=>x.type=='telugu')
    setMovie(res)
  }

  //for kannada
  let tamil=()=>{
    let res=domi.filter((x)=>x.type=='tamil')
    setMovie(res)
  }

  

    //fav
    

    let addFav=(title)=>{
      movies.filter((x)=>{
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
        <div className="moviesField">
          <div className="type">
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6669/1526669-a-76efd0c306cd" alt="" onClick={kannada} />
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae" alt="" onClick={english}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" onClick={hindi}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61" alt="" onClick={telugu}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563" alt="" onClick={tamil}/>
          </div>
         
                   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {
            movies.map((x)=>{
              return(
                <div class="carousel-item active">
    <img src={x.image} class="d-block w-100" alt="..." height={400} width={1400} />
    <div class="details carousel-caption d-none d-md-block">
      <img src={x.imgtitle} alt="" height={70}  width={200}/>
        <h5 className="me-1">{x.year} * {x.otherDetails} *{x.totalanguage} Language</h5>
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

<h2 className="text-white">Movies</h2>

{
  movies.map((x)=>{
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
      <div className="btnRow"><Link to={`/singlePage/${x.id}`}>
      <button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button> </Link> <button className="wishList" onClick={()=>addFav(x.title)} >+</button>
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
    )
}
export default Movies