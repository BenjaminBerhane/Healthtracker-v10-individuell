import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <form action="">
      <h1>Profile</h1>
      <label>
      <input type="radio" name='gender' value={'male'} required/>
      Male
      </label><br />
      <label>
      <input type="radio" name='gender' value={'female'} required/>
      Female
      </label><br />

      <label htmlFor="weight"></label>
      <input type="number" name="weight" />

      <label htmlFor="height"></label>
      <input type="number" name="height" />

      <label htmlFor="age"></label>
      <input type="number" name="age" />

      <label htmlFor="activity level"></label>
      <input type="number" name="activity level" />
      
      <button type="submit">Submit</button>
    </form>
  )
}

export default Profile