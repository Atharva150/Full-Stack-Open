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


const Statistics = (props) => {

  if(!props.good  || !props.neutral || !props.bad){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <div>
      <table>
        <tbody>
        <tr>
      <td>good {props.good}</td>
        </tr>
        <tr>
          <td>bad {props.bad}</td>
        </tr>
        <tr>
          <td>neutral {props.neutral}</td>
        </tr>
        <tr>
          <td>All {props.good + props.bad + props.neutral}</td>
        </tr>
      <tr>
        <td>average {(props.good-props.bad)/(props.good+props.bad+props.neutral)}</td>
      </tr>
      <tr>
          <td>Positive:{(props.good*100)/(props.bad+props.neutral+props.good)}</td>
      </tr>
      </tbody>
      </table>
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
      <Statistics good={good} bad ={bad} neutral={neutral}/>
      </div>
  )
}

export default App
