var input = " " ;
var inputNumber;
var output = [0];
var a = 0,b,c;
var y = 0;
var z;

while (input != 'x') 
{
	input = prompt('Please enter a number. (x to exit)\nThe reverse number is ' + a );
	inputNumber = parseInt(input);
	if(input !='x')
	{
		if(!isNaN(inputNumber))
		{
			if (input.length > 0) 
			{
				a = 0;
				for ( var i = 0; i <= input.length-1; i++) 
				{	
					b = inputNumber%10;
					output[i] = parseInt(b);
					c = inputNumber/10;
					inputNumber = parseInt(c);
					a = a*10 + output[i];
				};
			}
		}else(a = 'unable to be generated. This is not a number!!');
	}
}


