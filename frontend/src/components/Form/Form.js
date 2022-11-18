import React, {useEffect, useState} from 'react'
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {createTask, taskList} from "../../frontEndAPIs/apiTasks";
import FileBase64 from 'react-file-base64'
import Button from "@mui/material/Button";


const Form = () => {

    const [taskData, setTaskData] = useState({
        userCreated: '' , taskName: '' , taskDescription:'' , attachment:''
    });

    const { userCreated , taskName, taskDescription, attachment} = taskData;


    const handleChanges = val => e =>{
        setTaskData({...taskData, [val]: e.target.value})
    }

    const submitTask = (e) =>{
        e.preventDefault()
        createTask({userCreated , taskName, taskDescription , attachment})
            .then(formData =>{
                    setTaskData({
                        userCreated: '' , taskName: '' , taskDescription:'' , attachment:''

                    });
            })
    }


    const clear = () =>{

    }


    return(
       <Paper>
           <form onSubmit={submitTask}>
               <Typography variant="h6">Create a To Do Task</Typography>
                {/*<TextField variant="outlined"  fullwidth  label ="Created" name="userCreated" value={userCreated} onChange={handleChanges('userCreated')}/>*/}
               <TextField variant="outlined"  fullWidth={true}  label ="Task Name" name="Task Name" value={taskName} onChange={handleChanges('taskName')}/>
               <TextField variant="outlined"  fullWidth={true}   label ="Task Description" name="Task Description" value={taskDescription} onChange={handleChanges('taskDescription')}/>

               <div>
                   <FileBase64
                       type="file"
                       multiple ={false}
                       onDone={({base64}) => setTaskData({...taskData, attachment: base64})}/>
               </div>

               <Button variant="contained" color="primary" size="small" fullWidth type="submit">Submit</Button>
               <Button variant="contained" color="secondary" size="small"  onClick={clear} fullWidth>Clear</Button>

           </form>
       </Paper>
    )
}

export default Form;
