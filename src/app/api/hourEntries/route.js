import { NextResponse } from "next/server"; 
import hourEntries from '@/data/api/hourEntries'
import path from "path";
import fs from "fs";

const hourEntriesPath = path.resolve('./src/data/api/hourEntries.json');
export async function GET(){
    const hourEntries = JSON.parse(fs.readFileSync(hourEntriesPath));// Read the hour entries from the file each time the API is called
    return NextResponse.json(hourEntries) // Return the hour entries as a JSON response
}   

export async function PUT(req){
    const time = await req.json()
    const {id, hours} = time; // Destructure the request body to get the id and hours from the selected hours
    // I'm missing tu put hours as a number, because now its coming as a string
    hourEntries.map((e) => { 
        if(e.id === id){ // Find the hour entry with the matching id and update the time spent hours
            e.timeSpent = hours;
        }
    })
    fs.writeFileSync(hourEntriesPath, JSON.stringify(hourEntries, null, 2)); // Write the updated hour entries to the file
    return NextResponse.json('Hours updated!');

}
