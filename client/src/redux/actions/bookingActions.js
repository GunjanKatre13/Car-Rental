import axios from 'axios';
import { message } from 'antd';

export const bookCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING', payload:true})
        try {
        const response = await axios.post('https://car-rental-8pg2.onrender.com/api/bookings/bookcar',reqObj)
        console.log(response);
        window.location = response.data.url;
        
        dispatch({type: 'LOADING', payload:false})
        
        
        } catch (error){
            console.log(error);
            dispatch({type: 'LOADING', payload:false})
            message.error('something went wrong ')
        }

}
 


export const getAllBookings=()=>async dispatch=>{

    dispatch({type: 'LOADING', payload:true})
        try {
        const response = await axios.get('https://car-rental-8pg2.onrender.com/api/bookings/getallbookings')
        dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
        dispatch({type: 'LOADING', payload:false})
        
        } catch (error){
            console.log(error);
            dispatch({type: 'LOADING', payload:false})
        }

}
