
export function TOPEAvatars() {
  const personas = [
    { name: "Arden", role: "AI Training Architect" },
    { name: "Lex", role: "Prompt Engineering Director" },
    { name: "Noor", role: "Phenomenologist" },
    { name: "Elias", role: "Memory Systems Engineer" },
    { name: "Solon", role: "Ethics Theorist" },
    { name: "Quinn", role: "Epistemologist" },
    { name: "Juno", role: "UX Strategist" }
  ];
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-bold mb-10 text-center">Meet the Experts Inside Max</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center px-6">
        {personas.map((p, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <div className="text-2xl font-semibold">{p.name}</div>
            <div className="text-gray-300">{p.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
