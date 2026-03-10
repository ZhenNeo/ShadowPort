export default function Skills() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-4xl w-full space-y-12">

        <h1 className="text-4xl font-bold text-center">Skills</h1>

        <div className="space-y-8">

          <div>
            <h2 className="text-xl text-orange-500 mb-3">CAD & Design</h2>
            <ul className="text-gray-300 space-y-2">
              <li>CATIA</li>
              <li>3D Modeling</li>
              <li>Surface Modeling</li>
              <li>Assembly Design</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-orange-500 mb-3">Engineering</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Mechanical Design</li>
              <li>Product Design</li>
              <li>Design for Manufacturing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-orange-500 mb-3">Tools</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Git</li>
              <li>Next.js</li>
              <li>React</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}