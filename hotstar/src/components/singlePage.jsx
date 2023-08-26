import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import adsImage from "../image/adsImage.jpg"
import infinix from "../image/D_Hotstar_logo_Dark_BG_120x120.png"
import { useNavigate } from "react-router-dom"
import "../style/singlePage.css"
import axios from "axios"
import { Link } from "react-router-dom"


let SinglePage=()=>{
    let params = useParams()
    let [product,setProduct] = useState([])
    let navigate=useNavigate()
    
    
       
       useEffect(()=>{
        let fetchData=async()=>{
          let res=await axios.get('https://hotstar-clone-mo21.onrender.com/items')
          setProduct(res.data)
         
        }
        fetchData()
      },[])

       




      
    return(
        <div className="singlepage">

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
           
          {
            product.map((x)=>{
              if(x.id==params.id){
               return(
        <div className="single">
          <div class="carousel-item active">
    <img src={x.image} class="moviImage d-block" alt="..." height={400} width={1205}/>
    <div class="tt carousel-caption d-none d-md-block">
      <img id="tato" src={x.imgtitle} alt="" height={90}  width={150}/>
      <div className="itemsDetails">
      <h5 className="me-1">{x.year} 
<span id="dot">&#9734; </span>  {x.title} <span id="dot">&#9734; </span> {x.totalanguage} Language</h5>
<marquee behavior="" direction="">
<p>{x.description}</p></marquee>
      </div>
       </div>
       
       
       </div>
       
          
        </div>
              )
              }
      })
    }
       
        </div>
    )
}
export default SinglePage