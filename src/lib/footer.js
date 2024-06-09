import FacebookIcon from 'assets/facebook.svg'
import TwitterIcon from 'assets/twitter.svg'
import LinkedInIcon from 'assets/linkedIn.svg'
import GithubIcon from 'assets/github.svg'
import LinktreeIcon from 'assets/linktree.svg'

const socials = [
  {
    name: 'facebook',
    link: 'https://proxar.ranaintizar.com/me/facebook',
    icon: <FacebookIcon />,
  },
  {
    name: 'linkedin',
    link: 'https://proxar.ranaintizar.com/me/linkedin',
    icon: <LinkedInIcon />,
  },
  {
    name: 'twitter',
    link: 'https://proxar.ranaintizar.com/me/twitter',
    icon: <TwitterIcon />,
  },
  {
    name: 'github',
    link: 'https://proxar.ranaintizar.com/me/github',
    icon: <GithubIcon />,
  },
  {
    name: 'linktree',
    link: 'https://proxar.ranaintizar.com/me/linktree',
    icon: <LinktreeIcon />,
  },
]

const links = [
  { name: 'Home', path: '/' },
  { name: 'Scanner', path: '/scanner' },
  { name: 'Generator', path: '/generator' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export { socials, links }
