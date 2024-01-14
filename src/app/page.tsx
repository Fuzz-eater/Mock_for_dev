export default async function Home() {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/12"></div>
        <div className="w-11/12">
          <div className="text-6xl font-bold mt-6">
            Mock APP
          </div>
          <div className="mx-10">
            <ul>
              <li className="text-2xl">
                Index: API LIST
              </li>
              <li className="text-2xl">
                Create: Create API
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
