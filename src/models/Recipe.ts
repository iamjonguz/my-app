import { RecipeIngredient } from "./Ingredients";

export interface Recipe {
    name: string;
    presentation: string;
    image?: JSX.Element;
    instructions: Instruction[];
    ingredients: RecipeIngredient[];
}

export interface Instruction {
    instruction: string;
    order: number;
    time?: string;
}