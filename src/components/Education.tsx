import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kongu Engineering College",
      duration: "2024 - 2026",
      score: "7.67",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "B.Sc Computer Science",
      institution: "Nandha Arts and Science College",
      duration: "2021 - 2024",
      score: "CGPA: 8.2",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "Velavan Matric Higher Secondary School",
      duration: "2018 - 2020",
      score: "81%",
      icon: <Award size={24} />
    },
    {
      degree: "Secondary School (SSLC)",
      institution: "Velavan Matric Higher Secondary School",
      duration: "2017 - 2018",
      score: "79%",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start">
                  <div className="text-indigo-600 dark:text-indigo-400 mr-4">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center">
                        <Award size={16} className="mr-1" />
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}