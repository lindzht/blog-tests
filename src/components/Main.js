import React, {useState} from 'react';
import WelcomeForm from './WelcomeForm';
import Test from './Test';

function Main (){

    function elevatorfunction(formData) {
        console.log(formData);
    }


    return (
        <div>
            {/* <WelcomeForm elevatorfunction={elevatorfunction}/> */}
            <Test />
        </div>
    )
}

export default Main;
