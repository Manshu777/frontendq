import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';


const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://newmail-2.onrender.com/get/slider');
      console.log("Response:", response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='overflow-hidden'>


    <Slider
    
      infinite={true}
      speed={500}
      
      slidesToShow={1}
      slidesToScroll={1}
      arrows={false}
    >
      {data.map((image, index) => (
        <div key={index}>
          <img
            className="w-full h-[30rem] max-md:h-[12rem] max-lg:h-96 max-xl:h-120 bg-cover bg-center"
            src={`https://newmail-2.onrender.com/uploads/${image.images}`}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Banner;
