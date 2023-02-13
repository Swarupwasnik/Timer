import React,{useEffect,useState} from 'react';
import axios from 'axios';
import "../components/Child.css";
// import ApiContext from '../context/ApiContext';
function Child(){

// const [users,setuser]=useContext(ApiContext);
const [user,setUser]=useState([]);
const [post,setPost]=useState([]);
const [cap,setCap]=useState([]);
useEffect(()=>{
    axios.post('https://api.soowgood.com/api/AppointmentSettings/AppointmentListForBooking/',{
        "ServiceProviderId":"eb9ce487-8c86-49ef-aff9-17dd2f49d459",
        "AppointmentType":"Clinic"





    }).then((res)=>{
setUser(res.data.data)
console.log(res.data.data)
setPost(res.data.appointmentdatedata);
console.log(res.data.appointmentdatedata)
console.log(res.data.cliniclist)
setCap(res.data.cliniclist);

    }).catch((error)=>{
        console.log(error.message);
    })
},[])


return (
<>
{/* card */}
<div className='lenovo'>
 <div className="clock">
   {
    cap.map((item,index)=>{
        return (
<div key={index}>
  
  <h2 className='cool'>
  <span class="material-symbols-outlined">
home
</span>{item.clinicname}
  </h2>

<h2 className='cool'>
<span class="material-symbols-outlined">
person_pin_circle
</span>Location
</h2>
<p>{item.cliniccurrentaddress}</p>
<h2 className='cool'>
<span class="material-symbols-outlined">
timer
</span>Appointment date
</h2>
<p>{item.appointmentStartingDate}-{item.appointmentEndingDate}</p>



</div>       )
    })
   }
 </div>
 {/* Timer */}
 <div id="zero"  className="clock">

 {
    post.map((item)=>{
        return (


<ul className="order">
<li id="hello1" className="hello">
{item.appointmentDayOfWeek}
    </li>
    <li id="hello2" className="hello">
        {item.appointmentDate}
        </li>  
{user.slice(0,20).map((item)=>{
            return(
<li className="time">
    {item.appointmentstartime}-{item.appointmentendtime}
</li>



            )
        })
    }

</ul>

        )

    })
}



</div>
</div>




</>






)











}
export default Child;