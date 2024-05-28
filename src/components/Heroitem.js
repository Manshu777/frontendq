
import { Link } from "react-router-dom";

const Heroitem = ({id,description,iiimsrc,title}) => {
   
    return (
        <div className="text-center lg:col-span-4 md:col-span-6 col-span-12">
        <div className="item">
            <div className="item-image">
                <Link to={`sproduct/${id}`} >
                <img className="w-full" src={`https://newmail-2.onrender.com/uploads/${iiimsrc}`} alt="flat" />
                </Link>
              
            </div>
            <div className="item-description">
                <div className="flex justify-between mb-3">
                    <span className="item-title">{description}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div></div>
                    <div>
                    <Link to={`sproduct/${id}`} >
                    <i className="fas fa-check-circle"></i> <span>{title}</span>
                </Link>
              
                       
                    </div>
                    <Link to={`/flat/${id}`} className="item-title">
                       
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Heroitem