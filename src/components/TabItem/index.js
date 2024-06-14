import './index.css'

const TabItem = props => {
  const {item, updateActiveTabId, isActive} = props
  const {tabId, displayText} = item
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  const onTabClick = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li>
      <button
        className={`tab-btn ${activeTabClassName}`}
        type="button"
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
