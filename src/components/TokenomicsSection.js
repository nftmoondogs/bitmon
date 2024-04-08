import React from 'react';

const TokenomicsSection = () => {
  return (
    <div id="tokenomics" className="text-white py-12 px-4 font-stone relative">
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
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img src="https://i.ibb.co/6H3HCy2/purple.gif" alt="DIELA PreSale" className="rounded-lg shadow-xl transform transition duration-500 hover:scale-110" />
        </div>
        <div>
        <h2 className="text-3xl font-bold mb-6 text-rose-700">In the end, $BitMon is more than just a token - it's a lifestyle, a community, and a giant middle finger to the concept of "playing it safe." So, if you're ready to embrace the chaos, join the $BitMon army and let's paint the Solana blockchain red with our gains or losses, but who's counting?"

</h2>

          <p className="mb-4">
            $BitMon will launch on PreSale Pump.Fun, The best place to be as a Retired Solana Degenerative who just wants to have fun
          </p>
          <h3 className="text-2xl font-bold mb-4 text-white">Radium's liberation is my resurrection</h3>



            <img src="https://i.ibb.co/PGnTRdQ/red.gif" alt="Wen Logo" className="mx-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />

        </div>
        
        {/* Image Section */}

      </div>
    </div>
  );
};

export default TokenomicsSection;
