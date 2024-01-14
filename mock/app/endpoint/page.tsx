import Link from "next/link";

export default async function Home() {
  const hostname = process.env.NEXT_PUBLIC_HOSTNAME
  const res = await fetch(`http://${hostname}/api/endpoints`, {
            cache: 'no-store',
            headers: {'Content-Type': 'applicaton/json'},
          })
  if(res.status!==200){throw new Error("Internal Server Error (API fetch)")}

  const result = await res.json()
  const endpoints:{[key: string]: string}[] = result['data']

  return (
    <div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/5"></div>
        <div className="font-bold text-3xl mb-6 mt-3">
          Mock List
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/4"></div>
        <table className="border-collapse border-gray-400 table-auto md:w-2/4 ">
          <thead className="bg-purple-500 text-white font-bold text-lg">
            <tr>
              <th className="border border-slate-400 px-6">Endpoint</th>
              <th className="border border-slate-400 px-6">Value</th>
              <th className="border border-slate-400 px-6">Detail</th>
            </tr>
          </thead>
          <tbody>
              {endpoints.map((endpoint:{[key: string]: string})=>(
                <tr>
                  <td className="border border-slate-400 mb-1 px-6 text-center">{endpoint.endpoint}</td>
                  <td className="border border-slate-400 mb-1 px-6 text-center">{JSON.stringify(endpoint.value)}</td>
                  <td className="border border-slate-400 mb-1 px-6 text-center hover:text-gray-400">
                    <Link href={`/endpoint/${endpoint.id}`} >
                      about
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="md:w-1/4"></div>
      </div>
    </div>
  )
}
