import Slider from "react-slick";
import Title from "./Title";

import { useState, useEffect } from "react";
import axios from 'axios';
import BlogItem from "./Blogitem"

const BlogRef = () => {
    

    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://newmail-2.onrender.com/blog/get');
            setProperties(response.data);
            console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    const title = {
        text: "Explore the Latest  Blog",
        description: "Explore the Latest Listings with Propertest dolor sit ame"
    };

    const settings = {
        infinite: true,
        speed: 100,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="section-references bg-gray-100 py-10">
            <div className="container mx-auto">
                <Title title={title.text} description={title.description} />
                <div className="w-full overflow-hidden ">
                    <Slider  {...settings}>
                        {properties.map((item, index) => (
                            <>
                            {console.log(item)}
                            <BlogItem title={item.title} description={item.description} iiimsrc={item.image_url} />
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default BlogRef;

