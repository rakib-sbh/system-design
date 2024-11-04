import Steeper from "./components/stepper/Stepper";

const checkoutSteps = [
  {
    name: "Customer Info",
    component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    component: () => <div>Your order has been delivered</div>,
  },
];

const App = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <Steeper stepsConfig={checkoutSteps} />
    </div>
  );
};

export default App;
