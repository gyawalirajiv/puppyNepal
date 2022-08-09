import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

function Details() {
  return (
    <>
      <Header />
      {/* header end */}
      <div style={{ margin: "0px 130px" }}>
        <div
          style={{
            textAlign: "center",
            color: "#c8102e",
            fontSize: "1.1em",
            fontWeight: "600",
          }}
        >
          <label>
            SAVE 20% online only thru 8/14,terms apply. Shop Now {">"}{" "}
          </label>
        </div>
        <div
          style={{
            textAlign: "justify",
            color: "#c8102e",
            fontSize: "1.0em",
            fontWeight: "600",
          }}
        >
          <a href="#" style={{ fontSize: "0.7em" }}>
            Deals{" "}
          </a>{" "}
          <label style={{ color: "-moz-initial" }}>/</label>
          <a href="#" style={{ fontSize: "0.7em" }}>
            Shop All Deal
          </a>{" "}
          <label style={{ color: "-moz-initial" }}>/</label>
          <a href="#" style={{ fontSize: "0.7em" }}>
            Dog Deals{" "}
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            alignContent: "center",
          }}
        >
          <div
            style={{ width: "252.8px", height: "252.8px", margin: "0 auto" }}
          >
            <img
              src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
              style={{ width: "252.8px", height: "252.8px" }}
            ></img>
          </div>

          <div>
            <h2
              style={{
                display: "block",
                marginBlockStart: "0.67em",
                marginBlockEnd: "0.67em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                fontFamily: "ProximaNova-A-Bold",
                fontSize: "2em",
                lineHeight: "3rem",
                fontWeight: "900",
              }}
            >
              Global Source Single Door Folding Wire Dog Crate
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <p>Item #5321448 ***** 4.6 out of 5 stars.</p>
                <span id="price" style={{ color: "#e52823" }}>
                  {" "}
                  $79.99
                </span>{" "}
                <span style={{ textDecoration: "line-through" }}>
                  Price$109.99
                </span>
                <br></br>
                <p>Earn Treats on this purchase! Sign Up</p>
                <div style={{ color: "#e52823" }}>
                  Buy 1 Wire Crate, Get 10% Off a Crate Mat<br></br>
                  <a href="#">Details</a>
                </div>
                <div style={{ color: "#e52823" }}>
                  Sign In & Enjoy Free Shipping Over $49<br></br>
                  <a href="#">Details</a>
                </div>
              </div>
              <div id="formCollection">
                <form
                  action="/"
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  <label
                    style={{
                      color: "#e52823",
                      color: "#c8102e",
                      fontSize: "1.1em",
                      fontWeight: "600",
                    }}
                  >
                    Payment:
                  </label>
                  <div>Name</div>{" "}
                  <input
                    type={"text"}
                    placeholder={"Enter your full name here "}
                  ></input>
                  <div>Email</div>{" "}
                  <input
                    type={"text"}
                    placeholder={"Enter your Email here "}
                  ></input>
                  <div>Phone No.</div>{" "}
                  <input
                    type={"text"}
                    placeholder={"Enter your Phone Number here "}
                  ></input>
                  <div>Location</div>{" "}
                  <input
                    type={"text"}
                    placeholder={"Enter your Location here "}
                  ></input>
                  <div style={{display:'flex', gap:'10px'}}>
                    <label >Quantity</label>
                    <select name="qty">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                  <a href="#">
                    <div
                      style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "15px 32px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "flex",
                        fontSize: "16px",
                        alignItems: "center",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        src={require("../assets/images/credit-card.png")}
                      ></img>
                      <label>BUY NOW</label>
                    </div>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Details;
