import React, { Component } from "react";
import {
  Table,
  Tag,
  Form,
  Icon,
  Button,
  Input,
  Radio,
  Select,
  message,
  Collapse,
} from "antd";

import { excelList } from "@/api/excel";
const { Panel } = Collapse;
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: 200,
    align: "center",
  },
  {
    title: "Tên tệp",
    dataIndex: "title",
    key: "title",
    width: 200,
    align: "center",
  },
  {
    title: "Người tạo",
    key: "author",
    dataIndex: "author",
    width: 100,
    align: "center",
    render: (author) => <Tag key={author}>{author}</Tag>,
  },
  {
    title: "Lượt đọc",
    dataIndex: "readings",
    key: "readings",
    width: 195,
    align: "center",
  },
  {
    title: "Ngày xuất",
    dataIndex: "date",
    key: "date",
    width: 195,
    align: "center",
  },
];
class Excel extends Component {
  _isMounted = false; //Biến này được sử dụng để cho biết thành phần hiện tại có được gắn kết hay không
  state = {
    list: [],
    filename: "excel-file",
    autoWidth: true,
    bookType: "xlsx",
    downloadLoading: false,
    selectedRows: [],
    selectedRowKeys: [],
  };
  fetchData = () => {
    excelList().then((response) => {
      const list = response.data.data.items;
      if (this._isMounted) {
        this.setState({ list });
      }
    });
  };
  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRows, selectedRowKeys });
  };
  handleDownload = (type) => {
    if (type === "selected" && this.state.selectedRowKeys.length === 0) {
      message.error("Chọn ít nhất một mục để xuất");
      return;
    }
    this.setState({
      downloadLoading: true,
    });
    import("@/lib/Export2Excel").then((excel) => {
      const tHeader = ["Id", "Tên tệp", "Người tạo", "Lượt đọc", "Ngày xuất"];
      const filterVal = ["id", "tên tệp", "người tạo", "lượt đọc", "ngày xuất"];
      const list = type === "all" ? this.state.list : this.state.selectedRows;
      const data = this.formatJson(filterVal, list);
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: this.state.filename,
        autoWidth: this.state.autoWidth,
        bookType: this.state.bookType,
      });
      this.setState({
        selectedRowKeys: [], // 导出完成后将多选框清空
        downloadLoading: false,
      });
    });
  };
  formatJson(filterVal, jsonData) {
    return jsonData.map((v) => filterVal.map((j) => v[j]));
  }
  filenameChange = (e) => {
    this.setState({
      filename: e.target.value,
    });
  };
  autoWidthChange = (e) => {
    this.setState({
      autoWidth: e.target.value,
    });
  };
  bookTypeChange = (value) => {
    this.setState({
      bookType: value,
    });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className="app-container">
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Tùy chọn xuất file" key="1">
            <Form layout="inline">
              <Form.Item label="Tên tệp:">
                <Input
                  style={{ width: "250px" }}
                  prefix={
                    <Icon type="file" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Vui lòng nhập tên tệp (mặc định excel-file)"
                  onChange={this.filenameChange}
                />
              </Form.Item>
              <Form.Item label="Chiều rộng ô có thích ứng hay không:">
                <Radio.Group
                  onChange={this.autoWidthChange}
                  value={this.state.autoWidth}
                >
                  <Radio value={true}>Có</Radio>
                  <Radio value={false}>Không</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Loại tệp:">
                <Select
                  defaultValue="xlsx"
                  style={{ width: 120 }}
                  onChange={this.bookTypeChange}
                >
                  <Select.Option value="xlsx">xlsx</Select.Option>
                  <Select.Option value="csv">csv</Select.Option>
                  <Select.Option value="txt">txt</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  icon="file-excel"
                  onClick={this.handleDownload.bind(null, "all")}
                >
                  Xuất tất cả các file trong bảng
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  icon="file-excel"
                  onClick={this.handleDownload.bind(null, "selected")}
                >
                  Xuất các file đã chọn
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
        <br />
        <Table
          bordered
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={this.state.list}
          pagination={false}
          rowSelection={rowSelection}
          loading={this.state.downloadLoading}
        />
      </div>
    );
  }
}

export default Excel;
