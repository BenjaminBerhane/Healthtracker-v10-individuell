import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ProfileCard = () => {
  const { weight, height, age, activityLevel, goal, tdee } = useSelector((state) => state.profile);

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
    <main className="flex flex-col items-center p-4 bg-green-50">
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 mt-4 fixed-width">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Profilinformation</h2>
        
        <div className="flex justify-center mb-4">
          <img src="default-profile.png" alt="Profilbild" className="rounded-full w-24 h-24 object-cover" />
        </div>

        <p className="mb-2"><strong>Vikt:</strong> {weight} kg</p>
        <p className="mb-2"><strong>Längd:</strong> {height} cm</p>
        <p className="mb-2"><strong>Ålder:</strong> {age} år</p>
        <p className="mb-2"><strong>Aktivitetsnivå:</strong> {getActivityLevelDescription(activityLevel)}</p>
        <p className="mb-2"><strong>Mål:</strong> {getGoalDescription(goal)}</p>
        <p className="mb-4"><strong>Dagliga intag:</strong> {tdee ? Math.round(tdee) : 'Beräknas...'} kcal</p>

        <button
          onClick={handleClick}
          className="w-full bg-green-600 text-white rounded py-2 hover:bg-green-700 transition duration-200"
        >
          Ändra Profil
        </button>
      </div>
    </main>
  );
};

export default ProfileCard;