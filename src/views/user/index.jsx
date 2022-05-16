import React, { Component } from "react";
import { Card, Button, Table, message, Divider } from "antd";
import { getUsers, deleteUser, editUser, addUser } from "@/api/user";
import TypingCard from "@/components/TypingCard";
import EditUserForm from "./forms/edit-user-form";
import AddUserForm from "./forms/add-user-form";
const { Column } = Table;
class User extends Component {
  state = {
    users: [],
    editUserModalVisible: false,
    editUserModalLoading: false,
    currentRowData: {},
    addUserModalVisible: false,
    addUserModalLoading: false,
  };
  getUsers = async () => {
    const result = await getUsers();
    const { users, status } = result.data;
    if (status === 0) {
      this.setState({
        users,
      });
    }
  };
  handleEditUser = (row) => {
    this.setState({
      currentRowData: Object.assign({}, row),
      editUserModalVisible: true,
    });
  };

  handleDeleteUser = (row) => {
    const { id } = row;
    if (id === "admin") {
      message.error("Không thể xóa quản trị viên！");
      return;
    }
    deleteUser({ id }).then((res) => {
      message.success("Xoá thành công");
      this.getUsers();
    });
  };

  handleEditUserOk = (_) => {
    const { form } = this.editUserFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ editModalLoading: true });
      editUser(values)
        .then((response) => {
          form.resetFields();
          this.setState({
            editUserModalVisible: false,
            editUserModalLoading: false,
          });
          message.success("Chỉnh sửa thành công!");
          this.getUsers();
        })
        .catch((e) => {
          message.success("Chỉnh sửa không thành công, vui lòng thử lại!");
        });
    });
  };

  handleCancel = (_) => {
    this.setState({
      editUserModalVisible: false,
      addUserModalVisible: false,
    });
  };

  handleAddUser = (row) => {
    this.setState({
      addUserModalVisible: true,
    });
  };

  handleAddUserOk = (_) => {
    const { form } = this.addUserFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ addUserModalLoading: true });
      addUser(values)
        .then((response) => {
          form.resetFields();
          this.setState({
            addUserModalVisible: false,
            addUserModalLoading: false,
          });
          message.success("Thêm thành công!");
          this.getUsers();
        })
        .catch((e) => {
          message.success("Thêm thất bại!");
        });
    });
  };
  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { users } = this.state;
    const title = (
      <span>
        <Button type="primary" onClick={this.handleAddUser}>
          Thêm tài khoản
        </Button>
      </span>
    );
    const cardContent = `Tại đây, bạn có thể quản lý tài khoản trong hệ thống, chẳng hạn như thêm người dùng mới hoặc sửa đổi người dùng hiện có trong hệ thống.`;
    return (
      <div className="app-container">
        <TypingCard title="Quản lý tài khoản" source={cardContent} />
        <br />
        <Card title={title}>
          <Table bordered rowKey="id" dataSource={users} pagination={false}>
            <Column title="ID" dataIndex="id" key="id" align="center" />
            <Column title="Họ tên" dataIndex="name" key="name" align="center" />
            <Column
              title="Quyền hạn"
              dataIndex="role"
              key="role"
              align="center"
            />
            <Column
              title="Mô tả"
              dataIndex="description"
              key="description"
              align="center"
            />
            <Column
              title="Hành động"
              key="action"
              width={195}
              align="center"
              render={(text, row) => (
                <span>
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    title="Chỉnh sửa"
                    onClick={this.handleEditUser.bind(null, row)}
                  />
                  <Divider type="vertical" />
                  <Button
                    type="primary"
                    shape="circle"
                    icon="delete"
                    title="Xóa"
                    onClick={this.handleDeleteUser.bind(null, row)}
                  />
                </span>
              )}
            />
          </Table>
        </Card>
        <EditUserForm
          currentRowData={this.state.currentRowData}
          wrappedComponentRef={(formRef) => (this.editUserFormRef = formRef)}
          visible={this.state.editUserModalVisible}
          confirmLoading={this.state.editUserModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleEditUserOk}
        />
        <AddUserForm
          wrappedComponentRef={(formRef) => (this.addUserFormRef = formRef)}
          visible={this.state.addUserModalVisible}
          confirmLoading={this.state.addUserModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleAddUserOk}
        />
      </div>
    );
  }
}

export default User;
