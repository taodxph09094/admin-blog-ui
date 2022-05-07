import React from "react";
import TypingCard from "@/components/TypingCard";
const GuestPage = () => {
  const cardContent = `Chỉ editor vào đc`;
  return (
    <div className="app-container">
      <TypingCard title="editor" source={cardContent} />
    </div>
  );
};

export default GuestPage;
