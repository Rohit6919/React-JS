import { useState } from 'react'
import './App.css'

function App() {
  const [FormData , setFormData]= useState({
    firstname:"",
    email:"",
    password:"",
    confirmpassword:""
  }
  )
  const[showPassword , setshowPassword]= useState("false")
  const[Error , setError] = useState("")
  
  function handleSubmit(e){
    e.preventDefault()
    
    if(FormData.firstname.length<5){
      setError("give big name")
      return;
    }
   if(FormData.password.length<8){
    setError("password must be more than 8 digit")
    return;
   }
   if(!/[@#$%^&*()]/.test(FormData.password)){
    setError("special character is not there ")
    return;
   }
   if(FormData.password !== FormData.confirmpassword){
    setError("both should be same ")
    return;
   }

   setError("")
    setFormData({
      firstname: "", 
      email: "", 
      password: "", 
      confirmpassword:"",
    })
  }
  function handleChange(e){
    const{name,value}= e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-xl'>
        <form onSubmit={(e)=>{
          handleSubmit(e)
        }}className="flex flex-col items-center gap-8">
          <h1 className='text-black text-2xl font-bold'>Signup Form</h1>
          <div className="w-full">
            <label className="block text-lg font-medium">Name</label>
            <input
              className="w-full border-2 border-black px-3 py-1 text-xl"
              type="text"
              placeholder='enter your name'
              required
              name="firstname"
              value={FormData.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-black px-3 py-1 text-xl"
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              value={FormData.email}
              onChange={handleChange}
            />
          </div>

              {/* PASSWORD FIELD WITH TOGGLE BUTTON */}
              <div className="w-full relative">
            <label className="block text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-black px-3 py-1 text-xl"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              required
              placeholder="Enter your password"
              name="password"
              value={FormData.password}
              onChange={handleChange}
            />
            {/* Eye Icon Button */}
            <button
              type="button"
              className="absolute right-4 top-9 text-xl"
              onClick={() => setshowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"} {/* Change icon dynamically */}
            </button>
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium">Confirm Password</label>
            <input
              className="w-full border-2 border-black px-3 py-1 text-xl"
              type="password"
              placeholder="Confirm your password"
              required
              name="confirmpassword"
              value={FormData.confirmpassword}
              onChange={handleChange}
            />
          </div>
          {Error &&(
            <p className='text-red-600 text-3xl'> {Error}</p>
          )}

          <button className="bg-emerald-600 w-full mt-4 px-4 py-2 text-center font-bold">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
