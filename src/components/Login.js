import React,{useState} from 'react'
import axios from 'axios'


import Swal from 'sweetalert2'
export default function Login() {
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
          const response = await axios.post("https://newmail-2.onrender.com/login",  formDataToSend.toString(), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
          const userId = response.data.id;

          
          console.log(response.data)


          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'You have successfully Log In.',
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.setItem('id', userId);
         
              window.location.href = '/';
            }
          });

        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'User Not Found',
         
          }).then((result) => {
            if (result.isConfirmed) {
            
            }
          });
          console.error("Error:", error);
        }
      };
   
  return (
   


<div class="flex justify-center items-center h-screen ">

<div class="bg-white flex flex-col md:flex-row p-8 max-md:p-2 max-sm:p-2  max-w-md md:max-w-3xl rounded shadow-md w-[80%] md:w-[80%]">

 
  <div class="w-full p-4 flex flex-col justify-center">
    <h2 class="text-3xl w-full font-semibold text-center text-gray-800 mb-6">Log in!</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
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
       
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
      </form>
  </div>

</div>
</div>
  )
}
