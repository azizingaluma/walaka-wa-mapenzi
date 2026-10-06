import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx","./components/**/*.tsx"],
 theme:{extend:{colors:{wine:"#8F0008",wine2:"#6e0006",cream:"#F5F0DE",crimson:"#B51F2D",caramel:"#8A4E2E",cocoa:"#3A2118"},
 fontFamily:{serif:["var(--f-serif)","serif"],sans:["var(--f-sans)","sans-serif"],script:["var(--f-script)","cursive"]}}}} satisfies Config;
