import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <div className="text-white text-lg font-semibold">
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1000,
          "MERN Stack Developer",
          1000,
          "Data Analytics Enthusiast",
          1000,
          "UI/UX Designer",
          1000,
          "React Developer",
          1000,
          "Full-Stack Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>

  );
}
