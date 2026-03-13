export default function Experience() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24 flex justify-center">
      <div className="max-w-3xl w-full space-y-20">

        <h1 className="text-4xl font-bold">Experience</h1>

        {/* Experience 1 */}
        <div className="space-y-3">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-semibold">
              Design Engineer — Signific Process Masters
            </h2>
            <span className="text-gray-400 text-sm">
              June 2025 – Present
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Designing precision fixtures and tooling for manufacturing
            assemblies. My work focuses on improving repeatability,
            reducing setup time, and supporting production teams with
            practical shop-floor solutions.
          </p>

          <p className="text-sm text-gray-500">
            CATIA V5 · Fixture Design · Manufacturing Tooling
          </p>
        </div>

        {/* Experience 2 */}
        <div className="space-y-3">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-semibold">
              BIW Fixture Design Engineer — Designotion Technology
            </h2>
            <span className="text-gray-400 text-sm">
              Oct 2023 – June 2025
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Worked on Body-in-White fixture design for automotive
            manufacturing. Developed 3D and 2D fixture designs in CATIA V5
            while collaborating with cross-functional teams to meet
            international automotive standards.
          </p>

          <p className="text-sm text-gray-500">
            CATIA V5 · BIW Fixture Design · Automotive Manufacturing
          </p>
        </div>

        {/* Experience 3 */}
        <div className="space-y-3">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-semibold">
              Graduate Engineer Trainee — Lumax Cornaglia Auto Tech
            </h2>
            <span className="text-gray-400 text-sm">
              July 2023 – Dec 2023
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Gained hands-on experience in automotive production by working
            directly on the assembly line. This role built my understanding
            of real manufacturing environments, production constraints,
            and quality control processes.
          </p>

          <p className="text-sm text-gray-500">
            Production · Assembly Line · Manufacturing Operations
          </p>
        </div>

      </div>
    </section>
  );
}