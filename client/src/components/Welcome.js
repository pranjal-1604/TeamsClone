import React from "react";
import Typewriter from "typewriter-effect";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import VideoConnect from "../media/video connect.jpg";
import VideoChat from "../media/video chat icon.png"


function Welcome() {

 
  function handleClick() {
    const win = window.open("/video_call", "_blank");
     win.focus();
  }
  return (
      <>
    <Row className="mt-4 mb-2">
      <Col md={3} xs={0}></Col>
      <Col md={6} xs={12} className="text-center" style={{backgroundColor:"rgba(70,71,117,0.4)"}}>
      <h1 style={{margin:"16px auto"}}>
        <div style={{ color: "white"}}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Welcome to Microsoft Teams!")

                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        </h1>
      </Col>
      <Col md={3} xs={0}>

      </Col>
    </Row>
   
    <Row>
        <Col md={3} xs={0}>
        </Col>
        <Col md={6} xs={12} style={{backgroundColor:"#ffccd4" }} className="p-4">
        <div >
        <img
            src={VideoConnect}
            className="d-block mx-auto img-fluid"
            style={{height:"350px", borderRadius:"40px" }}
            alt="user requesting to join meeting"
          />
          </div>
          <h3 className="p-4">
          <Button className="d-block mx-auto" style={{borderRadius:"30px",backgroundColor:"#002244", border:"4px solid black"}}
          onClick={() => handleClick()}>
          <div className="p-1">
          <img
            src={VideoChat}
            alt="user requesting to join meeting"
            className="mr-3"
            
          />
          <h4 style={{display:"inline"}}>Video Chat</h4>
          </div>
          </Button>
        </h3>
        </Col>
        <Col md={3} xs={0}></Col>
    </Row>
    </>

  );
}
export default Welcome;
