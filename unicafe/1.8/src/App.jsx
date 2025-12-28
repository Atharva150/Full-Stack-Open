import { useState } from 'react'


const Header = () => {
  return(
    <h2>give feedback</h2>
  )
}


const Content = () => {
  return(
      <h1>Statistics</h1>
  )
}

const Statistics = ({good,bad,neutral}) => {
  return(
    <div>
      <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
      <p>average {(good - bad)/(good + neutral + bad)}</p>
      <p>positive {(good)/(good + neutral + bad)}</p>

    </div>
  )
}

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
       <Header/>
      <button onClick={handlegood}>good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Content/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
