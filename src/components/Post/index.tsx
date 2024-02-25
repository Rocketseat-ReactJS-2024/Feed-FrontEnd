import React, { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
//Components
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
//Styles
import styles from "./Post.module.css";

//Types
type AuthorProps = {
  avatarUrl: string;
  name: string;
  role: string;
};

type ContentProps = {
  type: "paragraph" | "link";
  content: string;
};

type PostProps = {
  id: number;
  author: AuthorProps;
  publishedAt: Date;
  content: Array<ContentProps>;
};

function Post({ author, publishedAt, content }: Omit<PostProps, "id">) {
  const [comments, setComments] = React.useState<Array<string>>([]);
  const [newCommentText, setNewCommentText] = useState<string>("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    { locale: ptBR as any }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR as any,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function submitHandler(event: any) {
    event?.preventDefault();
    setComments((oldValue) => [...oldValue, newCommentText]);
    setNewCommentText("");
  }

  function changeHandler(event: any) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function invalidCommentHandler(event: any) {
    event.target.setCustomValidity("Esse campo e obrigatorio!");
  }

  function deleteComment(comment: string) {
    setComments((oldValue) => {
      const newValue = oldValue.filter((value) => value !== comment);
      return newValue;
    });
  }

  function renderPostContent() {
    return content.map((line) => {
      if (line.type === "paragraph")
        return <p key={line.content}>{line.content}</p>;
      return (
        <p key={line.content}>
          <a href="#">{line.content}</a>
        </p>
      );
    });
  }

  function renderComments() {
    return comments.map((commentContent) => (
      <Comment
        key={commentContent}
        content={commentContent}
        onDeleteComment={deleteComment}
      />
    ));
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>{renderPostContent()}</div>
      <form onSubmit={submitHandler} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um commentario"
          value={newCommentText}
          onChange={changeHandler}
          onInvalid={invalidCommentHandler}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>{renderComments()}</div>
    </article>
  );
}

export { Post };
export type { PostProps, AuthorProps, ContentProps };
