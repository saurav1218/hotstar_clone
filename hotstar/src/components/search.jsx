import '../style/search.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
let Search=()=>{
    let [items,setItems]=useState([])
    

  //all items
 
  useEffect(()=>{
    let fetchData=async()=>{
      let res=await axios.get('https://hotstar-clone-mo21.onrender.com/items')
     
   console.log(res.data);
      setItems(res.data)
    }
    fetchData()
  },[])

  


    const [searchValue, setSearchValue] = useState('');
    
    const filteredData=items.filter(item=>(
      item.title.toLowerCase().includes(searchValue) ||
      item.type.toLowerCase().includes(searchValue) ||
      item.field.toLowerCase().includes(searchValue) 
    ))

 
 //fav
 let addFav=(title)=>{
  items.filter((x)=>{
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
        <div className="search">
            <div className="searchBox">
            <span class="material-symbols-outlined">
mystery
</span><input type="text" placeholder='Movies , Shows and More' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
            </div>

            <div className="itemsList"> 
            {
  filteredData.map((x)=>{
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
</span>Watch Now</button> </Link> <button className="wishList" onClick={()=>addFav(x.title)}>+</button>
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
</span>Watch Now</button> </Link> <button className="wishList" onClick={()=>addFav(x.title)} >+</button>
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
export default Search