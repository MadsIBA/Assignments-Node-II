## Assignment Node II.0

Command: npm run test
Paste in URL: http://localhost:3000/test.html?name=Niels&position=Lecturer&height=183

Via "req.url" kan vi få fat i URL'en.
F.eks når man skriver http://localhost:3000/test.html?name=Niels&position=Lecturer&height=183 ind i stedet for localhost:3000
kan man via: console.log('Log: URL Split: ' + getJSONString(req.url.split(/[&?]/))); få et output der ser sådan ud:

Log: URL Split: [
"/test.html",
"name=Niels",
"position=Lecturer",
"height=183"
]

## Assignment Node II.1

Command: npm run test2
Open file: indexPOST.html

I dette eksempel med POST får vi information der er submiitted via vores HTML form logget i terminalen

Resultatet kan ikke blive bogmærket af brugeren da der ikke sker nogen ændring i URL'en

## Assignment Node II.1a

Command: npm run test2
Open file: indexGET.html

I dette eksempel med GET får vi information der er submittet via vores HTML form logget i url'en
Dette er ikke er særlig smart såfremt det information brugeren har indtastet er privat/sensitiv information.

GET er brugbart hvis brugeren gerne vil have mulighed for at bogmærket resultatet.

## Assignment Node II.3

Command: npm run test3
Paste in URL: http://localhost:3000/
http://localhost:3000/info
http://localhost:3000/contact
http://localhost:3000/about
http://localhost:3000/hello
http://localhost:3000/error
http://localhost:3000/<eget valg>

Tilføjet ekstra kode til II3.js så URL not found skriver This is my 404, requested url not found.

## Lavet en løsning 2 til Assignment Node II.3

Command: npm run test3

Paste in URL: http://localhost:3000/
http://localhost:3000/info
http://localhost:3000/contact
http://localhost:3000/about
http://localhost:3000/hello
http://localhost:3000/error
http://localhost:3000/<eget valg>
