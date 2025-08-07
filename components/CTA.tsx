
export function CTA() {
  return (
    <section className="bg-gray-900 p-8 rounded-xl text-center shadow-2xl space-y-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold">Talk to Steve</h2>
      <p className="text-lg">Want a live demo of Max? Schedule or join directly:</p>
      <div className="flex flex-col gap-4 items-center justify-center">
        <a href="tel:+15555551234" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg w-64 text-center">
          📞 Call Steve
        </a>
        <a href="https://zoom.us/my/askmaxdemo" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg w-64 text-center">
          🎥 Join Zoom Demo
        </a>
        <div className="mt-6 w-full h-[600px]">
          <iframe
            src="https://calendly.com/sfeuerbacher-consumeraffairs"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-xl"
            title="Calendly scheduling"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
