
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/dashboard'
import { Home } from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
