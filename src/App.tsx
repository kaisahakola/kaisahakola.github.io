import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const header = "Kaisa Hakola"

  return (
    <Router>
      <Header header={header} />
    </Router>
  )
}

export default App
