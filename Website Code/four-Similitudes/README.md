. Francesca Brierley 2021 - four Similitudes .

Website documenting my 2021 Degree Project for Bsc Digital Arts Computing at Goldsmiths.

In The Order of Things, Foucault describes the four Similitudes which, up until the end of the Sixteenth Century, were believed to be the main principles of resemblance between all things: Convenientia, Aemulatio, Analogia and Sympatheia. These Similitudes inspired this series of computational representations, shifting and morphing behind the deforming glass domes mounted on four handcrafted wooden visualisers.

Forged in a pocket of time intersecting past and future, these mystical, legendary items, invaluable instruments of divination and windows into the inner workings of the world, providing arcane visualisations of the fundamental laws governing the forces that tie together the fabric of all things, materialised in my garden one morning.



1. Convenientia

Convenientia is a similitude of properties in things belonging to the same environment.

I used poseNet technology in ml5.js and p5.js to track the movement of my arms and classify poses which in turn trigger the animation of the GAN2art generated images created on RunwayML with a custom dataset trained on images of branches. The program sources specific image vectors from RunwayL and animates the transition based on the PoneNet classification. I researched and revised both vector maths and midpoint logic and came up with the formula that would allow me to move from one vector image to the next by looping through the 512 numbers within each image vector array, finding the difference and then modifying the elements to move each frame toward the next. The model is hosted here and can be interacted with (please limit the time you use it as I will be charged per frame!)



2. Aemulatio

Aemulatio is the invisible link that connects things across space, like the reflection of a mirror.

I trained a custom GAN2art machine learning model on a database of images of stars and plants. I then exported the outputs as a latent walk video from RunwayML. The model is hosted here and can be interacted with.



3. Analogia

Analogia ties the most disparate things to our human perception, which stands in relation to all else.

In this code two lights chase one another, reverberating and morphing to a soundscape led by the sound of a heart beat. They represent Foucault's analogy between the blood in our veins and the cycles of the stars in the sky.

The sketch is in p5.js and uses the standard libraries. It draws upon this Solar System example by McMike: https://editor.p5js.org/McMike/sketches/9fn_RbQv8

Contains original soundscape controlled by mousePressed.



4. the Play of Sympathies

And lastly the play of Sympathy and Antipathy, which pull together and keep apart all the elements of the world in a constant dance.

The sketch is a physics simulation resembling a sea anemone, the autonomous agents (tentacles) moving in mesmerising ondulating motion of attraction and separation.  

The simulated forces used to mimic the attraction and repulsion of sympathy and antipathy:
 - force attracting the tentacles to the center 
 - force of friction with the surrounding environment
 - repellant force pushing the heads apart from one another 

By holding the mouse, more heads are added to the sea anemone array, which gradually grows in size and complexity. As the creature grows, the repellant force seems to be pushing the heads further out, away from each other, but they always converge towards the center.

The sketch is in p5.js and uses the standard libraries. It draws upon the Flocking example from The Nature of Code by Daniel Shiffman.

