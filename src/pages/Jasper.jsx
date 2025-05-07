import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


function Jasper() {
  const [subGrades, setSubGrades] = useState([])
  const [selectedGrade, setSelectedGrade] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/master/subGradeDetails')
      .then(response => {
        if (response.data.status && response.data.data) {
          const grades = response.data.data.map(grade => grade.subGradeName);
          setSubGrades(grades);
        }
      })
      .catch(error => console.error('Error fetching sub grades:', error))
  }, [])

  const handleSubmit = () => {
    if (!selectedGrade) {
      alert('Please select a grade')
      return
    }

    axios.post('http://localhost:8080/jasper/generateEmpReport', {
      grade: selectedGrade
    })
      .then(response => {
        console.log('Report generated:', response.data)
      })
      .catch(error => console.error('Error generating report:', error))
  }

  return (
    <>
          <Header />
      <Sidebar />

    <div className="container">
      <h1 style={{ 
        color: '#2c3e50', 
        textAlign: 'center',
        marginTop: '5rem'
      }}>Jasper Report Generator</h1>
      
      <div className="form-group" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <select 
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '4px',
            width: '200px',
            border: '1px solid #ddd'
          }}
        >
          <option value="">Select Grade</option>
          {subGrades.map((grade, index) => (
            <option key={index} value={grade}>
              {grade}
            </option>
          ))}
        </select>

        <button 
          onClick={handleSubmit}
          style={{
            padding: '0.6rem 1.2rem',
            fontSize: '1rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Generate Report
        </button>
      </div>
    </div>
    </>
  )
}

export default Jasper;
