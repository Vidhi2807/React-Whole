import BasicButtons from './components/BasicButtons'
import './App.css'

function App() {
  return (
    <div className="card">
      <h1>Basic MUI Buttons</h1>
      <div className="card">
        <BasicButtons />
        <p>
          These buttons are imported from <code>BasicButtons.jsx</code>.
        </p>
      </div>
    </div>
  )
}

export default App
