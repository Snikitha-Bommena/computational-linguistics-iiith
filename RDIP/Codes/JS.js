 var text ='{"eng":['+'{"a":"John ate an apple before afternoon" ,"b": "before afternoon John ate an apple" , "c":"John before afternoon ate an apple"},'+
 '{"a":"some students like to study in the night" ,"b": "at night some students like to study"},'+
 '{"a":"John and Mary went to church" ,"b": "Mary and John went to church"},'+
 '{"a":"John went to church after eating" ,"b":"after eating John went to church" ,"c":"John after eating went to church"},'+
 '{"a":"did he go to market" ,"b": "he did go to market"},'+
 '{"a":"the woman who called my sister sells cosmetics" , "b":"the woman who sells cosmetics called my sister" ,"c": "my sister who sells cosmetics called the woman" ,"d": "my sister who called the woman sells cosmetics"},'+
 '{"a":"John goes to the library and studies" , "b":"John studies and goes to the library"},'+
 '{"a":"John ate an apple so did she" ,"b": "she ate an apple so did John"},'+
 '{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},'+
 '{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"}]}';
  var text2 = '{"hindi":['+'{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},'+
  '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},'+
  '{"a":"मैंने उसे बताया कि राम सो रहा है","b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है","j":"बताया मैंने उसे कि सो रहा है राम","k":"बताया उसे मैंने कि राम सो रहा है","l":"बताया उसे मैंने कि सो रहा है राम"},'+
  '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},'+
  '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},'+
  '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},'+
  '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":" है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}';

   function GetSelectedTextValue(language) {
        var lang = language.value;
        if(lang == "1"){
        	alert("Select language");
        	return false;

        }
        if(lang == "2"){
          document.getElementById("demo").innerHTML = "Form a sentence(Declarative or Interrogative or any other type) from the given words";
      document.getElementById("dem").innerHTML = "(select the buttons in proper order)"
      document.getElementById("input").innerHTML = "";
       var rnd = Math.floor(Math.random()*10);
       var line = JSON.parse(text);
       sentence(line.eng[rnd].a);	
        }
        if(lang == "3"){
           
        	 document.getElementById("demo").innerHTML = "Form a sentence(Declarative or Interrogative or any other type) from the given words";
      document.getElementById("dem").innerHTML = "(select the buttons in proper order)"
      document.getElementById("input").innerHTML = "";
       var rnd = Math.floor(Math.random()*7);
       var lines = JSON.parse(text2);
       sentence(lines.hindi[rnd].a); 
        }
        	 }
   function sentence(sen){
  document.getElementById("o1").style.visibility="hidden";
  document.getElementById("o2").style.visibility="hidden"
   document.getElementById("o3").style.visibility="hidden";
    var str = sen.split(" ");
   var suf = shuffle(str);
   var l = suf.length;
    for (i =0;i<l;i++){
                        var b = suf[i]
                       var btn = document.createElement("button");
                       var t = document.createTextNode(suf[i]);
                       btn.appendChild(t);
                       document.body.appendChild(btn);
                    btn.addEventListener('click', function(suf , l){
                        document.getElementById("op1").innerHTML = "Formed Sentence(after selecting words)" ;
          
    document.getElementById("op2").innerHTML+=this.innerHTML+" ";
    this.style.display="none";
    
     document.getElementById("o1").style.visibility="visible";
  

                    });}

   }  

   
    function printBtn(suf , l) {
                      
                } 
function reform(){   
}    
  function shuffle(a){
    var  j,i,temp;
    for(i = a.length-1;i>0;i--){
      j= Math.floor(Math.random()*(i+1));
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }
  

    