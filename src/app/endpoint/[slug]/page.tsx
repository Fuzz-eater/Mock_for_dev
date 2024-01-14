"use client"
import Link from "next/link";

export default async function Detail({params}:{params:{slug:string}}){
  const hostname = process.env.NEXT_PUBLIC_HOSTNAME
  const res = await fetch(`http://${hostname}/api/endpoints/${params.slug}`, {
        headers: {'Content-Type': 'applicaton/json'},
      })

  if (res.status!=200){throw new Error("Internal server error (API fetch)")}

  const result = await res.json()
  const apis = result['data']

  return (
    <>
      <div className="md:flex md:items-center">
        <div className="md:w-1/5"></div>
        <div className="font-bold text-3xl mb-6 mt-3">
          About Mock API
        </div>
      </div>
      <div>
        <div className="md:flex">
          <div className="md:w-1/4 md:items-center mb-6">
            <label className="block font-bold md:text-right mt-1 mb-1 md:mb-0 pr-4">
              Endpoint: 
            </label>
          </div>
          <div className="md:w-2/4">
            <input
              className="bg-gray-800 appearance-none border-2 border-gray-800 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-purple-500 focus:text-gray-600"
              type="text"
              placeholder="Endpoint (ex.'/example')"
              value={apis.endpoint}
              disabled
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-1/4 md:items-center mb-6">
            <label className="block font-bold md:text-right mt-1 mb-1 md:mb-0 pr-4">
              Value: 
            </label>
          </div>
          <div className="md:w-2/4">
            <textarea
              className="bg-gray-800 appearance-none border-2 border-gray-800 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-purple-500 focus:text-gray-600"
              name="Value"
              cols={33}
              rows={5}
              value={JSON.stringify(apis.value)}
              disabled
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-1/4 md:items-center mb-6">
            <label className="block font-bold md:text-right mt-1 mb-1 md:mb-0 pr-4">
              Settings: 
            </label>
          </div>
          <div className="md:w-2/4">
            <textarea
              className="bg-gray-800 appearance-none border-2 border-gray-800 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-purple-500 focus:text-gray-600"
              name="Settings"
              cols={33}
              rows={5}
              value={JSON.stringify(apis.settings)}
              disabled
            />
          </div>
        </div>
        <div className="md:flex md:items-center md:mt-2">
          <div className="md:w-1/4"></div>
          <div className="md:w-2/4">
            <Link
                href={`/endpoint/edit?id=${params.slug}`}
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-3">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
