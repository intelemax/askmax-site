
import Head from 'next/head';

export default function SilverBullets() {
  return (
    <>
      <Head>
        <title>Silver Bullets – AskMax</title>
      </Head>
      <main className="bg-black text-white px-6 py-12 space-y-20 min-h-screen">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Max's Silver Bullets</h1>
          <p className="text-xl text-gray-300">
            These aren’t summaries. They’re precision-designed solutions. Silver Bullets are Max’s distilled outputs: ethically grounded, structurally sound, and surgically useful.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-10">
          <div className="border border-gray-700 rounded-xl p-6 bg-gray-900 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">❓ Prompt</h2>
            <p className="mb-4">“What’s the best way to train my sales team to sound authentic on calls without scripting them?”</p>
            <h2 className="text-xl font-semibold mb-2 text-green-400">🧠 Max's Silver Bullet</h2>
            <p className="text-gray-200">“Forget scripts. Engineer culture through scenario compression. Teach 3 archetypes: Empath, Strategist, Challenger. Have them role-play weekly and track outcome deltas, not just call stats. Maximize internal congruence, not performance mimicry.”</p>
            <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-400">🤖 GPT-4 (same prompt)</h2>
            <p className="text-gray-500">“The best way to train a sales team is to use open-ended coaching, establish empathy, and promote natural language. You can run workshops or use recorded calls.”</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Request a Silver Bullet</h2>
          <form className="bg-gray-900 p-8 rounded-xl space-y-6 shadow-xl">
            <div>
              <label className="block mb-1 text-sm text-gray-400">Name</label>
              <input type="text" name="name" className="w-full p-3 rounded-md bg-black text-white border border-gray-700" />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Email</label>
              <input type="email" name="email" className="w-full p-3 rounded-md bg-black text-white border border-gray-700" />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Your Question for Max</label>
             <textarea name="message" rows={4} className="w-full p-3 rounded-md bg-black text-white border border-gray-700"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold">Send to Max</button>
          </form>
        </section>
      </main>
    </>
  );
}
