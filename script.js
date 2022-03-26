var names=new Array();
names[0]="Lion";
names[1]="Monkey";
names[2]="Jaguar";
names[3]="Tiger";
names[4]="jackal";
names[5]="elephant";
names[6]="Dog";
names[7]="Jay";
names[8]="jacamar";
names[9]="cheetah";
for(var i = 0; i< names.length; i++){
	if(names[i].charAt(0)=='J'||names[i].charAt(0)==='j'){
	console.log('Goodbye ' + names[i]);
}
else{
	console.log('Hello ' + names[i]);

}
}