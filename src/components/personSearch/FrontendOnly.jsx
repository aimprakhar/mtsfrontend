// import React, { useState } from 'react';
// import './PersonSearch.css'; // Importing the CSS file for styling
// import Select from 'react-select'; // Importing react-select for searchable dropdowns

// const initialPeople = [
//   { name: 'John', qualities: { kindness: 'high', intelligence: 'medium', honesty: 'high' } },
//   { name: 'Alice', qualities: { kindness: 'high', intelligence: 'high', honesty: 'low' } },
//   { name: 'Bob', qualities: { kindness: 'medium', intelligence: 'low', honesty: 'high' } },
//   { name: 'Charlie', qualities: { kindness: 'low', intelligence: 'medium', honesty: 'medium' } }
// ];

// const PersonSearch = () => {
//   const [people, setPeople] = useState(initialPeople); // Manage list of people
//   const [filteredPeople, setFilteredPeople] = useState(people); // Filtered list based on search queries

//   // For adding a new person
//   const [newPersonName, setNewPersonName] = useState('');
//   const [newPersonQualities, setNewPersonQualities] = useState([]); // Array to hold key-value pairs for qualities
//   const [newQualityName, setNewQualityName] = useState('');
//   const [newQualityValue, setNewQualityValue] = useState('');

//   // Search filters
//   const [searchFilters, setSearchFilters] = useState([{ key: '', value: '' }]); // Array of key-value pairs for search

//   // Extract all unique keys from the list of people (qualities)
//   const allKeys = Array.from(new Set(people.flatMap(person => Object.keys(person.qualities))));

//   // Determine available values for a specific key
//   const getAvailableValues = (key) => {
//     const values = people
//       .map(person => person.qualities[key])
//       .filter((value, index, self) => self.indexOf(value) === index); // Get unique values
//     return values;
//   };

//   // Handle adding a new key-value pair for search
//   const handleAddSearchFilter = () => {
//     setSearchFilters([...searchFilters, { key: '', value: '' }]);
//   };

//   // Handle changing a key-value pair for search filter
//   const handleSearchFilterChange = (index, field, value) => {
//     const updatedFilters = [...searchFilters];
//     updatedFilters[index][field] = value;
//     setSearchFilters(updatedFilters);
//   };

//   // Handle the search functionality
//   const filterPeople = () => {
//     const filtered = people.filter(person => {
//       return searchFilters.every(filter => {
//         const { key, value } = filter;
//         if (!key || !value) return true; // If key or value is empty, skip this filter
        
//         // Match the key and value in the person's qualities
//         const qualityValue = person.qualities[key];
//         if (!qualityValue) return false; // If the quality key doesn't exist, exclude the person
        
//         return qualityValue.toLowerCase() === value.toLowerCase(); // Ensure exact match
//       });
//     });

//     setFilteredPeople(filtered);
//   };

//   // Function to handle adding a new quality to the new person
//   const handleAddQuality = () => {
//     if (newQualityName && newQualityValue) {
//       setNewPersonQualities([...newPersonQualities, { name: newQualityName, value: newQualityValue }]);
//       setNewQualityName('');
//       setNewQualityValue('');
//     } else {
//       alert("Please enter both quality name and value!");
//     }
//   };

//   // Function to handle adding a new person or updating an existing person
//   const handleAddPerson = () => {
//     if (!newPersonName || newPersonQualities.length === 0) {
//       alert("Please provide a name and at least one quality!");
//       return;
//     }

//     // Convert the array of qualities to an object
//     const qualitiesObject = newPersonQualities.reduce((acc, { name, value }) => {
//       acc[name] = value;
//       return acc;
//     }, {});

//     // Check if the person already exists
//     const personIndex = people.findIndex(person => person.name.toLowerCase() === newPersonName.toLowerCase());

//     if (personIndex !== -1) {
//       // If person exists, update their qualities
//       const updatedPeople = [...people];
//       const existingPerson = updatedPeople[personIndex];

//       // Merge the existing qualities with the new ones
//       const updatedQualities = { ...existingPerson.qualities, ...qualitiesObject };

//       // Update the person's data
//       updatedPeople[personIndex] = { ...existingPerson, qualities: updatedQualities };
//       setPeople(updatedPeople);
//     } else {
//       // If person does not exist, create a new person
//       setPeople([...people, { name: newPersonName, qualities: qualitiesObject }]);
//     }

//     // Clear the form after adding the person
//     setNewPersonName('');
//     setNewPersonQualities([]);
//   };

//   // Prepare options for Key dropdown
//   const keyOptions = allKeys.map(key => ({
//     label: key,
//     value: key
//   }));

//   // Prepare options for Value dropdown (dynamically based on the selected Key)
//   const getValueOptions = (key) => {
//     return getAvailableValues(key).map(value => ({
//       label: value,
//       value: value
//     }));
//   };

//   // Function to clear all search filters
//   const handleClearFilters = () => {
//     setSearchFilters([{ key: '', value: '' }]); // Reset to the default state (empty filter)
//     setFilteredPeople(people); // Reset filtered people list to show all people
//   };

//   return (
//     <div className='About11'>
//       <h1>Search and Add People by Quality</h1>

//       {/* Search Bar */}
//       <div className="search-container">
//         <h2>Search Filters</h2>
//         {searchFilters.map((filter, index) => (
//           <div key={index} className="search-filter">
//             {/* Key dropdown - show all available qualities */}
//             <Select
//               value={filter.key ? { label: filter.key, value: filter.key } : null}
//               onChange={(selectedOption) => handleSearchFilterChange(index, 'key', selectedOption ? selectedOption.value : '')}
//               options={keyOptions}
//               placeholder="Select Quality"
//             />

//             {/* Value dropdown - show values based on selected key */}
//             <Select
//               value={filter.value ? { label: filter.value, value: filter.value } : null}
//               onChange={(selectedOption) => handleSearchFilterChange(index, 'value', selectedOption ? selectedOption.value : '')}
//               options={filter.key ? getValueOptions(filter.key) : []}
//               isDisabled={!filter.key}
//               placeholder="Select Value"
//             />
//           </div>
//         ))}
//         <button onClick={handleAddSearchFilter}>Add Another Filter</button>
//         <button onClick={filterPeople}>Apply Filters</button>
//         <button onClick={handleClearFilters}>Clear Filters</button> {/* Clear Filters Button */}
//       </div>

//       {/* Add Person Form */}
//       <h2>Add a New Person</h2>
//       <div className="add-person-container">
//         <input 
//           type="text" 
//           value={newPersonName} 
//           onChange={(e) => setNewPersonName(e.target.value)} 
//           placeholder="Enter person's name" 
//         />

//         {/* Quality Name and Value Inputs */}
//         <div className="quality-inputs">
//           <input 
//             type="text" 
//             value={newQualityName} 
//             onChange={(e) => setNewQualityName(e.target.value)} 
//             placeholder="Enter quality name (e.g., kindness)" 
//           />
//           <input 
//             type="text" 
//             value={newQualityValue} 
//             onChange={(e) => setNewQualityValue(e.target.value)} 
//             placeholder="Enter quality value (e.g., high)" 
//           />
//           <button onClick={handleAddQuality}>Add Quality</button>
//         </div>

//         {/* List added qualities */}
//         <div>
//           <h3>Qualities:</h3>
//           {newPersonQualities.map((quality, index) => (
//             <p key={index}>{quality.name}: {quality.value}</p>
//           ))}
//         </div>

//         <button onClick={handleAddPerson}>Add Person</button>
//       </div>

//       {/* Filtered List of People */}
//       <div>
//         <h2>Filtered People:</h2>
//         {filteredPeople.length === 0 ? (
//           <p>No matches found</p>
//         ) : (
//           <ul>
//             {filteredPeople.map((person, index) => (
//               <li key={index}>
//                 <strong>{person.name}</strong>: 
//                 {Object.entries(person.qualities).map(([qualityName, qualityValue]) => (
//                   <span key={qualityName}> {qualityName}: {qualityValue};</span>
//                 ))}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PersonSearch;
// // ------------------------------------------------





// import React, { useState, useEffect } from 'react';
// import './PersonSearch.css';
// import Select from 'react-select';
// import useFetch from '../hooks/useFetch';
// import RingLoader from 'react-spinners/RingLoader';

// const PersonSearch = () => {
//   const [people, setPeople] = useState([]);
//   const [filteredPeople, setFilteredPeople] = useState([]);
//   const [newPersonName, setNewPersonName] = useState('');
//   const [newPersonQualities, setNewPersonQualities] = useState([]);
//   const [newQualityName, setNewQualityName] = useState('');
//   const [newQualityValue, setNewQualityValue] = useState('');
//   const [searchFilters, setSearchFilters] = useState([{ key: '', value: '' }]);
//   const p=0;//1 for server
//   const backendUrl=p===1?"https://mtsbackend.onrender.com/api":"http://localhost:8700/api";
//   var {data,loading,error,reFetch}=useFetch(backendUrl+"/person/people");
//   if(!loading){
//     for (let i = 0; i < data.length; i++) {
//       const person = data[i];
//       const processedPerson = {
//         ...person,
//         index: i
//       };
//       people.push(processedPerson);
//       filteredPeople.push(processedPerson);
//       console.log(filteredPeople)
//     }
//   }

//   // Fetch people from the backend API
//   // useEffect(() => {
//   //   fetch(backendUrl+'/person/people')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       // console.log(data[0])
//   //       for (let i = 0; i < data.length; i++) {
//   //         const person = data[i];
//   //         const processedPerson = {
//   //           ...person,
//   //           index: i
//   //         };
//   //         people.push(processedPerson);
//   //         filteredPeople.push(processedPerson);
//   //       }
        
//   //       console.log(filteredPeople)
//   //     })
//   //     .catch(error => console.error(
//   //       'Error fetching people:', error
//   //     ));
//   // }, []);

//   const handleAddSearchFilter = () => {
//     setSearchFilters([...searchFilters, { key: '', value: '' }]);
//   };

//   const handleSearchFilterChange = (index, field, value) => {
//     const updatedFilters = [...searchFilters];
//     updatedFilters[index][field] = value;
//     setSearchFilters(updatedFilters);
//   };

//   const filterPeople = () => {
//     fetch(backendUrl+'/filter', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ filters: searchFilters })
//     })
//       .then(response => response.json())
//       .then(data => setFilteredPeople(data))
//       .catch(error => console.error('Error filtering people:', error));
//   };

//   const handleAddQuality = () => {
//     if (newQualityName && newQualityValue) {
//       setNewPersonQualities([...newPersonQualities, { name: newQualityName, value: newQualityValue }]);
//       setNewQualityName('');
//       setNewQualityValue('');
//     } else {
//       alert("Please enter both quality name and value!");
//     }
//   };

//   const handleAddPerson = () => {
//     if (!newPersonName || newPersonQualities.length === 0) {
//       alert("Please provide a name and at least one quality!");
//       return;
//     }

//     const qualitiesObject = newPersonQualities.reduce((acc, { name, value }) => {
//       acc[name] = value;
//       return acc;
//     }, {});

//     fetch(backendUrl+'/people', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name: newPersonName, qualities: qualitiesObject })
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert(data.message);
//         if (data.message === 'Person added successfully.') {
//           setPeople([...people, { name: newPersonName, qualities: qualitiesObject }]);
//         }
//       })
//       .catch(error => console.error('Error adding person:', error));

//     setNewPersonName('');
//     setNewPersonQualities([]);
//   };

//   const allKeys = Array.from(new Set(people.flatMap(person => Object.keys(person.qualities))));

//   const keyOptions = allKeys.map(key => ({ label: key, value: key }));

//   const getValueOptions = (key) => {
//     return people
//       .map(person => person.qualities[key])
//       .filter((value, index, self) => self.indexOf(value) === index)
//       .map(value => ({ label: value, value: value }));
//   };

//   const handleClearFilters = () => {
//     setSearchFilters([{ key: '', value: '' }]);
//     setFilteredPeople(people);
//   };

//   return (
//     <div className='About11'>
//       <h1>Search and Add People by Quality</h1>

//       {/* Search Bar */}
//       <div className="search-container">
//         <h2>Search Filters</h2>
//         {searchFilters.map((filter, index) => (
//           <div key={index} className="search-filter">
//             <Select
//               value={filter.key ? { label: filter.key, value: filter.key } : null}
//               onChange={(selectedOption) => handleSearchFilterChange(index, 'key', selectedOption ? selectedOption.value : '')}
//               options={keyOptions}
//               placeholder="Select Quality"
//             />
//             <Select
//               value={filter.value ? { label: filter.value, value: filter.value } : null}
//               onChange={(selectedOption) => handleSearchFilterChange(index, 'value', selectedOption ? selectedOption.value : '')}
//               options={filter.key ? getValueOptions(filter.key) : []}
//               isDisabled={!filter.key}
//               placeholder="Select Value"
//             />
//           </div>
//         ))}
//         <button onClick={handleAddSearchFilter}>Add Another Filter</button>
//         <button onClick={filterPeople}>Apply Filters</button>
//         <button onClick={handleClearFilters}>Clear Filters</button>
//       </div>

//       {/* Add Person Form */}
//       <h2>Add a New Person</h2>
//       <div className="add-person-container">
//         <input
//           type="text"
//           value={newPersonName}
//           onChange={(e) => setNewPersonName(e.target.value)}
//           placeholder="Enter person's name"
//         />
//         <div className="quality-inputs">
//           <input
//             type="text"
//             value={newQualityName}
//             onChange={(e) => setNewQualityName(e.target.value)}
//             placeholder="Enter quality name (e.g., kindness)"
//           />
//           <input
//             type="text"
//             value={newQualityValue}
//             onChange={(e) => setNewQualityValue(e.target.value)}
//             placeholder="Enter quality value (e.g., high)"
//           />
//           <button onClick={handleAddQuality}>Add Quality</button>
//         </div>
//         <div>
//           <h3>Qualities:</h3>
//           {newPersonQualities.map((quality, index) => (
//             <p key={index}>{quality.name}: {quality.value}</p>
//           ))}
//         </div>
//         <button onClick={handleAddPerson}>Add Person</button>
//       </div>

//       {/* Filtered List of People */}
//       <div>
//         <h2>Filtered People:</h2>
//         { loading ? (
//           <div className="RingLoader">
//           <RingLoader color="#36d7b7" size="100px" />
//           <p >Loading for Rental Services...</p>
//           </div>
//         ) : (
//           <ul>
//             {filteredPeople.map((person, index) => (
//               <li key={index}>
//                 <strong>{person.name}</strong>:
//                 {Object.entries(person.qualities).map(([qualityName, qualityValue]) => (
//                   <span key={qualityName}> {qualityName}: {qualityValue};</span>
//                 ))}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div>
//         <textarea style={{ width: '1000px' }} type="text" name="" id="" value={JSON.stringify(data)} rows={10} />
//       </div>
//     </div>
//   );
// };

// export default PersonSearch;

