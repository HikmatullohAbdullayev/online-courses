import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
       <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="courses" element={<Courses/>} /> */}

                  {/* <Route path="courses/uiux" element={<UIUX/>}/>
                  <Route path="courses/desingbeginner" element={<DesingBeginner/>}/>
                  <Route path="courses/mobile" element={<Mobile/>}/>
                  <Route path="courses/webdesing" element={<WebDesing/>}/>
                  <Route path="courses/webdev" element={<WebDev/>}/>
                
                
                <Route path="signup" element={<Signup2/>}/> */}

                <Route path="*" element={<NotFound/>}/>
               </Route>
            </Routes>
     
    </>
  )
}

export default App
