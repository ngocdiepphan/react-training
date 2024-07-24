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
  createdAt: Date | string;
  id: string;
  prepTime: {
    min: string;
    max: string;
  };
  serving: string;
  img: string;
  imgCreator: string;
  comments: number;
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
