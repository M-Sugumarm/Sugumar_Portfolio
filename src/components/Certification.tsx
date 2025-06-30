import { motion } from 'framer-motion';
import { Certi, Coursera1, Coursera2 } from '../images';
import DatabricksImg from '../images/Databricks.png';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Oracle Apex Cloud Developer Certified Associate',
    issuer: 'Oracle',
    date: 'May 2025',
    credentialUrl: 'https://mylearn.oracle.com/ou/learning-path/become-an-oracle-apex-developer-professional-2025/146080',
    image: Certi,
  },
  {
    id: '2',
    title: 'Start the UX design process: Empathize, Define, and Ideate',
    issuer: 'Coursera',
    date: 'March 2024',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/DN6R9W532G44',
    image: Coursera1,
  },
  {
    id: '3',
    title: 'Foundations of UI/UX Design',
    issuer: 'Coursera',
    date: 'May 2024',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/LXWNAE5C40SW',
    image: Coursera2,
  },
  {
    id: '4',
    title: 'Databricks',
    issuer: 'Databricks',
    date: 'April 2025',
    credentialUrl: 'https://credentials.databricks.com/0e6be895-7d41-4a65-bf33-fda05328ddf0#acc.HIXoBkmp',
    image: DatabricksImg,
  },
];

export default function Certification() {
  return (
    <section id="certification" className="relative py-20 min-h-[40vh] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert: Certification, idx: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col gap-4 items-center group transition-transform duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-56 h-56 object-contain bg-white rounded-xl mb-4 border-4 border-indigo-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300 shadow-md"
                style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)', padding: '1rem' }}
                whileHover={{ scale: 1.12, rotate: 2 }}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center group-hover:text-indigo-600 transition-colors duration-300">{cert.title}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-indigo-600 hover:underline text-sm"
                >
                  View Credential
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
