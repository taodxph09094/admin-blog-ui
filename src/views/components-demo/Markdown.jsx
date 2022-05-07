import React from "react";
import { Card } from "antd";
import Markdown from "@/components/Markdown";
import TypingCard from "@/components/TypingCard";

const MarkdownDemo = () => {
  const cardContent = `
  Trang này dùng để dịch văn bản
  `;
  return (
    <div className="app-container">
      <TypingCard
        title="Biên dịch
"
        source={cardContent}
      />
      <br />
      <Card bordered={false}>
        <Markdown />
      </Card>
    </div>
  );
};

export default MarkdownDemo;
