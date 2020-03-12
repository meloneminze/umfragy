import React from "react";
import { Link } from "react-router-dom";
import CardQuestion from "../components/CardQuestion";
import CardAnswer from "../components/CardAnswer";


function Add(){
    return <div>
                <h2>Your Question?</h2>
                <CardQuestion></CardQuestion>
                <h2>Possible Answers:</h2>
                <CardAnswer></CardAnswer>
                
                <CardAnswer></CardAnswer>
                
                <CardAnswer></CardAnswer>
                
                <Link to="/vote">Vote</Link>
        </div>;

}
export default Add; 