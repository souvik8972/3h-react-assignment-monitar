
import './App.css'
import FormSection from './FormSection'
import ShowVoting from './ShowVoting'
import { VoteContextProvider } from './store/VoteContext'

function App() {


  return (
    <VoteContextProvider>
  <FormSection/>
  <ShowVoting/>
    </VoteContextProvider>
  )
}

export default App
