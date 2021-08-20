import React,{useState,useEffect} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import AddIcon from '@material-ui/icons/Add';
import CallMergeIcon from '@material-ui/icons/CallMerge';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import { ThemeProvider } from '@material-ui/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#ffcf33',
      },
      secondary:{
        main:"#71D875"
      }
    },
  });

export default function Tracker({progress}) {

    const [barColor,setColor]=useState();
    useEffect(()=>{
        if(progress<45){
            setColor("primary");
        }else{
            setColor("secondary")
        }
    },[]);

    return (
    <ThemeProvider theme={theme}>
        <div className='tracker'>
            <div className="tracker-left">
                <div className="tracker-title">Practice One</div>
                <div className="tracker-para">{progress}% Completed</div>
            </div>
            
            <div className="tracker-mid">
                <LinearProgress color={barColor} style={{height:"15px",backgroundColor:'#4444441A'}} variant="determinate" value={progress} />
                <div className="tracker-info">
                    <div className="tracker-info-1">
                        <SwapCallsIcon style={{marginRight:'8px'}}/> Process : Transition
                    </div>
                    <div className="tracker-info-1" >
                        <PersonIcon style={{marginRight:'8px'}}/> Buddy : Full Name | Shark : Full Name
                    </div>
                </div>
            </div>
            
            <div className="tracker-right">
                <AddIcon fontSize="large"/>
            </div>
        </div>
    </ThemeProvider>
    )
}
