import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    "Frontend",
    "UX/UI",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
  ];
  return (
    <div className="relative h-32 mb-16">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          className="absolute text-sm border-2 border-black bg-white  py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          animate={{
            x: Math.sin(index) * 100,
            y: Math.cos(index) * 50,
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
          style={{
            left: "45%",
            top: "50%",
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}
