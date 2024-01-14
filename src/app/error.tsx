'use client'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/12"></div>
        <div className="w-11/12">
          <div className="text-4xl font-bold">Something went wrong!</div>
          <div className="flex items-center">
            <div className="ml-10 text-xl font-bold">Error message:</div>
            <div className="ml-5 text-lg">{error.message}</div>
          </div>
        </div>
    </div>
    </>
  )
}
