import React from "react";
import TypingCard from "@/components/TypingCard";
const AdminPage = () => {
  const cardContent = `Cái này để test`;
  return (
    <div className="app-container">
      <TypingCard title="test 1" source={cardContent} />
    </div>
  );
};

export default AdminPage;
