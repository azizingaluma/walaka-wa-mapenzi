"use client";
import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Intro,CheckIn,Letter,HowItStarted,WhatISee,Finale } from "./Screens";
import Glow from "./Glow"; import Music from "./Music";
export default function Experience(){
 const [s,setS]=useState(0); const next=()=>{setS(s+1);scrollTo(0,0)};
 const screens=[<Intro next={next}/>,<CheckIn next={next}/>,<Letter next={next}/>,<HowItStarted next={next}/>,<WhatISee next={next}/>,<Finale/>];
 return <MotionConfig reducedMotion="user"><Glow/><Music/>
  <div className="mx-auto max-w-5xl"><AnimatePresence mode="wait"><div key={s}>{screens[s]}</div></AnimatePresence></div></MotionConfig>}
