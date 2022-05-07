import React from "react";
import RichTextEditor from "@/components/RichTextEditor";
import TypingCard from "@/components/TypingCard";

const RichTextEditorDemo = () => {
  const cardContent = `
  Trang này dùng để viết content
  `;
  return (
    <div className="app-container">
      <TypingCard title="Biên dịch" source={cardContent} />
      <br />
      <RichTextEditor />
    </div>
  );
};

export default RichTextEditorDemo;
