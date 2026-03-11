export default function Experience() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-4xl w-full space-y-16">

        <h1 className="text-4xl font-bold text-center">Experience</h1>

        {/* Job 1 */}
        <div className="space-y-4 border-l-2 border-orange-500 pl-6">
          <h2 className="text-2xl font-semibold">
            Design Engineer
          </h2>

          <p className="text-orange-500">
            Signific Process Masters Pvt Ltd • Pune, India
          </p>

          <p className="text-gray-400 text-sm">
            June 2025 – Present
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Designed components, assemblies, and precision fixtures for accurate and repeatable manufacturing.</li>
            <li>Created 3D models and technical drawings for complex assemblies and tooling.</li>
            <li>Improved assembly efficiency by designing fixtures that reduced setup time and minimized operator error.</li>
            <li>Coordinated with production and quality teams to validate fixture performance and support shop-floor implementation.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="space-y-4 border-l-2 border-orange-500 pl-6">
          <h2 className="text-2xl font-semibold">
            BIW Fixture Design Engineer
          </h2>

          <p className="text-orange-500">
            Designotion Technology • Pune, India
          </p>

          <p className="text-gray-400 text-sm">
            Oct 2023 – June 2025
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Specialized in the design of Body-in-White fixtures using CATIA V5.</li>
            <li>Developed optimized 3D and 2D fixture designs for automotive manufacturing.</li>
            <li>Delivered multiple fixture design projects following American, European, and Japanese automotive standards.</li>
            <li>Collaborated with cross-functional teams to ensure safety and performance compliance.</li>
            <li>Proposed design improvements and innovative fixture solutions to meet client specifications.</li>
          </ul>
        </div>

        {/* Job 3 */}
        <div className="space-y-4 border-l-2 border-orange-500 pl-6">
          <h2 className="text-2xl font-semibold">
            Graduate Engineer Trainee (Production)
          </h2>

          <p className="text-orange-500">
            Lumax Cornaglia Auto Tech Pvt Ltd • Pune, India
          </p>

          <p className="text-gray-400 text-sm">
            July 2023 – Dec 2023
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Worked as a line operator gaining hands-on production and assembly experience.</li>
            <li>Helped maintain assembly line efficiency while monitoring quality standards.</li>
            <li>Collaborated with the production team to troubleshoot issues and minimize downtime.</li>
            <li>Participated in process improvement initiatives to increase efficiency and reduce production costs.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}