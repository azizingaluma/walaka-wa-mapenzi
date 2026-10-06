"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";
import { C } from "@/lib/content";
const ease=[.22,1,.36,1] as const;
export const Stage=({children}:{children:ReactNode})=>
 <motion.main initial={{opacity:0,filter:"blur(8px)"}} animate={{opacity:1,filter:"blur(0px)"}} exit={{opacity:0,filter:"blur(8px)"}} transition={{duration:.9,ease}}
  className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-16 text-center">{children}</motion.main>;
export const Btn=({onClick,children,ink}:{onClick:()=>void;children:ReactNode;ink?:boolean})=>
 <motion.button whileTap={{scale:.97}} whileHover={{y:-2}} onClick={onClick} className={`btn ${ink?"btn-ink":""} uppercase`}>{children}</motion.button>;
const Reveal=({lines}:{lines:string[]})=>
 <>{lines.map((l,i)=><motion.p key={i} initial={{opacity:0,filter:"blur(6px)"}} whileInView={{opacity:1,filter:"blur(0px)"}} viewport={{once:true}} transition={{delay:i*.35,duration:1.1}}>{l}</motion.p>)}</>;

export function Intro({next}:{next:()=>void}){
 const [ready,setReady]=useState(false); const [open,setOpen]=useState(false);
 return <Stage>
  <motion.div onAnimationComplete={()=>setReady(true)} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
   <p className="font-serif text-xl tracking-[.4em] text-cream/80 sm:text-2xl">BETWEEN US</p>
   <h1 className="mt-6 font-serif text-[clamp(2.8rem,13vw,7rem)] font-light italic leading-[.95]">Walaka<br/>wa Mapenzi</h1>
   <p className="mx-auto mt-8 max-w-xs font-serif text-lg italic text-cream/80">{C.tagline}</p>
  </motion.div>
  <AnimatePresence>{ready&&!open&&<motion.div className="mt-12" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Btn onClick={()=>setOpen(true)}>Open the letter</Btn></motion.div>}</AnimatePresence>
  <AnimatePresence>{open&&<motion.div className="fixed inset-0 z-30 grid place-items-center bg-wine2" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6}}>
   <div className="relative h-52 w-72 [perspective:900px]">
    <motion.div className="paper absolute inset-x-3 top-0 h-44 p-5 font-script text-sm text-caramel" initial={{y:0}} animate={{y:-90}} transition={{delay:.8,duration:1,ease}} onAnimationComplete={()=>setTimeout(next,700)}>Kwa {C.recipient}</motion.div>
    <div className="absolute inset-0 shadow-2xl" style={{clipPath:"polygon(0 25%,50% 60%,100% 25%,100% 100%,0 100%)",background:"#B51F2D"}}/>
    <motion.div className="absolute inset-x-0 top-0 h-28 origin-top bg-[#9a1824]" style={{clipPath:"polygon(0 0,100% 0,50% 100%)"}} initial={{rotateX:0}} animate={{rotateX:180}} transition={{delay:.2,duration:.9,ease}}/>
   </div></motion.div>}</AnimatePresence>
 </Stage>}

export function CheckIn({next}:{next:()=>void}){
 const [pick,setPick]=useState<string|null>(null);
 return <Stage>
  <motion.blockquote initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.6}} className="max-w-xl font-serif text-[clamp(1.5rem,6vw,2.6rem)] italic leading-snug">“{C.verse1.t}”
   <footer className="mt-4 font-sans text-xs not-italic tracking-[.3em] text-cream/70">{C.verse1.r}</footer></motion.blockquote>
  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2,duration:1.2}} className="mt-14 w-full max-w-md">
   <p className="font-serif text-lg italic text-cream/80">Before we continue…</p>
   <h2 className="mt-2 font-serif text-3xl">What does your heart need tonight?</h2>
   <div role="group" className="mt-8 flex flex-wrap justify-center gap-3">{C.needs.map(n=>
    <button key={n} aria-pressed={pick===n} onClick={()=>{setPick(n);setTimeout(next,900)}} className={`btn uppercase ${pick===n?"!bg-cream !text-wine":""}`}>{n}</button>)}</div>
  </motion.div>
 </Stage>}

export function Letter({next}:{next:()=>void}){
 const P=C.pages.length+1; const [i,setI]=useState(0); const last=i===P-1;
 return <Stage>
  <div className="mb-8"><h2 className="font-serif text-3xl italic">{C.letterTitle}</h2><p className="mt-1 font-script text-sm text-cream/70">{C.letterSub}</p></div>
  <div className="w-full max-w-md [perspective:1400px]">
   <AnimatePresence mode="wait"><motion.article key={i} initial={{rotateY:-70,opacity:0}} animate={{rotateY:0,opacity:1}} exit={{rotateY:70,opacity:0}} transition={{duration:.7,ease}}
    style={{transformOrigin:"left center"}} className="paper relative min-h-[22rem] px-7 py-10 text-left sm:px-10">
    {i<C.pages.length? <div className="space-y-6 font-serif text-[1.35rem] leading-[1.7]"><Reveal lines={C.pages[i]}/></div> :
     <div className="space-y-5 font-serif text-[1.3rem] leading-[1.6]">
      <p className="inline-block -rotate-2 border border-crimson px-3 py-1 font-sans text-[.65rem] uppercase tracking-[.3em] text-crimson">{C.honey.label}</p>
      <Reveal lines={C.honey.lines}/>
      <motion.i aria-hidden className="absolute right-8 top-0 block h-5 w-3 rounded-b-full rounded-t-[60%] bg-caramel" animate={{y:[0,150],opacity:[1,0]}} transition={{repeat:Infinity,duration:3.2,ease:"easeIn"}}/>
     </div>}
    <span className="absolute bottom-3 right-5 font-sans text-xs text-caramel">{i+1}/{P}</span>
   </motion.article></AnimatePresence>
  </div>
  <div className="mt-8"><Btn onClick={()=>last?next():setI(i+1)}>{last?"One more thing":i===0?"Turn the page":"Continue reading"}</Btn></div>
 </Stage>}

export function HowItStarted({next}:{next:()=>void}){
 return <Stage>
  <h2 className="font-serif text-4xl italic">How it started</h2>
  <ol className="relative mt-10 space-y-8 border-l border-cream/40 pl-8 text-left">{C.timeline.map((t,i)=>
   <motion.li key={t} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:.4+i*.45,duration:.8}} className="relative font-serif text-2xl">
    <span aria-hidden className={`absolute -left-[2.45rem] top-3 h-3 w-3 rounded-full ${i===C.timeline.length-1?"bg-cream":"bg-wine ring-1 ring-cream"}`}/>{t}</motion.li>)}</ol>
  <motion.div className="mt-12" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.4}}><Btn onClick={next}>Keep going</Btn></motion.div>
 </Stage>}

export function WhatISee({next}:{next:()=>void}){
 const [o,setO]=useState<number|null>(null);
 return <Stage>
  <h2 className="font-serif text-4xl italic">What I see in you</h2>
  <div className="mt-10 grid w-full max-w-2xl gap-4 sm:grid-cols-2">{C.seeCards.map(([h,b],i)=>
   <motion.button key={h} onClick={()=>setO(o===i?null:i)} onMouseEnter={()=>setO(i)} onMouseLeave={()=>setO(null)} aria-expanded={o===i}
    whileHover={{y:-4,rotate:i%2?.6:-.6}} className="paper min-h-[9rem] p-6 text-left">
    <h3 className="font-serif text-2xl">{h}</h3>
    <AnimatePresence>{o===i&&<motion.p initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="mt-3 overflow-hidden font-serif text-lg italic text-caramel">{b}</motion.p>}</AnimatePresence>
    {o!==i&&<span className="mt-3 block font-sans text-xs text-caramel/70">Tap to read</span>}
   </motion.button>)}</div>
  <div className="mt-10"><Btn onClick={next}>The last page</Btn></div>
 </Stage>}

export function Finale(){
 const [end,setEnd]=useState(false);
 return <Stage>
  <div className="max-w-lg space-y-5 font-serif text-[1.45rem] leading-relaxed"><Reveal lines={C.final}/></div>
  <div className="mt-14 space-y-3 font-serif text-3xl italic"><Reveal lines={C.thanks}/></div>
  <motion.blockquote className="mt-20 max-w-md" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}}>
   <p className="font-serif text-2xl italic text-cream/90">“{C.verse2.t}”</p><footer className="mt-3 text-xs tracking-[.3em] text-cream/70">{C.verse2.r}</footer></motion.blockquote>
  <button onClick={()=>setEnd(!end)} className="mt-16 min-h-[48px] font-script text-xl text-cream">
   <motion.span className="inline-block" animate={{rotate:end?0:[0,-3,3,0]}} transition={{repeat:Infinity,duration:2.5,repeatDelay:2}}>{end?"…or is it, Judy?":"The end?"}</motion.span></button>
 </Stage>}
