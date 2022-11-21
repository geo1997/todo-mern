import {API} from "../Config";

export const taskList = () =>{
    return fetch(`${API}`,{
        method: "GET"
    })
        .then(response =>{
            return response.json();
        })
        .catch(err=> console.log(err));
}

/*
    method:POST
    pass all the form data
 */
export const createTask  = (task) => {
    return fetch(`${API}/add`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
            // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(task)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error);
        })
}

export const updateTaskData = (id,task) =>{
    return fetch(`${API}/update/${id}`,{
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(task)
    })
        .then(response =>{
            return response.json();
        })
        .catch(err=> console.log(err));
};

export const getTaskData = (id) =>{
    return fetch(`${API}/user/${id}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            //Authorization: `Bearer ${token}`
        }
    })
        .then(response =>{
            return response.json();
        })
        .catch(err=> console.log(err));
};


export const deleteTask = (taskId ) =>{
    return fetch(`${API}/delete/${taskId}`,{
        method: "DELETE",
        headers :{
            Accept: "application/json",
            "Content-Type":"application/json",
            //Authorization: `Bearer ${token}`
        },
    })
        .then(response =>{
            return response.json();
        })
        .catch(err => console.log(err));

};
