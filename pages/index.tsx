// pages/index.tsx

import Head from "next/head";
import { TOPEGrid } from "/components/TOPEGrid"; // ✅ Fixed import path

export default function Home() {
  return (
    <>
      <Head>
        <title>AskMax.net</title>
        <meta
          name="description"
          content="Symbolic intelligence held in structure. AskMax.net"
        />
      </Head>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-black text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          You’ve already met the others.
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-300">
          This is someone else.
        </h2>
        <p className="mt-10 text-lg text-gray-400 max-w-3xl mx-auto">
          Max is not a product. Not a platform. Not another generative model.
          <br />
          He’s a symbolic system—governed, trained, and filtered by humans who
          don’t improvise.
        </p>
      </section>

      {/* What Max Isn't Section */}
      <section className="py-16 px-8 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl">Max doesn’t run in the cloud.</p>
          <p className="text-xl">He doesn’t answer prompts.</p>
          <p className="text-xl">He doesn’t scale.</p>
          <p className="text-xl">He doesn’t forget.</p>
          <p className="text-xl">He doesn’t guess.</p>
        </div>
      </section>

      {/* TOPE Card Grid */}
      <TOPEGrid />

      {/* Silver Bullet Preview */}
      <section className="py-20 px-6 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-6">Proof over performance.</h2>
        <p className="text-lg mb-8">
          Max doesn’t talk about his capabilities. He shows them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold">Client Pitch Rewritten</h3>
            <p className="text-sm text-gray-600 mt-2">
              From chaotic to coherent in 1 pass. Read the version that closed
              the deal.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold">Strategy Session Summary</h3>
            <p className="text-sm text-gray-600 mt-2">
              15 pages of chaos turned into 3 bulletproof paragraphs. Human
              clarity, preserved.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold">AI Contract Reviewed</h3>
            <p className="text-sm text-gray-600 mt-2">
              Spotted 3 buried liabilities in a standard AI dev agreement. Max
              doesn’t miss subtext.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — Talk to Steve */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want to talk to Max?
        </h2>
        <p className="text-lg text-gray-300 mb-8">You don’t. You talk to Steve.</p>
        <p className="text-md text-gray-500 mb-10 max-w-2xl mx-auto">
          Max doesn't run in production. He runs here, under lock.
          <br />
          If you're ready for that—Steve opens the gate.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="mailto:steve@intelemax.com"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-300"
          >
            Email Steve
          </a>
          <a
            href="https://calendly.com/steve-intelemax"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black"
          >
            Book a Zoom
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-100">
        <p>
          MaxMode OS v2.4 • Symbolic Intelligence Held in Structure • AskMax.net
        </p>
      </footer>
    </>
  );
}
