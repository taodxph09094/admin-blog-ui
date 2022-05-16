import React, { Component, useEffect, useState } from "react";
import { useGetData } from "../../hooks/services/useGetApi";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";
import {
  Table,
  Tag,
  Form,
  Button,
  Input,
  Collapse,
  Pagination,
  Divider,
  message,
  Select,
} from "antd";
import EditForm from "./forms/editForm";
import { SIDEBAR_URL } from "../../constants/api";
const { Panel } = Collapse;
const TableComponent = ({ history }) => {
  const dispatch = useDispatch();
  const { error, users } = useSelector((state) => state.allUsers);
  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success(message);
      history.push("/table");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, history, isDeleted, message]);
  const initParams = {
    page: 0,
    size: 20,
  };
  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        title: item.title,
      });
    });

  const columns = [
    {
      title: "ID",
    },
    {
      title: "Title",
    },
  ];
  const [paramRequest, setParamRequest] = useState(initParams);
  const getTags = useGetData(`${SIDEBAR_URL.GET_TAGS}`, initParams);
  console.log(getTags.data);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getTags._getData(null, paramRequest);
    }
    return () => {
      isCurrent = false;
    };
  }, [paramRequest]);
  console.log(rows);
  return (
    <div className="app-container">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Lọc" key="1">
          <Form layout="inline">
            <Form.Item label="Tiêu đề:">
              {/* <Input onChange={""} /> */}
            </Form.Item>
            <Form.Item label="Nhâp....:">
              <Select style={{ width: 120 }}>
                <Select.Option value="published">published</Select.Option>
                <Select.Option value="draft">draft</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Đánh giá:">
              <Select style={{ width: 120 }}>
                <Select.Option value={1}>★</Select.Option>
                <Select.Option value={2}>★★</Select.Option>
                <Select.Option value={3}>★★★</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon="search">
                搜索
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <br />
      <Table
        bordered
        dataSource={rows}
        columns={columns}
        loading={false}
        pagination={true}
      />
      <br />
      {/* <Pagination
        total={""}
        pageSizeOptions={["10", "20", "40"]}
        showTotal={(total) => `共${total}条数据`}
        onChange={""}
        current={""}
        onShowSizeChange={""}
        showSizeChanger
        showQuickJumper
        hideOnSinglePage={true}
      /> */}
      {/* <EditForm
        currentRowData={this.state.currentRowData}
        wrappedComponentRef={(formRef) => (this.formRef = formRef)}
        visible={this.state.editModalVisible}
        confirmLoading={this.state.editModalLoading}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
      /> */}
    </div>
  );
};

export default TableComponent;
