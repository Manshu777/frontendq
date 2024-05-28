
import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
const Sigup = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    userImage: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData({
      ...formData,
      userImage: file,
    });

    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const formDataToSend = new FormData();
    setLoading(true);

    formDataToSend.append("username", formData.username);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("confirmPassword", formData.confirmPassword);
    formDataToSend.append("userImage", formData.userImage);
  
    try {
    
      const response = await axios.post("https://newmail-2.onrender.com/signup", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
  
      const userId = response.data.id;
      console.log("Response:", response.data);


      Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
        text: 'You have successfully signed up.',
      }).then((result) => {
       
        if (result.isConfirmed) {
          localStorage.setItem('userId', userId);

  

          window.location.href = '/';
        }
      });


    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'User Alreay Exist!',
   
      }).then((result) => {
       
        if (result.isConfirmed) {
       
  

          window.location.href = '/login';
        }
      });

    
      console.error("Error:", error);
    }
    finally {
      setLoading(false); 
    }
  };
  

  return (
    <div class="flex justify-center items-center h-screen">

    <div class="bg-white flex flex-col md:flex-row p-8 max-md:p-2 max-sm:p-2  max-w-md md:max-w-3xl rounded shadow-md w-[80%] md:w-[80%]">
  
    
  
      <div class="w-full p-4">
        <h2 class="text-3xl w-full font-semibold text-center text-gray-800 mb-6">Join Us!</h2>
        <form onSubmit={handleSubmit} class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label for="userImage" class="block text-sm font-medium text-gray-700">Profile Image</label>
            <input
              type="file"
              id="userImage"
              name="userImage"
              accept="image/*"
              onChange={handleImageChange}
              class="mt-1  border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button type="submit" class="block w-full bg-indigo-600 text-white font-semibold  rounded-md hover:bg-indigo-700 transition duration-300" disabled={loading}>{loading ? 'Signing up...' : 'Signup'}</button>
        </form>
      </div>
  
    </div>
  </div>
  
  
  );
};

export default Sigup;
