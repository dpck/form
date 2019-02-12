export { default as Pages } from './Menu'

export const Figure = ({ img, alt, children }) => {
  return <p className="Figure">
    <img src={img} alt={alt}/><br/>
    {children}
  </p>
}

export const NPMBadge = ({ package: p, version }) => {
  return (<a href={`https://npmjs.com/packages/${p}`} className="Badge">
    <span className="name">NPM</span>
    <span className="version">{version}</span>
  </a>)
}

export const Script = () => {
  const rnd = Math.floor(Math.random() * 1000000)
  return <script src={'js/main.js?t=' + rnd}></script>
}

export const GitHubBadge = ({ org, name }) => {
  return (<a href={'https://github.com/' + `${org}/${name}`} className="SimpleBadge">GitHub</a>)
}
