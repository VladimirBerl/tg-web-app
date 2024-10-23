import styles from './UserName.module.scss'
const UserName = ({name}) => {
  return (
    <span className={styles.name}>{name}</span>
  )
}

export default UserName