number = Math.random() *100;
ans = parseInt(number);
input='';

while(ans != input) {
	input=prompt('Please insert your guess value:')
	if (input > ans) {
		alert('Your guess value is too HIGH. Guess another value')
	}
	else if (input < ans) {
		alert('Your guess value is too LOW. Guess another value')
	}
}
		alert('Congratulation! The ANSWER is '+ ans+ '! Yeng loh!')