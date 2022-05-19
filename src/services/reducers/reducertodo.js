const initialTodoState = { 
    storeTodos : [] 
 }
 
export default function todoOperation(state = [], action){  
    switch (action.type) {
        case 'SET_TODO':
          //  console.log(state , action.payload)
            if(state.length >=0){ 
                return [...state,action.payload] 
            }else{
                return [action.payload];
            }
            case 'GET_USER_TODO': 
                   if(state.length >=0 ){
                       let temp = state.filter((item) =>{  
                           return JSON.parse(item).userID !== action.payload
                       } ); 
                       console.log(temp);
                       return temp
                   } 
   
            case 'DELETE_TODO':
             //   console.log("Delete at Reducer", JSON.stringify(state) , action)
                if(state.length >=0 ){
                    let temp = state.filter((item) =>{  
                        return JSON.parse(item).ID !== action.payload
                    } ); 
                    console.log(temp);
                    return temp
                } 

                case 'DELETE_ALL_TODO':
                      return [];
        default:
           return state;
     }
  }