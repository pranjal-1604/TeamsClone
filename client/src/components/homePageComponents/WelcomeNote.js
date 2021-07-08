import React from "react";
import Typewriter from "typewriter-effect";
import { Row, Col } from "react-bootstrap";

/**
 * 
 * @returns Welcome note greeting the user
 */

function WelcomeNote()
{
    return (
    <Row className="mt-4 mb-2">
        <Col md={3} xs={0}></Col>
        <Col
          md={6}
          xs={12}
          className="text-center"
          style={{ backgroundColor: "rgba(70,71,117,0.4)" }}
        >
          <h1 style={{ margin: "16px auto" }}>
            <div style={{ color: "white" }}>
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
        <Col md={3} xs={0}></Col>
      </Row>
      );

}
export default WelcomeNote;