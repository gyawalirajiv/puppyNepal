import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
    <Popover id="popover-basic" style={{ maxWidth: "100%" }}>
      <Popover.Header as="h3">Review</Popover.Header>
      <Popover.Body>
        <div> 
        <img src={require("../assets/images/Review.JPG")} />
        </div>
        
        
      </Popover.Body>
    </Popover>
  );

  const popover2 = (
    <Popover id="popover-basic-2" style={{ maxWidth: "100%", alignContent:'center', justifyContent:'center' }}>
      <Popover.Body>
        <div style={{height:"400px",width:"400px"}}> 
        <img src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")} />
        </div>
        
        
      </Popover.Body>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <Button variant="Primary">⭐⭐⭐⭐★</Button>
    </OverlayTrigger>
  );

  const PictureDesc = () => {
    return (

        <OverlayTrigger trigger="hover" placement="right" overlay={popover2}>
      <Button variant="Success">
        <img
              src={require("../assets/images/GlobalSourceSingleDoorFoldingWireDogCrate.jpeg")}
              style={{ width: "300px", height: "300px" }}
              />
            </Button>
    </OverlayTrigger>
              )
  };


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
          <PictureDesc />
          </div>

          <div>
            <h2
              style={{
                display: "block",
                marginBlockStart: "0.67em",
                marginBlockEnd: "0.67em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                fontFamily: "Proxima-Nova-A-Bold",
                fontSize: "28px",
                fontStyle:"normal",
                fontvarianteastasian: 'normal ',
            fontvariantligatures: 'normal', 
            fontvariantnumeric:  'normal ',
                lineHeight: "3rem",
                fontWeight: "900"
                
              }}
            >
              Global Source Single Door Folding Wire Dog Crate
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <p>
                  {" "}
                  Item #5321448{" "}
                  <label style={{ fontWeight: "bold" }}> <Example/> </label>{" "}
                  {"  "}
                  <label style={{ color: "green", fontWeight: "bold" }}>
                    {" "}
                    4.6
                  </label>{" "}
                  out of 5 stars.
                </p>
                <span id="price" style={{ color: "#e52823" }}>
                  {" "}
                  <label style={{ fontWeight: "bold", fontSize: "20px" }}>
                    $79.99{" "}
                  </label>
                </span>{" "}
                <span style={{ textDecoration: "line-through", color: "grey" }}>
                  Price$109.99
                </span>
                <br></br>
                <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                  Earn Treats on this purchase!
                  <a href="#" style={{}}>
                    Sign Up
                  </a>{" "}
                </p>
                <div
                  style={{
                    color: "#e52823",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  <img
                    src={require("../assets/images/price tag.png")}
                    style={{ width: "10px", height: "10px" }}
                  ></img>{" "}
                  <label>Buy 1 Wire Crate, Get 10% Off a Crate Mat</label>{" "}
                  <br></br>
                  <a href="#">Details</a>
                </div>
                <div
                  style={{
                    color: "#e52823",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  <div>
                    <img
                      src={require("../assets/images/price tag.png")}
                      style={{ width: "10px", height: "10px" }}
                    ></img>{" "}
                    <label>Sign In & Enjoy Free Shipping Over $49 </label>{" "}
                    <br></br>
                    <a href="#">Details</a>
                  </div>
                  <br></br>
                  <label
                    style={{
                      color: "black",
                      textDecoration: "none",
                      color: "grey",
                    }}
                  >
                    Size
                  </label>
                  <div style={{ lineHeight: "2rem", fontSize: "1rem" }}>
                    <Form.Select
                      aria-label="Default select example"
                      style={{ width: "50%" }}
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div
                    style={{
                      lineHeight: "2.2rem",
                      color: "Grey",
                      fontWeight: "bold",
                    }}
                  >
                    Color:
                    <label style={{ color: "black", fontWeight: "bold" }}>
                      Black
                    </label>
                  </div>
                </div>
              </div>
              <div id="formCollection">
                <form
                  action="/"
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    width: "65%",
                    padding: "15px",
                    backgroundColor: "grey",
                    borderRadius: "3%",
                  }}
                >
                  <label
                    style={{
                      color: "white",
                      fontSize: "1.5em",
                      fontWeight: "600",
                    }}
                  >
                    Payment:
                  </label>
                  <div style={{ color: "white" }}>Name</div>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="Name"
                  />
                  <div style={{ color: "white" }}>Email</div>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Email"
                    name="Email"
                  />
                  <div style={{ color: "white" }}>Phone No.</div>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Phone Number"
                    name="PhoneNo"
                  />
                  <div style={{ color: "white" }}>Location</div>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="Name"
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <label style={{ color: "white" }}>Quantity</label>
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
                        borderRadius: "25px",
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
