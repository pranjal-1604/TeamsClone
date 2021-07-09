import { useContext } from "react";
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

function AccountInfo() {
  const { me, name, setName, show, handleVisible } = useContext(SocketContext);

  return (
    <Col xs={12} md={6} className="justify-content-center">
      <div className="mx-auto">
        <h5>Account Info</h5>
        <Form inline>
          <Form.Control
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <Button variant="primary" onClick={handleVisible}>
              Copy Your ID
              <i
                className="material-icons content-copy"
                style={{ verticalAlign: "middle", marginLeft: "6px" }}
              >
                content_copy
              </i>
            </Button>
          </CopyToClipboard>
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
                Code Copied successfully
              </p>
            </Alert>
          )}
        </Form>
        <WhatsappShareButton
          url={`https://ms-teams-video-chat.netlify.app/`}
          title={`Join this meeting with the given code ""\n`}
          separator="Link: "
        >
          <WhatsappIcon size={28} round />
        </WhatsappShareButton>
        <FacebookShareButton
          url={`https://ms-teams-video-chat.netlify.app/`}
          title={`Join this meeting with the given code ""\n`}
        >
          <FacebookIcon size={28} round />
        </FacebookShareButton>
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
