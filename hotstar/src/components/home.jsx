import adsImage from "../image/adsImage.jpg"
import infinix from "../image/D_Hotstar_logo_Dark_BG_120x120.png"
import carousel from "../image/carousel.webp"
import hanuman from "../image/hanuman.webp"
import ibm from "../image/ib7.webp"
import "../style/home.css"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


let Home=()=>{
  let [all,setAll]=useState([])
  let [movies,setMovie]=useState([])
  let [series,setSeries]=useState([])
  let [serials,setSerial]=useState([])
  let [sports,setSport]=useState([])

  let navigate=useNavigate()

 
   // home
  
   useEffect(()=>{
    let fetchData=async()=>{
      let res=await axios.get('http://localhost:5001/items')
     
      setAll(res.data)

      //Movies
      let movi=res.data.filter((x)=>x.field=='movies')
      setMovie(movi)

      //Series
      let series=res.data.filter((x)=>x.field=='series')
      setSeries(series)

      //Serials
      let serials=res.data.filter((x)=>x.type=='serial')
      setSerial(serials)

       //Sports
       let sports=res.data.filter((x)=>x.field=='sports')
       setSport(sports)
    }
    fetchData()
  },[])

   //fav
   let addFav=(title)=>{
    all.filter((x)=>{
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
         axios.post('http://localhost:5001/watchlist',data).then((res)=>{
          alert(res.data.message)
         })
      }
    })

  }
  
    return(
        <div className="home">
         
          
            <div className="ads">
                <div className="adsImage">
                   <img src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-08-17/Chandrayaan3CS_deskXbb-d88b18d7-cdc5-4371-a822-33a198ad0d47.jpg' alt="" height={260} width={650}/>
                </div>
                <div className="det">
                    <div className="withBlueAds">
                       <div className="div"><img src={infinix} alt="" height={45} width={50} /></div>
                       <div className="div ms-1">
                        <span id="head">CHANDRAYANA 3</span>
                        <span className="text-secondary">Count down to history</span>

                        
                       </div>
                       
                    </div>
                    
                   <Link to='https://www.hotstar.com/in/clip/chandrayaan-3-countdown-to-history-promo/1260147552/watch'><button>Explore</button></Link>
                   
                </div>
            </div>
           

           




            

 {/* carousel */}
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {
            movies.map((x)=>{
              return(
                <div class="carousel-item active">
    <img src={x.image} class="d-block " alt="..." height={500} width={1210} />
    <div class="details carousel-caption d-none d-md-block">
      <img src={x.imgtitle} alt="" height={70}  width={200}/>
        <h5 className="me-1">{x.year} * {x.otherDetails} *{x.language.total} Language</h5>
        <p>{x.description}</p>
        <h5>{x.genre}</h5>
        <h6>{x.language.name}</h6>
        <Link to={`/singlePage/${x.id}`}><button id="btn"><span class="material-symbols-outlined">
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



{/* movieList */}
<div className="moviesList">


<h2>Movies</h2>

{
  movies.map((x)=>{
    return(
      <div className="movies">
        
       <div className="iii">
       <Link to={`/singlePage/${x.id}`}><div class="carousel-item active">
       <img src={x.image} class="moviImage d-block" alt="..." height={190} width={195} />
    <div class="tt carousel-caption d-none d-md-block">
      <img id="tato" src={x.imgtitle} alt="" height={50}  width={110}/>
       </div>
       </div></Link>
       <div className="moviDetails">
      <div className="btnRow">
      <Link to={`/singlePage/${x.id}`}><button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button> </Link> <button className="wishList" onClick={()=>addFav(x.title)} >+</button>
      </div>
<h6 className="me-1">{x.year} 
<span id="dot">&#9734; </span>  {x.otherDetails} <span id="dot">&#9734; </span> {x.language.total} Language</h6>
<p>{x.description}</p>

       </div> 
      </div>
      </div>
    )
  })
}
</div>

{/* seriesList */}
<div className="seriesList">
<h2>Series</h2>

{
  series.map((x)=>{
    return(
      <div className="movies">
        
       <div className="iii">
       <Link to={`/singlePage/${x.id}`}><div class="carousel-item active">
    <img src={x.image} class="moviImage d-block" alt="..." height={190} width={195}/>
    <div class="tt carousel-caption d-none d-md-block">
      <img id="tato" src={x.imgtitle} alt="" height={40}  width={90}/>
       </div>
       </div></Link>
       <div className="moviDetails">
      <div className="btnRow">
      <Link to={`/singlePage/${x.id}`}><button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button></Link>  <button className="wishList" onClick={()=>addFav(x.title)}  >+</button>
      </div>
<h6 className="me-1">{x.year} 
<span id="dot">&#9734; </span>  {x.otherDetails} <span id="dot">&#9734; </span> {x.language.total} Language</h6>
<p>{x.description}</p>

       </div> 
      </div>
      </div>
    )
  })
}
</div>


{/* serialList */}
<div className="serialList">
<h2>Serials</h2>

{
  serials.map((x)=>{
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
</span>Watch Now</button> </Link> <button className="wishList" onClick={()=>addFav(x.title)}  >+</button>
      </div>
<h6 className="me-1">{x.year} 
<span id="dot">&#9734; </span>  {x.otherDetails} <span id="dot">&#9734; </span> {x.language.total} Language</h6>
<p>{x.description}</p>

       </div> 
      </div>
      </div>
    )
  })
}
</div>

{/* sportsList */}
<div className="sportsField">
<h2>Best in Sports</h2>

{
  sports.map((x)=>{
    return(
      <div className="games">
        
       <div className="iii">
       <Link to={`/singlePage/${x.id}`}><div class="carousel-item active">
    <img src={x.image} class="moviImage d-block" alt="..." height={190} width={245} />
    <div className="title">
        <h6>{x.title}</h6>
       </div>
    <div class="tt carousel-caption d-none d-md-block">
      
       </div>
       </div></Link>
       <div className="moviDetail">
      <div className="btnRow">
      <Link to={`/singlePage/${x.id}`}>
      <button id="btn"><span class="material-symbols-outlined">
play_arrow
</span>Watch Now</button> </Link> <button className="wishList" onClick={()=>addFav(x.title)}  >+</button>
      </div>
<h6 className="me-1">{x.year} 
<span id="dot">&#9734; </span>   <span id="dot">&#9734; </span> </h6>
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
export default Home