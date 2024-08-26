import styles from './UserLevel.module.scss'
const UserLevel = ({level}) => {
  return (
    <p className={styles.level}>Уровень {level}</p>
  )
}

export default UserLevel