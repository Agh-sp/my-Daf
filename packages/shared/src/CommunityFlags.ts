const communityFlags: Record<string, string> = {
  hezbollah: "/flags/hezbollah.png",
  sepah: "/flags/sepah.png",
};

export function communityFlagUrl(key: string): string | undefined {
  return communityFlags[key];
}
