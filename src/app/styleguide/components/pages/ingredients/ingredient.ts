export class Ingredient {
  name: string;
  quantity: string;
  constructor(name: string, quantity: string) {
    this.name = name;
    this.quantity = quantity;
  }
  static ingredientFactory() {
    const ingredients: Ingredient[] = [
      new Ingredient("Apples", "5"),
      new Ingredient("Tomatoes", "10"),
      new Ingredient("Potatoes", "15"),
      new Ingredient("Onions", "20"),
      new Ingredient("Carrots", "25"),
      new Ingredient("Cucumbers", "30"),
      new Ingredient("Peppers", "35"),
      new Ingredient("Broccoli", "40"),
      new Ingredient("Cauliflower", "45"),
      new Ingredient("Spinach", "50"),
      new Ingredient("Lettuce", "55"),
      new Ingredient("Celery", "60"),
      new Ingredient("Mushrooms", "65"),
      new Ingredient("Garlic", "70"),
      new Ingredient("Ginger", "75")
    ];
    return ingredients;
  }
}
