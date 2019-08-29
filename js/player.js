let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}
let PlayerMoves = {
    calcAttack: function() {
        //who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemyspeed = enemy.speed;

        //player attacks
        let playerAttack = function() {
                let calcBasDamage;
                if (player.mana > 0) {
                    calcBasDamage = player.strength * player.mana / 1000;
                } else {
                    calcBasDamage = player.strength * player.agility / 1000;
                }
                let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                let calcOutputDamage = calcBasDamage + offsetDamage;
                //number of hits
                let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
                let attackValues = [calcOutputDamage, numberOfHits];
                return attackValues;
            }
            //enemy attack
        let enemyAttack = function() {
                let calcBasDamage;
                if (enemy.mana > 0) {
                    calcBasDamage = enemy.strength * enemy.mana / 1000;
                } else {
                    calcBasDamage = enemy.strength * enemy.agility / 1000;
                }
                let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                let calcOutputDamage = calcBasDamage + offsetDamage;
                //number of hits
                let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
                let attackValues = [calcOutputDamage, numberOfHits];
                return attackValues;
            }
            //get player/enemy health to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        //inititate attacks
        if (getPlayerSpeed >= getEnemyspeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] +
                " times. ");
            if (enemy.health <= 0) {
                alert("You win refresh browser to play again.");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                //enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] +
                    " times. ");
                if (player.health <= 0) {
                    alert("You lost! Refresh browser to play again.");
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health: 0';
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        } else if (getPlayerSpeed <= getEnemyspeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] +
                " times. ");
            if (player.health <= 0) {
                alert("You lost! refresh browser to play again.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                //player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] +
                    " times. ");
                if (enemy.health <= 0) {
                    alert("You win! Refresh browser to play again.");
                    getEnemyHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }
    }
}