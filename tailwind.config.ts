import type { Config } from "tailwindcss";
const config: Config = {content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{colors:{ink:"var(--color-ink)",muted:"var(--color-muted)",brand:"var(--color-brand)",canvas:"var(--color-canvas)",line:"var(--color-line)"},boxShadow:{soft:"0 18px 55px rgba(15,23,42,.08)"}}},plugins:[]};
export default config;
