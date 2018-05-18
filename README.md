# Dragon Age ARENA

An RPG using jQuery

## Description

[Dragon Age ARENA](https://xandromus.github.io/dragon-age-arena/)

![Dragon Age ARENA](https://xandromus.github.io/responsive-portfolio/assets/images/dragonage.png)

An RPG based on characters from BioWare's Dragon Age series of games. All characters, music, and the name Dragon Age are copyright BioWare.

The user selects a fighter and an opponent from a stable of four characters. If the fighter defeats the opponent, the user selects another opponent. The user wins if they are able to defeat all three of the other opponents. The user loses if any of the opponents defeat their fighter.

Each character available to the user has 3 unique values:

1. Health
2. Attack Power
3. Enemy Counter Attack Power

Once the user selects the fighter and opponent, they are able to attack the opponent. The fighter's attack is followed immediately by a counter attack from the opponent, but the fighter's attack always occurs before the opponent's attack, meaning that the user can win a battle before receiving a counter attack.

The attack power and enemy counter attack power values are different for each character, and the enemy counter attack value is always higher than the attack value for that character.

The enemy attack power for the opponent remains constant during the battle, but the fighter gains an increase to attack power by the base value with each click. This increase carries over between opponents until the user wins or loses.

Each character has the ability to win and lose the game, and the strategy comes in figuring out the order in which each fighter should fight the other opponents.

Main theme music and winning music can be toggled on/off at any point during the game. Sound effects cannot be turned off.

The main theme music starts when the game loads, except on mobile/tablet where autoplay is disallowed. On these devices, the theme music begins when the user selects their fighter.

## Characters Included

4 Dragon Age characters were included in the game:

- Morrigan
- Alistair
- Varric
- Cassandra

## Concepts Used

This is a simple RPG built with jQuery. It expands on previously learned JavaScipt concepts, but it uses the primary advantages of jQuery in the construction of the game:

- DOM element selection
- traversal
- manipulation

## Built With

- Sublime Text - Text Editor
- Git Bash

## Authors

- **Xander Rapstine** - [Xander Rapstine](https://github.com/Xandromus)
- **BioWare** - [BioWare](http://www.bioware.com/en/)