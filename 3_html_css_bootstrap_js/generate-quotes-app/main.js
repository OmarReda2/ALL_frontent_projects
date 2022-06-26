var quoyteArray = [];

quoyteArray[0] = `"Be yourself;
 everyone else is already taken."
<br><br>-- Oscar Wilde`;

quoyteArray[1] = `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
<br><br>-- Marilyn Monroe`;

quoyteArray[2] = `'A friend is someone who knows all about you and still loves you."
<br><br>-- Elbert Hubbard`

quoyteArray[3] = `"Two things are infinite: the universe and human stupidity;
 and I'm not sure about the universe."
<br><br>-- Albert Einstein`;

quoyteArray[4] = `"So many books, so little time."
<br><br>-- Frank Zappa`;

quoyteArray[5] = `"A room without books is like a body without a soul."
<br><br>-- Marcus Tullius Cicero`;

quoyteArray[6] = `"You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth."
<br><br>-- William W. Purkey`;

quoyteArray[7] = `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."
<br><br>-- Dr. Seuss`;

quoyteArray[8] = `"You only live once, but if you do it right, once is enough."
<br><br>-- Mae West`;

quoyteArray[9] = `"Be the change that you wish to see in the world."
<br><br>-- Mahatma Gandhi`;

quoyteArray[10] = `"In three words I can sum up everything I've learned about life: it goes on."
<br><br>-- Robert Frost`;

quoyteArray[11] = `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
<br><br>-- J.K. Rowling, Harry Potter and the Goblet of Fire`;

quoyteArray[12] = `"Don't walk in front of me… I may not follow
Don't walk behind me… I may not lead
Walk beside me… just be my friend"
<br><br>-- Albert Camus`;

quoyteArray[13] = `"If you tell the truth, you don't have to remember anything."
<br><br>-- Mark Twain`;

quoyteArray[14] = `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."
<br><br>-- C.S. Lewis, The Four Loves`;


quoyteArray[15] = `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
<br><br>-- Maya Angelou`;


function newQuote() {
    document.getElementById('quote').innerHTML = quoyteArray[Math.round(Math.random() * 15)];
    
}