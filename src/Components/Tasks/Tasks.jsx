import React from 'react';
import './Tasks.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Pagination from '../Pagination/Pagination';

const useStyles = makeStyles({
  head:{
      color:'#8F9BB3',
      fontSize:'17px'
  },
  content:{
      fontSize:'12px',
      color:'#222B45'
  },
  avatars:{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'Digital', 4.0),
  createData('Ice cream sandwich', 237, 9.0, 'Digital', 4.3),
  createData('Eclair', 262, 16.0, 'Accounts', 6.0),
  createData('Cupcake', 305, 3.7, 'Digital', 4.3),
  createData('Gingerbread', 356, 16.0, 'Marketing', 3.9),
];


export default function Tasks() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function a(){
        const b=document.getElementsByClassName("ab")[0];
        b.checked=false;
        console.log(b.checked);
    }
    return (
        <div className="tasks">
            <Paper elevation={3}>
                <div className="header" style={{borderBottom:'1px solid #a8a8a850'}}>
                    <div className="title" >Tasks</div>
                    <div className="progress-right">

                        <div>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Sort By <ExpandMoreIcon/>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Date of Activity</MenuItem>
                                <MenuItem onClick={handleClose}>Name of Activity</MenuItem>
                                <MenuItem onClick={handleClose}>Place</MenuItem>
                            </Menu>
                        </div>

                    </div>
                </div>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell className={classes.head} >Status</TableCell>
                            <TableCell className={classes.head} align="right">Files</TableCell>
                            <TableCell className={classes.head} align="right">Practice</TableCell>
                            <TableCell className={classes.head} align="right">Team</TableCell>
                            <TableCell className={classes.head} align="right">Buddy</TableCell>
                            <TableCell className={classes.head} align="right">Due</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} >

                            <TableCell component="th"className={classes.content}  >
                                <input type="radio" onClick={a} className="ab"/> Content Marketing 2020
                            </TableCell>
                            <TableCell align="right" className={classes.avatars}>
                                <AvatarGroup max={4}>
                                    <Avatar alt="Remy Sharp" style={{width:'30px',height:'30px'}}/>
                                    <Avatar alt="Remy Sharp" style={{width:'30px',height:'30px'}}/>
                                </AvatarGroup>  
                            </TableCell>
                            <TableCell className={classes.content} align="right">Practice Name</TableCell>
                            <TableCell className={classes.content} align="right">{row.carbs}</TableCell>
                            <TableCell className={classes.content} align="right">Buddy Name</TableCell>
                            <TableCell className={classes.content} align="right">18 Jan, 2021</TableCell>

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination/>
            </Paper>
        </div>
    )
}
