import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative py-16 px-4 bg-[#f8f1e8]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-5xl md:text-6xl font-extrabold text-gray-800">
          Who Are We?
        </h2>

        {/* Subheader */}
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 mb-12 leading-relaxed">
          Meet the passionate individuals behind this campaign &amp; learn about
          their visions, goals, and the experiences that shaped them.
        </p>

        {/* Two Cards in a Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* --- Begad Card --- */}
          <div className="flex flex-col items-center mx-auto max-w-sm w-full h-full">
            {/* Floating Image */}
            <div className="w-40 h-40 -mb-8 z-10">
              <Image
                src="/img/begad-no-bg.png"
                alt="Begad Moussa"
                width={160}
                height={160}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Orange Card */}
            <div className="bg-[#F76902] rounded-lg pt-12 pb-6 px-6 w-full shadow-lg flex flex-col h-full">
              
              {/* Card Top */}
              <div>
                {/* Name: bright white */}
                <h3 className="text-2xl font-bold text-white mb-1 text-center">
                  Begad Moussa
                </h3>
                {/* Position: slightly lighter than heading */}
                <p className="text-md font-semibold text-white/80 mb-3 text-center">
                  Running for President
                </p>
                {/* Main paragraph: off‐white to break up the color */}
                <p className="leading-7 text-white/90 text-center mb-4">
                Hey everyone! I’m Begad Moussa, a third-year CIT major, and I love bringing people together to solve problems and make things better. 
                With experience leading teams and building projects, 
                I want to do the same for our campus by making student life more connected, 
                opportunities easier to access, and your voice truly heard. Let’s make it happen!
                </p>
              </div>

              {/* Card Bottom */}
              <div className="mt-auto border-t border-white/30 pt-4">
                <h4 className="text-md font-semibold mb-2 text-white text-center">
                  Previous Experiences:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-white/90 text-center">
                  <li>Tutoring team lead &amp; PTM</li>
                  <li>Start-up founder</li>
                  <li>Tech Coordinator</li>
                  <li>7+ years of professional experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- Mariia Card --- */}
          <div className="flex flex-col items-center mx-auto max-w-sm w-full h-full">
            {/* Floating Image */}
            <div className="w-40 h-40 -mb-8 z-10">
              <Image
                src="/img/mariia-no-bg.png"
                alt="Mariia"
                width={160}
                height={160}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Orange Card */}
            <div className="bg-[#F76902] rounded-lg pt-12 pb-6 px-6 w-full shadow-lg flex flex-col h-full">
              
              {/* Card Top */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 text-center">
                  Mariia Komkova
                </h3>
                <p className="text-md font-semibold text-white/80 mb-3 text-center">
                  Running for Vice President
                </p>
                <p className="leading-7 text-white/90 text-center mb-4">
                  Hey! I’m a second-year Finance student with seven years of
                  experience in community leadership. I’m committed to making
                  student life more engaging, connected, and built around your
                  voice. As VP, I’ll work to create better events, stronger
                  connections, and a campus that truly supports you. Let’s make
                  it happen – together!
                </p>
              </div>

              {/* Card Bottom */}
              <div className="mt-auto border-t border-white/30 pt-4">
                <h4 className="text-md font-semibold mb-2 text-white text-center">
                  Previous Experiences:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-white/90 text-center">
                  <li>Content &amp; Design Coordinator</li>
                  <li>Events coordinator</li>
                  <li>Student Outreach Lead</li>
                  <li>7+ years of community leadership and volunteering</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
