import { useQuery } from "@/hooks/useQuery";
import useBoundStore from "@/store";
import { User } from "@/types";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  // const isAuthenticated = useBoundStore((state) => state.isAuthenticated);
  const { data } = useQuery<User>({
    queryKey: ["users/2"],
    enabled: false,
  });

  if (data) {
    return <Redirect href="/" />;
  }

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
