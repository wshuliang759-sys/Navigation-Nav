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
  alternatives?: Array<{ name: string; url: string }>;
  seoTraffic?: {
    rank?: number; // Global rank / Traffic rank index
    monthlyVisits?: string; // Monthly traffic estimate e.g., "1.2M", "500K"
    seoScore?: number; // SEO health index (0-100)
  };
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
