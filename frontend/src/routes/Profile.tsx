import { FC, Suspense } from 'react'
import { useLoaderData } from 'react-router-dom'

import { useAuthValues } from 'providers/AuthProvider'

import Loader from 'components/loader'
import UserCard from 'components/userCard'

import styles from './Profile.module.scss'

const ProfilePage = () => {
  const { user } = useAuthValues()
  const userProfileData: any = useLoaderData()

  const isOwner = userProfileData._id === user?._id

  return (
    <Suspense fallback={<Loader />}>
      <Profile isOwner={isOwner} loggedInUser={user} userProfileData={userProfileData} />
    </Suspense>
  )
}

interface Props {
  isOwner: boolean
  loggedInUser: any
  userProfileData: any
}

const Profile: FC<Props> = ({ isOwner, userProfileData, loggedInUser }) => (
  <section className={styles.container}>
    <div>
      <UserCard isOwner={isOwner} />
    </div>
    <div className={styles.advertsContainer}>
      <div className={styles.advertTitle}>
        <h1 className={styles.advertHeading}>My Adverts</h1>
      </div>
      <div className={styles.advertList}>
        <p className={styles.noAdverts}>
          {userProfileData.products.length === 0 ? (
            <>
              There are no adverts yet.
              <br />
              Create a new one now!
            </>
          ) : (
            <>
              <br>LIST OF PRODUCTS:</br>
              {userProfileData.products.map((_: any, index: any) => (
                <span key={index}> Product {index}</span>
              ))}
            </>
          )}
        </p>
      </div>
    </div>
  </section>
)

export default ProfilePage
