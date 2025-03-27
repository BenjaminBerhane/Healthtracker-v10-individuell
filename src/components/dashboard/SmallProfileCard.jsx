import React from 'react';

import { useNavigate } from 'react-router';
import { Button } from '../ui/button';

const ProfileCard = () => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profileform');
  };

  return (
    <section className="group bg-card text-black rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Hej User! </h2>
        
        <div className="flex justify-center mb-4">
          <img src="src\assets\profilbild.jpg" alt="Profilbild" className="rounded-full w-28 h-28 object-cover" />
        </div>


        <Button
          onClick={handleClick}
          className="hidden group-hover:block w-full"
        >
          Ändra Profil
        </Button>
      </section>
  );
};

export default ProfileCard;