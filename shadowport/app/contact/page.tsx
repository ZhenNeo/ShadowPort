export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">

      <div className="max-w-3xl w-full space-y-10 text-center">

        <h1 className="text-4xl font-bold">Contact</h1>

        <p className="text-gray-300">
          If you'd like to collaborate, discuss a project, or just connect,
          feel free to reach out.
        </p>

        <div className="space-y-4 text-gray-300">

          <p>
            Mo: <span className="text-orange-500">+91 9421423288</span>
          </p>

          <p>
            Email: <span className="text-orange-500">niturkarmanishm@gmail.com</span>
          </p>

          <p>
            GitHub: <span className="text-orange-500">github.com/yourusername</span>
          </p>

          <p>
            LinkedIn: <span className="text-orange-500">linkedin.com/in/yourprofile</span>
          </p>

        </div>

      </div>

    </section>
  )
}