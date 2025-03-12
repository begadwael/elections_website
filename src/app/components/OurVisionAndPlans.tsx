import Image from "next/image";

const visionItems = [
  {
    title: "First year ambassador program",
    text: `Creating a program tailored to first-year students to help them be a part of our community,
     by assigning them student mentors, & creating first-year focused information sessions and events, to make sure our new faces feel at home.`,
    imgSrc: "img/First-year-ambassador-program.png",
  },
  {
    title: "RIT Escape Room",
    text: `A fully interactive, university-themed escape room where students work in teams to solve puzzles, crack codes, and uncover secrets to “escape” within a set time.
     Each escape scenario could be based on RIT’s history, culture, or even a specific department, making it a fun and engaging way for students to learn more about their university and bond with their peers.`,
    imgSrc: "img/escape-room.webp",
  },
  {
    title: "More study & common space",
    text: `Creating more study and common spaces on campus, such as a dedicated study room, a gaming room, or a lounge area, to provide students with more options to relax, socialize, and work on projects outside of their dorms or classrooms. We have those on campus, it's just not enough.`,
    imgSrc: "img/space.JPG",
  },
  {
    title: "Rebranding Social Platforms",
    text: `Elevating our social media presence with a cohesive brand book to ensure better visibility and engagement with the student body,
     as well as creating a more interactive and engaging website for students to access information and resources.`,
    imgSrc: "img/brand-book.png",
    pdfLink: "https://drive.google.com/file/d/1qrgnwUcHBx0DCAA3phBqjhNfzdCakzTw/view?usp=sharing",
  },
  {
    title: "Smart Campus Hackathon",
    text: `A 24-48 hour innovation challenge where students collaborate to develop tech-driven solutions that enhance campus life. 
    Projects could include AI-powered services, IoT smart devices, or sustainability-focused apps.`,
    imgSrc: "img/smart-campus.webp",
  },
  {
    title: "RIT Dubai's Own Pawprints",
    text: `Establishing more direct and transparent communication channels between students and SG, 
    as well as finally implementing a Pawprints-like system to help allow students to propose their ideas
     and tell us their concerns in an easier fashion.`,
    imgSrc: "img/paw-prints.png",
  },
  {
    title: "Support for Department Clubs",
    text: `Strengthening department clubs by providing more resources and structured support,
     to help them grow and provide more opportunities for students to engage with their field of study.`,
    imgSrc: "img/clubs.png",
  },
  {
    title: "Reforms in SG",
    text: `Implementing structural improvements, such as optimizing the team structure to reduce inefficiency from within SG
     and creating a more transparent and accountable system for the student body.`,
    imgSrc: "img/reform.webp",
  },
];

export default function OurVisionAndPlans() {
  return (
    <section className="bg-[#f8f1e8] py-16 px-4 " id="plan">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Our Plans for Next Year!!
        </h2>

        {/* Vision Items */}
        <div className="space-y-16">
          {visionItems.map((item, index) => {
            const isEven = index % 2 === 0; // For alternating layout

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Text Column */}
                {isEven ? (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>

                    {/* PDF Link Button */}
                    {item.pdfLink && (
                      <a
                        href={item.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline mt-2 block"
                      >
                        View PDF
                      </a>
                    )}
                  </div>
                ) : (
                  // If it's an odd row, we place the image first
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg shadow-md"
                      unoptimized
                    />
                  </div>
                )}

                {/* Image Column */}
                {isEven ? (
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg shadow-md"
                      unoptimized
                    />
                  </div>
                ) : (
                  // If it's an odd row, we place text second
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>

                    {/* PDF Link Button */}
                    {item.pdfLink && (
                      <a
                        href={item.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline mt-2 block"
                      >
                        View The full brand book
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
