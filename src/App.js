import React, {useState} from 'react'
import InputFields from './InputFields'
import InputResults from './InputResults'

export default function App() {
  const [numbers, setNumbers] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
    ten: '',
});

const [filterCriteria, setFilterCriteria] = useState({
  operator: '>',
  value: '',
  isActive: false,
});

const [error , setError] = useState('');


  return (
    <>
        <InputFields 
        numbers={numbers} 
        setNumbers={setNumbers}
        setError={setError}
        />
      
        <InputResults
          numbers={numbers}
          filterCriteria={filterCriteria}
          setFilterCriteria={setFilterCriteria}
          error={error}
        />
        
    </>
  )
}
