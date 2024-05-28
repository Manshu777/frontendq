import { useEffect,useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

const Subscribe = () => {
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const formData = new URLSearchParams();
        formData.append('email', email);

            const response = await axios.post('https://newmail-2.onrender.com/newsletter', formData); 
            setLoading(false);

            Swal.fire({
                icon: 'success',
                title: 'Thank you for Contacting us',
                text: 'We will respond shortly',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <section className="section-subscribe bg-gray-100 py-10">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h2 className="text-3xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-lg text-white mb-6">Stay updated with our latest news, articles, and special offers.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end">

                <form onSubmit={handleSubmit}>

                    <input type="text"  name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="w-full lg:w-64 border border-gray-300 rounded-l py-3 px-4 focus:outline-none focus:border-gray-400 mb-2 lg:mb-0" />
                    <button type="submit" className="bg-blue-500 text-white font-semibold rounded-r py-3 px-6 hover:bg-blue-600 focus:outline-none focus:bg-blue-600" disabled={loading}>
                    {loading ? 'Loading..' : 'Subcribe'}
                    </button>

                    </form>

                </div>
            </div>
        </div>
    </section>
    
    
    )
}

export default Subscribe