import { useState, useEffect } from 'react';
import axios from 'axios';

import FlatItem from "./FlatItem";
import Title from './Title';

const FlatList = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://newmail-2.onrender.com/getproperty/get'); // Replace with your API endpoint
            setProperties(response.data);
            console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    const title = {
        text: "Explore the Latest Listings with Propertest",
        description: "Explore the Latest Listings with Propertest dolor sit ame"
    };

    return (
        <section className="section-all-re">
        <div className="container mx-auto">
         
        <Title title={title.text} description={title.description} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    properties.map(property => (
                        <div key={property.id}>
                            <FlatItem title={property.title} description={property.description} iiimsrc={property.images} />
                        </div>
                    ))
                )}
            </div>
        </div>
    </section>
    
    );
};

export default FlatList;
