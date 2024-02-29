import Table from "@/components/Table";
import Image from "next/image";

export default async function Home() {
  const projects = await fetch("http://localhost:3000/api/projects", {
    cache: "no-cache",
  }).then((res) => res.json());
  const hourentries = await fetch("http://localhost:3000/api/hourEntries", {
    cache: "no-cache",
  }).then((res) => res.json());
  const customers = await fetch("http://localhost:3000/api/customers", {
    cache: "no-cache",
  }).then((res) => res.json());
  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 data-testid='cypress-title'>Frontend test </h1>
     <p className=" w-3/4">Through this exercise, I understood that I had to create a form containing all the data from the hourEntries, including the projects and the customers. To achieve this, I fetched additional JSON files to obtain the respective names. Initially, I implemented an edit button solely for updating the time spent, as I believed this was the primary focus of the exercise. However, upon reconsideration, I decided to extend this functionality to edit all the JSON elements. But i decided to leave the button there just because it was functional. <br/>

When you click on the edit button, you will be redirected to an edit form where you can update every value of the chosen element. Additionally, if necessary, you can delete the element </p>
     <Table hourentries={hourentries} projects={projects} customers={customers} />
    </main>
  );
}

    
