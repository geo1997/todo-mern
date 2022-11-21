import React, {useEffect, useState} from 'react'
import Task from './Task/Task'
import {deleteTask, taskList} from "../../frontEndAPIs/apiTasks";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";




const Tasks = ({setTaskId ,getTasks , tasks , getTaskDetails}) => {



    const deletePost = taskId =>{
        deleteTask(taskId).then(
            res =>{
                if(res.error){
                    console.log(res.error);
                }else{
                    getTasks();
                }
            }
        )
    }

    return(
        !tasks.length ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
            {tasks.map((task) => (
                <Grid key={task._id} item xs={12} sm={6} md={6}>
                    <Task task={task} setTaskId={setTaskId} deletePost={deletePost} getTaskDetails={getTaskDetails}/>
                </Grid>
            ))}
        </Grid>
        )
    );
};

export default Tasks;
