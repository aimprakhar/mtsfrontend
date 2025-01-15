import React, { useState } from 'react';
import './PersonSearch.css'; // Importing the CSS file for styling

const initialPeople = [
  { name: 'John', qualities: { kindness: 'high', intelligence: 'medium', honesty: 'high' } },
  { name: 'Alice', qualities: { kindness: 'high', intelligence: 'high', honesty: 'low' } },
  { name: 'Bob', qualities: { kindness: 'medium', intelligence: 'low', honesty: 'high' } },
  { name: 'Charlie', qualities: { kindness: 'low', intelligence: 'medium', honesty: 'medium' } }
];

const PersonSearch = () => {
  const [people, setPeople] = useState(initialPeople); // Manage list of people
  const [filteredPeople, setFilteredPeople] = useState(people); // Filtered list based on search queries

  // For adding a new person
  const [newPersonName, setNewPersonName] = useState('');
  const [newPersonQualities, setNewPersonQualities] = useState([]); // Array to hold key-value pairs for qualities
  const [newQualityName, setNewQualityName] = useState('');
  const [newQualityValue, setNewQualityValue] = useState('');

  // Search filters
  const [searchFilters, setSearchFilters] = useState([{ key: '', value: '' }]); // Array of key-value pairs for search

  // Handle adding a new key-value pair for search
  const handleAddSearchFilter = () => {
    setSearchFilters([...searchFilters, { key: '', value: '' }]);
  };

  // Handle changing a key-value pair for search filter
  const handleSearchFilterChange = (index, field, value) => {
    const updatedFilters = [...searchFilters];
    updatedFilters[index][field] = value;
    setSearchFilters(updatedFilters);
  };

  // Handle the search functionality
  const filterPeople = () => {
    const filtered = people.filter(person => {
      return searchFilters.every(filter => {
        const { key, value } = filter;
        if (!key || !value) return true; // If key or value is empty, skip this filter
        
        // Match the key and value in the person's qualities
        const qualityValue = person.qualities[key];
        if (!qualityValue) return false; // If the quality key doesn't exist, exclude the person
        
        return qualityValue.toLowerCase() === value.toLowerCase(); // Ensure exact match
      });
    });

    setFilteredPeople(filtered);
  };

  // Function to handle adding a new quality to the new person
  const handleAddQuality = () => {
    if (newQualityName && newQualityValue) {
      setNewPersonQualities([...newPersonQualities, { name: newQualityName, value: newQualityValue }]);
      setNewQualityName('');
      setNewQualityValue('');
    } else {
      alert("Please enter both quality name and value!");
    }
  };

  // Function to handle adding a new person or updating an existing person
  const handleAddPerson = () => {
    if (!newPersonName || newPersonQualities.length === 0) {
      alert("Please provide a name and at least one quality!");
      return;
    }

    // Convert the array of qualities to an object
    const qualitiesObject = newPersonQualities.reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});

    // Check if the person already exists
    const personIndex = people.findIndex(person => person.name.toLowerCase() === newPersonName.toLowerCase());

    if (personIndex !== -1) {
      // If person exists, update their qualities
      const updatedPeople = [...people];
      const existingPerson = updatedPeople[personIndex];

      // Merge the existing qualities with the new ones
      const updatedQualities = { ...existingPerson.qualities, ...qualitiesObject };

      // Update the person's data
      updatedPeople[personIndex] = { ...existingPerson, qualities: updatedQualities };
      setPeople(updatedPeople);
    } else {
      // If person does not exist, create a new person
      setPeople([...people, { name: newPersonName, qualities: qualitiesObject }]);
    }

    // Clear the form after adding the person
    setNewPersonName('');
    setNewPersonQualities([]);
  };

  return (
    <div className="About11">
      <h1>Search and Add People by Quality</h1>

      {/* Search Bar */}
      <div className="search-container">
        <h2>Search Filters</h2>
        {searchFilters.map((filter, index) => (
          <div key={index} className="search-filter">
            <input 
              type="text" 
              value={filter.key} 
              onChange={(e) => handleSearchFilterChange(index, 'key', e.target.value)} 
              placeholder="Quality name (key)"
            />
            <input 
              type="text" 
              value={filter.value} 
              onChange={(e) => handleSearchFilterChange(index, 'value', e.target.value)} 
              placeholder="Quality value"
            />
          </div>
        ))}
        <button onClick={handleAddSearchFilter}>Add Another Filter</button>
        <button onClick={filterPeople}>Apply Filters</button>
      </div>

      {/* Add Person Form */}
      <h2>Add a New Person</h2>
      <div className="add-person-container">
        <input 
          type="text" 
          value={newPersonName} 
          onChange={(e) => setNewPersonName(e.target.value)} 
          placeholder="Enter person's name" 
        />

        {/* Quality Name and Value Inputs */}
        <div className="quality-inputs">
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

        {/* List added qualities */}
        <div>
          <h3>Qualities:</h3>
          {newPersonQualities.map((quality, index) => (
            <p key={index}>{quality.name}: {quality.value}</p>
          ))}
        </div>

        <button onClick={handleAddPerson}>Add Person</button>
      </div>

      {/* Filtered List of People */}
      <div>
        <h2>Filtered People:</h2>
        {filteredPeople.length === 0 ? (
          <p>No matches found</p>
        ) : (
          <ul>
            {filteredPeople.map((person, index) => (
              <li key={index}>
                <strong>{person.name}</strong>: 
                {Object.entries(person.qualities).map(([qualityName, qualityValue]) => (
                  <span key={qualityName}> {qualityName}: {qualityValue};</span>
                ))}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PersonSearch;
