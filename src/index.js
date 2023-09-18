// Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок
// має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
//
//     const words = ["apple", "banaNA", "kiWi", "ORANGE"];
//
// console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]
function capitalizeStrings(words){
    const capitalizedWords = [];
    for (const word of words){
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord);
    }
    return capitalizedWords;
}
const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]