"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const products = [
  ["The Everyday Shirt","ESSENTIALS / UNISEX","KSh 4,800","photo-1598033129183-c4f50c736f10"],
  ["Sunday Knit","KNITWEAR / UNISEX","KSh 6,200","photo-1618354691373-d851c5c3a990"],
  ["Market Tote","OBJECTS / ACCESSORIES","KSh 2,400","photo-1544816155-12df9643f363"],
  ["The Weekend Edit","READY TO WEAR / WOMENS","KSh 5,600","photo-1515886657613-9f3515b0c78f"],
  ["Everyday Layers","ESSENTIALS / UNISEX","KSh 3,900","photo-1521572163474-6864f9cf17ab"],
  ["The Sunday Carryall","OBJECTS / ACCESSORIES","KSh 3,200","photo-1483985988355-763728e1935b"],
  ["Coastline Linen","READY TO WEAR / UNISEX","KSh 5,900","photo-1591047139829-d91aecb6caea"],
  ["The Form Trouser","ESSENTIALS / UNISEX","KSh 4,500","photo-1509551388413-e18d0ac5d495"],
  ["Studio Crossbody","OBJECTS / ACCESSORIES","KSh 2,800","photo-1553062407-98eeb64c6a62"],
  ["Sunday Uniform","READY TO WEAR / WOMENS","KSh 6,400","photo-1485230895905-ec40ba36b9bc"],
  ["Everyday Canvas","OBJECTS / ACCESSORIES","KSh 1,900","photo-1544816155-12df9643f363"],
  ["The Soft Structure","KNITWEAR / UNISEX","KSh 5,700","photo-1618354691373-d851c5c3a990"]
];
const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export default function ShopPage() {
  return <main className="inner-page">
    <div className="inner-top"><Link href="/" className="wordmark">SOKO<span>®</span></Link><nav><Link href="/shop">SHOP ALL</Link><Link href="/collections">COLLECTIONS</Link><Link href="/story">OUR STORY</Link></nav><Link href="/" className="back-link"><ArrowLeft size={14}/> HOME</Link></div>
    <header className="inner-hero shop-hero"><p className="eyebrow">THE SOKO HOUSE SELECTION / 001</p><h1>THE GOOD<br/><em>STUFF.</em></h1><p>Considered pieces for everyday movement. Made of here, worn everywhere.</p></header>
    <div className="catalog-head"><span>ALL PIECES</span><span>12 ITEMS / CONCEPT COLLECTION</span></div>
    <div className="catalog-grid">{products.map((p,i)=><article className="catalog-card" key={p[0]}><div className="catalog-image"><img src={image(p[3])} alt={p[0]} loading="lazy"/><span>0{i+1}</span></div><div className="product-meta"><div><h3>{p[0]}</h3><p>{p[1]}</p></div><span className="price">{p[2]}</span></div></article>)}</div>
    <div className="inner-bottom"><Link href="/collections">EXPLORE COLLECTIONS <ArrowUpRight size={16}/></Link><Link href="/story">THE STORY BEHIND THE HOUSE <ArrowUpRight size={16}/></Link></div>
    <footer className="inner-footer"><Link href="/">SOKO®</Link><span>AN INDEPENDENT CONCEPT / NAIROBI, KE</span><Link href="/">BACK HOME ↑</Link></footer>
  </main>;
}
