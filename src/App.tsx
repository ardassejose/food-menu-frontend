import React, { useState } from "react";
import Card from "./components/card/card";
import { useFoodData } from "./hooks/useFoodData";
import CreateModal from "./components/create-modal/create-modal";

import "./App.css";

export default function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((item) => (
          <Card
            key={item.id}
            price={item.price}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  );
}
