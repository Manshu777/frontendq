import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {


    const getuserId = localStorage.getItem('id');


    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://newmail-2.onrender.com/${getuserId}`);
        setUser(response.data);
        console.log("Response:", response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();

  
    
  }, []);

  return (

    <div className="flex items-center justify-center h-[50vh] ">
        
      {user ? (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">User Profile</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
             
              <img className="h-12 w-12 rounded-full" src={`https://newmail-2.onrender.com/uploads/${user[0].user_image}`} alt="User Avatar" />
            </div>
            <div className="ml-4">

              <h4 className="text-lg font-semibold text-gray-900">{user[0].username}</h4>

              <p className="text-sm text-gray-500">{user[0].email}</p>
            </div>
          </div>
        </div>
      </div>
      
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
