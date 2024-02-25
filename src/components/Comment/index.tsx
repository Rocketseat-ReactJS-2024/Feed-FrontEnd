//Components
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
//Styles
import styles from "./Comment.module.css";
import { useState } from "react";

//Types
type CommentProps = {
  content: string;
  onDeleteComment?: (comment: string) => void;
};

function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState<number>(0);

  function clickHandler() {
    setLikeCount((oldValue) => oldValue + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/rotciv-ohlavrac.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Rodrigues</strong>
              <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:30">
                Publicado ha 1h
              </time>
            </div>
            <button
              title="Deletar comentario"
              onClick={() => {
                if (onDeleteComment) onDeleteComment(content);
              }}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={clickHandler}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export { Comment };
export type { CommentProps };
