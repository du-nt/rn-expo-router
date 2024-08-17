import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Text } from "react-native";
import { Link } from "expo-router";
import { t } from "@/i18n";
import { useQuery } from "@/hooks/useQuery";
import useBoundStore from "@/store";
import { Button } from "react-native-paper";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "@/types";

export default function HomeScreen() {
  const queryClient = useQueryClient();
  const unAuthenticate = useBoundStore((state) => state.unAuthenticate);

  const { data } = useQuery<User>({
    queryKey: ["users/2"],
    enabled: false,
  });

  const handleLogout = () => {
    unAuthenticate();
    queryClient.removeQueries();
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.stepContainer}>
        <Text className="text-2xl text-center text-red-600">
          {t("common.hello", { name: data?.name })}👋
        </Text>
        <Link
          asChild
          className="text-center w-48 bg-violet-400 text-md p-2"
          href="/explore"
        >
          <Button mode="outlined">Go to Explore</Button>
        </Link>
      </ThemedView>

      <Button mode="contained" onPress={handleLogout}>
        Logout
      </Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
