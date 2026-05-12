export type ProfileUser = {
  name: string;
  email: string;
  avatarUri: string;
};

export type SettingItem = {
  id: string;
  label: string;
  /** Simple glyph for the circular icon (emoji / symbol) */
  iconChar: string;
};

export type SettingSection = {
  id: string;
  title: string;
  items: SettingItem[];
};
