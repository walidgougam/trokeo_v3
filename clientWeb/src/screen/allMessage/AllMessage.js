import React from "react";
import "./AllMessage.scss";
import { allMessage } from "../../Helpers";
//COMPONENT
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardMessage from "../../component/cardMessage/CardMessage";
import NoImageProduct from "../../component/NoImageProduct.js/NoImageProduct";

export default function AllMessage({ location, history }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar location={location} />
      <HeaderGreen title="Messages" />
      <div className="container_card_message_allmessage" style={{ flex: "1" }}>
        {allMessage.map((msg, index) => {
          return (
            <CardMessage
              chatId={msg?._id}
              history={history}
              key={index}
              pictureProduct={msg?.pictureProduct}
              titleProduct={msg?.titleProduct}
              userName={msg?.userName}
              index={index}
              arrayLength={allMessage?.length}
              iconNoImage={<NoImageProduct icon={msg?.category} />}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
