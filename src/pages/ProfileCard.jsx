import React from 'react';
import { useSelector } from 'react-redux';
import './ProfileCard.css'; // Skapa en CSS-fil för styling
import { useNavigate } from 'react-router';

const ProfileCard = () => {
  
  const {  weight, height, age, activityLevel, goal, tdee } = useSelector((state) => state.profile);
  

 
  const getActivityLevelDescription = (activityLevel) => {
    switch (activityLevel) {
      case 1.2:
        return "Stillasittande";
      case 1.375:
        return "Lätt aktivitet";
      case 1.55:
        return "Måttligt aktiv";
      case 1.725:
        return "Mycket aktiv";
      case 1.9:
        return "Elit/idrottare";
      default:
        return "Inget aktivitetsnivå valt";
    }
  };

  const getGoalDescription = (goal) => {
    switch (goal) {
      case -500:
        return "Gå ner i vikt";
      case 0:
        return "Hålla vikten";
      case 500:
        return "Gå upp i vikt";
      default:
        return "Inget mål valt";
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profileform');
  };


  return (
    <div className="profile-card">
      <h2>Profilinformation</h2>
      <div className="profile-image">
        {/* Här kan du lägga till en profilbild */}
        <img src="default-profile.png" alt="Profilbild" />
      </div>
      {/* <p><strong>Kön:</strong> {gender}</p> */}
      <p><strong>Vikt:</strong> {weight} kg</p>
      <p><strong>Längd:</strong> {height} cm</p>
      <p><strong>Ålder:</strong> {age} år</p>
      <p><strong>Aktivitetsnivå:</strong> {getActivityLevelDescription(activityLevel)}</p>
      <p><strong>Mål:</strong> {getGoalDescription(goal)}</p>
      <p><strong>Dagliga intag:</strong> {tdee ? Math.round(tdee) : 'Beräknas...'} kcal</p>

      <button onClick={() => handleClick()}>Ändra Profil</button>
    </div>
  );
};

export default ProfileCard;