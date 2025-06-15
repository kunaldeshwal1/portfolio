import {
  Code2,
  Database,
  Palette,
  Globe,
  GitBranch,
  FileCode,
  Zap,
  Settings,
  Figma,
  Camera,
  Box,
  Terminal,
  Chrome,
} from "lucide-react";

const skills = [
  { name: "ReactJS", icon: Code2, color: "text-cyan-400" },
  { name: "NodeJS", icon: Code2, color: "text-green-500" },
  { name: "MongoDB", icon: Database, color: "text-green-400" },
  { name: "Tailwind", icon: Palette, color: "text-cyan-400" },
  { name: "CSS", icon: FileCode, color: "text-blue-500" },

  { name: "HTML", icon: Globe, color: "text-orange-500" },
  { name: "postgreSQL", icon: Database, color: "text-blue-400" },
  { name: "JavaScript", icon: FileCode, color: "text-yellow-400" },
  { name: "Git", icon: GitBranch, color: "text-orange-600" },
  { name: "SCSS", icon: Palette, color: "text-pink-500" },

  { name: "Postman", icon: Settings, color: "text-orange-500" },
  { name: "VS Code", icon: Terminal, color: "text-blue-400" },
  { name: "Chrome Dev tools", icon: Chrome, color: "text-green-500" },
];

export default function SkillsSection() {
  return (
    <div className="min-h-screen bg-black p-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-slate-600 transition-colors duration-300 aspect-square group cursor-pointer"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <skill.icon
                  size={48}
                  className={`${skill.color} group-hover:drop-shadow-lg`}
                />
              </div>
              <span className="text-white text-sm font-medium text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
