export type ProfileFieldDoc = {
  type: string;
  default: string;
  used_in: string;
  description: string;
};

export type ProfileField = {
  path: string;
  name: string;
  value: unknown;
  value_kind: 'number' | 'boolean' | 'array' | 'rgb' | 'string_list' | 'string' | 'unknown';
  doc: ProfileFieldDoc | null;
};

export type ProfileSection = {
  id: string;
  label: string;
  description: string;
  fields: ProfileField[];
};

export type RenderingProfilePayload = {
  profile_name: string;
  base_profile: string;
  is_custom: boolean;
  region_name: string;
  sections: ProfileSection[];
};
