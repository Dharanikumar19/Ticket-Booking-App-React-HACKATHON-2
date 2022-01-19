import React from 'react';

function BookingStatus() {
  return (
  <>
             <Link to={"/userdashboard"} className='btn btn-outline-primary' style={{position: "absolute", top:"20px", left:"10px"}}>Go Back</Link>
    <h4 className='mt-5 ml-5'> Currently your Booking Status is Empty...</h4>
    </>
   )
}

export default BookingStatus;
