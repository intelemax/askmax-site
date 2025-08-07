// components/TOPECard.tsx

import React from "react";

export interface TOPEPersona {
  name: string;
  quote: string;
  role?: string; // Optional — can be displayed on hover or inside modal later
}

interface TOPECardProps {
  persona: TOPEPersona;
}

export const TOPECard: React.FC<TOPECardProps> = ({ persona }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-900">{persona.name}</h3>
      <p className="text-sm text-gray-600 mt-2 italic">“{persona.quote}”</p>
    </div>
  );
};
