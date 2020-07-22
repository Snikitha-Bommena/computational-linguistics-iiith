var c1 = ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough.When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. \"How shall I climb out?\" said the mouse. \"oh, how shall I climb out?\" Just then a rat came along, and he heard the mouse. \"Mouse,\" said the rat, \"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."];
var c2 = ["A wolf carried off a lamb. The lamb said, \" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.\" The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."];
var c3 = ["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."];
 var r =0;
 function GetSelectedTextValue(corpus) {
        var lang = corpus.value;
        if(lang == "1"){
         document.getElementById("demo").innerHTML = c1;
         document.getElementById("dem").innerHTML = "Enter the correct number of tokens and types from the corpus";
         r = 1;
        }
        if(lang == "2"){
          document.getElementById("demo").innerHTML = c2;
                   document.getElementById("dem").innerHTML = "Enter the correct number of tokens and types from the corpus";
                   r = 2;
        }
        if(lang == "3"){
           document.getElementById("demo").innerHTML = c3;
                    document.getElementById("dem").innerHTML = "Enter the correct number of tokens and types from the corpus";
                    r = 3;
        }
    }
    function ele(){
        document.getElementById("o2").style.visibility="hidden";
        document.getElementById("op1").innerHTML=""; 
        document.getElementById("o3").style.visibility="hidden";
        document.getElementById("o4").style.visibility="hidden";
    }
  function submit(){
  	var x = document.getElementById("token").value;
     	var y = document.getElementById("type").value;
     	var c=0;
     	var d=0;
     if(r == 1){
     	if(x == 169){
     		c=1;
     		document.getElementById("token").style.background = "green"
     	}
     	else{
     		document.getElementById("token").style.background = "red"
     	}
     	if(y == 80){
     		d = 1;
     		document.getElementById("type").style.background = "green"
     	} 
     	else{
     		document.getElementById("type").style.background = "red"
     	}}
      if(r == 2){
     if(x == 111){
     		c=1;
     		document.getElementById("token").style.background = "green"
     	}
     	else{
     		document.getElementById("token").style.background = "red"
     	}
     	if(y == 65){
     		d = 1;
     		document.getElementById("type").style.background = "green"
     	} 
     	else{
     		document.getElementById("type").style.background = "red"
     	}
     }
      if(r == 3){
      if(x == 221){
     		c=1;
     		document.getElementById("token").style.background = "green"
     	}
     	else{
     		document.getElementById("token").style.background = "red"
     	}
     	if(y == 95){
     		d = 1;
     		document.getElementById("type").style.background = "green"
     	} 
     	else{
     		document.getElementById("type").style.background = "red"
     	}
     }
     if((c == 1) && (d == 1)){
         document.getElementById("op1").innerHTML="<span style='color:green;font-style:bold;font-size:35px'>Right answer!!!</span>";
          document.getElementById("o2").style.visibility="visible";
     	}
     	else{
     		document.getElementById("op1").innerHTML="<span style='color:red;font-style:bold;font-size:35px'>Wrong answer!!!</span>";
     	}
     	c =0;
     	d = 0;
     }
  function conti(){
  	document.getElementById("o1").style.visibility="hidden";
  	document.getElementById("op1").innerHTML=""; 
  	document.getElementById("op2").innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."; 
   document.getElementById("o2").style.visibility="hidden";
   document.getElementById("op1").innerHTML="#new types:";
   document.getElementById("o3").style.visibility="visible";
   document.getElementById("o4").style.visibility="visible";
  }
  function snow(){
  	
  }