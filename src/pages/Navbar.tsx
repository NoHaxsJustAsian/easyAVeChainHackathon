import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar(props: {id:any}) {
  return (
    <>
      <Nav className="justify-content-end me-5" 
      activeKey="home">
        <Nav.Item>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={"/feed/" + props.id} >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={"/my-plans/" + props.id}>My Plans</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={"/profile/" + props.id}>Profile</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </>
  );
}

export default Navbar;