export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  icon: string; // Name of Lucide icon
  isCustom?: boolean;
  isBuiltIn?: boolean;
  builtInKey?: string; // Key to map to a built-in utility view
  clicks?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Name of Lucide icon
  description: string;
  color: string; // Tailwind color class for badges/accents
}

export interface UserCustomTool {
  name: string;
  url: string;
  category: string;
  description: string;
  tags: string;
  icon: string;
}
