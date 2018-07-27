function Gallery(sSelector) {
	// ***************** свойства ******************* //
	let g = this;
	g.init(sSelector);
	g.displayCurrent   = g.findObj('.display');
	g.buttonMain       = g.findObj('.button_start');
	g.buttonNext       = g.findObj('.button_next');
	g.buttonPrev       = g.findObj('.button_prev');
	g.buttonMusic      = g.findObj('.button_music');
	g.buttonS          = g.findObj('.button');
	g.displayInfo      = g.findObj('.display_info');
	g.firstObj         = g.createObjDiv();
	g.secondObj        = g.createObjDiv();
	g.prevObject       = '';
	g.startPosition    = 0;
	g.imageMaxPosition = 21;
	g.currentImage     = '';
	g.nextImage        = '';
	g.prevImage        = '';
	g.currentNext      = 0;
	g.currentPrev      = 0;
	/**
	 *  @param g.slideshowIntervalStart Признак того что работает
	 *  @param setInterval() */
	g.slideshowIntervalStart = null;
	/**
	 * @param g.slideshowStart признак запуска слайдшоу*/
	g.slideshowStart = false;
	let music    = new Audio();
	music.src    = '../audio/Alize_Mon_maquis.mp3';
	music.volume = 0.75;
	// ******************* настройки ******************* //
	// * С какой картинки стартует показ */
	g.currentImage       = 'url(\'../images/gallery/9.JPG\')';
	g.timeAnim           = 3 * 1000;
	g.backgroundSize     = '100% 100%';
	g.height             = '550px';
	g.width              = '600px';
	// ******************* методы ******************* //
	g.startInit          = function () {
		g.addObjToPage();
		
		g.setNumberQueue();
		g.initObj();
		g.setDisplayInfoText();
	};
	g.addObjToPage       = function () {
		g.displayCurrent.append(g.firstObj, g.secondObj);
	};
	g.initObj            = function () {
		g.firstObj.css({
			               'background': g.currentImage,
			               'background-size': g.backgroundSize,
			               'opacity': 1.0,
			               'height': g.height,
			               'width': g.width,
			               'position': 'relative'
		               });
		g.secondObj.css({
			                'background': g.nextImage,
			                'background-size': g.backgroundSize,
			                'opacity': 0.0,
			                'height': g.height,
			                'width': g.width,
			                'position': 'absolute',
			                'top': 0
		                });
	};
	g.rotation           = function () {
		g.checkEndLength(g.returnCurrentNumber(g.currentImage));
		g.changeImageCurrent(g.firstObj).animate({'opacity': 0.0}, g.timeAnim);
		g.changeImageNext(g.secondObj).animate({'opacity': 1.0}, g.timeAnim);
		g.currentImage = g.nextImage;
		g.setNumberQueue();
		g.setDisplayInfoText();
	};
	g.changeImageCurrent = function (oObject) {
		oObject.css({
			            'background-image': g.currentImage,
			            'background-size': g.backgroundSize,
			            'opacity': 1.0
		            });
		return oObject;
	};
	g.changeImageNext    = function (oObject) {
		oObject.css({
			            'background-image': g.nextImage,
			            'background-size': g.backgroundSize,
			            'opacity': 0.0
		            });
		return oObject;
	};
	
	g.show                 = function () {
		if (g.slideshowStart){
			g.stopSlideshow();
			g.addBtmMusicBacklight();
		}
		else{
			g.setSlideshowData('stop', true);
			g.setDisplayInfoText('Слайдшоу запущено');
			g.addButtonBacklight(g.buttonMain);
			g.rotation();
			g.slideshowIntervalStart = setInterval(g.rotation, g.timeAnim * 2);
		}
		g.startStopMusic(); //? *************************************
	};
	g.stopSlideshow        = function () {
		g.setSlideshowData('start', false);
		clearInterval(g.slideshowIntervalStart);
		g.setDisplayInfoText('Слайдшоу остановлено');
		g.startStopMusic(); //? *************************************
	};
	g.setSlideshowData     = function (btnText, slideshowStart) {
		g.buttonMain.text(btnText);
		g.slideshowStart = slideshowStart;
	};
	g.setDisplayInfoText   = function (sStr) {
		if (!sStr){
			sStr = (
			       g.returnCurrentNumber(g.currentImage) + 1
			       ) + ' изображение из ' + (
			       g.imageMaxPosition + 1
			       );
		}
		g.displayInfo.text(sStr);
	};
	g.showNextImage        = function () {
		g.dropOpacityPrev();
		g.displayImage(g.nextImage);
		g.setDisplayInfoText();
		if (g.slideshowStart){
			g.stopSlideshow();
		}
		g.setNumberQueue();
		g.addButtonBacklight(g.buttonNext);
	};
	g.showPreviousImage    = function () {
		g.dropOpacityPrev();
		g.displayImage(g.prevImage);
		g.setDisplayInfoText();
		if (g.slideshowStart){
			g.stopSlideshow();
		}
		g.setNumberQueue();
		g.addButtonBacklight(g.buttonPrev);
	};
	g.checkEndLength       = function (iNumb) {
		if (iNumb >= g.imageMaxPosition + 1){
			iNumb = g.startPosition;
		}
		else if (iNumb < g.startPosition){
			iNumb = g.imageMaxPosition;
		}
		return iNumb;
	};
	g.displayImage         = function (sCurrentPatch) {
		g.firstObj.css({
			               'background-image': sCurrentPatch,
			               'background-size': g.backgroundSize,
			               opacity: 1.0
		               });
		g.currentImage = sCurrentPatch;
	};
	g.returnCurrentNumber  = function () {
		return n = parseInt(g.currentImage.replace(/\D+/g, ''));
	};
	g.setNumberQueue       = function () {
		g.currentNext = g.currentPrev = g.returnCurrentNumber(g.currentImage);
		g.nextImage = 'url(\'../images/gallery/' + g.checkEndLength(++g.currentNext) + '.JPG\')';
		g.prevImage = 'url(\'../images/gallery/' + g.checkEndLength(--g.currentPrev) + '.JPG\')';
	};
	g.dropOpacityPrev      = function () {
		g.prevObject = g.firstObj;
		g.prevObject.css({
			                 opacity: 0.0
		                 });
		g.secondObj.css({
			                opacity: 0.0
		                });
	};
	g.galleryEvents        = function () {
		// console.info(event.which, event.altKey, event.ctrlKey, event.shiftKey);
		if ((
			    event.ctrlKey
		    ) && (
			    event.which === 32
		    )){
			if (!g.slideshowStart){
				g.show();
			}
			else if ((
				         event.ctrlKey
			         ) && (
				         event.which === 32
			         )){
				g.stopSlideshow();
			}
		}
		if (event.which === 37){
			g.showPreviousImage();
		}
		if (event.which === 39){
			g.showNextImage();
		}
		if (event.which === 77){
			g.startStopMusic();
		}
	};
	g.addButtonBacklight   = function (oButton) {
		g.buttonS.css({
			              'color': 'rgba(255, 255, 255, 0.582)'
		              });
		oButton.css({
			            'color': 'rgb(0, 196, 0)'
		            });
		g.addBtmMusicBacklight();
	};
	g.addBtmMusicBacklight = function () {
		if (g.slideshowStart){
			g.buttonMusic.css({
				                  'color': 'rgb(0, 202, 216)'
			                  });
		}
		else if (!g.slideshowStart){
			g.buttonMusic.css({
				                  'color': 'rgba(255, 255, 255, 0.582)'
			                  });
		}
	};
	g.startStopMusic       = function () {
		
		if (music.paused){
			music.play();
			g.buttonMusic.css({
				                  'color': 'rgb(0, 202, 216)'
			                  });
		}
		else{
			music.pause();
			g.buttonMusic.css({
				                  'color': 'rgba(255, 255, 255, 0.582)'
			                  });
		}
	};
	g.startInit();
	// ******************* события ******************* //
	g.buttonMain.click(g.show);
	g.buttonPrev.click(g.showPreviousImage);
	g.buttonNext.click(g.showNextImage);
	g.buttonNext.click(g.showNextImage);
	g.buttonMusic.click(g.startStopMusic);
	$('body').keyup(g.galleryEvents);
}

Gallery.prototype = new Component();
