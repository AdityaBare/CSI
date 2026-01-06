
import ReactDom from 'react-dom/client'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './index.css'
import Login from './components/login/Login'
 import AddEvent from './components/addEvent/AddEvent'
 import ViewStudents from './components/home/ViewStudents'
 import Edit from './components/home/Edit'

import Home from './components/home/Home'


 const root = ReactDom.createRoot(document.getElementById('root'));
 root.render(
   <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Home/>}/> 
         <Route path="/addEvent" element={<AddEvent />} />
         <Route path="/viewStudents/:id" element={<ViewStudents />} />
         <Route path="/edit/:id" element={<Edit />} />
         <Route path="/login" element={<Login />} />

        
      </Routes>
    
   </BrowserRouter>
)
