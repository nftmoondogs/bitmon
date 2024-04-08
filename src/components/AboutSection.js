import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-black text-fuchsia-600 py-12 px-4">
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: #32CD32; } /* Light green color */
          }

          .flashy-text {
            animation: textFlash 0.5s infinite;
          }
        `}
      </style>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <img src="https://i.ibb.co/6Z8ZCMy/goldern.gif" alt="Skull Animation" className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        {/* Left Side Content */}
        <div className="font-stone"> {/* Apply the font to the entire div to affect all child text elements */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-amber-400">8-bit Meta designed by a drunk toddler </h2>
          <p className="text-base mb-4 text-white">
          $BitMon - the digital lovechild of a crackhead Pikachu and a degenerate gambler. It's the Solana meme token that makes your portfolio look like a roller coaster designed by a drunk toddler.
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-fuchsia-600">
          faster than your ex's new relationship</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-white">
          <li>BAG your life savings into $BitMon and watch your portfolio moon, crash, and burn faster than your ex's new relationship. It's not investing; it's a fucking roller coaster with no seatbelts.</li>

          </ul>
          
        </div>
        
        {/* Right Side Image */}
        <div className="flex justify-center items-center">
        
        </div>
      </div>
    </div>
  );
}
