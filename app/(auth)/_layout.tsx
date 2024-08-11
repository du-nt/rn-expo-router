import useBoundStore from "@/store";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const isAuthenticated = useBoundStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <Stack>
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
    </Stack>
  );
}
