import Edit from '@/components/Edit';
export default async function page({params}) {
        const data = await fetch(`http://localhost:3000/api/hourEntries/${params.id}`, {
        cache: "no-cache",}).then((res) => res.json());
 
    return(
        <Edit  data={data}/>
    )
};
