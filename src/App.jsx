
import './App.css'
import FormSection from './FormSection'

import { VoteContextProvider } from './store/VoteContext'

function App() {


  return (
    <VoteContextProvider>
  <FormSection/>

    </VoteContextProvider>
  )
}

export default App
