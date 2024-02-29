import { NextResponse } from "next/server";
import hourEntries from "@/data/api/hourEntries";
import path from "path";
import fs from "fs";

const hourEntriesPath = path.resolve('./src/data/api/hourEntries.json');
export async function GET(request,{params}) {
    const {id} = params;
    const hourEntries = JSON.parse(fs.readFileSync(hourEntriesPath))
    const entry = hourEntries.find((e)=> e.id == id)
    

    return NextResponse.json(entry);

}

export async function PUT(req){
    const time = await req.json()
    for (let i = 0; i < hourEntries.length; i++) {
        if (hourEntries[i].id === time.id) {
            hourEntries[i] = time;
            break; 
        }
    }
    fs.writeFileSync(hourEntriesPath, JSON.stringify(hourEntries, null, 2));
    return NextResponse.json('Hours updated!');

}


export async function DELETE(req) {
    const { id } = await req.json();
    console.log(id);
    const hourEntries = JSON.parse(fs.readFileSync(hourEntriesPath));
    const index = hourEntries.findIndex((e) => e.id === id);
    if (index !== -1) {
        hourEntries.splice(index, 1);
        fs.writeFileSync(hourEntriesPath, JSON.stringify(hourEntries, null, 2));
        return NextResponse.json('Entry deleted!');
    } else {
        return NextResponse.error('Entry not found', { status: 404 });
    }
}