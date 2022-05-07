import React, { useState } from "react";
import { Card, Row } from "antd";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.less";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => setEditorState(editorState);

  return (
    <div>
      <Card bordered={false}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          localization={{ locale: "en" }}
        />
      </Card>
      <br />
      <Row gutter={10}></Row>
    </div>
  );
};

export default RichTextEditor;
