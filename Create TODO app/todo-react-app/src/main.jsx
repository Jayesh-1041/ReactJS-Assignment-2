import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './assets/css/style.css'
import GroceryApp from './components/TodoApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GroceryApp/>
  </StrictMode>,
)
