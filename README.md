# Model a Problem Domain - Car Race


The problem domain for this project is to model a car race, wich will produce a random winner for each race, with a betting system for the user to interact with. There should be a list of drivers to select from, a bank to keep track of the player's money as they win or lose bets, a field to enter a bet amount, and finally an output of the results of the race. This is to be used as a game for an online casino game.

We started our approach on this by planning out the various objects we needed to build, and how they would interact with each other. During this process we set up our constructors and variables that would be used, and then set up the functions to take in the player bet, generate the winner, and then dislplay the results of the race. Once we had everything functioning we built the HTML structure and then applied the syle sheets to finish up the site.

The end result is for the most part what we were after with this. Ideally we would have been able to include some more features to make the game more exciting, as well as add some animations to simulate each race instead of just returning the results in text form. We ran into some snags getting the objects to work together but we were able to get all of the behaviors we wanted to execute properly.



Each race involves a driver that controls a car, that has a top speed. Each driver is assigned a random skill level before each race. The player starts with a bank of $500 and is able to place a bet on one of 3 drivers. The Drivers race the cars around a track with a set distance. The speed of the car and the driver skill determine the ammount of time to go around the track one time. After the race runs, the winner of the race is displayed, and a message informing the player if they have won or lost, and the bank is updated accordingly. Once the bank reaches 0, the game is over and must be refreshed to start over.

![Please forgive my handwriting...] (images/car-race-model.png)
