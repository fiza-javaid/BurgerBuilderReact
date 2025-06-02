import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export default function Order() {

  const currentUser = useSelector((state) => state.authentication.currentuser);
const [featch, setfeach]=useState([])
const [toggleFetch, setToggleFetch] = useState(false);

  const deleteOrders = async(id) => {
    try{
      const res = await axios.delete(`http://localhost:8800/api/orders/${id}`);
      setToggleFetch(prev => !prev); 
    
    }
    catch(error){
      
        console.log("Error in deleting user order", error);
    }
  }

  useEffect(() => {
    const userData = async () => {
      try {
      const res = await axios.get(`http://localhost:8800/api/orders/${currentUser.id}`);
      setfeach(res.data)
    }
    catch(error) {
      console.log("Error in get user db orders", error);
    }
  }
  userData();
}, [currentUser, toggleFetch]);


  const orderdiv = {
    width: "90%",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    padding: "10px",
    margin: "10px auto",
    boxSizing: "border-box",
  };
  const flexButton = {
    display: "flex",
    gap: "10px",
  };
  const ingredientsCount = {
    textTransform: "capitalize",
    display: "inline-block",
    margin: "0 5px",
    padding: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#1f1f1f1f",
    borderRadius: "5px",
  };
  const deletebtn = {
    backgroundColor: "red",
    border: "none",
    color: "white",
    padding: "10px 25px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "5px",
    left: "8px",
  };

  return (
    <>
      {featch.length === 0 ? (
        <p>First Place Order!</p>
      ) : (
        featch.map((order) => (
          <div key={order.id} style={orderdiv}>
            <div style={flexButton}>
              <p>Ingredients:</p>
              <span style={ingredientsCount}>bacon ({order.baconCount})</span>
              <span style={ingredientsCount}>cheese ({order.cheeseCount})</span>
              <span style={ingredientsCount}>meat ({order.meatCount})</span>
              <span style={ingredientsCount}>salad ({order.saladCount})</span>
              <button style={deletebtn} onClick={()=>deleteOrders(order.id)}>Delete</button>
            </div> 
            <p>
              Price: <strong>${order.price}</strong>
            </p>
          </div>
        ))
      )}
    </>
  );
} 