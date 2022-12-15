import Link from "next/link";
import { getAllUsersids, getUserData } from "../../lib/users";

export default function User({ user }) {
  return (
    <div className="card-body text-center">
      <h3>{user.name}</h3>
      <p>Email: {user.email} </p>
      <Link href="/">Back to home</Link>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return { props: { user } };
}
