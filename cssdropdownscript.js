/*
	Title : Css Responsive dropdown script
	Author : Raja Mohammed
	Author url : www.cthreelabs.com
	Git repo : https://github.com/rajamohammed/cssdropdown
	
*/
$(document).ready(function(){
	/*Add Caret to Dropdown and submenu */
	$('ul.menubar li:has(ul), ul.sm-menu li:has(ul)').addClass('has-child');
			
		
	/*Mobile Nav*/
	if($('.mobile-menu').is(':visible')){
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
});