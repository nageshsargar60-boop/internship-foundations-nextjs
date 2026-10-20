import { NextResponse } from "next/server";
export const dynamic="force-dynamic";
export function GET(){return NextResponse.json({status:"ok",timestamp:new Date().toISOString(),service:"deployment-foundations-nextjs"},{status:200,headers:{"Cache-Control":"no-store"}});}
