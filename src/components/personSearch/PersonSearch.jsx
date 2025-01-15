import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonSearch = () => {
  const [people, setPeople] = useState([]);
  const [newPersonName, setNewPersonName] = useState('');
  const [newPersonQualities, setNewPersonQualities] = useState([]);
  const [newQualityName, setNewQualityName] = useState('');
  const [newQualityValue, setNewQualityValue] = useState('');
  const p=1;//1 for server
  const backendUrl=p===1?"https://mtsbackend.onrender.com/api":"http://localhost:8700/api";
  // Fetch people from the backend
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(backendUrl+'/find');
        setPeople(response.data);
      } catch (error) {
        console.error('There was an error fetching the people!', error);
      }
    };

    fetchPeople();
  }, []);

  // Handle adding a new person
  const handleAddPerson = async () => {
    if (!newPersonName || newPersonQualities.length === 0) {
      alert('Please provide a name and at least one quality!');
      return;
    }

    const qualitiesObject = newPersonQualities.reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});

    const newPerson = { name: newPersonName, qualities: qualitiesObject };

    try {
      const response = await axios.post(backendUrl+'/', newPerson);
      setPeople([...people, response.data]);
      setNewPersonName('');
      setNewPersonQualities([]);
    } catch (error) {
      console.error('There was an error adding the person!', error);
    }
  };

  // Handle adding a new quality to the new person
  const handleAddQuality = () => {
    if (newQualityName && newQualityValue) {
      setNewPersonQualities([...newPersonQualities, { name: newQualityName, value: newQualityValue }]);
      setNewQualityName('');
      setNewQualityValue('');
    } else {
      alert('Please enter both quality name and value!');
    }
  };

  return (
    <div>
      <h1>Search and Add People by Quality</h1>

      {/* Add Person Form */}
      <h2>Add a New Person</h2>
      <input
        type="text"
        value={newPersonName}
        onChange={(e) => setNewPersonName(e.target.value)}
        placeholder="Enter person's name"
      />
      
      {/* Quality Name and Value Inputs */}
      <div>
        <input
          type="text"
          value={newQualityName}
          onChange={(e) => setNewQualityName(e.target.value)}
          placeholder="Enter quality name (e.g., kindness)"
        />
        <input
          type="text"
          value={newQualityValue}
          onChange={(e) => setNewQualityValue(e.target.value)}
          placeholder="Enter quality value (e.g., high)"
        />
        <button onClick={handleAddQuality}>Add Quality</button>
      </div>

      {/* List of Qualities */}
      <div>
        <h3>Qualities:</h3>
        {newPersonQualities.map((quality, index) => (
          <p key={index}>{quality.name}: {quality.value}</p>
        ))}
      </div>

      <button onClick={handleAddPerson}>Add Person</button>

      {/* List of People */}
      <h2>People List:</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <strong>{person.name}</strong> - Qualities:
            {Object.entries(person.qualities).map(([qualityName, qualityValue]) => (
              <span key={qualityName}> {qualityName}: {qualityValue};</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonSearch;
