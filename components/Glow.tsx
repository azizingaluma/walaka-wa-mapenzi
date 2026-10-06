"use client";
import { useEffect, useRef } from "react";
export default function Glow(){
 const r=useRef<HTMLDivElement>(null);
 useEffect(()=>{ if(!matchMedia("(hover:hover)").matches) return;
  const m=(e:PointerEvent)=>{r.current&&(r.current.style.transform=`translate(${e.clientX-200}px,${e.clientY-200}px)`)};
  addEventListener("pointermove",m); return()=>removeEventListener("pointermove",m)},[]);
 return <div ref={r} aria-hidden className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[400px] w-[400px] rounded-full opacity-40 [@media(hover:hover)]:block" style={{background:"radial-gradient(circle,#B51F2D66,transparent 65%)"}}/>}
