// 2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var PersonName = "ERIC";
console.log("Hello, ".concat(PersonName, ",would you like to learn some Python today?"));
// 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// lower case
var personName = "Mahfooz Razzaq";
console.log("lowercase:", personName.toLocaleLowerCase());
// uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
// titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
// 4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var qoute = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(qoute));
// 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var Quote = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
var massage = "".concat(famous_person, " noce said, ").concat(Quote);
console.log(massage);
// 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName = "\n\t MAHFOOZ RAZZAQ\t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
// 7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// 8 You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var FavoriteNumber = ("10");
console.log("Favorite Number is a ".concat(FavoriteNumber));
