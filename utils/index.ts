import * as SecureStore from "expo-secure-store";

export type TokenBundle = {
  accessToken: string;
  refreshToken: string;
};

export const storeTokens = async (tokenBundle: TokenBundle): Promise<void> => {
  await Promise.all([
    SecureStore.setItemAsync("access_token", tokenBundle.accessToken),
    SecureStore.setItemAsync("refresh_token", tokenBundle.refreshToken),
  ]);
};

export const getTokens = async (): Promise<TokenBundle> => {
  const accessToken: string | null = await SecureStore.getItemAsync(
    "access_token"
  );

  const refreshToken: string | null = await SecureStore.getItemAsync(
    "refresh_token"
  );

  return { refreshToken: refreshToken || "", accessToken: accessToken || "" };
};

export const clearTokens = async (): Promise<void> => {
  await Promise.all([
    SecureStore.deleteItemAsync("access_token"),
    SecureStore.deleteItemAsync("refresh_token"),
  ]);
};

export const getErrorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
