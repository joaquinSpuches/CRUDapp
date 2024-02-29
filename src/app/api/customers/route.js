import { NextResponse } from "next/server"; 
import customers from '@/data/api/customers'

export async function GET(){
    return NextResponse.json(customers)
}