//React
import { Fragment } from "react";
//Components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
//Types
import type { PostProps } from "./components/Post";
//Styles
import styles from "./App.module.css";

const posts: Array<PostProps> = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rotciv-ohlavrac.png",
      name: "Victor Rodrigues",
      role: "Web Developer",
    },
    publishedAt: new Date(),
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifolio",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rotciv-ohlavrac.png",
      name: "Victor Rodrigues",
      role: "Web Developer",
    },
    publishedAt: new Date(),
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifolio",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/rotciv-ohlavrac.png",
      name: "Victor Rodrigues",
      role: "Web Developer",
    },
    publishedAt: new Date(),
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifolio",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
];

function App() {
  function renderPosts() {
    return posts.map(({ id, ...post }) => <Post key={id} {...post} />);
  }
  return (
    <Fragment>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>{renderPosts()}</main>
      </div>
    </Fragment>
  );
}

export default App;
