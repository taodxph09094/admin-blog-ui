import React from "react";
import TypingCard from "@/components/TypingCard";
const GuestPage = () => {
  const cardContent = `Chỉ khách vào đc`;
  return (
    <div className="app-container">
      <TypingCard title="guest" source={cardContent} />
    </div>
  );
};

export default GuestPage;
