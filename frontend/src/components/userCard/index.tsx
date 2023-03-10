import Button from '../button'
import styles from './UserCard.module.scss'

interface Props {
  availability?: string
  id?: string
  imageUrl?: string
  isOwner: boolean
  name?: string
}

// User object should be read from context or staticProps
export const UserCard = ({ availability, imageUrl, name, id, isOwner }: Props) => {
  return (
    <section className={styles.userCard}>
      <div className={`${styles.info} ${styles.borderB}`}>
        <img className={styles.avatar} src={imageUrl} alt={`${name}'s profile`} />
        <h1 className={styles.name}>{name}</h1>
      </div>
      {isOwner ? <BodyForOwner id={id} /> : <BodyForVisitor availability={availability} />}
    </section>
  )
}

const BodyForOwner = (props: { id?: string }) => (
  <nav>
    <div className={`${styles.nav} ${styles.borderB}`}>
      <div>
        <a className={styles.navLink} href="#">
          Dashboard
        </a>
      </div>
      <div>
        <a className={styles.navLink} href="#">
          Messages
        </a>
      </div>
      <div>
        <a className={styles.navLink} href="#">
          Adverts
        </a>
      </div>
    </div>
    <div className={`${styles.settings} ${styles.borderB}`}>
      <a className={styles.navLink} href="#">
        Settings
      </a>
    </div>
    <div className={styles.postAnAd}>
      <a className={styles.navLink} href="#">
        Post an ad
      </a>
    </div>
  </nav>
)

const BodyForVisitor = ({ availability }: { availability?: string }) => (
  <>
    <div className={`${styles.actions} ${styles.borderB}`}>
      <Button>Show Contact</Button>
      <Button className={styles.mt} color="secondary" variant="outlined">
        Leave a review
      </Button>
    </div>
    <div className={styles.availability}>
      <h4 className={styles.availabilityTitle}>Availability</h4>
      <p className={styles.availabilityText}>{availability}</p>
    </div>
  </>
)

export default UserCard
