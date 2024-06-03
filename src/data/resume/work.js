/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Worldquant',
    position: 'Research Consultant',
    url: 'https://www.worldquant.com/',
    startDate: '2024-02-01',
    summary: 'WorldQuant is a global quantitative asset management firm with over $7 billion in assets under management',
    highlights: [
      'Mentored by WorldQuant Quant Researchers',
      'Seek insights from financial economics paper, generate and submit alpha regularly',
      'Utilized multithreading to simulate alpha signal with WorldQuant Api',
    ],
  },
  {
    name: 'Rivermap Quantitative Research',
    position: 'Research analyst intern',
    url: 'https://www.rivermap.com.hk/',
    startDate: '2023-12-18',
    endDate: '2024-01-29',
    summary: 'Rivermap Quantitative Research advocates the use of scientific and systematic approach for investment. Rivermap is dedicated to carry out investment research to promote in-depth understanding of the global capital market',
    highlights: [
      'Utilized SQL, Python, and Pandas to extract and process financial data from Refinitiv',
      'Performed web crawling using Selenium and Request libraries to extract financial data',
      'Leveraged BERT large language model for text classification. Trained and fine-tuned the model to predict the probability that a given text pertains to the future planning of listed firms',
    ],
  },
  {
    name: 'University of Hong Kong',
    position: 'Teaching Assitant',
    url: 'https://www.cs.hku.hk/',
    startDate: '2023-09-01',
    endDate: '2023-12-01',
    summary: 'Served as a teaching assistant for COMP2113 Computer (C++) Programming II courses for Department of Computer Science',
    highlights: [
      'Instructed students on topics such as pointers, dynamic memory management, the Standard Template Library (STL), and linked lists',
    ],
  },
  {
    name: 'HKDSE',
    position: 'Private Tutor',
    url: 'https://www.hkeaa.edu.hk/en/hkdse/',
    startDate: '2022-07-01',
    endDate: '2024-01-01',
    summary: 'Tutored 8 high school students for Mathematics, Physics, Chemistry, English, Information technology',
    highlights: [
      'Taught 4 to 5 students during my every semester from year 1 to year 2',
      'Increased my time managment and communication skills',
      'It is a really fulfilling job',
    ],
  },

];

export default work;
