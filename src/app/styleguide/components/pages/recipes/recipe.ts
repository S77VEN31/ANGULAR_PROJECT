export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
  static recipeFactory() {
    const recipes: Recipe[] = [
      new Recipe(
        "Apple Pie",
        "A delicious apple pie",
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
      ),
      new Recipe(
        "Apple Pie",
        "A delicious apple pie",
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
      )
    ];
    return recipes;
  }
}
