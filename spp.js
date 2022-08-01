// console.log(process);

process.stdout.write("This is stdout\n");
process.stdin.on("data", data => {
	var dataString = data.toString();
	console.log(dataString);
	var dataArray = dataString.trim().split(' ');
	if(dataArray.length == 3){
		var outString = "";
		var a = dataArray[0];
		var b = dataArray[1];
		var c = dataArray[2];
		for(var i=1; i<=c; i++){
			if(i%a == 0) outString += "A";
			if(i%b == 0) outString += "B";
			if(i%a && i%b) outString += i;
			outString += " ";
		}
		process.stdout.write(outString.trim());
		process.stdout.write("\n");
	}
});