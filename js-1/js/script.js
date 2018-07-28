
let answers





function myFirstApp(name, age){
	
	alert("Привет, меня зовут " + name + " и это моя первая программа!");


	function showSkills(){
		let skills = ["html", "css", "cms wordpress", "cms joomla"];
        document.write("Я владею навыками: " + "<br>");
		for(let i = 0; i < skills.length; i++){
			document.write(skills[i] + "<br>");	
		}

	}

	showSkills();

	function checkAge(){
		if(age > 18){
			document.write("Есть все шансы стать веб разрабочиком" + "<br>");	
		}else{
			document.write("Нужно еще долго учится, чтобы думать о программировании" + "<br>");
		}
	}
	checkAge();

	function calcPow(num){
		document.write(num * num);
	}
	calcPow(4);

}

myFirstApp("Vasiliy", 38);

	

