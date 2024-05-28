import { useState, useEffect } from 'react';
import axios from 'axios';

import Title from './Title';
import Heroitem from './Heroitem';


const Heromain = () => {

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
        text: "Explore Latest the Skin care Product ",

    };

    return (
        <section className="section-all-re">
        <div className="container mx-auto">
         
        <Title title={title.text} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    properties.map(property => (
                        <div key={property.id}>
                            <Heroitem title={property.title} id={property.id} description={property.description} iiimsrc={property.images} />
                        </div>
                    ))
                )}
            </div>
        </div>
    </section>
    
    );
};

export default Heromain;
