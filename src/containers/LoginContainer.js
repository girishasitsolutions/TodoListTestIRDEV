import { connect } from "react-redux";
import { addUser } from "../services/actions/index"
import Login from "../components/Login";

const mapStateToProps = state => ({
    data: state 
})

const mapDispatchToProps = dispatch =>({
    addUserHandler: data => dispatch(addUser(data))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);