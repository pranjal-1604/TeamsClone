import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import VideoConnect from "../../media/video connect.jpg";
import VideoChat from "../../media/video chat icon.png";

/**
 * @returns A button clicking which opens up the video call window in a new tab.        
 */

function Connect()
{
    // function for opening up the video call route in a new tab.
    function handleClick() {
        const win = window.open("/video_call", "_blank");
        win.focus();
      }
      
    return(
        <Row>
        <Col md={3} xs={0}></Col>
        <Col
          md={6}
          xs={12}
          style={{ backgroundColor: "#ffccd4" }}
          className="p-4"
        >
          <div>
            <img
              src={VideoConnect}
              className="d-block mx-auto img-fluid"
              style={{ height: "350px", borderRadius: "40px" }}
              alt="user requesting to join meeting"
            />
          </div>
          <h3 className="p-4">

          {/* Start video chat button */}
            <Button
              className="d-block mx-auto"
              style={{
                borderRadius: "30px",
                backgroundColor: "#002244",
                border: "4px solid black",
              }}
              onClick={() => handleClick()}
            >
              <div className="p-1">
                <img
                  src={VideoChat}
                  alt="user requesting to join meeting"
                  className="mr-3"
                />
                <h4 style={{ display: "inline" }}>Video Chat</h4>
              </div>
            </Button>
          </h3>
          
        </Col>
        <Col md={3} xs={0}></Col>
      </Row>
    );
}
export default Connect;

