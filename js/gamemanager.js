let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case 'Warrior':
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case 'Rouge':
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case 'Mage':
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
            case 'Hunter':
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.png" alt="' + classType + '"  class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health:' + player.health + '</p><p>Mana:' + player.mana + '</p><p>Stength:' + player.strength + '</p><p>Agility:' + player.agility + '</p><p>Speed:' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for the Enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //create enemy!
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 180, 200);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Go for the Attack</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.png" alt"' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health:' + enemy.health + '</p><p>Mana:' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>speed: ' + enemy.speed + '</p></div>';
    }
}