
import {Navbar} from 'react-bootstrap'

function MainNav(){
    return(
       <Navbar className="nav-menu">
           <Navbar.Brand>
              <h3 className="brand"><i className="fas fa-th"></i>Microsoft Teams</h3>
           </Navbar.Brand>
       </Navbar>
    );
}
export default MainNav;