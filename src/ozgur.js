import React,{useState,useEffect} from 'react'
import Action1 from './redux/actions/DT_Action'
import { useSelector, useDispatch } from 'react-redux'
function Ozgur() {
    //Redux ı test etmek ıcın baktım.
    const [data,setData]=useState()
    const dispatch=useDispatch()
    const dataStored = useSelector((state) => state.reducer1.data)
    useEffect(() => {
       console.log(dataStored)
    }, [dataStored])
    return (
        <div>
           <input value={data} placeholder='ssss' onChange={(e)=> setData(e.target.value)}></input> 
           <button 
           title='BANA BAS'

           onClick={()=>{
               dispatch(Action1(data))
           }}>BANA BAS!</button>
           
        </div>
    )
}
export default Ozgur;