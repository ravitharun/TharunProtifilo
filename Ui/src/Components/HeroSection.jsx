import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className="text-2xl font-bold">
      <Typewriter
        options={{
          strings: ["Protifilo", "Your Portfolio", "Your Space"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default HeroSection;
