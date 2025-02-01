export default function NoResult() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-10 sm:py-10 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">Sorry</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Result Found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the cheatsheet you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact Krishna <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  