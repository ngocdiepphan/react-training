export interface Recipe {
  name: string;
  description: string;
  ingredient: IngredientProps[];
  instruction: string[];
  nutrition: NutritionFact[];
  creator: string;
  collection_id: number;
  category: string;
  ratings: number;
  createdAt: number;
  id: string;
}

export interface NutritionFact {
  label: string;
  value: string;
}

export interface IngredientProps {
  ingredients: string[];
}
