import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';

import Swal from 'sweetalert2'
export default function AdLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
       
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });

        console.log(formData)
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
          ...formData,
          userImage: file,
        });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
       
        const formDataToSend = new URLSearchParams();
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
      
        try {
          const response = await axios.post('https://newmail-2.onrender.com/adminlogin', formDataToSend.toString(), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
      
 
          if (response.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Welcome Admin Successful!',
              text: 'You have successfully logged in.',
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.setItem('adminemail', formData.email);
                window.location.href = '/dashboard';
              }
            });
          } else {
           
            console.error('Unexpected status code:', response.status);
          }
        } catch (error) {

            if(error.response && error.response.status === 404){
                Swal.fire({
                    icon: 'error',
                    title: 'User Not Found!!',
                    text: 'Please check your email and try again.',
                  });
            }
    
          if (error.response && error.response.status === 401) {
            Swal.fire({
              icon: 'error',
              title: 'Wrong Password',
              text: 'Please check your password and try again.',
            });
          } else {
            // Handle other errors
            console.error("Error:", error);
          }
        }
      };
      
   
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            id="username"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
       
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Signup</button>
      </form>
    </div>
  </div>
  )
}
