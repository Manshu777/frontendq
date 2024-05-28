import React, { useState } from 'react';
import axios from 'axios';
import Swal from'sweetalert2';
const Contact = () => {
    // State for form fields
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          
            const params = new URLSearchParams();
            for (const key in formData) {
                params.append(key, formData[key]);
            }
            setLoading(true)
           
            const response = await axios.post('https://newmail-2.onrender.com/contact', params);
            setLoading(false);
              
            Swal.fire({
              icon: 'success',
              title: 'Thank you for Contact us',
              text: 'send your response shortly',
            }).then((result) => {
              if (result.isConfirmed) {
              
                
              
              }
            });
             
           
            setFormData({
                name: '',
                phone: '',
                subject: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <section className="contact  bg-gray-100">
        <div className="page-top text-center">
          <div className="container">
            <h1 className="page-title">Contact</h1>
            <h2 className="page-description">Contact</h2>
          </div>
        </div>
        <div className="page-content">
          <div className="container mx-auto">
            <div className="lg:flex lg:justify-center bg-gray-100 ">
             
              <div className="lg:w-1/2 bg-white shadow-md p-5">
                <div className="lg:mx-auto lg:w-4/5">
                <form onSubmit={handleSubmit}>
                                    <div className="lg:flex lg:flex-wrap lg:-mx-4 mt-8">
                                        <div className="lg:w-full px-4 mb-4">
                                            <label className="block mb-1">Name Surname</label>
                                            <input type="text" className="inp-contact w-full" name="name" value={formData.name} onChange={handleInputChange} />
                                        </div>
                                        <div className="lg:w-1/2 px-4 mb-4">
                                            <label className="block mb-1">Phone</label>
                                            <input type="text" className="inp-contact w-full" name="phone" value={formData.phone} onChange={handleInputChange} />
                                        </div>
                                        <div className="lg:w-1/2 px-4 mb-4">
                                            <label className="block mb-1">Email</label>
                                            <input type="text" className="inp-contact w-full" name="email" value={formData.email} onChange={handleInputChange} />
                                        </div>
                                        <div className="lg:w-full px-4 mb-4">
                                            <label className="block mb-1">Subject</label>
                                            <input type="text" className="inp-contact w-full" name="subject" value={formData.subject} onChange={handleInputChange} />
                                        </div>
                                        <div className="lg:w-full px-4 mb-4">
                                            <label className="block mb-1">Message</label>
                                            <textarea type="text" className="ta-contact w-full" rows="4" name="message" value={formData.message} onChange={handleInputChange}></textarea>
                                        </div>
                                        <div className="lg:w-full px-4 mb-4">
                                            <button type="submit" className="btn-contact w-full" disabled={loading} >{loading ? 'Send Messg...' : 'Send Message'}</button>
                                        </div>
                                    </div>
                                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;
