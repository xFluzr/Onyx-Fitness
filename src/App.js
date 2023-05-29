import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {faFaceLaugh} from '@fortawesome/free-solid-svg-icons';
 
const App = () => {
  return (
    <>
      <h1>Onyx Fitness</h1>
      <FontAwesomeIcon icon={faDumbbell} />
      <FontAwesomeIcon icon={faFaceLaugh} />
      <p>Testuje gita</p>
    </>
  )
}

export default App