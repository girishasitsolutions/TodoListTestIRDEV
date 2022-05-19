import { connect } from "react-redux";
import {  setTodo, deleteTodo, deleteAllTodo , getUserTodo} from "../services/actions/index"
import Home from "../components/Home";

const mapStateToProps = state => ({
    data: state 
})

const mapDispatchToProps = dispatch =>({
    addTodoHandler: data => dispatch(setTodo(data)),
    getUserTodoHandler: data => dispatch(getUserTodo(data)),
    deleteTodoHandler: data => dispatch(deleteTodo(data)),
    deleteAllTodoHandler: data => dispatch(deleteAllTodo(data))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);