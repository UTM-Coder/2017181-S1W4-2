var y = 0;
var sum = [0,1,1];
var input = '';

while (input != 'x') 
{
	input = prompt('Please enter a number. (x to exit)\nThe fibonacci series is ' + y );
	inputNumber = parseInt(input);
	if(input !='x')
	{
		if(!isNaN(inputNumber))
		{
			if (inputNumber == 1){ y = 1 ; }
			else if (inputNumber == 2){ y = 1 ; }
			else
			{
				for (var i = 3; i <= inputNumber; i++) 
						{
							sum[i] = sum[i-1] + sum[i-2];
							y = sum[i];
						}
			}
		
		}
		else(y = 'only apply for number only!!');
	}
}