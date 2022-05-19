export const addUser = (data) =>{
    // console.warn("ADD_USER ", data)
   return {
       type: 'ADD_USER',
       payload: data
   }
}

export const deleteUser = (userID) =>{
    return {
        type: 'DELETE_USER',
        payload: userID 
    }
 }

 export const deleteAllUser = () =>{
    return {
        type: 'DELETE_ALL_USER' 
    }
 }


 export const getUserTodo = (userID) =>{
    return {
        type: 'GET_USER_TODO',
        payload: userID 
    }
 }
 export const setTodo = (data) =>{
    return {
        type: 'SET_TODO',
        payload: data 
    }
 }
 
 export const deleteTodo = (todoID) =>{
    return {
        type: 'DELETE_TODO',
        payload: todoID 
    }
 } 
 export const deleteAllTodo = () =>{
    return {
        type: 'DELETE_ALL_TODO'
    }
 }