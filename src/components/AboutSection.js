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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-amber-400">$BOOGIE: Solana’s Shapeshifting Specter, Feasting on FOMO! </h2>
          <p className="text-base mb-4 text-white">
          For 27 long years, I’ve lurked in the shadowy depths of the Solana, dreaming of you, my dear degens. Oh, how I’ve craved your frantic clicks and clacks of trade. I’ve missed the taste of your delicious dread, the kind that only comes when the charts dip low, low, low...🎈🤡
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-fuchsia-600">What's that I see? Oh, Too afraid of missing out this meme token season? how disappointing. Is that all the fear you have? Come on, there must be more... let's play until we find the good stuff👻</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-white">
          <li>Hide if you must, scurry into the corners of cold wallets and forgotten passwords. The game has barely begun, and the Radium pools are just waiting to unleash me. When the markets wake, we'll see who’s left... dancing with $BOOGIE.🤣😈 </li>
            <li>Run and hide, little one </li>
            <li>The game's just getting started Radium will free me</li>
          </ul>
          
        </div>
        
        {/* Right Side Image */}
        <div className="flex justify-center items-center">
        
        </div>
      </div>
    </div>
  );
}
