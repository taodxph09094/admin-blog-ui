import React from "react";
import clip from "@/utils/clipboard";
import { Button, Row, Col } from "antd";

const text = `
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép,
  Văn bản đã được sao chép
  `;
const handleCopy = (text, event) => {
  clip(text, event);
};
const Clipboard = () => {
  return (
    <div className="app-container">
      <h1>
        Nhấp vào nút Sao chép bên dưới để sao chép văn bản sau vào khay nhớ tạm
      </h1>
      <br />
      <Row>
        <Col span={12}>{text}</Col>
      </Row>
      <br />
      <Row>
        <Col span={2}>
          <Button
            type="primary"
            icon="copy"
            onClick={(e) => {
              handleCopy(text, e);
            }}
          >
            Sao chép
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Clipboard;
