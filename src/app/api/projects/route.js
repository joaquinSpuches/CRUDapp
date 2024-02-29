import { NextResponse } from "next/server";
import projects from '@/data/api/projects'

export async function GET() {
  



  
  return NextResponse.json(projects)

  
}