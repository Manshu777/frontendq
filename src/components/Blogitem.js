import { useState,useEffect } from "react";
import {Link} from "react-router-dom"

const BlogItem = ({id,description,iiimsrc,title}) => {
    const [blogData, setBlogData] = useState(null);


   
  
    return (
        <div className="col-lg-4">
        <div className="blog-item">
            <div className="blog-img">
                <img src={`https://newmail-2.onrender.com/uploads/${iiimsrc}`} alt="product" className="w-full" />
            </div>
            <div className="blog-content">
                <h2 className="blog-title">
                    <Link to={`/blog/${title}`} className="text-xl font-semibold">{title}</Link>
                </h2>
                <div className="blog-info"></div>
                <div className="blog-text">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default BlogItem