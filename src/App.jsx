

import './App.css'
import Navbar from './Navbar'
import Container from './Container'
import Banner from './Banner'
import Cards from './Cards'
import { Suspense } from 'react'
import Footer from './Footer'

const datafetch = async () => {
  const result =await fetch("/data.json")
  return result.json()
}
function App() {
  // const promiseData = datafetch();

  
  return (
  
    <>
  
      <Navbar></Navbar>
   {/* <Banner  ></Banner > */}
   

   <Suspense fallback ={"loading ..."}>
    <Cards promiseData ={promiseData} ></Cards>
   </Suspense>


   <Footer></Footer>
  
  
    </>
  )
}

export default App
