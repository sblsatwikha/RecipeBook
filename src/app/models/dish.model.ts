export interface Dish {
    ID: string;
    dishName: string;
    image: string;
    calories: string;
    recipe: string;
    time: string;
    Ingredients: string[]; 
    servings: string;
    isFavorite: boolean;
}