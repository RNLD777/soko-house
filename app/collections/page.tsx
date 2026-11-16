import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const groups = [
  {n:"01",title:"THE EVERYDAY EDIT",kind:"ESSENTIALS / UNISEX",desc:"The pieces that earn their place in your daily rotation.",img:"photo-1521572163474-6864f9cf17ab"},
  {n:"02",title:"SOFT STRUCTURES",kind:"KNITWEAR / LAYERS",desc:"Texture, comfort and shape without trying too hard.",img:"photo-1618354691373-d851c5c3a990"},
  {n:"03",title:"OBJECTS OF USE",kind:"BAGS / ACCESSORIES",desc:"Useful things, thoughtfully considered. Ready to go where you go.",img:"photo-1544816155-12df9643f363"},
  {n:"04",title:"THE WEEKEND SET",kind:"READY TO WEAR",desc:"Easy silhouettes for slower mornings and longer days.",img:"photo-1515886657613-9f3515b0c78f"}
];
const image=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;
export default function CollectionsPage(){return <main className="inner-page">
  <div className="inner-top"><Link href="/" className="wordmark">SOKO<span>®</span></Link><nav><Link href="/shop">SHOP ALL</Link><Link href="/collections">COLLECTIONS</Link><Link href="/story">OUR STORY</Link></nav><Link href="/" className="back-link"><ArrowLeft size={14}/> HOME</Link></div>
  <header className="inner-hero collections-hero"><p className="eyebrow">A WARDROBE, IN CHAPTERS / 002</p><h1>FIND YOUR<br/><em>ROTATION.</em></h1><p>Different moods. One point of view. Explore the Soko House collections.</p></header>
  <div className="collection-list">{groups.map(g=><Link href="/shop" className="collection-row" key={g.n}><div className="collection-photo"><img src={image(g.img)} alt={g.title}/></div><div className="collection-copy"><span className="eyebrow">{g.n} / {g.kind}</span><h2>{g.title}</h2><p>{g.desc}</p><span className="collection-cta">SHOP THE EDIT <ArrowUpRight size={17}/></span></div></Link>)}</div>
  <div className="inner-bottom"><Link href="/shop">VIEW ALL PRODUCTS <ArrowUpRight size={16}/></Link><Link href="/story">MEET THE HOUSE <ArrowUpRight size={16}/></Link></div>
  <footer className="inner-footer"><Link href="/">SOKO®</Link><span>AN INDEPENDENT CONCEPT / NAIROBI, KE</span><Link href="/">BACK HOME ↑</Link></footer>
</main>}
