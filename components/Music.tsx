"use client";
import { useRef, useState } from "react";
import { C } from "@/lib/content";
export default function Music(){
 const a=useRef<HTMLAudioElement>(null); const [on,setOn]=useState(false);
 if(!C.audioSrc) return null;
 const toggle=()=>{const el=a.current; if(!el) return; if(on){el.pause()}else{el.volume=.5;el.play()} setOn(!on)};
 return <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-3 border border-cream/40 bg-wine2/80 px-4 py-2 backdrop-blur">
  <audio ref={a} src={C.audioSrc} loop/>
  <button onClick={toggle} aria-pressed={on} className="min-h-[44px] text-[.7rem] tracking-[.2em]">{on?"Pause":"Play the soundtrack"}</button>
  {on&&<span aria-hidden className="flex h-4 items-end gap-[3px]">{[0,1,2,3].map(i=><i key={i} className="w-[2px] animate-pulse bg-cream" style={{height:6+i*3,animationDelay:`${i*.2}s`}}/>)}</span>}
 </div>}
