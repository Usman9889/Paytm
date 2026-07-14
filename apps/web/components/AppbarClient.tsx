"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/Appbar";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession();
  console.log("Session:", session);
  console.log("User:", session.data?.user);
  const router = useRouter();
  return (
   <div>
      <Appbar onSignin={signIn} onSignout={async () => {
        await signOut()
        router.push("/api/auth/signin")
      }} user={session.data?.user} />
   </div>
  );
}