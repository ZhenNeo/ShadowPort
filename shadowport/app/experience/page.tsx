export default function Experience() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-5xl w-full space-y-16">

        <h1 className="text-4xl font-bold text-center">Experience</h1>

        {/* EXPERIENCE 1 */}
        <div className="border border-gray-800 rounded-xl p-8 space-y-6 hover:border-orange-500 transition">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h2 className="text-2xl font-semibold">
              Design Engineer
            </h2>

            <span className="text-gray-400 text-sm">
              June 2025 – Present
            </span>
          </div>

          <p className="text-orange-500">
            Signific Process Masters Pvt Ltd • Pune, India
          </p>

          <div className="space-y-4 text-gray-300">

            <div>
              <h3 className="font-semibold text-white mb-1">Overview</h3>
              <p>
                Designing precision fixtures, components, and tooling used in
                manufacturing environments to improve repeatability and assembly
                accuracy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">Key Contributions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Designed precision fixtures for repeatable manufacturing operations.</li>
                <li>Developed complex assemblies and tooling models.</li>
                <li>Created detailed 3D models and manufacturing drawings.</li>
                <li>Worked with production and quality teams to validate designs on the shop floor.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">Impact</h3>
              <p>
                Improved assembly efficiency by reducing setup time and minimizing
                operator error through better fixture design.
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">CATIA V5</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Fixture Design</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">3D Modeling</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Manufacturing Tooling</span>
          </div>

        </div>

        {/* EXPERIENCE 2 */}
        <div className="border border-gray-800 rounded-xl p-8 space-y-6 hover:border-orange-500 transition">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h2 className="text-2xl font-semibold">
              BIW Fixture Design Engineer
            </h2>

            <span className="text-gray-400 text-sm">
              Oct 2023 – June 2025
            </span>
          </div>

          <p className="text-orange-500">
            Designotion Technology • Pune, India
          </p>

          <div className="space-y-4 text-gray-300">

            <div>
              <h3 className="font-semibold text-white mb-1">Overview</h3>
              <p>
                Specialized in Body-in-White fixture design for automotive
                manufacturing, developing optimized 3D and 2D models using CATIA V5.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">Key Contributions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Designed BIW fixtures for automotive production lines.</li>
                <li>Created detailed 3D and 2D fixture designs using CATIA V5.</li>
                <li>Delivered projects compliant with American, European, and Japanese standards.</li>
                <li>Collaborated with cross-functional teams to meet safety and performance requirements.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">Impact</h3>
              <p>
                Successfully delivered multiple fixture design projects while
                ensuring compliance with global automotive manufacturing standards.
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">CATIA V5</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">BIW Fixture Design</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Automotive Standards</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">3D & 2D Design</span>
          </div>

        </div>

        {/* EXPERIENCE 3 */}
        <div className="border border-gray-800 rounded-xl p-8 space-y-6 hover:border-orange-500 transition">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h2 className="text-2xl font-semibold">
              Graduate Engineer Trainee (Production)
            </h2>

            <span className="text-gray-400 text-sm">
              July 2023 – Dec 2023
            </span>
          </div>

          <p className="text-orange-500">
            Lumax Cornaglia Auto Tech Pvt Ltd • Pune, India
          </p>

          <div className="space-y-4 text-gray-300">

            <div>
              <h3 className="font-semibold text-white mb-1">Overview</h3>
              <p>
                Gained hands-on production experience working directly on
                the assembly line while learning manufacturing processes
                and quality control practices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">Key Contributions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Worked as a line operator supporting assembly line operations.</li>
                <li>Monitored production processes and maintained quality standards.</li>
                <li>Collaborated with production teams to troubleshoot issues.</li>
                <li>Supported process improvement initiatives on the shop floor.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">Impact</h3>
              <p>
                Built practical understanding of manufacturing workflows,
                production challenges, and real-world assembly processes.
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Production</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Assembly Line</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Manufacturing</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Process Improvement</span>
          </div>

        </div>

      </div>
    </section>
  );
}