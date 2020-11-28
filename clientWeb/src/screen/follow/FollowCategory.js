import React, { useState } from "react";
import "./FollowCategory.css";
import { goodCategories, serviceCategories } from "../../Helpers";
//COMPONENT
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardFollowCategory from "../../component/cardFollowCategory/CardFollowCategory";
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import BtnSetting from "../../component/btnSetting/BtnSetting";

export default function FollowCategory({ location }) {
  const [activeGoods, setActiveGoods] = useState(false);
  const [activeServices, setActiveServices] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar location={location} />
      <HeaderGreen title="Personnalisation" />
      <div className="container_central_follow">
        <BtnSetting
          active={activeGoods}
          onClick={() => setActiveGoods(!activeGoods)}
          titleBtn="Biens"
          component={goodCategories.map((category, index) => {
            return (
              <CardFollowCategory
                arrayLength={goodCategories.length}
                index={index}
                key={index}
                title={category.titleCategory}
                follow={category.followByUser}
              />
            );
          })}
        />
        <BtnSetting
          paddingTop={28}
          marginBottom={127}
          active={activeServices}
          onClick={() => setActiveServices(!activeServices)}
          titleBtn="Services"
          component={serviceCategories.map((category, index) => {
            return (
              <CardFollowCategory
                arrayLength={serviceCategories.length}
                key={index}
                index={index}
                title={category.titleCategory}
                follow={category.followByUser}
              />
            );
          })}
        />
      </div>

      <Footer />
    </div>
  );
}
