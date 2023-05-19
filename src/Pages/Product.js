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
import { BsTrash } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Product() {
  const [data, setData] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(false);

  const increment = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
        setQuantities(
          response.data.products.reduce(
            (prevQuantities, product) => ({
              ...prevQuantities,
              [product.id]: 0,
            }),
            {}
          )
        );
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteHandler = (productId) => {
    const newData = data.filter((product) => product.id !== productId);
    setData(newData);
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {loading ? (
        <div className="d-flex" style={{position:'absolute',left:"50%",top:'50%'
        }}>
          <Spinner></Spinner>
          <h5>Loading....</h5>
        </div>
      ) : (
        data.map((product) => {
          const { id, thumbnail, title, price, discountPercentage } = product;
          const quantity = quantities[id] || 0;

          return (
            <div
              key={id}
              style={{
                width: "20%",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
              }}
              className="me-3 mt-4"
            >
              <div
                style={{
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft: "1em",
                }}
                className="mt-3"
              >
                <Card
                  style={{
                    width: "18rem",
                    height: "370px",
                  }}
                >
                  <img
                    alt="Card"
                    src={thumbnail}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "150px",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h6">{title}</CardTitle>
                    <h6>Price: ${price}</h6>
                    <CardText>Discount: {discountPercentage}%</CardText>

                    <div style={{ cursor: "pointer" }}>
                      Quantity
                      <span
                        onClick={() => decrement(id)}
                        style={{ marginLeft: "0.8em", fontSize: "1.2em" }}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span
                        style={{
                          border: "1px solid black",
                          padding: "1px 15px",
                          marginLeft: "0.5em",
                          marginRight: "0.5em",
                        }}
                      >
                        {quantity}
                      </span>
                      <span
                        onClick={() => increment(id)}
                        style={{ fontSize: "1.2em" }}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <Button color="success">Add to Cart</Button>
                      <span
                        className="text-danger me-4"
                        onClick={() => deleteHandler(id)}
                        style={{ cursor: "pointer" }}
                      >
                        <BsTrash />
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Product;
