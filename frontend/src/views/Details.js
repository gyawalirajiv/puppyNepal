import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router';
import Header from "components/Header";
import Footer from "components/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import axiosclient from "util/axiosClient";
import randomIntFromInterval from "util/randNumber";
import Spinner from 'react-bootstrap/Spinner';

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

// const PopoverImage = ({ Image }) => {
//   return (
//     <Popover id="popover-basic-2" style={{ maxWidth: "100%", alignContent: 'center', justifyContent: 'center' }}>
//       <Popover.Body>
//         <div style={{ height: "400px", width: "400px" }}>
//           <img src={Image} />
//         </div>


//       </Popover.Body>
//     </Popover>
//   )
// };

const Example = () => (
  <OverlayTrigger trigger={["hover", "focus"]} placement="right" overlay={popover}>
    <Button variant="Primary">⭐⭐⭐⭐★</Button>
  </OverlayTrigger>
);

const PictureDesc = ({ Image }) => {
  return (
    <OverlayTrigger trigger={["hover", "focus"]} placement="right" overlay={
      <Popover id="popover-basic-2" style={{ maxWidth: "100%", alignContent: 'center', justifyContent: 'center' }}>
        <Popover.Body>
          <div >
            <img src={Image} style={{ height: "800px", width: "800px", objectFit: "cover" }}/>
          </div>


        </Popover.Body>
      </Popover>
    }>
      <Button variant="Success">
        <img
          src={Image}
          style={{ width: "300px", height: "300px" }}
        />
      </Button>
    </OverlayTrigger>
  )
};


function Details() {
  const [details, setDetails] = useState({});
  const [values, setValues] = useState({ fullName: "", phone: "", location: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    getProductDetailsWithaxios();
  }, []);

  const getProductDetailsWithaxios = async () => {
    const response = await axiosclient.get('/products/' + productId);
    setDetails(response.data);
  };

  const saveOrderAxios = async () => {
    const orderData = {
      "product": {
        "_id": productId
      },
      "fullName": values.fullName,
      "location": values.location,
      "phoneNumber": values.phone
    };

    const response = await axiosclient.post('/order', orderData).then((res) => {
      setTimeout(() => {
        setLoading(false)
      }, 4000)
      console.log('res', res);
      setTimeout(() => {
        setSuccess(true)
      }, 4000)
    })
    return response;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    saveOrderAxios()
    setTimeout(() => {
      setSuccess(false)
    }, 10000)

  };

  const handleChange = (event) => {
    setValues((values) => ({ ...values, [event.target.name]: event.target.value, }));
  }

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
            <PictureDesc Image={details.image} />
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
                fontStyle: "normal",
                fontvarianteastasian: 'normal ',
                fontvariantligatures: 'normal',
                fontvariantnumeric: 'normal ',
                lineHeight: "3rem",
                fontWeight: "900"

              }}
            >
              {details.title}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <p>
                  {" "}
                  Item #5321448{" "}
                  <label style={{ fontWeight: "bold" }}> <Example /> </label>{" "}
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
                    ${details.price}{" "}
                  </label>
                </span>{" "}
                <span style={{ textDecoration: "line-through", color: "grey" }}>
                  Price${randomIntFromInterval(details.price)}
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
                  onSubmit={handleSubmit}
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
                      textAlign: 'center',
                      marginBottom: '10px'
                    }}
                  >
                    Payment
                  </label>
                  <div style={{ color: "white" }}>Name</div>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="fullName"
                    required
                    onChange={handleChange}
                  />
                  <div style={{ color: "white" }}>Phone No.</div>{" "}
                  <Form.Control
                    type="number"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    required
                    onChange={handleChange}
                  />
                  <div style={{ color: "white" }}>Location</div>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Full Address"
                    name="location"
                    required
                    onChange={handleChange}
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <label style={{ color: "white" }}>Quantity:</label>
                    <select name="qty">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>

                  {/* <label>BUY NOW</label> */}
                  <Button type="submit" style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "5px 15px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "flex",
                    fontSize: "16px",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                    borderRadius: "25px",
                  }} disabled={loading}>
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src={require("../assets/images/credit-card.png")}
                    />
                    {
                      loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) :
                        <></>
                    }
                    BUY NOW</Button>
                  {
                    success ? (
                      <h5 style={{ textAlign: 'center', color: 'white', marginTop: '10px' }}>Order Saved Successfully</h5>
                    ) : <></>
                  }

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
