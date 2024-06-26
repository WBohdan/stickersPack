import { Link } from "react-scroll";

// ui
import { Button } from "@ui";

// assets
import { trumpOnTrampoline } from "@images";

// styles
import styles from "./HeaderWidget.module.scss";

const HeaderWidget = () => {
  return (
    <div className={styles["headerWidget"]}>
      <div className={styles["headerWidget__topWidget"]}></div>
      <div className={styles["headerWidget__menu"]}>
        <h1>
          <span>TRAMP</span>OLINE
        </h1>

        <nav>
          <li onClick={() => window.location.reload()}>HOME</li>

          <Link to="tokenomics" smooth={true} duration={500}>
            <li>TOKENOMIKS</li>
          </Link>

          <Link to="game" smooth={true} duration={500}>
            <li>GAME</li>
          </Link>

          <Link to="join_us" smooth={true} duration={500}>
            <li>JOIN US</li>
          </Link>
        </nav>
      </div>

      <div className={styles["headerWidget__contentWrapper"]}>
        <div className={styles["headerWidget__content"]}>
          <h1>Join our mission</h1>
          <p>
            We're going to help Trump trampoline into space, and to do that,
            we're looking for a team to jump with us. Pack your bags and hit the
            jump while there's still time. We are flying out! It will be an
            exciting journey! ☄️ 🚀🛸👨‍🚀👽
          </p>
          <div className={styles["headerWidget__contentButton"]}>
            <Button text="Buy a ticket to the trampoline 🚀" />
          </div>
        </div>
        <img src={trumpOnTrampoline} />
      </div>
    </div>
  );
};

export default HeaderWidget;
