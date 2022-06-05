let recipe = {
    'title': 'Sườn xào chua ngọt',
    'servings': 2,
    'ingredients': ['400g sườn thăn','4 tbsp nước mắm', '5tsp đường', '5tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây(ớt chuông)']
};

console.log(`Tên món: ${recipe.title}`);
console.log(`Khẩu phần ăn: ${recipe.servings}`);
console.log(`Thành phần:`);
for(let i = 0; i < recipe.ingredients.length; i++){
    console.log(`- ${recipe.ingredients[i]}`);
}