import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

function FilterPage() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", alignItems: "center" }}> info</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/WEB-1178113-Jan22_DEAL1_Dog.jpg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>


          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/WEB-1178113-Jan22_DEAL2_Cat.jpg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>

          <div style={{border:'0px solid'}}>
          <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "252.8px",
                  height: "252.8px",
                  margin: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
                  style={{ width: "252.8px", height: "252.8px" }}
                ></img>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              KONG® Teddy Bear Dog Toy - Plush, Squeaker
            </div>
            <div style={{ gap: "10px" }}>
              <span id="price" style={{ color: "#e52823" }}>
                {" "}
                $79.99
              </span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                Price$109.99
              </span>
            </div>
            <label>
              Save 20% online only Buy 3, Get the 4th Free Mix n' Match Dog &
              Cat Toys
            </label>
          </div>


         
        </div>
      </div>
      <Footer />
    </>
  );
}
export default FilterPage;
