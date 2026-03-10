export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">

      <div className="max-w-4xl text-center space-y-6">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Manish Niturkar
        </h1>

        <h2 className="text-xl md:text-2xl text-orange-500 font-semibold">
          Mechanical Designer • CATIA Modeler
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I design mechanical systems and 3D models with a focus on precision,
          function, and aesthetics. My work includes CAD modeling, product
          design, and engineering visualization.
        </p>

        <div className="flex gap-6 justify-center pt-6">

          <a
            href="/projects"
            className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:border-orange-500 hover:text-orange-500 transition"
          >
            Contact
          </a>

        </div>

      </div>

    </section>
  )
}