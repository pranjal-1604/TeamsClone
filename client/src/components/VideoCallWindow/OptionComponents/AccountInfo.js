import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { SocketContext } from "../../../SocketContext";
import Alert from "react-bootstrap/Alert";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

/**
 *
 * @returns {Form, CopytoClipboard , Alert, ShareIcons}
 *Form to enter name
 *Copy to clipboard for copying meeting ID
 *Alert to notify ID is copied
 *ShareTcons as shortcuts to share ID over common social media platforms
 */

function AccountInfo() {
  const { me, name, setName } = useContext(SocketContext);
  const [show, setShow] = useState(false);

  //function to handle visibility of alert
  const handleVisible = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <Col xs={12} md={6} className="justify-content-center">
      <div className="mx-auto">
        <h5>Account Info</h5>
        <Form inline>
          {/* Form for entering name */}
          <Form.Control
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Copy ID to clipboard */}
          <CopyToClipboard text={me}>
            <Button variant="primary" onClick={handleVisible}>
              Copy your ID
              <i
                className="material-icons content-copy"
                style={{ verticalAlign: "middle", marginLeft: "6px" }}
              >
                content_copy
              </i>
            </Button>
          </CopyToClipboard>

          {/* Conditionally render alert when ID is copied */}
          {show && (
            <Alert
              style={{
                display: "inline-block",
                textAlign: "center",
                borderColor: "green",
              }}
              className="p-0"
              variant="success"
            >
              <p style={{ margin: "0px" }}>
                <i
                  className="material-icons check_circle"
                  style={{ verticalAlign: "middle", margin: "2px" }}
                >
                  check_circle
                </i>
                ID copied successfully
              </p>
            </Alert>
          )}
        </Form>

        {/* Share meeting ID on whatsapp */}
        <WhatsappShareButton
          url={`https://ms-teams-video-chat.netlify.app/`}
          title={`Join this meeting with the given code ""\n`}
          separator="Link: "
        >
          <WhatsappIcon size={28} round />
        </WhatsappShareButton>

        {/* Share meeting ID on facebook */}
        <FacebookShareButton
          url={`https://ms-teams-video-chat.netlify.app/`}
          title={`Join this meeting with the given code ""\n`}
        >
          <FacebookIcon size={28} round />
        </FacebookShareButton>

        {/* Share meeting ID on twitter */}
        <TwitterShareButton
          url={`https://ms-teams-video-chat.netlify.app/`}
          title={`Join this meeting with the given code  \n`}
        >
          <TwitterIcon size={28} round />
        </TwitterShareButton>
      </div>
    </Col>
  );
}
export default AccountInfo;
