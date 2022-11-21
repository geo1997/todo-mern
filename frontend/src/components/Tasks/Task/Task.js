import React, {useRef} from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as moment from "moment";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from '@mui/icons-material/Delete';



const Task = ({task , setTaskId , deletePost , getTaskDetails}) => {



    return(
        <Card style={ {position: 'relative',height: '100%'}}>
            <CardMedia image={task.attachment} component='img' title={task.taskName} />
            <div>
                <Typography variant="body2">{moment(task.createdAt).fromNow()}</Typography>
            </div>
            <div>
                <Button style={{ color: 'red' }} size="small" onClick={() => getTaskDetails(task._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div>
                <Typography gutterBottom variant="h5" component="h2">{task.taskName}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{task.taskDescription}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() =>deletePost(task._id)}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Task;
