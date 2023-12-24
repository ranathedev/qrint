import FacebookIcon from 'assets/facebook.svg'
import TwitterIcon from 'assets/twitter.svg'
import LinkedInIcon from 'assets/linkedIn.svg'
import GithubIcon from 'assets/github.svg'
import LinktreeIcon from 'assets/linktree.svg'

const socials = [
  {
    name: 'facebook',
    link: 'https://linkzar.fly.dev/facebook',
    icon: <FacebookIcon />,
  },
  {
    name: 'linkedin',
    link: 'https://linkzar.fly.dev/linkedin',
    icon: <LinkedInIcon />,
  },
  {
    name: 'twitter',
    link: 'https://linkzar.fly.dev/twitter',
    icon: <TwitterIcon />,
  },
  {
    name: 'github',
    link: 'https://linkzar.fly.dev/github',
    icon: <GithubIcon />,
  },
  {
    name: 'linktree',
    link: 'https://linkzar.fly.dev/linktree',
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
