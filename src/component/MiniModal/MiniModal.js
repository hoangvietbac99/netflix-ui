import classNames from "classnames/bind";
import styles from "./MiniModal.module.scss";
import icons from "~/assets/svg/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/linkPage";

const cx = classNames.bind(styles);

function MiniModal({ data, onClick }) {
    const nature = data.nature.split(",");
    return (
        <>
            <div className={cx("wrapper-trailer-item")}>
                <div className={cx("player")}>
                    <img className={cx("picture")} alt="" src={data.picture} />
                    <div className={cx("shadow")}></div>
                </div>
                <div className={cx("player-info")}>
                    <div className={cx("btn-direc")}>
                        <div className={cx("btn-left")}>
                            <Link to={linkPage.watchMovie}>
                                <button
                                    className={cx("btn-circle", "-play")}
                                    onClick={() => onClick(data.id)}
                                >
                                    <img
                                        className={cx("icon-l")}
                                        src={icons.iconPlay}
                                        alt=""
                                    />
                                </button>
                            </Link>
                            <button className={cx("btn-circle")}>
                                <img
                                    className={cx("icon-l")}
                                    src={icons.iconPlus}
                                    alt=""
                                />
                            </button>
                            <button className={cx("btn-circle")}>
                                <img
                                    className={cx("icon-l")}
                                    src={icons.iconLike}
                                    alt=""
                                />
                            </button>
                        </div>
                        {/*  */}
                        <div className={cx("btn-right")}>
                            <button
                                className={cx("btn-circle")}
                                onClick={() => onClick(data.id)}
                            >
                                <FontAwesomeIcon
                                    className={cx("icon-r")}
                                    icon={faChevronDown}
                                />
                            </button>
                        </div>
                    </div>
                    <div className={cx("movie-info")}>
                        <div className={cx("match")}>
                            <span>Độ trùng 90%</span>
                        </div>
                        <div className={cx("rate")}>
                            <span>{data.rate}</span>
                        </div>
                        <div className={cx("time")}>
                            <span>1h20p</span>
                        </div>
                        <div className={cx("video-qa")}>
                            <span>HD</span>
                        </div>
                    </div>
                    <div className={cx("nature")}>
                        <ul className={cx("list-")}>
                            {nature.map((item, index) => (
                                <li className={cx("-item")} key={index}>
                                    &diams;{` ${item}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MiniModal;
