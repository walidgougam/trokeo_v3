import React, { useState, useEffect } from "react";
import "./Organisation.css";
import axios from "axios";

//COMPONENT
import HeaderGreenOrganization from "../../component/headerGreenOrganization/HeaderGreenOrganization";
import Navbar from "../../component/navbar/Navbar";
import NoProductComponent from "../../component/noProduct/NoProductComponent";
import CardProduct from "../../component/cardProduct/CardProduct";

export default function Organization({ location, history }) {
  const [isService, setIsService] = useState(true);
  const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [allProduct, setAllProduct] = useState([]);

  const getProduct = () => {
    axios({
      method: "GET",
      url: `http://localhost:5000/product/getproduct`,
    })
      .then((res) => {
        setAllProduct(res?.data?.product);
      })
      .catch((err) => {
        console.log(err, "error on getallproductapi");
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Navbar location={location} />
      <HeaderGreenOrganization title="Dons demandés par les associations" />
      <div className="good_or_service_organization">
        <p
          onClick={() => setIsService(!isService)}
          style={{
            color: !isService ? "#3AD06B" : "#BFBDBD",
            borderBottom: !isService ? "3px solid #3AD06B" : "none",
            marginRight: 63,
          }}
        >
          Biens
        </p>
        <p
          onClick={() => setIsService(!isService)}
          style={{
            color: isService ? "#3AD06B" : "#BFBDBD",
            borderBottom: isService ? "3px solid #3AD06B" : "none",
          }}
        >
          Services
        </p>
      </div>
      {/* <NoProductComponent /> */}
      {allProduct?.length > 0 ? (
        <div className="wrapper_card">
          {allProduct.map((product, index) => {
            return (
              <div style={{ width: 168, height: 146 }}>
                <CardProduct
                  key={index}
                  title={product}
                  goToProductDetail={() =>
                    history.push(`/product/:${product._id}`)
                  }
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NoProductComponent />
        </div>
      )}
    </div>
  );
}
