import React from "react";
import TypingCard from "@/components/TypingCard";
export default () => {
  const cardContent = `
    
    Dựa theo quyền để truy cập trang
  `;
  return (
    <div className="app-container">
      <TypingCard title="Mô tả quyền" source={cardContent} />
    </div>
  );
};
