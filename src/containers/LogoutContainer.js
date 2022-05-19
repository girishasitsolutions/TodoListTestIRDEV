import { connect } from "react-redux";
import { addUser } from "../services/actions/index"
import Logout from "../components/Logout";

const mapStateToProps = state => ({
    data: state 
})

const mapDispatchToProps = dispatch =>({
    addUserHandler: data => dispatch(addUser(data))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);