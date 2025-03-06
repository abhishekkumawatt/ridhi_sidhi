import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "../home/Home.css";
import Hardwareimg from "../../assets/images/hardwarefirstimg.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa6";
import channel from "../../assets/images/channel.jpg";
import doorcloser from "../../assets/images/doorcloser.jpg";
import hardwarehinges from "../../assets/images/doorlocks.jpg";
import smartlocks from "../../assets/images/smartlocks.png";
import kitchenhydraulic from "../../assets/images/kitchenhydraulic.jpg";
import doorseal from "../../assets/images/doorseal.jpg";
import fingerpullhandel from "../../assets/images/fingerpullhandel.jpg";
import hydraulichinges from "../../assets/images/hydraulichinges.jpg";
import tilehammer from "../../assets/images/tilehammer.jpg";
import drillbithandel from "../../assets/images/bithandel.jpg";
import steelnutbolt from "../../assets/images/steelnutbolt.jpg";
import allenkeyset from "../../assets/images/allenkeyset.jpg";
import screwdriverset from "../../assets/images/screwdriverset.jpg";
import { MdOutlineDone } from "react-icons/md";
import Footer from "../footer/Footer";
import Slider from "react-slick";
import electricimg from "../../assets/images/electricfirstimg.jpg.png";
import modulerswitch from "../../assets/images/modulerswitch.jpg";
import fourpollmcb from "../../assets/images/fp_mcb.jpg";
import profilelight from "../../assets/images/profile.light.webp";
import motorcapacitor from "../../assets/images/motorcapacitor.jpg";
import sanitaryware from "../../assets/images/sanitaryimg.jpg.png";
import modulersoket from "../../assets/images/modulersoket.jpg";
import conduitpipebundle from "../../assets/images/conduitpipebundle.jpg";
import multiplug from "../../assets/images/multiplug.jpg";
import tubelight from "../../assets/images/tubelight.jpg";
import ledbulb from "../../assets/images/ledbulb.jpg";
import wateralarm from "../../assets/images/wateralarm.jpg";
import callbell from "../../assets/images/callbell.jpg";
import studylamp from "../../assets/images/studylamp.jpg";
import entryswitch from "../../assets/images/entryswitch.jpg";
import leftarrow from "../../assets/images/left-arrow.gif";
import rightarrow from "../../assets/images/right-arrow.gif";
import pvcpipe from "../../assets/images/pvc.pipe.4inch.jpg";
import wallmixer from "../../assets/images/wallmixer.jpg";
import tabletop from "../../assets/images/tabletop.jpg";
import cisternflushtank from "../../assets/images/cisternflushtank.jpg";
import handshower from "../../assets/images/handshower.jpg";
import overheadshower from "../../assets/images/overheadshower.jpg";
import drowerwashbasin from "../../assets/images/drowerwashbasin.jpg";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  return (
    <div className="mainofmain">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="main" style={{ backgroundColor: "rgb(31, 42, 42)" }}>
        <div
          className="hardwareimg"
          style={{ paddingBottom: "270px", position: "absolute" }}
        >
          <Card
            style={{
              width: "28rem",
              height: "42vh",
              position: "absolute",
              margin: "130px 0 0 190px",
            }}
          >
            <Card.Body>
              <Card.Title>
                <h2>Original and Quality</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h1 style={{ fontFamily: "revert", color: "black" }}>
                  <b>Hardware Products</b>
                </h1>
              </Card.Subtitle>
              <Card.Text>
                Household Hardware for Home improvement including: Fasteners,
                power tools, locks, hinges, chains, plumbing, electrical,
                housewares, paint and garden products directly to consumers for
                use at home or for business.
              </Card.Text>

              <Link to="/hardware">
                <Button
                  variant="warning"
                  style={{
                    height: "40px",
                    width: "130px",
                    fontSize: "14px",
                    marginTop: "20px",
                  }}
                >
                  <b>SHOP NOW </b>
                  <FaArrowRight />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <img
            src={Hardwareimg}
            style={{
              height: "35pc",
              paddingLeft: "522px",
              marginBottom: "16pc",
            }}
          />
        </div>
      </div>

      <div className="main1">
        <div className="hardwareproducts">
          <h2 style={{ padding: "25px 0 0 65px" }}>Hardware Products</h2>
        </div>
        <div className="hardwarecards">
          <div className="card1">
            <Card style={{ width: "15rem", marginTop: "30px" }}>
              <Card.Img
                variant="top"
                src={channel}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Channel</Card.Title>
                <Card.Text>
                  Smooth Flow Telescopic Double Ball Bearing Channel Slides for
                  Drawer cupboards Wardrobe Kitchen Basket.
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <h5 style={{ textDecoration: "line-through", color: "gold" }}>
                    ₹499.00
                  </h5>
                  <h5 style={{ textDecoration: "underline" }}>₹349.00</h5>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="card2">
            <Card style={{ width: "15rem", marginTop: "30px" }}>
              <Card.Img
                variant="top"
                src={doorcloser}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Door Closer</Card.Title>
                <Card.Text>
                  Designed with a weight capacity of 90kg, this door closer
                  ensures smooth and controlled door operation.
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <h5 style={{ textDecoration: "line-through", color: "gold" }}>
                    ₹1,530.00
                  </h5>
                  <h5 style={{ textDecoration: "underline" }}>₹849.00</h5>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="card3">
            <Card style={{ width: "15rem", marginTop: "30px" }}>
              <Card.Img
                variant="top"
                src={hardwarehinges}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Door Locks</Card.Title>
                <Card.Text>
                  Luxury Mortise Door Locks for Main Door, Bedroom, Handle Set
                  with 3 Brass Key for Home | Office | Hotel
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <h5 style={{ textDecoration: "line-through", color: "gold" }}>
                    ₹5,030.00
                  </h5>
                  <h5 style={{ textDecoration: "underline" }}>₹1,899.00</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* sliderrrrrr */}

      <div className="main2">
        <div className="slider-container" style={{ margin: "0 150px 0 190px" }}>
          <Slider {...settings}>
            <div className="slidecards">
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={hydraulichinges}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Hydraulic Hinges</Card.Title>
                    <Card.Text>
                      Hinges may be made of flexible material or moving
                      components. Such as the elbow joint.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹539.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹363.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={tilehammer}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Tile Soft Hammer</Card.Title>
                    <Card.Text>
                      Rubber Round Head and Non-Slip Comfortable Grip Handle
                      Soft Face Hammer for Tiles.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹699.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹450.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={drillbithandel}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Drill Chuck</Card.Title>
                    <Card.Text>
                      Multi Chuck 3mm Rotary Tool for Changing Accessories.
                      Drill Heavy Chuck.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹559.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹239.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={steelnutbolt}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Steel Nut Bolt</Card.Title>
                    <Card.Text>
                      Stainless Steel bolt With Nut & Flat Washer. All size Nut
                      Bolt Available. It does'nt Rust.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹299.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹140.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={allenkeyset}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Allen Key Set</Card.Title>
                    <Card.Text>
                      Allen Key Set, Rust resistant coating. Allen key set for
                      bike, car, cycle, heavy vehicles and machinery.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹559.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹239.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={screwdriverset}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Screw Driver Set</Card.Title>
                    <Card.Text>
                      Precision screw driver set for computer, mobile repairing
                      tool kit, laptop repairing and multipurpose.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹1,499.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹849.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="main4" style={{ display: "flex" }}>
        <div className="cardtext">
          <div className="textheading" style={{ padding: "20px 0 0 190px" }}>
            <h2>New Product</h2>
          </div>
          <div
            className="card4"
            style={{ display: "flex", marginLeft: "190px", gap: "30px" }}
          >
            <div className="card1">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={smartlocks}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Door Smart Lock</Card.Title>
                  <Card.Text>
                    Smart Door Lock | 5 Ways Unlocking | Fingerprint | PIN | OTP
                    | NFC Card | Key | 5 Stainless Steel Bolt.
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹10,499.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹5,349.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={kitchenhydraulic}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Hydraulic Shocker</Card.Title>
                  <Card.Text>
                    Kitchen Cabinet Gas Piston Spring Kitchen Cabinet Stay
                    Shocker Strut Hydraulic Lift Support.
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹499.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹349.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div
            className="card5"
            style={{ display: "flex", marginLeft: "190px", gap: "30px" }}
          >
            <div className="card1">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={doorseal}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Door Seal</Card.Title>
                  <Card.Text>
                    Window Home Door Seal (94cm/36.5") Aluminium Plate with
                    Nylon Brush (Chocolate, 2).
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹589.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹295.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="card1">
              <Card style={{ width: "15rem", margin: "30px 0 80px 0" }}>
                <Card.Img
                  variant="top"
                  src={fingerpullhandel}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Fingerpull Handel</Card.Title>
                  <Card.Text>
                    Style Finger Edge Pull Furniture DrawerHandles Hidden
                    Cabinet Kitchen Drawer Handles Ivory,Black.
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹513.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹213.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="bg_img">
          <Card
            style={{
              width: "25rem",
              height: "65vh",
              opacity: "0.9",
              margin: "230px 0 0 80px",
            }}
          >
            <Card.Body>
              <Card.Title>
                <h2>
                  <b>New Products Enhance and Glowing the Beauty of Home.</b>
                </h2>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  fontFamily: "sans-serif",
                }}
              >
                {" "}
                Many hardware stores have specialty departments unique to its
                region or its owner's interests. Chain, Smart Locks, Heavy
                Channel, etc.
              </Card.Subtitle>
              <Card.Text style={{ marginTop: "20px" }}>
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Handel Sets{" "}
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "36px",
                  }}
                />
                Threaded fasteners
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Dead Bolts{" "}
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "44px",
                  }}
                />
                Wardrobe Sliding
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Mortise Locks{" "}
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "23px",
                  }}
                />
                Fingerpull Handel
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Hand Tool Kit{" "}
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "26px",
                  }}
                />
                Door Seal
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Bearing Hinges{" "}
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "14px",
                  }}
                />
                Hydraulic Shocker
              </Card.Text>
              <Link to="/hardware">
                <Button
                  variant="warning"
                  style={{
                    height: "42px",
                    width: "130px",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  <b>SHOP NOW </b>
                  <FaArrowRight />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div style={{ margin: "0 0 0 400px" }}>
        <img
          src={rightarrow}
          style={{ height: "70px", width: "170px", margin: "-80px 0 10px 0" }}
        ></img>
        <Link to="/hardware">
          <Button
            variant="warning"
            style={{
              height: "60px",
              width: "350px",
              fontSize: "20px",
              margin: "-50px 0 40px 0px",
            }}
          >
            Click and See All Items
          </Button>
        </Link>
        <img
          src={leftarrow}
          style={{ height: "70px", width: "170px", margin: "-80px 0 10px 0" }}
        ></img>
      </div>
      <div className="main5">
        <div
          className="electric"
          style={{ backgroundColor: "rgb(31, 42, 42)" }}
        >
          <h1
            style={{
              color: "white",
              padding: "20px",
              fontFamily: "-moz-initial",
            }}
          >
            Electrical Items
          </h1>
          <img
            src={electricimg}
            style={{ margin: "0px 0 260px 0", height: "35pc", width: "62pc" }}
          ></img>
        </div>
        <div
          className="electriccard"
          style={{
            backgroundColor: "rgb(31, 42, 42)",
            margin: "-680px 0px 0px 854px",
            position: "absolute",
          }}
        >
          <Card
            style={{ width: "28rem", height: "42vh", position: "absolute" }}
          >
            <Card.Body>
              <Card.Title>
                <h2>Original and Quality</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h1 style={{ fontFamily: "revert", color: "black" }}>
                  <b>Electrical Products</b>
                </h1>
              </Card.Subtitle>
              <Card.Text>
                Some of the usually named classes of electrical appliances at
                home are Household Appliances, Kitchen Appliances, Compact
                Appliances, Small Appliances, Floor-care Appliances,
                Personal-care Appliances,
              </Card.Text>
              <Link to="/electric">
                <Button
                  variant="warning"
                  style={{
                    height: "40px",
                    width: "130px",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  <b>SHOP NOW </b>
                  <FaArrowRight />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="main6">
        <div className="electricproducts">
          <h2 style={{ padding: "25px 0 0 65px" }}>Electric Products</h2>
        </div>
        <div className="electriccards">
          <div className="card1">
            <Card style={{ width: "15rem", marginTop: "30px" }}>
              <Card.Img
                variant="top"
                src={modulerswitch}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Moduler Switch</Card.Title>
                <Card.Text>
                  <b>Pack of 10 Pieces 6AMP Modular Switch.</b>
                  <br /> 1 Way 6 Amp. Switch, Color (White, Black, Silver)
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <h5 style={{ textDecoration: "line-through", color: "gold" }}>
                    ₹499.00
                  </h5>
                  <h5 style={{ textDecoration: "underline" }}>₹249.00</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="card1">
            <Card style={{ width: "15rem", marginTop: "30px" }}>
              <Card.Img
                variant="top"
                src={fourpollmcb}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Four Poll (FP) MCB</Card.Title>
                <Card.Text>
                  63-Amp. 4-Pole Polycarbonate MCB Isolator (White), Standard,
                  Heavy Quality.
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <h5 style={{ textDecoration: "line-through", color: "gold" }}>
                    ₹1,499.00
                  </h5>
                  <h5 style={{ textDecoration: "underline" }}>₹849.00</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="card1">
            <Card style={{ width: "15rem", marginTop: "30px" }}>
              <Card.Img
                variant="top"
                src={profilelight}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Profile Light</Card.Title>
                <Card.Text>
                  Electronic spices 1m Alumunium Profile Groove housing for Led
                  Strip - Pack of 5 piece,Plastic(multi)
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <h5 style={{ textDecoration: "line-through", color: "gold" }}>
                    ₹1,599.00
                  </h5>
                  <h5 style={{ textDecoration: "underline" }}>₹449.00</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* {....electrical sliderrrr...} */}

      <div className="main7">
        <div className="slider-container" style={{ margin: "0 150px 0 190px" }}>
          <Slider {...settings}>
            <div className="slidecards">
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={motorcapacitor}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Motor Capacitor 1HP</Card.Title>
                    <Card.Text>
                      16 mfd Capacitor Motors & Pumps, (match mfd & buy),
                      Polypropylene Film Motor Start Run Capacitor.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹1,030.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹233.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={modulersoket}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>6 & 16 Amp. Soket</Card.Title>
                    <Card.Text>
                      Polycarbonate Modular 6 & 16 Amp Socket with Safety
                      Shutter [2m] white color Set of 10 Pcs
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹2,030.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹649.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={conduitpipebundle}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Conduit Pipe 1"</Card.Title>
                    <Card.Text>
                      Hinges may be made of flexible material or moving
                      components. Such as the elbow joint.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹2,030.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹1,233.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={multiplug}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>6 & 16 Amp. Multiplug</Card.Title>
                    <Card.Text>
                      3 Way Multiplug Adaptor with 1 Universal Socket | 6Amp
                      Multiplug Socket for Home, Office | Pack of 1
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹236.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹133.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={tubelight}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Tubelight 10W</Card.Title>
                    <Card.Text>
                      Pride Plus 10W LED Batten B22 Tubelight | Warm White
                      |Energy Efficient |Compact Size|Made in India|Pack of 1
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹399.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹189.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div>
              <div className="card3">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={ledbulb}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Emergency LED Bulb</Card.Title>
                    <Card.Text>
                      LED 12W Rechargeable Emergency Inverter LED Bulb, Cool Day
                      Light, White, Upto 4 Hours Battery, b22d
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹599.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹327.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="main8" style={{ display: "flex" }}>
        <div className="cardtext">
          <div className="textheading" style={{ padding: "20px 0 0 190px" }}>
            <h2>New Product</h2>
          </div>
          <div
            className="card4"
            style={{ display: "flex", marginLeft: "190px", gap: "30px" }}
          >
            <div className="card1">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={wateralarm}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Water Alarm</Card.Title>
                  <Card.Text>
                    Water Tank Alarm - Overflow Bell, Human Voice, 100% Shock
                    Proof - Made in India - One Year Warranty
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹499.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹259.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={studylamp}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Study Lamp</Card.Title>
                  <Card.Text>
                    Level Brightness Mode LED Study Lamp with Pen Holder, 6
                    Month Warranty (Plastic, White, Pack of 1)
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹1,499.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹599.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div
            className="card5"
            style={{ display: "flex", marginLeft: "190px", gap: "30px" }}
          >
            <div className="card1">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={entryswitch}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Card Entry Switch</Card.Title>
                  <Card.Text>
                    Hotel Card Switch Energy Saving Switch Key Card Switch
                    Electricity Panel Switch
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹1,499.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹999.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="card1">
              <Card style={{ width: "15rem", margin: "30px 0 80px 0" }}>
                <Card.Img
                  variant="top"
                  src={callbell}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Call Bell</Card.Title>
                  <Card.Text>
                    Long Range Wireless Heavy Duty Remote Bell, Calling Bell for
                    Office , Home and Commercial use
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹1,299.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹449.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="bg_img">
          <Card
            style={{
              width: "25rem",
              height: "65vh",
              opacity: "0.9",
              margin: "230px 0 0 80px",
            }}
          >
            <Card.Body>
              <Card.Title>
                <h2>
                  <b>New Products Enhance and Glowing the Beauty of Home.</b>
                </h2>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  fontFamily: "sans-serif",
                }}
              >
                {" "}
                Many electrical stores have specialty departments unique to its
                region or its owner's interests. Chain, Smart Locks, Heavy
                Channel, etc.
              </Card.Subtitle>
              <Card.Text style={{ marginTop: "20px" }}>
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Conduit Pipes
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "40px",
                  }}
                />
                Water Alarm
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Conduit Fittings
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "26px",
                  }}
                />
                Distribution Switchgears
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Electrical Switches{" "}
                <MdOutlineDone
                  style={{ color: "gold", fontSize: "20px", marginLeft: "8px" }}
                />
                Doorbells
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Wire & Cables{" "}
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "36px",
                  }}
                />
                Casing Capping
                <br />
                <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                Gangbox{" "}
                <MdOutlineDone
                  style={{
                    color: "gold",
                    fontSize: "20px",
                    marginLeft: "73px",
                  }}
                />
                Electrical all Accessories
              </Card.Text>
              <Link to="/electric">
                <Button
                  variant="warning"
                  style={{
                    height: "42px",
                    width: "130px",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  <b>SHOP NOW </b>
                  <FaArrowRight />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div style={{ margin: "0 0 0 400px" }}>
        <img
          src={rightarrow}
          style={{ height: "70px", width: "170px", margin: "-80px 0 10px 0" }}
        ></img>
        <Link to="/electric">
          <Button
            variant="warning"
            style={{
              height: "60px",
              width: "350px",
              fontSize: "20px",
              margin: "-50px 0 40px 0px",
            }}
          >
            Click and See All Items
          </Button>
        </Link>
        <img
          src={leftarrow}
          style={{ height: "70px", width: "170px", margin: "-80px 0 10px 0" }}
        ></img>
      </div>

      <div className="main9">
        <div
          className="sanitary"
          style={{ backgroundColor: "rgb(31, 42, 42)" }}
        >
          <h1
            style={{
              color: "white",
              padding: "20px",
              fontFamily: "-moz-initial",
            }}
          >
            Sanitary Items
          </h1>
          <img
            src={sanitaryware}
            style={{
              margin: "0px 0 16pc 527px",
              height: "35pc",
              width: "62pc",
            }}
          ></img>
        </div>
        <div
          className="electriccard"
          style={{
            backgroundColor: "rgb(31, 42, 42)",
            margin: "-695px 0px 0px 188px",
            position: "absolute",
          }}
        >
          <Card
            style={{ width: "28rem", height: "42vh", position: "absolute" }}
          >
            <Card.Body>
              <Card.Title>
                <h2>Original and Quality</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h1 style={{ fontFamily: "revert", color: "black" }}>
                  <b>Sanitary Products</b>
                </h1>
              </Card.Subtitle>
              <Card.Text>
                The plumbing system includes pipes made of materials like
                copper, PVC, and brass, as well as fittings like elbows, tees,
                unions, and valves that connect the pipes. It provides potable
                water to fixtures like sinks, toilets, showers.
              </Card.Text>
              <Link to="/sanitary">
                <Button
                  variant="warning"
                  style={{
                    height: "40px",
                    width: "130px",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  <b>SHOP NOW </b>
                  <FaArrowRight />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className="main1">
          <div className="hardwareproducts">
            <h2 style={{ padding: "25px 0 0 65px" }}>Sanitary Products</h2>
          </div>
          <div className="hardwarecards">
            <div className="card1">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={pvcpipe}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>PVC 4inch Pipe</Card.Title>
                  <Card.Text>
                    Smooth Flow Telescopic Double Ball Bearing Channel Slides
                    for Drawer cupboards Wardrobe Kitchen Basket.
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹499.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹349.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="card2">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={wallmixer}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Wall Mixer</Card.Title>
                  <Card.Text>
                    Designed with a weight capacity of 90kg, this door closer
                    ensures smooth and controlled door operation.
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹1,530.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹849.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="card3">
              <Card style={{ width: "15rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={tabletop}
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>Table Top</Card.Title>
                  <Card.Text>
                    Luxury Mortise Door Locks for Main Door, Bedroom, Handle Set
                    with 3 Brass Key for Home | Office | Hotel
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <h5
                      style={{ textDecoration: "line-through", color: "gold" }}
                    >
                      ₹5,030.00
                    </h5>
                    <h5 style={{ textDecoration: "underline" }}>₹1,899.00</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="main7">
          <div
            className="slider-container"
            style={{ margin: "0 150px 0 190px" }}
          >
            <Slider {...settings}>
              <div className="slidecards">
                <div className="card3">
                  <Card style={{ width: "15rem", marginTop: "30px" }}>
                    <Card.Img
                      variant="top"
                      src={cisternflushtank}
                      style={{ height: "30vh" }}
                    />
                    <Card.Body>
                      <Card.Title>Cistern Flush Tank</Card.Title>
                      <Card.Text>
                        Hinges may be made of flexible material or moving
                        components. Such as the elbow joint.
                      </Card.Text>
                      <div style={{ display: "flex" }}>
                        <h5
                          style={{
                            textDecoration: "line-through",
                            color: "gold",
                          }}
                        >
                          ₹2,030.00
                        </h5>
                        <h5 style={{ textDecoration: "underline" }}>
                          ₹1,233.00
                        </h5>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div className="card3">
                  <Card style={{ width: "15rem", marginTop: "30px" }}>
                    <Card.Img
                      variant="top"
                      src={handshower}
                      style={{ height: "30vh" }}
                    />
                    <Card.Body>
                      <Card.Title>Handshower</Card.Title>
                      <Card.Text>
                        Hinges may be made of flexible material or moving
                        components. Such as the elbow joint.
                      </Card.Text>
                      <div style={{ display: "flex" }}>
                        <h5
                          style={{
                            textDecoration: "line-through",
                            color: "gold",
                          }}
                        >
                          ₹2,030.00
                        </h5>
                        <h5 style={{ textDecoration: "underline" }}>
                          ₹1,233.00
                        </h5>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div className="card3">
                  <Card style={{ width: "15rem", marginTop: "30px" }}>
                    <Card.Img
                      variant="top"
                      src={drowerwashbasin}
                      style={{ height: "30vh" }}
                    />
                    <Card.Body>
                      <Card.Title>Drower Wash Basin</Card.Title>
                      <Card.Text>
                        Hinges may be made of flexible material or moving
                        components. Such as the elbow joint.
                      </Card.Text>
                      <div style={{ display: "flex" }}>
                        <h5
                          style={{
                            textDecoration: "line-through",
                            color: "gold",
                          }}
                        >
                          ₹2,030.00
                        </h5>
                        <h5 style={{ textDecoration: "underline" }}>
                          ₹1,233.00
                        </h5>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div className="card3">
                  <Card style={{ width: "15rem", marginTop: "30px" }}>
                    <Card.Img
                      variant="top"
                      src={hardwarehinges}
                      style={{ height: "30vh" }}
                    />
                    <Card.Body>
                      <Card.Title>Door Locks</Card.Title>
                      <Card.Text>
                        Hinges may be made of flexible material or moving
                        components. Such as the elbow joint.
                      </Card.Text>
                      <div style={{ display: "flex" }}>
                        <h5
                          style={{
                            textDecoration: "line-through",
                            color: "gold",
                          }}
                        >
                          ₹2,030.00
                        </h5>
                        <h5 style={{ textDecoration: "underline" }}>
                          ₹1,233.00
                        </h5>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div className="card3">
                  <Card style={{ width: "15rem", marginTop: "30px" }}>
                    <Card.Img
                      variant="top"
                      src={overheadshower}
                      style={{ height: "30vh" }}
                    />
                    <Card.Body>
                      <Card.Title>Overhead Shower</Card.Title>
                      <Card.Text>
                        Hinges may be made of flexible material or moving
                        components. Such as the elbow joint.
                      </Card.Text>
                      <div style={{ display: "flex" }}>
                        <h5
                          style={{
                            textDecoration: "line-through",
                            color: "gold",
                          }}
                        >
                          ₹2,030.00
                        </h5>
                        <h5 style={{ textDecoration: "underline" }}>
                          ₹1,233.00
                        </h5>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div className="card3">
                  <Card style={{ width: "15rem", marginTop: "30px" }}>
                    <Card.Img
                      variant="top"
                      src={hardwarehinges}
                      style={{ height: "30vh" }}
                    />
                    <Card.Body>
                      <Card.Title>Door Locks</Card.Title>
                      <Card.Text>
                        Hinges may be made of flexible material or moving
                        components. Such as the elbow joint.
                      </Card.Text>
                      <div style={{ display: "flex" }}>
                        <h5
                          style={{
                            textDecoration: "line-through",
                            color: "gold",
                          }}
                        >
                          ₹2,030.00
                        </h5>
                        <h5 style={{ textDecoration: "underline" }}>
                          ₹1,233.00
                        </h5>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="main8" style={{ display: "flex" }}>
          <div className="cardtext">
            <div className="textheading" style={{ padding: "20px 0 0 190px" }}>
              <h2>New Product</h2>
            </div>
            <div
              className="card4"
              style={{ display: "flex", marginLeft: "190px", gap: "30px" }}
            >
              <div className="card1">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={smartlocks}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Door Smart Lock</Card.Title>
                    <Card.Text>
                      Smooth Flow Telescopic Double Ball Bearing Channel Slides
                      for Drawer cupboards Wardrobe Kitchen Basket.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹10,499.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹5,349.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="card1">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={channel}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Channel</Card.Title>
                    <Card.Text>
                      Smooth Flow Telescopic Double Ball Bearing Channel Slides
                      for Drawer cupboards Wardrobe Kitchen Basket.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹499.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹349.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <div
              className="card5"
              style={{ display: "flex", marginLeft: "190px", gap: "30px" }}
            >
              <div className="card1">
                <Card style={{ width: "15rem", marginTop: "30px" }}>
                  <Card.Img
                    variant="top"
                    src={channel}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Channel</Card.Title>
                    <Card.Text>
                      Smooth Flow Telescopic Double Ball Bearing Channel Slides
                      for Drawer cupboards Wardrobe Kitchen Basket.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹499.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹349.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div className="card1">
                <Card style={{ width: "15rem", margin: "30px 0 80px 0" }}>
                  <Card.Img
                    variant="top"
                    src={channel}
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Channel</Card.Title>
                    <Card.Text>
                      Smooth Flow Telescopic Double Ball Bearing Channel Slides
                      for Drawer cupboards Wardrobe Kitchen Basket.
                    </Card.Text>
                    <div style={{ display: "flex" }}>
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gold",
                        }}
                      >
                        ₹499.00
                      </h5>
                      <h5 style={{ textDecoration: "underline" }}>₹349.00</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="bg_img">
            <Card
              style={{
                width: "25rem",
                height: "65vh",
                opacity: "0.9",
                margin: "230px 0 0 80px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h2>
                    <b>New Products Enhance and Glowing the Beauty of Home.</b>
                  </h2>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "20px",
                    marginTop: "10px",
                    fontFamily: "sans-serif",
                  }}
                >
                  {" "}
                  Many electrical stores have specialty departments unique to
                  its region or its owner's interests. Chain, Smart Locks, Heavy
                  Channel, etc.
                </Card.Subtitle>
                <Card.Text style={{ marginTop: "20px" }}>
                  <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                  Conduit Pipes
                  <MdOutlineDone
                    style={{
                      color: "gold",
                      fontSize: "20px",
                      marginLeft: "40px",
                    }}
                  />
                  Water Alarm
                  <br />
                  <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                  Conduit Fittings
                  <MdOutlineDone
                    style={{
                      color: "gold",
                      fontSize: "20px",
                      marginLeft: "26px",
                    }}
                  />
                  Distribution Switchgears
                  <br />
                  <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                  Electrical Switches{" "}
                  <MdOutlineDone
                    style={{
                      color: "gold",
                      fontSize: "20px",
                      marginLeft: "8px",
                    }}
                  />
                  Doorbells
                  <br />
                  <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                  Wire & Cables{" "}
                  <MdOutlineDone
                    style={{
                      color: "gold",
                      fontSize: "20px",
                      marginLeft: "36px",
                    }}
                  />
                  Casing Capping
                  <br />
                  <MdOutlineDone style={{ color: "gold", fontSize: "20px" }} />
                  Gangbox{" "}
                  <MdOutlineDone
                    style={{
                      color: "gold",
                      fontSize: "20px",
                      marginLeft: "73px",
                    }}
                  />
                  Electrical all Accessories
                </Card.Text>
                <Link to="/sanitary">
                  <Button
                    variant="warning"
                    style={{
                      height: "42px",
                      width: "130px",
                      fontSize: "14px",
                      marginTop: "10px",
                    }}
                  >
                    <b>SHOP NOW </b>
                    <FaArrowRight />
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ margin: "0 0 0 400px" }}>
          <img
            src={rightarrow}
            style={{ height: "70px", width: "170px", margin: "-80px 0 10px 0" }}
          ></img>
          <Link to="/sanitary">
            <Button
              variant="warning"
              style={{
                height: "60px",
                width: "350px",
                fontSize: "20px",
                margin: "-50px 0 40px 0px",
              }}
            >
              Click and See All Items
            </Button>
          </Link>
          <img
            src={leftarrow}
            style={{ height: "70px", width: "170px", margin: "-80px 0 10px 0" }}
          ></img>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
