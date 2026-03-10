export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">

      <div className="max-w-6xl w-full space-y-12">

        <h1 className="text-4xl font-bold text-center">Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-gray-700 p-6 rounded-lg hover:border-orange-500 transition">
            <h2 className="text-xl font-semibold mb-2">Project Placeholder</h2>
            <p className="text-gray-400">
              A CATIA mechanical model will be showcased here.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg hover:border-orange-500 transition">
            <h2 className="text-xl font-semibold mb-2">Project Placeholder</h2>
            <p className="text-gray-400">
              This section will display another mechanical design.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg hover:border-orange-500 transition">
            <h2 className="text-xl font-semibold mb-2">Project Placeholder</h2>
            <p className="text-gray-400">
              A rendered model or 3D viewer will be placed here.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg hover:border-orange-500 transition">
            <h2 className="text-xl font-semibold mb-2">Project Placeholder</h2>
            <p className="text-gray-400">
              Future design work will appear here.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}