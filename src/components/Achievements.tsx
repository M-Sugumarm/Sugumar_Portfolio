import { Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="achievements" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 relative z-10 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <div className="text-indigo-600 dark:text-indigo-400">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
