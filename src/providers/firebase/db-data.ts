export const dbData = {
  "courses": [
    {
      "url": "python-intro",
      "description": "Introduction to programming",
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
      "longDescription": "Establish a solid layer of fundamentals, learn what's under the hood of ",
      "lessons": [
        {
          "url": "variables",
          "title": "Variables",
          "description": "",
          "duration": "2:49",
          "tags": "BEGINNER",
          videoUrl: "https://www.youtube.com/embed/du6sKwEFrhQ",
          "subCategory": [],
          "longDescription": "",
          "lectureNotes": "Variables are just boxes that you can put other things into. You can put numbers, words, other variables, and any value you can think of inside a variable. A variable is a box for stuff! Today we will be working only with strings and ints. Strings are words that are enclosed in either “” or ” Ints are whole numbers",
          "examples": ['a = 2 #a is now 2', 'b = 3 #b is now 3', 'c = a + b #c is now 5', 'd = a + 5 #d is now 7', 'a = d #a is now 7',
            'my_string = "a string here"', 'my_other_string = "a string here"', "a = '4'", 'b = int(a)', 'b == 4', 'a = 4', 'b = str(a)', "b == '4'"]
        },
        {
          "url": "input-and-output",
          "title": "Input and Output",
          "description": "",
          "duration": "2:07",
          "tags": "BEGINNER",
          videoUrl: "https://www.youtube.com/embed/VES1eTNxi1s",
          "subCategory": [{"title": "Getting Input From Our Program",
            "lectureNotes": "We can use variables to store things we ask our user. Our input is normally a string!",
            "examples": ['name = input("What is your name? ")', 'age = int(input("How old are you? "))']},
            {"title": "Writing to Our Console", "lectureNotes": "", "examples": ["# You can print words", 'print ("This will write words out to our console")', '# You can print variables', 'a = 5', 'print(a)', '#The above will print 5 to our console']},
            {"title": "Putting it all together", "lectureNotes": '', "examples": ['print("A program to add up some ages")', 'name = input("What is your name? ")', 'age1 = int(input("How old are you? "))', 'age2 = int(input("How old is your partner? "))', 'print ("Between you,",name,", you are",age1+age2,"years old")']}],
          "longDescription": "We can use variables to store things we ask our user. Our input is normally a string!",
          "lectureNotes": "",
          "examples": []
        },
      ],
      "challenges": [
        {"url": "challenge-0",
          "title": "Challenge 0",
          "description": "What’s your favorite animal?",
          "hints": ["Variables and Input and Output are all you need"],
          "exampleOutput": ["What is your favorite animal? Dog", "My favorite animal is the Dog too!"]},
        {"url": "challenge-1",
          "title": "Challenge 1",
          "description": "Madlibs",
          "hints": ["You can ask for multiple variables and use them multiple times. Have fun writing whatever you like with as many blanks as you would like."],
          "exampleOutput": ["Give me a noun: monkey", "Give me a verb: fly", "Give me a noun: koala", "When you are programming make sure you bring your monkey and your wits. They will serve you well as you fly the koala."]}
      ]
    }
  ]
};







