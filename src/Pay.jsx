import StripeCheckout from "react-stripe-checkout";

const Pay = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout>
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Pay now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;