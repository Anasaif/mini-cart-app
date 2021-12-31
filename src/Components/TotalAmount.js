import React from "react";

export default function Footer(props) {
  return (
    <>
      <footer className="amount-options">
        <button
          className="reset"
          onClick={() => {
            props.resetQuantity();
          }}
        >
          Reset
        </button>
        <div className="totalamounts">${props.totalAmount}</div>

        <button className="pay-option">Pay Bill</button>
      </footer>
    </>
  );
}
