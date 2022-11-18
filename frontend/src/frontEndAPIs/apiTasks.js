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