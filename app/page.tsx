"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react";

const products = [
  { id: 1, name: "The Everyday Shirt", category: "ESSENTIALS / UNISEX", price: "KSh 4,800", tag: "BESTSELLER", image: "photo-1598033129183-c4f50c736f10", tone: "stone" },
  { id: 2, name: "Sunday Knit", category: "KNITWEAR / UNISEX", price: "KSh 6,200", tag: "NEW ARRIVAL", image: "photo-1618354691373-d851c5c3a990", tone: "olive" },
  { id: 3, name: "Market Tote", category: "OBJECTS / ACCESSORIES", price: "KSh 2,400", tag: "", image: "photo-1544816155-12df9643f363", tone: "clay" },
];

const imageUrl = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState("");

  const addToBag = (name: string) => {
    setCartCount((count) => count + 1);
    setNotice(name + " added to your bag");
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <main>
      <div className="announcement">
        <span>INDEPENDENT BY NATURE. AFRICAN BY DESIGN.</span>
        <span className="announcement-right">COMPLIMENTARY DELIVERY ON ORDERS OVER KSh 10,000 ↗</span>
      </div>

      <header className="header">
        <button className="icon-button mobile-menu" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
        <a className="wordmark" href="#" aria-label="Soko House home">SOKO<span>®</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#shop">SHOP ALL</a><a href="#collections">COLLECTIONS</a><a href="#story">OUR STORY</a>
        </nav>
        <div className="header-actions">
          <a className="account-link" href="#newsletter">JOIN THE HOUSE</a>
          <button className="bag-button" aria-label={`Shopping bag, ${cartCount} items`} onClick={() => setNotice(cartCount ? `Your bag has ${cartCount} item(s). Checkout coming soon.` : "Your bag is currently empty.")}>
            BAG <span className="bag-count">{cartCount}</span>
          </button>
        </div>
      </header>

      {menuOpen && <div className="mobile-overlay">
        <div className="mobile-overlay-top"><a className="wordmark" href="#">SOKO<span>®</span></a><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
        <nav><a onClick={() => setMenuOpen(false)} href="#shop">SHOP ALL <ArrowUpRight /></a><a onClick={() => setMenuOpen(false)} href="#collections">COLLECTIONS <ArrowUpRight /></a><a onClick={() => setMenuOpen(false)} href="#story">OUR STORY <ArrowUpRight /></a></nav>
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
            <a href="#shop" className="circle-link">DISCOVER<br />THE HOUSE <ArrowDown size={17} /></a>
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
          <a className="text-link" href="#newsletter">EXPLORE THE COLLECTION <ArrowUpRight size={16} /></a>
        </div>
        <div className="product-grid">
          {products.map((product, index) => <article className={`product-card product-${index + 1}`} key={product.id}>
            <div className={`product-image ${product.tone}`}>
              <img src={imageUrl(product.image, 1000)} alt={product.name} />
              {product.tag && <span className="product-tag">{product.tag}</span>}
              <button className="quick-add" onClick={() => addToBag(product.name)}>ADD TO BAG <span>+</span></button>
              <span className="product-number">0{index + 1}</span>
            </div>
            <div className="product-meta"><div><h3>{product.name}</h3><p>{product.category}</p></div><span className="price">{product.price}</span></div>
          </article>)}
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
          <a className="text-link" href="#newsletter">GET TO KNOW US <ArrowUpRight size={16} /></a>
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
        <div className="newsletter-right"><p>New drops, stories and things worth knowing.<br />Straight from the house.</p><form onSubmit={(e) => { e.preventDefault(); setNotice("Thanks for your interest. Newsletter signup will be connected soon."); }}><input type="email" required placeholder="YOUR EMAIL ADDRESS" aria-label="Your email address" /><button aria-label="Subscribe"><ArrowUpRight /></button></form><small>NO NOISE. JUST THE GOOD STUFF.</small></div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="footer-logo" href="#">SOKO<span>®</span></a><p>MADE OF HERE.<br />WORN EVERYWHERE.</p><a className="back-top" href="#">BACK TO TOP ↑</a></div>
        <div className="footer-bottom"><span>© SOKO HOUSE 2026</span><span>AN INDEPENDENT CONCEPT / NAIROBI, KE</span><div><a href="#shop">SHOP</a><a href="#story">ABOUT</a><a href="#newsletter">INSTAGRAM ↗</a></div></div>
      </footer>
      {notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={15} /></button></div>}
      <button className="floating-bag" onClick={() => setNotice(cartCount ? `Your bag has ${cartCount} item(s). Checkout coming soon.` : "Your bag is currently empty.")}><ShoppingBag size={17} /> <span>{cartCount}</span></button>
    </main>
  );
}