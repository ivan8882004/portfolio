import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/ivan8882004/portfolio/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/ivan8882004/portfolio/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/ivan8882004/portfolio/network',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/ivan8882004/portfolio/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/ivan8882004/portfolio/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
