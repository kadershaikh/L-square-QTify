import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, slug, follows, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            {/* <Link style={{textDecoration: 'none'}} to={`/album/${slug}`}> */}
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.toptitle}>
                <p>{title}</p>
              </div>
            </div>
            {/* </Link> */}
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title, songs } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <Chip label={`${likes} Likes`} size="small" className={styles.chip} />
              </div>
            </div>
            <div className={styles.toptitle}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };
  return getCard(type);
};

export default Card;
