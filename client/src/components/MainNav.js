import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MainNav() {
  return (
    <Navbar className="nav-menu">
      <Navbar.Brand>
        <h3 className="brand">
          <i className="fas fa-th"></i>Microsoft Teams
        </h3>
      </Navbar.Brand>
      <Form Inline className="mx-auto">
        <Button variant="outline-primary" style={{backgroundColor:"#eee" , borderColor:"black"}}>
          <NavLink to="/video_call" target = "_blank" style={{color:"black"}}>
            Start a video conversation
            <i class="material-icons" style={{verticalAlign:"middle", marginLeft:"2px", color:"grey"}}>video_call</i>
          </NavLink>
        </Button>
      </Form>
    </Navbar>
  );
}
export default MainNav;
