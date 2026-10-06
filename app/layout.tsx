import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Homemade_Apple } from "next/font/google";
const serif=Cormorant_Garamond({subsets:["latin"],weight:["300","400","500"],style:["normal","italic"],variable:"--f-serif"});
const sans=Jost({subsets:["latin"],weight:["300","400"],variable:"--f-sans"});
const script=Homemade_Apple({subsets:["latin"],weight:"400",variable:"--f-script"});
export const metadata:Metadata={title:"Between Us — Walaka wa Mapenzi",description:"A little letter."};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#6e0006"};
export default function L({children}:{children:React.ReactNode}){
 return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${script.variable} font-sans grain`}>{children}</body></html>}
