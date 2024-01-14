'use client'
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Form(){
  const [endpoint, setEndpoint] = useState('')
  const [apiValue, setApiValue] = useState('')
  const [apiSettings, setApiSettings] = useState('')

  const router = useRouter()

  async function submitData(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    try{
      const body = {endpoint, apiValue, apiSettings}
      const res = await fetch('/api/endpoints/submit', {
        method: 'POST',
        headers: {'Content-Type': 'applicaton/json'},
        body: JSON.stringify(body),
      })
      if(res.status!=200){throw new Error("Internal server error(API fetch)")}
      router.push('/endpoints')
    }catch(e){
      throw e
    }
  }

  return (
    <>
      <div className="md:flex md:items-center">
        <div className="md:w-1/5"></div>
        <div className="font-bold text-3xl mb-6 mt-3">
          Create Mock API
        </div>
      </div>
      <div>
        <form onSubmit={submitData}>
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
                onChange={(e)=>setEndpoint(e.target.value)}
                value={endpoint}
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
                value={apiValue}
                onChange={(e)=>setApiValue(e.target.value)}
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
                value={apiSettings}
                onChange={(e)=>setApiSettings(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/4"></div>
            <div className="md:w-2/4">
              <button type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-3">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
