import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Jasper() {
    const [subGrades, setSubGrades] = useState([])
    const [selectedGrade, setSelectedGrade] = useState('')
    const [subGradeData, setSubGradeData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/master/subGradeDetails')
            .then(response => {
                if (response.data.status && response.data.data) {
                    setSubGradeData(response.data.data);
                    const grades = response.data.data.map(grade => grade.subGradeName);
                    setSubGrades(grades);
                }
            })
            .catch(error => console.error('Error fetching sub grades:', error))
    }, [])

    const handleGenerateReport = (format) => {
        if (!selectedGrade) {
            alert('Please select a grade')
            return
        }

        const selectedGradeData = subGradeData.find(grade => grade.subGradeName === selectedGrade);
        if (!selectedGradeData) return;

        axios.get(`http://localhost:8080/jasper/generateEmpReport?subgradeId=${selectedGradeData.subGradeId}&rptFmt=${format}`, {
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

                    <div style={{
                        display: 'flex',
                        gap: '1rem'
                    }}>
                        <button
                            onClick={() => handleGenerateReport('PDF')}
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
                            Generate PDF
                        </button>

                        <button
                            onClick={() => handleGenerateReport('EXCEL')}
                            style={{
                                padding: '0.6rem 1.2rem',
                                fontSize: '1rem',
                                backgroundColor: '#2ecc71',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#27ae60'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#2ecc71'}
                        >
                            Generate Excel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jasper;