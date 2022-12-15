import Link from "next/link";

import { getUsers } from "../lib/users";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  let users = await getUsers();
  return {
    props: {
      users,
    },
  };
}

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      {users.map((user) => (
        <ul key={user.id}>
          <li style={{ color: "#fece2f" }}>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </li>
          <li style={{ color: "#0070f3" }}>{user.email}</li>
          <li>{user.website}</li>
        </ul>
      ))}
    </div>
  );
}
