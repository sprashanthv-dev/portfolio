import React from 'react';

import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <>
      <div className={styles.profile_photo}>
        <img src="/images/logo.png" alt="Landing Page Logo" />
      </div>
      <div className={styles.profile_summary}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque
          modi quae saepe vitae. Fugit iure nesciunt quos reprehenderit!
          Aspernatur at dolorem exercitationem facilis laboriosam officia saepe
          saepe sapiente sequi unde!as
        </p>
      </div>
    </>
  );
};

export default Profile;
