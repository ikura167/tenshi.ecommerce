import styles from "./comingsoon.module.css";

export default function ComingSoon() {
  return (
    <div className={styles["container"]}>
      <div className={styles["main-content"]}>
        <div className={styles["logo-section"]}>
          <a href="/home" className={styles["logo-circle"]}>
            <img src="/logo.png" alt="" />
          </a>
        </div>

        <div className={styles["heading-section"]}>
          <div className={styles["background-text"]}>
            <h1 className={styles["background-heading"]}>STAY</h1>
            <h1 className={styles["background-heading"]}>TUNE</h1>
          </div>
          <div className={styles["coming-soon"]}>Coming Soon</div>
        </div>

        <div className={styles["vietnamese-section"]}>
          <p className={styles["vietnamese-text"] + " " + styles["subtitle"]}>
            Một cách mua sắm mới sắp ra mắt
          </p>
          <p className={styles["vietnamese-text"] + " " + styles["title"]}>
            Hãy Theo Dõi
          </p>
        </div>
      </div>

      <div className={styles["footer-waves"]}>
        <svg
          className={styles["waves-svg"]}
          viewBox="0 0 494 427"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00634766 213.5C41.172 173.469 82.3376 133.438 123.503 156.122C164.669 177.472 205.835 262.872 247 277.55C288.166 290.894 329.331 234.85 370.497 206.828C411.663 177.472 452.828 177.472 493.994 177.472V427H0.00634766V213.5Z"
            fill="#D27694"
          />
          <path
            d="M0 28.0219C41.1656 56.0438 82.3313 113.422 123.497 106.75C164.663 98.7438 205.828 28.0219 246.994 13.3438C288.159 0 329.325 42.7 370.491 49.3719C411.656 56.0438 452.822 28.0219 493.988 0V427H0.00634766V28.0219Z"
            fill="#D27694"
          />
        </svg>
      </div>
    </div>
  );
}
