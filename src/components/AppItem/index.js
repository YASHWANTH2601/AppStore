import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app
  return (
    <li className="app_listItems">
      <img alt={appName} className="app_img" src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
