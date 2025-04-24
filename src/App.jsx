import React, { useState } from 'react';

const App = () => {
  const [singleSelect, setSingleSelect] = useState('');
  const [multiSelect, setMultiSelect] = useState([]);
  const [radio, setRadio] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    apple: false,
    banana: false,
    cherry: false,
    mango: false,
    orange: false,
  });

  const handleMultiChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((opt) => opt.value);
    setMultiSelect(selectedOptions);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  const containerStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #ddd',
  };

  const headingStyle = {
    marginBottom: '0.5rem',
    color: '#333',
  };

  const selectStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Single Select (Colors)</h2>
        <select style={selectStyle} value={singleSelect} onChange={(e) => setSingleSelect(e.target.value)}>
          <option value="">-- Choose a color --</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Purple">Purple</option>
        </select>
        <p><strong>Selected:</strong> {singleSelect}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Multi-Select Dropdown (Technologies)</h2>
        <select
          multiple
          value={multiSelect}
          onChange={handleMultiChange}
          style={{ ...selectStyle, height: '120px' }}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>
        <p><strong>Selected:</strong> {multiSelect.join(', ')}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Radio Buttons (Gender)</h2>
        <label style={{ marginRight: '1rem' }}>
          <input type="radio" value="Male" checked={radio === 'Male'} onChange={(e) => setRadio(e.target.value)} />
          Male
        </label>
        <label style={{ marginRight: '1rem' }}>
          <input type="radio" value="Female" checked={radio === 'Female'} onChange={(e) => setRadio(e.target.value)} />
          Female
        </label>
        <label>
          <input type="radio" value="Other" checked={radio === 'Other'} onChange={(e) => setRadio(e.target.value)} />
          Other
        </label>
        <p><strong>Selected:</strong> {radio}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Checkboxes (Fruits)</h2>
        {Object.keys(checkboxes).map((fruit) => (
          <label key={fruit} style={{ display: 'block', marginBottom: '0.5rem' }}>
            <input
              type="checkbox"
              name={fruit}
              checked={checkboxes[fruit]}
              onChange={handleCheckboxChange}
            />
            {' '}{fruit.charAt(0).toUpperCase() + fruit.slice(1)}
          </label>
        ))}
        <p><strong>Selected Fruits:</strong> {Object.entries(checkboxes).filter(([_, checked]) => checked).map(([fruit]) => fruit).join(', ')}</p>
      </div>
    </div>
  );
};

export default App;