# cssdropdown
Responsive CSS dropdown .

<h3>Installation : </h3>

Entire menu should be inside  div tag with  <b>class="navmenu"</b>

First UL tag should have the  <b>class="list-line menubar"  </b>

Paste the following script, To display caret symbol where menu items have sub menu. 
<pre>$('ul.menubar li:has(ul), ul.sm-menu li:has(ul)').addClass('has-child');</pre>



<h3>For responsive behaviuor :</h3>

Use the below HTML above the navmenu class with default hidden display (style added in menu.css)


<pre> 
div class="mobile-menu"
a href="#" class="menu-touch" Menu /a
/div 
</pre>
Note: Remember to add '<' and '>'  where ever necessary in the above html code


add the following script 

<pre>if($('.mobile-menu').is(':visible')){
	$('.menu-touch').click(function(){
		if($('.navmenu >ul').is(':visible')){
			$('.navmenu >ul').css('display','none').addClass('sm-menu');
		}
		else{
			$('.navmenu >ul').removeClass('list-inline menubar').css('display','block').addClass('sm-menu');      
			if($('.sm-menu li ul') .is(':hidden')){
				$('.sm-menu li').click(function(){
					if($(this).find('ul').is(':visible')){
						$(this).find('ul').css('display','none');
					}
					else{
						$(this).find('ul').css('display','block');
					}
				});
			}
		}
	});
}
</pre>
