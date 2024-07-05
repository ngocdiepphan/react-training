export interface Recipe {
  name: string;
  description: string;
  ingredient: string[];
  instruction: { step: number; description: string; }[];
  nutrition: NutritionFact[];
  creator: string;
  collection_id: number;
  category: string;
  ratings: number;
  createdAt: number;
  id: string;
  prepTime: {
    min: string;
    max: string;
  };
  serving: string;
  img: string;
}

export interface NutritionFact {
  label: string;
  value: string;
}

export interface IngredientProps {
  ingredients: string[];
}

export interface InstructionProps {
  instruction: {
    step: number;
    description: string;
  }[];
}
