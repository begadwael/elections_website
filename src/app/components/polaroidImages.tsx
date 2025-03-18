import Image from "next/image";

const polaroidImages = [
  { src: "/img/begaad-spring-fest.JPG", alt: "Begad at Spring Fest" },
  { src: "/img/mariia-halloween.png", alt: "Mariia at Halloween Party" },
  { src: "/img/begad-orientation.png", alt: "Begad at Orientation" },
  // { src: "/img/mariia-food.png", alt: "Mariia at Food Event" },
  { src: "/img/mariia-solo.jpeg", alt: "Mariia Halloween Solo" },
  { src: "/img/begad-gobal-day.png", alt: "Begad Summer Event" },
  { src: "/img/mariia-golf.png", alt: "Mariia at Golf Event" },
  { src: "/img/Begad-TT.png", alt: "Begad Table Tennis Event" },
  // { src: "/img/begad-tutring.jpg", alt: "Begad Tutoring Session" },
  { src: "/img/mariia-fff.png", alt: "Mariia Summer Event" },
  { src: "/img/begad-WIM.png", alt: "Begad at WIM Event" },
  { src: "/img/mariia-movie-night.png", alt: "Mariia at Movie Night" },
  { src: "/img/mariia-ritch.png", alt: "Mariia with RIT Tiger" },
  { src: "/img/mariia-WIM.png", alt: "Mariia at WIM Event" },
];

// Optional: random rotation utility
function getRandomRotation() {
  const angles = [-6, -3, -2, 2, 3, 6];
  const randomAngle = angles[Math.floor(Math.random() * angles.length)];
  return `rotate-${randomAngle}`;
}

export default function PolaroidGallery() {
  return (
    <section className="bg-[#f8f1e8] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
          Check Out Where We’ve Been Active
        </h2>

    
        {/* Polaroid Container */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-6
            
          "
        >
          {polaroidImages.map((img, index) => {
            const rotationClass = getRandomRotation();

            return (
              <div
                key={index}
                className={`
                  relative
                  bg-white
                  shadow-lg
                  rounded-sm
                  transform
                  hover:scale-105
                  transition-transform
                  duration-300
                  ${rotationClass}
                  aspect-[4/5] /* Maintains consistent Polaroid shape */
                `}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-white" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
