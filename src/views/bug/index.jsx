import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Collapse, Button } from "antd";
import TypingCard from "@/components/TypingCard";
import { timestampToTime } from "@/utils";

const { Column } = Table;
const { Panel } = Collapse;

const obj = {};

class Bug extends Component {
  jsError = () => {
    console.log(obj.a.length);
  };
  loadResourceError = () => {
    let img = document.createElement("img");
    img.src = "/images/notExist.jpg";
    let parent = document.querySelector(".app-container");
    parent.appendChild(img);
  };
  render() {
    const cardContent = `Trang này được sử dụng để hiển thị thông tin bất thường được thu thập thông qua các điểm nhúng trong trang quản lý. 
    Bạn có thể nhấp vào các loại nút bên dưới để quan sát thông tin đã thu thập được.`;
    const { bugList } = this.props;
    return (
      <div className="app-container">
        <TypingCard title="Bảng lỗi" source={cardContent} />
        <br />
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Báo lỗi" key="1">
            <Button type="primary" onClick={this.jsError}>
              jsError
            </Button>
            <Button
              type="primary"
              onClick={this.loadResourceError}
              style={{ marginLeft: "20px" }}
            >
              Lỗi tài nguyên
            </Button>
          </Panel>
        </Collapse>
        <br />
        <Table
          bordered
          rowKey={(record) => record.timestamp}
          dataSource={bugList}
          pagination={false}
        >
          <Column
            title="ID"
            dataIndex="id"
            key="id"
            width={60}
            render={(text, record, index) => index + 1}
          />
          <Column title="Trạng thái" dataIndex="kind" key="kind" width={80} />
          <Column
            title="Loại lỗi"
            dataIndex="errorType"
            key="errorType"
            width={160}
          />
          <Column title="Url" dataIndex="url" key="url" width={150} />
          <Column
            title="Thông tin lỗi"
            dataIndex="desc"
            key="desc"
            width={300}
            ellipsis={true}
          />
          <Column
            title="Cách sửa"
            dataIndex="stack"
            key="stack"
            width={300}
            ellipsis={true}
          />
          <Column
            title="Hành động"
            dataIndex="selector"
            key="selector"
            width={195}
            ellipsis={true}
          />
          <Column
            title="Người dùng"
            dataIndex="userAgent"
            key="userAgent"
            width={100}
          />
          <Column
            title="Thời gian"
            dataIndex="timestamp"
            key="timestamp"
            width={100}
            render={(value) => timestampToTime(value)}
          />
        </Table>
      </div>
    );
  }
}

export default connect((state) => state.monitor)(Bug);
