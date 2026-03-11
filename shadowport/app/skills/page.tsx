export default function Skills() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-4xl w-full space-y-12">

        <h1 className="text-4xl font-bold text-center">Skills</h1>

        <div className="space-y-8">

          <div>
            <h2 className="text-xl text-orange-500 mb-3">Tools</h2>
            <ul className="text-gray-300 space-y-2">
              <li>CATIA V5 (for 3D & 2D BIW Fixture Design)</li>
              <li>Ansys (Engineering Simulation and 3D design)</li>
              <li>Solidworks</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-orange-500 mb-3">Automotive standards</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Mechanical Design</li>
              <li>Product Design</li>
              <li>Design for Manufacturing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-orange-500 mb-3">Leadership</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Problem Solving</li>
              <li>Decision Making</li>
              <li>Adaptability</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}