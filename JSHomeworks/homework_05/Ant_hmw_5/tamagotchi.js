function Tamagotchi(name, moves, src ){
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.name = name || "noName";
    this.moves = moves || "walks";
    
    }
    


    // Пение соловья
    var srcSoundNightingale = 'http://boobooka.com/wp-content/uploads/2013/08/Zvuki-prirody-Solovey-vostochnyy.mp3';
    
    var nightingale = new Tamagotchi("nightingale", "fly", srcSoundNightingale);
    console.log(nightingale.moves);
     console.log("Пение соловья:", nightingale.sound.play());

    // Звук пингвина
    var srcSoundPenguin = 'http://boobooka.com/wp-content/uploads/2017/09/zapis-zvuka-pingvina.mp3?_=3';
    var penguin = new Tamagotchi("penguin", "walk & float", srcSoundPenguin);
    console.log(penguin.name,": " , penguin.moves);

//penguin.sound.play();

