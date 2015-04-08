/**
*PROJECT		: Prayer-Request-Form
*Developer		: Glean Team
*Date			: 08-April-2015
*/

$( function() {
	var Church = {
		init: function() {
			this.toggleMenu();
		},
		
		toggleMenu: function() {
			$('nav .menu').click( function() {
				$('nav ul').slideToggle( 200 );
			});
		}
	}
	
	$( document ).ready( function() {
		Church.init();
	});
});