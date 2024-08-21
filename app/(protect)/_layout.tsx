import { useQuery } from "@/hooks/useQuery";
import useBoundStore from "@/store";
import { User } from "@/types";
import { Redirect, Slot } from "expo-router";

export default function ProtectLayout() {
  // const isAuthenticated = useBoundStore((state) => state.isAuthenticated);
  const { data } = useQuery<User>({
    queryKey: ["users/2"],
    enabled: false,
  });

  if (!data) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
}
