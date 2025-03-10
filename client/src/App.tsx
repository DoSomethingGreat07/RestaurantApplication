import './App.css'
import { Button } from './components/ui/button'
import Login from './auth/Login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from './auth/Signup'
import MainLayout from './MainLayout'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    // children:[
    //{
      //path:"/login"
    //}
    
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path:"/reset-password",
    element:<ResetPassword/>
  },
  {
    path:"/verify-email",
    element:<VerifyEmail/>
  }

])





function App() {

  return (
    <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
     
    </main>
  )
}

export default App
