var randomnumber = parseInt(Math.random()*100) ;
var x,y;
var inputNumber;
var input;
var y = 'to predict the number generated.'

while (input != 'x') 
{
	input = prompt('Computer will automatic generate a number. Please enter a number between 1 to 100. (x to exit)\n' + y );
	inputNumber = parseInt(input);
	if(input !='x')
	{
		if(!isNaN(inputNumber))
		{
			if (inputNumber > 100){y = 'Attention!!! Please enter a number between 1 to 100.'}
			else if (inputNumber > randomnumber){y = 'The number is too high!!!'}
			else if (inputNumber < randomnumber){y = 'The number is too low!!!'}
			else {y = 'You are correct!!!'};
		}
		else(y = 'please enter a number only!!');
	}
}