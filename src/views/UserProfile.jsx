import UserCard from "../components/userCard";
import BunnyAvatar from "../assets/bunny_avatar.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserProfile.module.scss";

const dummyUser = {
  availability: "Mon - Sun (9am - 6pm)",
  name: "Mark Smith",
  imageUrl: BunnyAvatar,
  userId: "129",
};

export default function Profile() {
  const { userId } = useParams();
  // Not the best API but I will improve this in the next commit
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const isOwner = userId > 1;

  useEffect(() => {
    new Promise((reject, resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setUser(dummyUser);
        return resolve(null);
      }, 2500);
    });
  }, [userId]);

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  return (
    <section className={styles.container}>
      <div>
        <UserCard isOwner={isOwner} {...user} />
      </div>
      <div className={styles.advertsContainer}>
        <div className={styles.advertTitle}>
          <h1 className={styles.advertHeading}>My Adverts</h1>
        </div>
        <div className={styles.advertList}>
          <p className={styles.noAdverts}>
            There are no adverts yet.
            <br />
            Create a new one now!
          </p>
        </div>
      </div>
    </section>
  );
}
