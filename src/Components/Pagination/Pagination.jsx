import React, {useEffect,useState} from 'react';
import {Button} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Pagination.css';

export default function Pagination() {
    const [page,changePage]=useState();
    
    useEffect(()=>{
        var pageNo=document.getElementsByClassName("number");

        function setPage(event){
            event.target.classList.add("selected");
        }
        
        
        console.log(pageNo.length);
        for(var i=0;i<pageNo.length;i++){
            console.log('hbf');
            pageNo[i].addEventListener("click", function(event){setPage(event)});
        }
    },[])
    return (
        <div className="pagination">
            <Button id="page-buttons-1" ><ArrowBackIcon style={{marginRight:'10px'}}/> Prev</Button>
            <div className="number-cont">
                <div className="number selected">
                    1
                </div>
                <div className="number">
                    2
                </div>
            </div>
            <Button id="page-buttons-2" >Next <ArrowForwardIcon style={{marginLeft:'10px'}}/> </Button>
        </div>
    )
}
