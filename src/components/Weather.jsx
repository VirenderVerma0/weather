import axios from 'axios'
import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState()

    const ApiKey = "88f3a23fd8f47e5ffc2890f3867780b2";
    const handelchange = (e) => {
        setCity(e.target.value)
    }
    const fetchWeather = async()=>{
        try{
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"88f3a23fd8f47e5ffc2890f3867780b2"}`)
     setWeather(response)
     console.log(response)
        }
    catch(error){
        if(city===""){
        alert("Enter City")
        }
        else{
            alert("No data found",error)
        }
        
        
    }
}
    const handelClick=()=>{
        fetchWeather();
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handelClick(); // Trigger the button action
        }
      };
    return (
        <>
            <div className="flex items-center justify-center min-h-[91.2vh] bg-gray-500 shadow-xl">
                <div className='min-h-[20vh] min-w-[30vw] bg-gray-800 rounded-2xl text-center p-20 '>
                <h1 className='text-5xl text-slate-200 mb-15 mt-[-30px] '> <i>Current Weather</i></h1>
                    <input type="text" name="" id="" className='bg-white rounded  md:px-30 py-2 text-center' onKeyDown={handleKeyDown} placeholder='Enter City' value={city} onChange={handelchange} />
                    <div >
                        <button className=' p-2 bg-slate-300 rounded mt-7 cursor-pointer' onClick={handelClick} >Get Weather</button>
                    </div>
                    {weather&& < >
                    <div  >
                        <h3 className=' mt-5 my-2 text-xl text-gray-200'>{weather.data.name}</h3>
                        <p className='my-2 text-xl text-gray-200'>Temp is   {weather.data.main.temp}</p>
                        <p className='my-3 text-xl text-gray-200'>{weather.data.weather[0].description}</p>
                    </div>
                    </>|| <p className='mt-5 text-xl text-gray-200'>No Data Found</p>}

                </div>
            </div>
        </>
    )
}

export default Weather
