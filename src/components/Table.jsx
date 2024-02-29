'use client'
import Link from "next/link";
import EditButton from "@/components/EditButton";
import { useState } from "react";
export default function Table(props){

  // Maintain edit state for each entry
  const [editStates, setEditStates] = useState({});

  // Function to toggle edit state for a specific entry
  const toggleEdit = (id) => {
    setEditStates(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Toggle edit state for the given entry ID
    }));
  };

  const {hourentries, projects, customers} = props;

  return (
    <div className="w-3/4" >
      <section className=" mt-10 ">
     
        <table className="w-full">
          <thead>
            <tr>
              <th className=" text-start " >ID</th>
              <th className=" text-start "  >Project</th>
              <th className=" text-start " >Time spent</th>
              <th className=" text-start " >Issue</th>
              <th className=" text-start " >Customer</th>
              <th className=" text-start " >Type</th>
              <th className=" text-start " >Date</th>
            </tr>
          </thead>
          <tbody> 
            {hourentries.map((e) => {
           /* Map through the hour entries and render a table row for each entry */
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{projects[e.project].name}</td>
                  <td>
                    
                    {!editStates[e.id] ? <div className="flex justify-between pr-5"> {e.timeSpent} {/** doesn't render the time spent and edit button when you press edit */}
                    <button onClick={() => toggleEdit(e.id)}>Edit</button></div> : null}
                  {/* Render Edit component only if edit state is true for this entry and thats when you press edit button. */}
                  {editStates[e.id] && <EditButton hoursSpent={e.timeSpent} id={e.id} />}
                  </td>
                  <td>
                    <a href={e.issueUrl}>Issue Url</a>
                  </td>
                  <td>{customers[projects[e.project].customer].name}</td>
                  <td>{projects[e.project].type}</td>
                  <td>{e.date}</td>
                  <td>
                    <Link href={`/edit/${e.id}`}  >Edit </Link>
                  </td>
                 
                </tr>
              );
            }, [])}
          </tbody> 
        </table>
      </section>
    </div>
  );
}
