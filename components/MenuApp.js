import Link from 'next/link';
const LINK_APP = [
  {
    name: 'populars',
    link: '/',
    title: ''
  },
  {
    name: 'newest',
    link: '/newest',
    title: ''
  },
  {
    name: 'distance',
    link: '/distance',
    title: ''
  },
  {
    name: 'random',
    link: '/random',
    title: ''
  },
  {
    name: 'alpha',
    link: '/alpha',
    title: ''
  }
];
export default () => (<nav>
  <ul>
    {LINK_APP.map(({ name, link }) => <li key={name.toString()}><Link href={link}><a>{name}</a></Link></li> )}
  </ul>
</nav>);