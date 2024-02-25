import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  hasBorder?: boolean;
};

function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}

export { Avatar };
