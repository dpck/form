export { default as Pages } from './Menu'
import { version, name } from '../../package.json'

export const Figure = ({ img, alt, children }) => {
  return <p className="Figure">
    <img src={img} alt={alt}/><br/>
    {children}
  </p>
}

export const NPMBadge = ({ package: p, version: v, children }) => {
  const [c = p] = children
  return (<a href={`https://npmjs.com/package/${p}`} className="Badge">
    <span className="name">{c}</span>
    <span className="version">{v}</span>
  </a>)
}

export const SelfNPMBadge = () => {
  return (<NPMBadge version={version} package={name}/>)
}

export const Script = () => {
  const rnd = Math.floor(Math.random() * 1000000)
  return <script src={'js/main.js?t=' + rnd}></script>
}

export const GitHubBadge = ({ org, name: n }) => {
  return (<a href={'https://github.com/' + `${org}/${n}`} className="SimpleBadge">GitHub</a>)
}
