/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			// $gallery.poptrox({
			// 	baseZIndex: 10001,
			// 	useBodyOverflow: false,
			// 	usePopupEasyClose: false,
			// 	overlayColor: '#1f2328',
			// 	overlayOpacity: 0.65,
			// 	usePopupDefaultStyling: false,
			// 	usePopupCaption: true,
			// 	popupLoaderText: '',
			// 	windowMargin: 50,
			// 	usePopupNav: true
			// });

			// Custom gallery modals:
			$('.modal-child').hide();
			$('.modal-bg').hide();

			// Resume and email:
			$('.email').hide();
			$('.download-button').hide();
			$('.resume-overlay-wrapper').hide();

			console.log(document.documentElement.clientWidth);
			console.log(document.documentElement.clientWidth > 414);
			
			console.log(parseInt(document.documentElement.clientWidth));
			console.log(parseInt(document.documentElement.clientWidth) > 414);

			if(parseInt(document.documentElement.clientWidth) > 414) {
				// Resume download capability:
				$('#resume').hover(() => {
					$('.download-button').fadeIn(500);
					$('.resume-overlay-wrapper').fadeIn(300);
				});

				$('#resume').mouseleave(() => {
					$('.download-button').fadeOut(300);
					$('.resume-overlay-wrapper').fadeOut(500);
				});

				// Custom gallery modals:
				$('#soundshroud-img').click(() => {
					$('#soundshroud-modal').fadeIn(500);
					$('.modal-bg').fadeIn(300);
				});

				$('#masher-img').click(() => {
					$('#masher-modal').fadeIn(500);
					$('.modal-bg').fadeIn(300);
				});

				$('#plantr-img').click(() => {
					$('#plantr-modal').fadeIn(500);
					$('.modal-bg').fadeIn(300);
				});

				$('#showdown-img').click(() => {
					$('#showdown-modal').fadeIn(500);
					$('.modal-bg').fadeIn(300);
				});

				$('#cys-img').click(() => {
					$('#cys-modal').fadeIn(500);
					$('.modal-bg').fadeIn(300);
				});

				$('#best-wines-img').click(() => {
					$('#best-wines-modal').fadeIn(500);
					$('.modal-bg').fadeIn(300);
				});

				$('.x').click(() => {
					$('.modal-bg').fadeOut(200);
					$('.modal-child').fadeOut(200);
				});

				$('.modal-bg').click(() => {
					$('.modal-bg').fadeOut(200);
					$('.modal-child').fadeOut(200);
				});
			}

			

			// Hack: Adjust margins when 'small' activates.
				// breakpoints.on('>small', function() {
				// 	// $gallery.each(function() {
				// 	// 	$(this)[0]._poptrox.windowMargin = 50;
				// 	// });
				// });

				// breakpoints.on('<=small', function() {
				// 	// $gallery.each(function() {
				// 	// 	$(this)[0]._poptrox.windowMargin = 5;
				// 	// });
				// });

		});

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'25vh',
							bottom:		'25vh',
							delay:		10,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { 
								$(this).addClass('inactive');
								$('.modal-child').fadeOut('slow');
								$('.modal-bg').fadeOut('slow');
							}
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'10%',
							delay:		40,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() {
								$(this).removeClass('inactive');
								$('.email').fadeIn(300);
							},
							leave:		function() {
								$(this).addClass('inactive');
								$('.email').fadeOut(200);
							}
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 800,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

})(jQuery);