import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [orderComplete, setOrderComplete] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity()) {
      setOrderComplete(true);
    }
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 text-center" style={{backgroundColor: 'var(--bg-light)', borderRadius: '15px'}}>
            <i className="fa fa-shopping-cart fa-5x mb-4" style={{color: 'var(--accent-green)'}}></i>
            <h4 className="p-3 display-5" style={{color: 'var(--primary-green)'}}>No Items in Cart</h4>
            <p className="lead text-muted mb-4">Your cart is empty. Add plants to proceed to checkout!</p>
            <Link to="/product" className="btn btn-nature">
              <i className="fa fa-leaf me-2"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4 card-custom">
                <div className="card-header py-3" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%)', color: 'white'}}>
                  <h5 className="mb-0"><i className="fa fa-receipt me-2"></i>Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>₹{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>₹{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4 card-custom">
                <div className="card-header py-3" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%)', color: 'white'}}>
                  <h4 className="mb-0"><i className="fa fa-address-card me-2"></i>Billing address</h4>
                </div>
                <div className="card-body">
                  <form className={`needs-validation${validated ? " was-validated" : ""}`} noValidate onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <br />
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Punjab</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder="380001"
                          pattern="[0-9]{6}"
                          required
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder="1234 5678 9012 3456"
                          inputMode="numeric"
                          pattern="[0-9 ]{13,19}"
                          required
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder="MM/YY"
                          pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder="123"
                          inputMode="numeric"
                          pattern="[0-9]{3,4}"
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-nature"
                      type="submit"
                    >
                      <i className="fa fa-check-circle me-2"></i>Place order securely
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const OrderComplete = () => (
    <div className="container py-5">
      <div className="checkout-success text-center">
        <div className="checkout-success-icon" aria-hidden="true">
          <i className="fa fa-check"></i>
        </div>
        <p className="text-uppercase small fw-bold mb-2" style={{ color: "var(--accent-green)" }}>Order confirmed</p>
        <h2 style={{ color: "var(--primary-green)" }}>Payment successful</h2>
        <p className="text-muted mb-4">Thank you for choosing GrowGreenHub. Your plants are being prepared for delivery.</p>
        <Link to="/product" className="btn btn-nature">
          <i className="fa fa-leaf me-2"></i>Continue shopping
        </Link>
      </div>
    </div>
  );
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center page-header" style={{color: 'var(--primary-green)'}}>
          <i className="fa fa-credit-card me-3"></i>Checkout
        </h1>
        <p className="text-center text-muted">Complete your order details</p>
        <hr style={{borderColor: 'var(--light-green)', borderWidth: '2px'}} />
        {orderComplete ? <OrderComplete /> : state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
