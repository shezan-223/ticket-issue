
import { use, useState } from 'react';
import Banner from './Banner';
import Task from './task';
import { Suspense } from 'react';




const Cards = ({promiseData}) => {
let cardData = use(promiseData)
 
let [data,setData] =useState(cardData);
  let [history ,setHistory]=useState([])
  

const [count, setCount] = useState(0);
let  handleClick = (Cards) => {
    setCount(count + 1);
setHistory(count => [...count,Cards])
}

   const handleCompleted = (title) => {
    setHistory(count=>count.filter(item => item.title !== title));
  };
   

    
 
 

    return (
        < >
       <Banner data ={data} count={count}></Banner>
       <section className='flex  justify-between container mx-auto'>
        <div>
               <h1 className='container mx-auto text-3xl mt-2'>Customer Tickets</h1>
            <div className='grid grid-cols-2 gap-5 ' >
            {
                data.map((onlyData)=>{
                  
                    
                    return (

                        <div onClick={handleClick} className='shadow-md bg-slate-100'>
                          
                           <div className='flex justify-between items-center mt-1 '>
                            <h1 className='text-2xl'>{onlyData.title}</h1>
                            <button className={`font-semibold py-1 px-2  shadow rounded-md  ${onlyData.status == 'Open' ? "bg-green-300": onlyData.status == 'In Progress' ?"bg-yellow-200" : 'bg-red-400'  }`}>{onlyData.status}</button>
                            </div>

                            <p>{onlyData.description}</p>

                            <div>
                                <p className={`${onlyData.priority == 'High' ? "text-red-500" : onlyData.priority == 'Medium' ? "text-yellow-500":  "text-green-500" } text-xl font-semibold`}>{onlyData.priority}</p>
                                <p>{onlyData.createdAt}</p>

                            </div>
                            

                        </div>
                    )
                        

                    
                })


            }
        </div>

        </div>
        <div className='task  '>
            <Suspense>
    <Task  history ={history} handleCompleted={handleCompleted}></Task>
</Suspense>

        </div>
       

       </section>
          


  </>  )  ;
};

export default Cards;



