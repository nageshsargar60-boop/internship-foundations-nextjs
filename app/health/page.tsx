import type { Metadata } from "next";
import HealthStatus from "@/components/health-status";
export const metadata:Metadata={title:"Health check"};
export default function HealthPage(){return <section className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-brand">Service diagnostics</p><h1 className="mt-3 text-4xl font-bold">Health check</h1><p className="mt-5 text-lg leading-8 text-muted">This page fetches the application health endpoint and renders its response.</p><div className="mt-8"><HealthStatus/></div><p className="mt-5 text-sm text-muted">API endpoint: <code className="rounded bg-slate-200 px-2 py-1 text-slate-800">/api/health</code></p></section>}
