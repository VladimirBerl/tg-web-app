import styles from './UserLevel.module.scss'
const UserLevel = ({level}) => {
  return (
    <span className={styles.level}>Уровень {level}</span>
  )
}

export default UserLevel