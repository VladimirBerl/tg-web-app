import styles from './UserName.module.scss'
const UserName = ({name}) => {
  return (
    <p className={styles.name}>{name}</p>
  )
}

export default UserName