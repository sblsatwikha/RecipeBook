export interface Dish {
    ID: string;
    image: string;
    dishName: string;
    Ingredients: string[]; 
    time: number;
    calories: number;
    recipe: string;
    servings: string;
    isFavorite: boolean;
    findMore: string;
}