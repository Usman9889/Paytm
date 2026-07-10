import styles from "../page.module.css";
import { prisma } from "@repo/db";

export default async function User() {
  const user = await prisma.user.findFirst();
  return <div className={styles.page}>{user?.name ?? "No user added yet"}</div>;
}