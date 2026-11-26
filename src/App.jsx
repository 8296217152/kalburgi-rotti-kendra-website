
import { useState } from "react";
import "./App.css";

import foodHome from "./assets/food-Home.png";
import menuBanner from "./assets/food_menu.png";


import joladaRotti from "./assets/jolada-rotti.png";
import sajjeRotti from "./assets/sajje-rotti.png";
import holgi from "./assets/holgi.png";
import shengaChutney from "./assets/shenga-chutney.png";
import agasiChutney from "./assets/agasi-chutney.png";

import ownerPhoto from "./assets/owner.png";



const products = [
  {
    id: 1,
    name: "Jolada Rotti",
    kn: "ಜೋಳದ ರೊಟ್ಟಿ",
    price: 7,
    unit: "1 Piece",
    image: joladaRotti,
    emoji: "🫓"
  },


  {
  id: 2,
  name: "Sajje Rotti",
  kn: "ಸಜ್ಜೆ ರೊಟ್ಟಿ",
  price: 8,
  unit: "1 Piece",
  image: sajjeRotti,
  emoji: "🫓"
},


  {
  id: 3,
  name: "Holgi",
  kn: "ಹೋಳಿಗೆ",
  price: 25,
  unit: "1 Piece",
  image: holgi,
  emoji: "🥞"
},


  {
  id: 4,
  name: "Shenga Chutney",
  kn: "ಶೇಂಗಾ ಚಟ್ನಿ",
  price: 59,
  unit: "100 Grams",
  image: shengaChutney,
  emoji: "🥣"
},



  {
  id: 5,
  name: "Agasi Chutney",
  kn: "ಅಗಸಿ ಚಟ್ನಿ",
  price: 49,
  unit: "100 Grams",
  image: agasiChutney,
  emoji: "🥣"
},

];




const content = {
  en: {
    home: "Home",
    menu: "Our Menu",
    about: "About Us",
    contact: "Contact",
    heroTag: "AUTHENTIC NORTH KARNATAKA FOOD",
    heroTitle: "The Taste of North Karnataka, Delivered to Your Doorstep!",
    heroDescription: "Enjoy traditional Jolada Rotti, Sajje Rotti, Holgi and homemade chutneys.",
    orderNow: "Explore Our Menu",
    deliveryText: "Home Delivery Available",
    menuTag: "MADE WITH TRADITION",
    menuTitle: "Our Special Menu",
    menuDescription: "Discover the authentic flavours of North Karnataka.",
    add: "Add to Cart",
    aboutTitle: "Our Traditional Taste",
    aboutDescription: "Kalburgi Rotti Kendra brings you the traditional taste of North Karnataka. Fresh food, authentic flavours and doorstep delivery.",
    deliveryTitle: "We Deliver to Your Doorstep",
    deliveryDescription: "Order your favourite food and enjoy it at home.",
    contactTitle: "Have Questions?",
    contactDescription: "We are happy to serve you.",
    footer: "Fresh Food • Traditional Taste • Doorstep Delivery",
  },


  kn: {
    home: "ಮುಖಪುಟ",
    menu: "ನಮ್ಮ ಮೆನು",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    contact: "ಸಂಪರ್ಕ",
    heroTag: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ",
    heroTitle: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಅಪ್ಪಟ ರುಚಿ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ!",
    heroDescription: "ಜೋಳದ ರೊಟ್ಟಿ, ಸಜ್ಜೆ ರೊಟ್ಟಿ, ಹೋಳಿಗೆ ಮತ್ತು ಮನೆಯ ರುಚಿಯ ಚಟ್ನಿಗಳನ್ನು ಸವಿಯಿರಿ.",
    orderNow: "ನಮ್ಮ ಮೆನು ನೋಡಿ",
    deliveryText: "ಮನೆ ಬಾಗಿಲಿಗೆ ಡೆಲಿವರಿ",
    menuTag: "ಸಂಪ್ರದಾಯದ ರುಚಿ",
    menuTitle: "ನಮ್ಮ ವಿಶೇಷ ಮೆನು",
    menuDescription: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಅಪ್ಪಟ ರುಚಿಯನ್ನು ಸವಿಯಿರಿ.",
    add: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
    aboutTitle: "ನಮ್ಮ ಸಾಂಪ್ರದಾಯಿಕ ರುಚಿ",
    aboutDescription: "ಕಲಬುರಗಿ ರೊಟ್ಟಿ ಕೇಂದ್ರವು ಉತ್ತರ ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ರುಚಿಯನ್ನು ನಿಮ್ಮ ಮನೆಗೆ ತರುತ್ತದೆ.",
    deliveryTitle: "ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ಡೆಲಿವರಿ",
    deliveryDescription: "ನಿಮ್ಮ ನೆಚ್ಚಿನ ಆಹಾರವನ್ನು ಆರ್ಡರ್ ಮಾಡಿ ಮನೆಯಲ್ಲೇ ಸವಿಯಿರಿ.",
    contactTitle: "ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?",
    contactDescription: "ನಿಮಗೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ.",
    footer: "ತಾಜಾ ಆಹಾರ • ಸಾಂಪ್ರದಾಯಿಕ ರುಚಿ • ಮನೆ ಬಾಗಿಲಿಗೆ ಡೆಲಿವರಿ",
  },
};




function App() {
  const [language, setLanguage] = useState("en");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notice, setNotice] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
  });

  const [customerLocation, setCustomerLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState("Location not selected");
  const [locationLoading, setLocationLoading] = useState(false);

  const t = content[language];

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function addToCart(product) {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });

    setNotice(`${product.name} added to cart`);
    setTimeout(() => setNotice(""), 2000);
  }

  function updateQuantity(id, amount) {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCart((previous) => previous.filter((item) => item.id !== id));
  }

  function updateCustomer(event) {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function getCustomerLocation() {
    if (!navigator.geolocation) {
      setLocationStatus("GPS is not supported by this browser.");
      return;
    }

    setLocationLoading(true);
    setLocationStatus("Getting your location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };

        setCustomerLocation(location);
        setLocationStatus("Location captured successfully!");
        setLocationLoading(false);
      },
      (error) => {
        setLocationLoading(false);

        if (error.code === 1) {
          setLocationStatus(
            "Location permission denied. Please allow location access."
          );
        } else if (error.code === 2) {
          setLocationStatus("Unable to detect your location.");
        } else {
          setLocationStatus("Location request timed out. Try again.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  }

  function placeOrder(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const phone = customer.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!customerLocation) {
      alert("Please select your current GPS location.");
      return;
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const deliveryDate = tomorrow.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const orderItems = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = Rs. ${item.price * item.quantity}`
      )
      .join("\n");

    const locationLink =
      `https://www.google.com/maps?q=${customerLocation.latitude},${customerLocation.longitude}`;

    const message = `
*KALBURGI ROTTI KENDRA*
Traditional Taste | Fresh Preparation | Home Delivery

================================

*NEW ORDER*

*CUSTOMER DETAILS*
Name: ${customer.name}
Mobile: ${customer.phone}

*DELIVERY INFORMATION*
Address: ${customer.address}
Nearby Landmark: ${customer.landmark || "Not provided"}

Customer Location:
${locationLink}

================================

*ORDER SUMMARY*

${orderItems}

================================

*PAYMENT SUMMARY*

Subtotal: Rs. ${subtotal}
Delivery Charges: Pending confirmation
Final Amount: Pending confirmation

*PAYMENT PREFERENCE*
${payment === "UPI" ? "UPI (Google Pay / PhonePe)" : "Cash on Delivery"}

================================

*REQUESTED DELIVERY DATE*
${deliveryDate}

*ORDER CONFIRMATION*

Please review the delivery address and location.

Kindly confirm:
1. Delivery availability
2. Delivery charges
3. Final payable amount

${
  payment === "UPI"
    ? "The customer prefers UPI payment. Please share payment details after confirming the final amount."
    : "The customer prefers Cash on Delivery."
}

*ORDER STATUS: AWAITING CONFIRMATION*

Thank you!

KALBURGI ROTTI KENDRA
`;

    const whatsappURL =
      `https://wa.me/918792241172?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }



  return (<div className="website">

      {/* NAVBAR */}

      
{/* NAVBAR - LOGO ONLY */}
<header className="navbar">
  <a href="#home" className="logo">
    <span className="logo-icon">🌾</span>
    <div className="logo-text">
      <h2>KALBURGI</h2>
      <span>ROTTI KENDRA</span>
    </div>
  </a>
</header>


{/* STICKY NAVIGATION */}
<div className="sticky-nav-row">

  <div className="nav-right">

    <a
      href="https://www.instagram.com/kedar_harasoor/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-instagram"
      aria-label="Instagram"
    >
      <svg
        viewBox="0 0 24 24"
        width="23"
        height="23"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>

    <a
      href="https://wa.me/918792241172"
      target="_blank"
      rel="noopener noreferrer"
      className="social-whatsapp"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor">
        <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.41 1.27 4.85L2 22l5.28-1.27A9.94 9.94 0 0 0 12.04 22C17.56 22 22.05 17.51 22.05 12S17.56 2 12.04 2Zm0 18.2c-1.49 0-2.95-.4-4.23-1.16l-.3-.18-3.13.75.76-3.05-.2-.31A8.18 8.18 0 1 1 12.04 20.2Zm4.49-6.13c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.28 3.78.6.26 1.07.42 1.43.54.6.19 1.15.17 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.3Z" />
      </svg>
    </a>

    <select
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
      aria-label="Choose language"
    >
      <option value="en">English</option>
      <option value="kn">ಕನ್ನಡ</option>
    </select>

    <button
      className="cart-button"
      onClick={() => setShowCart(true)}
    >
      🛒 Cart ({cartCount})
    </button>

  </div>

  <nav className="nav-links">
    <a href="#home">{t.home}</a>
    <a href="#menu">{t.menu}</a>
    <a href="#about">{t.about}</a>
    <a href="#contact">{t.contact}</a>
  </nav>

</div>



    
      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-label">🌿 {t.heroTag}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroDescription}</p>

            <div className="hero-actions">
              <a href="#menu" className="primary-button">
                {t.orderNow} →
              </a>
              <span className="delivery-note">🛵 {t.deliveryText}</span>
            </div>

            <div className="hero-features">
              <span>✓ Traditional Food</span>
              <span>✓ Fresh Preparation</span>
              <span>✓ Home Delivery</span>
            </div>
          </div>



         <div className="hero-food">
  <img
    src={foodHome}
    alt="Traditional Jolada Rotti, Sajje Rotti, Holgi and chutneys"
    className="hero-collage"
  />
</div>



        </section>

        {/* DELIVERY INFORMATION */}
        <section className="delivery-strip">
          <div>🛵 <strong>Home Delivery Only</strong></div>
          <div>📅 <strong>Next-Day Delivery</strong></div>
          <div>📍 <strong>Location-Based Delivery Charges</strong></div>
          <div>💳 <strong>COD + UPI</strong></div>
        </section>

        {/* MENU */}
        <section className="menu-section" id="menu">
          <div className="section-heading">
            <span>{t.menuTag}</span>
            <h2>{t.menuTitle}</h2>
            <p>{t.menuDescription}</p>
          </div>




<div className="food-collage-section">
  <img
    src={menuBanner}
    alt="Traditional North Karnataka food"
    className="food-collage-image"
  />
</div>







          <div className="product-grid">
  {products.map((product) => (
    <article className="product-card" key={product.id}>

      <div className="product-visual">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        ) : (
          <span className="product-emoji">{product.emoji}</span>
        )}

        <span className="product-category">
          {product.id <= 2
            ? "Traditional Rotti"
            : product.id === 3
            ? "Traditional Sweets"
            : "Chutney"}
        </span>
      </div>

      <div className="product-details">
        <h3>
          {language === "en" ? product.name : product.kn}
        </h3>
        <p>{product.unit}</p>

        <div className="product-bottom">
          <strong>₹{product.price}</strong>
          <button
            className="add-button"
            onClick={() => addToCart(product)}
          >
            + {t.add}
          </button>
        </div>
      </div>

    </article>
  ))}
</div>




          {notice && <div className="cart-notice">✓ {notice}</div>}
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
         <div className="about-art">
  <img
    src={ownerPhoto}
    alt="Owner of Kalburgi Rotti Kendra"
    className="owner-circle-photo"
  />
</div>

          

          <div className="about-content">
            <span className="section-tag">KALBURGI ROTTI KENDRA</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutDescription}</p>
          </div>
        </section>

        {/* DELIVERY */}
        <section className="delivery-section">
          <div className="delivery-icon">🛵</div>
          <h2>{t.deliveryTitle}</h2>
          <p>{t.deliveryDescription}</p>
          <p>Place your order today and receive your food tomorrow.</p>
          <a href="#menu" className="primary-button">
            {t.orderNow} →
          </a>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <span className="section-tag">WE ARE HERE FOR YOU</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactDescription}</p>

          <div className="contact-links">
            <a
              href={`https://wa.me/918792241172?text=${encodeURIComponent(
                "Hello Kalburgi Rotti Kendra! I would like to enquire about your food items and home delivery."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
              <span>+91 8792241172</span>
              
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <span>🌾</span>
          <h2>KALBURGI ROTTI KENDRA</h2>
        </div>

        <p>{t.footer}</p>
        <small>© 2026 Kalburgi Rotti Kendra. All rights reserved.</small>
      </footer>

      {/* FLOATING WHATSAPP ENQUIRY */}
      <a
        href={`https://wa.me/918792241172?text=${encodeURIComponent(
          `Hello Kalburgi Rotti Kendra! ${String.fromCodePoint(0x1F44B)}\n\nI would like to enquire about your food items, prices and home delivery.\n\nPlease share the details. Thank you!`
        )}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send WhatsApp enquiry"
      >
        ☎ WhatsApp
      </a>

      {/* SHOPPING CART AND CHECKOUT */}
      {showCart && (
        <div
          className="cart-overlay"
          onClick={() => setShowCart(false)}
        >
          <section
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart and checkout"
          >
            <div className="cart-drawer-header">
              <div>
                <span className="section-tag">KALBURGI ROTTI KENDRA</span>
                <h2>Your Cart ({cartCount})</h2>
              </div>

              <button
                className="close-cart"
                onClick={() => setShowCart(false)}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>🛒</span>
                <h3>Your cart is empty</h3>
                <p>Add your favourite food from our menu.</p>
                <button
                  className="checkout-button"
                  onClick={() => setShowCart(false)}
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                <div className="cart-products">
                  {cart.map((item) => (
                    <div className="cart-product" key={item.id}>
                      <div className="cart-product-icon">{item.emoji}</div>

                      <div className="cart-product-info">
                        <h4>
                          {language === "en" ? item.name : item.kn}
                        </h4>
                        <p>₹{item.price} / {item.unit}</p>

                        <div className="quantity-controls">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="cart-product-price">
                        <strong>₹{item.price * item.quantity}</strong>
                        <button
                          className="remove-item"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
<form className="checkout-form" onSubmit={placeOrder}>
                  <h3>Delivery Details</h3>

                  <label htmlFor="customer-name">Customer Name *</label>
                  <input
                    id="customer-name"
                    name="name"
                    value={customer.name}
                    onChange={updateCustomer}
                    placeholder="Enter your full name"
                    required
                  />

                  <label htmlFor="customer-phone">Mobile Number *</label>
                  <input
                    id="customer-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={customer.phone}
                    onChange={updateCustomer}
                    placeholder="10-digit mobile number"
                    required
                  />

                  <label htmlFor="customer-address">Delivery Address *</label>
                  <textarea
                    id="customer-address"
                    name="address"
                    value={customer.address}
                    onChange={updateCustomer}
                    placeholder="House number, street, area and PIN code"
                    rows={3}
                    required
                  />

                  {/* GPS LOCATION */}
                  <div className="location-box">
                    <h3>📍 Delivery Location</h3>

                    <p>
                      Select your current location so our team can check
                      the delivery location and availability.
                    </p>

                    <button
                      type="button"
                      className="location-button"
                      onClick={getCustomerLocation}
                      disabled={locationLoading}
                    >
                      {locationLoading
                        ? "Detecting Location..."
                        : "📍 Use My Current Location"}
                    </button>

                    <p className="location-status">
                      {locationStatus}
                    </p>

                    {customerLocation && (
                      <div className="location-details">
                        {/* <p>
                          Latitude: {customerLocation.latitude.toFixed(6)}
                        </p>

                        <p>
                          Longitude: {customerLocation.longitude.toFixed(6)}
                        </p>

                        <p>
                          GPS accuracy: approximately{" "}
                          {Math.round(customerLocation.accuracy)} metres
                        </p> */}

                        <a
                          href={`https://www.google.com/maps?q=${customerLocation.latitude},${customerLocation.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View selected location on Google Maps
                        </a>
                      </div>
                    )}
                  </div>

                  <label htmlFor="customer-landmark">Nearby Landmark</label>
                  <input
                    id="customer-landmark"
                    name="landmark"
                    value={customer.landmark}
                    onChange={updateCustomer}
                    placeholder="Nearby school, shop, temple..."
                  />

                  {/* DELIVERY INFORMATION */}
                  <div className="delivery-confirmation-box">
                    <h3>🛵 Delivery Information</h3>
                    <p>
                      Your order will be reviewed by our team. Delivery charges
                      will be confirmed based on your location.
                    </p>
                    <p>
                      Your order will be prepared after confirmation and
                      delivered the next day.
                    </p>
                  </div>

                  {/* PAYMENT OPTIONS */}
                  <h3>Payment Method</h3>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      checked={payment === "Cash on Delivery"}
                      onChange={(event) => setPayment(event.target.value)}
                    />
                    Cash on Delivery
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="UPI"
                      checked={payment === "UPI"}
                      onChange={(event) => setPayment(event.target.value)}
                    />
                    UPI Payment (Google Pay / PhonePe)
                  </label>

                  {/* BILL SUMMARY */}
                  <div className="order-bill">
                    <div>
                      <span>Food Subtotal</span>
                      <strong>₹{subtotal}</strong>
                    </div>

                    <div>
                      <span>Delivery Charge</span>
                      <strong>To be confirmed</strong>
                    </div>

                    <div className="bill-total">
                      <span>Final Amount</span>
                      <strong>To be confirmed</strong>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="checkout-button"
                  >
                    Place Order via WhatsApp
                  </button>

                  <p className="checkout-hint">
                    Your order details will open in WhatsApp for confirmation.
                    UPI payment will be arranged after the hotel confirms
                    the order.
                  </p>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;