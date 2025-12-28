import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const all = good+bad+neutral



  const handleBad = () => {
    setBad(bad+1)
  }


  const handlegood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  return (
    <div>
    <h2>give feedback</h2>
      <button onClick={handlegood}>good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
      <p>average {(good - bad)/(good + neutral + bad)}</p>
      <p>positive {(good)/(good + neutral +bad)}</p>
</div>
  )
}

export default App
