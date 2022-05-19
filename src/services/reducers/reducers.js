const initialState = { 
   myStore: [] 
} 
export default function userOperation(state =[], action){  

 //  console.warn("Reducer ",state, action.payload)
    switch (action.type) {
       case 'ADD_USER':
          return [...state, action.payload ] 
       default:
          return state;
    }
 }