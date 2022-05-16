import React, { Component } from "react";
import { Form, Input, Select, Modal } from "antd";
import { reqValidatUserID } from "@/api/user";
const { TextArea } = Input;
class AddUserForm extends Component {
  validatUserID = async (rule, value, callback) => {
    if (value) {
      if (!/^[a-zA-Z0-9]{1,6}$/.test(value)) {
        callback("ID người dùng phải gồm 1-6 chữ số hoặc kết hợp các chữ cái");
      }
      let res = await reqValidatUserID(value);
      const { status } = res.data;
      if (status) {
        callback("ID người dùng đã tồn tại");
      }
    } else {
      callback("Vui lòng nhập ID người dùng");
    }
    callback();
  };
  render() {
    const { visible, onCancel, onOk, form, confirmLoading } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        title="Tạo tài khoản"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="ID:">
            {getFieldDecorator("id", {
              rules: [{ required: true, validator: this.validatUserID }],
            })(<Input placeholder="Nhập ID" />)}
          </Form.Item>
          <Form.Item label="Họ tên:">
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Vui lòng nhập tên người dùng!" },
              ],
            })(<Input placeholder="Nhập tên người dùng" />)}
          </Form.Item>
          <Form.Item label="Quyền hajn:">
            {getFieldDecorator("role", {
              initialValue: "admin",
            })(
              <Select style={{ width: 120 }}>
                <Select.Option value="admin">admin</Select.Option>
                <Select.Option value="guest">guest</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Mô tả:">
            {getFieldDecorator(
              "description",
              {}
            )(<TextArea rows={4} placeholder="Nhập mô tả" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddUserForm" })(AddUserForm);
