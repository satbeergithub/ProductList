import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Spinner,
} from "reactstrap";
import {
  Year,
  GreenBox,
  FilterDiv,
  P,
  MainDiv,
  ProductBox,
  ProductDiv,
} from "./styled";

const BooleanData = [
  {
    value: "true",
    name: "True",
  },
  {
    value: "false",
    name: "False",
  },
];

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2018);
  const [activeYear, setActiveYear] = useState("2018");
  const [selectedValue, setselectedValue] = useState(true);
  const [activeValue, setactiveValue] = useState("true");
  const [selectedValue2, setselectedValue2] = useState(true);
  const [activeValue2, setactiveValue2] = useState("true");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${selectedValue}&land_success=${selectedValue2}&launch_year=${selectedYear}`
        );
        setData(response?.data);
        console.log(response);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedYear, selectedValue, selectedValue2]);

  return (
    <>
      <div style={{textAlign:'center',marginTop:'10px'}}>
        <h2>Space X lauch Programs</h2>
      </div>
      <MainDiv>
        <FilterDiv>
          <div style={{ fontSize: "1.5em", fontFamily: "bold" }}>Filters</div>
          <div style={{ marginTop: "1em" }}>
            <P>Launch year</P>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {Year.map((i) => {
                return (
                  <GreenBox
                    onClick={() => {
                      setSelectedYear(i.year);
                      setActiveYear(i.year);
                    }}
                    style={{
                      background:
                        activeYear === i.year ? "#90ee90" : "transparent",
                    }}
                  >
                    {i?.year}
                  </GreenBox>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: "1em" }}>
            <P>Successful Lauch</P>
            <div style={{ display: "flex" }}>
              {BooleanData?.map((i, index) => {
                return (
                  <GreenBox
                    key={index}
                    onClick={() => {
                      setselectedValue(i.value);
                      setactiveValue(i.value);
                    }}
                    style={{
                      background:
                        activeValue === i.value ? "#90ee90" : "transparent",
                    }}
                  >
                    {i?.name}
                  </GreenBox>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: "1em" }}>
            <P>Successful Landing</P>
            <div style={{ display: "flex" }}>
              {BooleanData?.map((i, index) => {
                return (
                  <GreenBox
                    key={index}
                    onClick={() => {
                      setselectedValue2(i.value);
                      setactiveValue2(i.value);
                    }}
                    style={{
                      background:
                        activeValue2 === i.value ? "#90ee90" : "transparent",
                    }}
                  >
                    {i?.name}
                  </GreenBox>
                );
              })}
            </div>
          </div>
        </FilterDiv>
        <ProductDiv>
          {loading ? (
            <div
              className="d-flex"
              style={{ position: "absolute", left: "50%", top: "50%" }}
            >
              <Spinner className="me-2"></Spinner>
              <h5>Loading....</h5>
            </div>
          ) : (
            <>
              {data?.length ? (
                data.map((product, i) => {
                  return (
                    <ProductBox>
                      <div
                        style={{
                          width: "200px",
                          height: "150px",
                          marginBottom: "1em",
                        }}
                      >
                        <img
                          src={product?.links?.mission_patch}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <p
                        style={{
                          color: "#190482",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {product?.mission_name} #{i + 1}
                      </p>
                      <div>
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          Mission Ids:
                        </span>
                        {product?.mission_id.map((i) => {
                          return <span>{i}</span>;
                        })}
                      </div>

                      <div style={{ margin: "8px 0px 8px 0px" }}>
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          Launch Year :
                        </span>
                        <span>{product?.launch_year}</span>
                      </div>

                      <div style={{ margin: "8px 0px 8px 0px" }}>
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          Successful launch :{" "}
                        </span>
                        <span>
                          {product?.launch_success === true ? "True" : "False"}
                        </span>
                      </div>

                      <div>
                        <span style={{ fontWeight: "bold" }}>
                          SuccessFul landing :{" "}
                        </span>
                        <span>{product?.lauch_landing}</span>
                      </div>
                    </ProductBox>
                  );
                })
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "4em",
                    marginLeft: "4em",
                  }}
                >
                  <h1>No Data Found</h1>
                </div>
              )}
            </>
          )}
        </ProductDiv>
      </MainDiv>
    </>
  );
}

export default Product;
