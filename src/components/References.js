import Slider from "react-slick";
import Title from "./Title";

import { useState, useEffect } from "react";
import axios from 'axios';

const References = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://newmail-2.onrender.com/getproperty/get'); // Replace with your API endpoint
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const title = {
        text: "Explore the Latest Product",

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
                        {data.map((item, index) => (
                            <div key={index} style={{ flex: "0 0 auto", marginRight: "15px" }}>
                           
                           <img className="w-full" src={`https://newmail-2.onrender.com/uploads/${item.images}`} alt="flat" />
                               
                               
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default References;
