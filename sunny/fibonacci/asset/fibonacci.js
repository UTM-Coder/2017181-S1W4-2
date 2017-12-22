n1=prompt('Please insert the first number for fibonacci');
i1=n1;
n2=prompt('Please insert the second number for fibonacci');
i2=n2;
term=prompt('Please insert the number of term for fibonacci');
document.write(+i1+' '+i2);

inputn1 = parseInt(n1);
inputn2 = parseInt(n2);

for (var i = 1; i <=term-2 ; i++) {
	sum=inputn1+inputn2;
	inputn1=inputn2;
	inputn2=sum;
	Ans=
	document.write(' '+sum);
}
