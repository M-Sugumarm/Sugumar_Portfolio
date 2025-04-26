import { Trophy, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "First Place in Quitrix",
      description: "Secured 1st Place in Quitrix, competing in both marketing and quiz categories. A Prestigious Technical Event Held At Gobi Arts And Science College, Erode Demonstrating Exceptional Problem-Solving And Analytical Skills.",
      year: "2022",
      icon: <Trophy size={24} />
    },
    {
      title: "First Place in Scramblers",
      description: "Won 1st Place in the Scramblers event at the Inter-Collegiate Meet, Vellalar Women's College, Erode 2021, showcasing outstanding problem-solving abilities and strategic thinking in a dynamic and competitive environment.",
      year: "2021",
      icon: <Star size={24} />
    },
    {
      title: "Second Prize at Biozephyr",
      description: "Won second prize at Velalar College's symposium, Biozephyr, demonstrating exceptional skills and knowledge in a competitive environment. This achievement highlights creativity, strategic thinking, and the ability to excel under pressure.",
      year: "2023",
      icon: <Trophy size={24} />
    },
    {
      title: "Third Prize in Riddle Competition",
      description: "Won third prize in the riddle competition at SMNV College's Technomanzer 22 event, showcasing problem-solving skills and quick thinking. Demonstrated creativity and logical reasoning in a competitive environment.",
      year: "2022",
      icon: <Star size={24} />
    },
    {
      title: "Second Place in Cruces 2023",
      description: "Secured second Place In Cruces 2023, competing in quiz A Prestigious Technical Event Held At Gobi Arts And Science College, Erode Demonstrating Exceptional Problem-Solving And Analytical skills.",
      year: "2023",
      icon: <Trophy size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Achievements
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start">
                  <div className="text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-indigo-600 dark:text-indigo-400">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {achievement.description}
                    </p>
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