"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react";

const bestSellers = [
  { id: 1, name: "The Everyday Shirt", category: "ESSENTIALS / UNISEX", price: "KSh 4,800", tag: "BESTSELLER", image: "photo-1598033129183-c4f50c736f10", tone: "stone" },
  { id: 2, name: "Sunday Knit", category: "KNITWEAR / UNISEX", price: "KSh 6,200", tag: "BESTSELLER", image: "photo-1618354691373-d851c5c3a990", tone: "olive" },
  { id: 3, name: "Market Tote", category: "OBJECTS / ACCESSORIES", price: "KSh 2,400", tag: "BESTSELLER", image: "photo-1544816155-12df9643f363", tone: "clay" },
];

const movingProducts = [
  { id: 4, name: "The Weekend Edit", category: "READY TO WEAR / WOMENS", price: "KSh 5,600", tag: "IN THE ROTATION", image: "photo-1515886657613-9f3515b0c78f", tone: "stone" },
  { id: 5, name: "Everyday Layers", category: "ESSENTIALS / UNISEX", price: "KSh 3,900", tag: "JUST IN", image: "photo-1521572163474-6864f9cf17ab", tone: "olive" },
  { id: 6, name: "The Sunday Carryall", category: "OBJECTS / ACCESSORIES", price: "KSh 3,200", tag: "HOUSE FAVOURITE", image: "photo-1483985988355-763728e1935b", tone: "clay" },
  { id: 7, name: "Coastline Linen", category: "READY TO WEAR / UNISEX", price: "KSh 5,900", tag: "JUST IN", image: "photo-1591047139829-d91aecb6caea", tone: "stone" },
  { id: 8, name: "The Form Trouser", category: "ESSENTIALS / UNISEX", price: "KSh 4,500", tag: "HOUSE PICK", image: "photo-1509551388413-e18d0ac5d495", tone: "olive" },
  { id: 9, name: "Studio Crossbody", category: "OBJECTS / ACCESSORIES", price: "KSh 2,800", tag: "IN THE ROTATION", image: "photo-1553062407-98eeb64c6a62", tone: "clay" },
  { id: 10, name: "Sunday Uniform", category: "READY TO WEAR / WOMENS", price: "KSh 6,400", tag: "NEW SEASON", image: "photo-1485230895905-ec40ba36b9bc", tone: "stone" },
  { id: 11, name: "Everyday Canvas", category: "OBJECTS / ACCESSORIES", price: "KSh 1,900", tag: "HOUSE FAVOURITE", image: "photo-1544816155-12df9643f363", tone: "olive" },
  { id: 12, name: "The Soft Structure", category: "KNITWEAR / UNISEX", price: "KSh 5,700", tag: "JUST IN", image: "photo-1618354691373-d851c5c3a990", tone: "clay" },
];

const imageUrl = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);\n  const beltRef = useRef<HTMLDivElement>(null);
  const [cartItems, setCartItems] = useState<{ name: string; price: number; quantity: number }[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const addToBag = (name: string, price: number) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.name === name);
      return existing
        ? items.map((item) => item.name === name ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { name, price, quantity: 1 }];
    });
    setNotice(name + " added to your bag");
  };

  const changeQuantity = (name: string, amount: number) => {
    setCartItems((items) => items
      .map((item) => item.name === name ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0));
  };

  return (
    <main id="top">
      <div className="announcement">
        <span>INDEPENDENT BY NATURE. AFRICAN BY DESIGN.</span>
        <span className="announcement-right">COMPLIMENTARY DELIVERY ON ORDERS OVER KSh 10,000 ↗</span>
      </div>

      <header className="header">
        <button className="icon-button mobile-menu" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
        <a className="wordmark" href="/" aria-label="Soko House home">SOKO<span>®</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/shop">SHOP ALL</a><a href="/collections">COLLECTIONS</a><a href="/story">OUR STORY</a>
        </nav>
        <div className="header-actions">
          <a className="account-link" href="#newsletter">JOIN THE HOUSE</a>
          <button className="bag-button" aria-label={`Shopping bag, ${cartCount} items`} onClick={() => setBagOpen(true)}>
            BAG <span className="bag-count">{cartCount}</span>
          </button>
        </div>
      </header>

      {menuOpen && <div className="mobile-overlay">
        <div className="mobile-overlay-top"><a className="wordmark" href="/">SOKO<span>®</span></a><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
        <nav><a onClick={() => setMenuOpen(false)} href="/shop">SHOP ALL <ArrowUpRight /></a><a onClick={() => setMenuOpen(false)} href="/collections">COLLECTIONS <ArrowUpRight /></a><a onClick={() => setMenuOpen(false)} href="/story">OUR STORY <ArrowUpRight /></a></nav>
        <p>MADE OF HERE. WORN EVERYWHERE.</p>
      </div>}

      <section className="hero">
        <div className="hero-image" style={{ backgroundImage: `url("${imageUrl("photo-1539109136881-3be0616acf4b", 2200)}")` }} />
        <div className="hero-shade" />
        <div className="hero-topline"><span>ISSUE NO. 001 — NAIROBI, KE</span><span>EST. MMXXVI</span></div>
        <div className="hero-content">
          <p className="eyebrow light">A DIFFERENT KIND OF EVERYDAY</p>
          <h1>MADE OF<br /><span>HERE.</span></h1>
          <div className="hero-bottom">
            <p>Rooted in where we're from.<br />Made for wherever we're going.</p>
            <a href="/shop" className="circle-link">DISCOVER<br />THE HOUSE <ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>03</span></div>
        <div className="hero-stamp">CULTURE<br />IN MOTION<br /><span>↗</span></div>
      </section>

      <section className="intro-strip" id="collections">
        <p className="eyebrow">NOT JUST WHAT YOU WEAR.</p>
        <p className="intro-statement">A point of view.<br /><span>A way of being.</span></p>
        <div className="intro-foot"><span>DESIGNED WITH INTENTION<br />MADE TO BE LIVED IN.</span><ArrowDown size={19} /></div>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-heading">
          <div><p className="eyebrow">01 / THE ROTATION</p><h2>GOOD THINGS.<br /><span>ON REPEAT.</span></h2></div>
          <a className="text-link" href="/shop">EXPLORE THE COLLECTION <ArrowUpRight size={16} /></a>
        </div>
        <div className="bestseller-heading"><span>THE HOUSE PICKS</span><span>01 — 03 / BESTSELLERS</span></div>
        <div className="product-grid">
          {bestSellers.map((product, index) => <article className={`product-card product-${index + 1}`} key={product.id}>
            <div className={`product-image ${product.tone}`}>
              <img src={imageUrl(product.image, 1000)} alt={product.name} />
              <span className="product-tag">BESTSELLER</span>
              <button className="quick-add" onClick={() => addToBag(product.name, Number(product.price.replace(/[^0-9]/g, "")))}>ADD TO BAG <span>+</span></button>
              <span className="product-number">0{index + 1}</span>
            </div>
            <div className="product-meta"><div><h3>{product.name}</h3><p>{product.category}</p></div><span className="price">{product.price}</span></div>
          </article>)}
        </div>
        <div className="belt-heading"><span>MORE FROM THE HOUSE</span><span>THE ROTATION NEVER STOPS ↗</span></div>
        <div className="product-belt" aria-label="More Soko House products">
          <div className="product-belt-track">
            {movingProducts.map((product, index) => <article className="belt-card" key={product.id}>
              <div className="belt-image">
                <img src={imageUrl(product.image, 900)} alt={product.name} loading="lazy" />
                <span className="product-tag">{product.tag}</span>
                <button className="quick-add" onClick={() => addToBag(product.name, Number(product.price.replace(/[^0-9]/g, "")))}>ADD TO BAG <span>+</span></button>
              </div>
              <div className="product-meta"><div><h3>{product.name}</h3><p>{product.category}</p></div><span className="price">{product.price}</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="manifesto" id="story">
        <div className="manifesto-image" style={{ backgroundImage: `url("${imageUrl("photo-1529139574466-a303027c1d8b", 1600)}")` }}>
          <span className="image-caption">FIELD NOTES / NAIROBI, 001</span>
        </div>
        <div className="manifesto-copy">
          <p className="eyebrow">02 / WHERE WE STAND</p>
          <p className="manifesto-big">THE WORLD<br />IS OURS TO<br /><span>REIMAGINE.</span></p>
          <p className="manifesto-body">We believe the everyday deserves more thought. Soko House brings together considered design, contemporary African perspectives and pieces made to move with you.</p>
          <a className="text-link" href="/story">GET TO KNOW US <ArrowUpRight size={16} /></a>
          <span className="manifesto-mark">S/01</span>
        </div>
      </section>

      <section className="quote-section">
        <p className="eyebrow">A NOTE FROM THE HOUSE</p>
        <p className="quote">“Style isn't about<br />where you <em>fit in.</em><br />It's what you bring<br />into the room.”</p>
        <span className="quote-credit">SOKO HOUSE — ON PERSONAL STYLE</span>
      </section>

      <section className="newsletter" id="newsletter">
        <div><p className="eyebrow light">03 / STAY IN THE LOOP</p><h2>GOOD THINGS<br />TRAVEL <span>FAST.</span></h2></div>
        <div className="newsletter-right"><p>New drops, stories and things worth knowing.<br />Straight from the house.</p><form onSubmit={(e) => { e.preventDefault(); setNotice("Newsletter signup is a demo only. No email has been sent or stored."); }}><input type="email" required placeholder="YOUR EMAIL ADDRESS" aria-label="Your email address" /><button aria-label="Subscribe"><ArrowUpRight /></button></form><small>NO NOISE. JUST THE GOOD STUFF.</small></div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="footer-logo" href="/">SOKO<span>®</span></a><p>MADE OF HERE.<br />WORN EVERYWHERE.</p><a className="back-top" href="#top">BACK TO TOP ↑</a></div>
        <div className="footer-bottom"><span>© SOKO HOUSE 2026</span><span>AN INDEPENDENT CONCEPT / NAIROBI, KE</span><div><a href="/shop">SHOP</a><a href="/collections">COLLECTIONS</a><a href="/story">OUR STORY ↗</a></div></div>
      </footer>
      {bagOpen && <div className="bag-backdrop" onClick={() => setBagOpen(false)}>
        <section className="bag-drawer" role="dialog" aria-modal="true" aria-labelledby="bag-title" onClick={(event) => event.stopPropagation()}>
          <div className="bag-drawer-head"><div><p className="eyebrow">YOUR SELECTION</p><h2 id="bag-title">THE BAG ({cartCount})</h2></div><button className="icon-button" onClick={() => setBagOpen(false)} aria-label="Close shopping bag"><X /></button></div>
          {cartItems.length === 0 ? <div className="bag-empty"><p>Your bag is waiting for something good.</p><button className="text-link" onClick={() => { setBagOpen(false); document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }}>EXPLORE THE HOUSE <ArrowUpRight size={16} /></button></div> : <>
            <div className="bag-items">{cartItems.map((item) => <div className="bag-item" key={item.name}>
              <div><h3>{item.name}</h3><p>KSh {item.price.toLocaleString("en-KE")}</p><div className="quantity-control"><button onClick={() => changeQuantity(item.name, -1)} aria-label={`Remove one ${item.name}`}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.name, 1)} aria-label={`Add one ${item.name}`}>+</button></div></div>
              <strong>KSh {(item.price * item.quantity).toLocaleString("en-KE")}</strong>
            </div>)}</div>
            <div className="bag-summary"><div><span>SUBTOTAL</span><strong>KSh {cartTotal.toLocaleString("en-KE")}</strong></div><p>Delivery and payment are not connected in this concept store.</p><button className="checkout-demo" disabled>CHECKOUT NOT AVAILABLE IN DEMO</button><button className="clear-bag" onClick={() => setCartItems([])}>CLEAR BAG</button></div>
          </>}
        </section>
      </div>}
      {notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={15} /></button></div>}
      <button className="floating-bag" onClick={() => setBagOpen(true)}><ShoppingBag size={17} /> <span>{cartCount}</span></button>
    </main>
  );
}