(function($) {
	$.fn.blackjack = function(options) {
		var o = $.extend({
			"dealerName": "Dealer",
			"playerName": "Player",
			"bet": 5
		},options);

		/* period card images */

		return this.each (function() {
			//create and load HTML for plugin
			var html ="<label>" + "o.dealerName + ":</label>";
			html = html + <span>&nbsp; </span>";
			html = html + "<div id='dealer'>&nbsp;</div>";
			...
			$(this).html(html);

			var showResults = function() {
				/* show all cards and totals, disable Hit and Stand */
				if (game.playerWins() ) {
					$("#outcome").text( "You Win!" );
					game.updateBalance( o.bet );
				} else if (game.dealerWins() ) {
					$("outcome").text( "You Lose :(" );
					game.updateBalance( - o.bet );
				} else { $("#outcome").text ( "PUSH" ); }
				$("#balance").text("Balance: " + game.balance );
			};
			$("#deal").click( function() {
				game.deal();
				if (game.dealer.hasBlackJack()||game.player.hasBlackJack())
						{showResults(); }
				else { /* show cards (hide hole card) & player total */ }
			});
			$("#hit").click( function() {
				game.hit("player");
				if ( game.player.busted() ) { showResults(); }
			else { /* show player cards and total */ }
		});
		$("#stand").click(function() {
			/* show dealer cards and total and disable Hit and Stand */
			var timer = setInterval (function() {
				if ( game.dealer.mustHit() ) {
					game.hit("dealer");
					/* show dealer cards and total */
				} else {
					clearInterval(timer);
					showResults();
				}
			},
			1000);
		});
	});
};
})(jQuery);


