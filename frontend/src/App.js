import React, {useEffect, useState} from "react";
import {AppBar , Grow,Typography , Container} from '@mui/material';
import Grid from "@mui/material/Grid";

import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";
import {getTaskData, taskList} from "./frontEndAPIs/apiTasks";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';


function App() {

    const [taskId , setTaskId] = useState(null);
    const [tasks, setTasks] = useState([])

    const getTasks=() =>{
        console.log('i run')
        taskList().then(data =>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
                setTasks(data)
            }
        })
    }

    const getTaskDetails = taskId =>{
        getTaskData(taskId).then(content => {
            setTasks({...tasks,taskName: content.taskName, taskDescription: content.taskDescription })

        })
    }


  return (
        <Container>
          <AppBar position="static" color="inherit">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    To Do App
                  </Typography>
                  <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container alignItems="center" spacing={4} justify="space-between">
                        <Grid item xs={12} sm={7}>
                            <Tasks setTaskId ={setTaskId} getTasks={getTasks} tasks={tasks} getTaskDetails={getTaskDetails}></Tasks>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form taskId = {taskId} setTaskId ={setTaskId} getTasks={getTasks}></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
  );
}

export default App;
