import React from 'react';

const UserProfile = () => (
  <>
    <TechGadget />
    <GameDetails />
    <MusicDetails />
    <FitnessApp />
    <TravelInfo />
    <PetInfo />
    <FurnitureInfo />
    <ClothingInfo />
    <StationeryInfo />
  </>
);

function TechGadget() {
  return (
    <>
      <h1>Gadget: Smartwatch</h1>
      <h2>Brand: Samsung</h2>
      <h3>Features: Heart Rate Monitor</h3>
      <img 
      src='https://images.samsung.com/is/image/samsung/assets/in/wearables/galaxy-watch5/buy/360-watch5.png' 
      alt='Smartwatch' 
      width='200'
    />
      <Warranty />
    </>
  );
}
const Warranty = () => <p>Warranty: 2 Years</p>;

function GameDetails() {
  return (
    <>
      <h1>Title: God of War</h1>
      <h2>Genre: Action-Adventure</h2>
      <h3>Rating: 9.5/10</h3>
      <img
      src='https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'
       alt='God of war' 
      width='200'
      />


      < Platform />
    </>
  );
}
const Platform = () => <p>Platform: PlayStation 5</p>;

function MusicDetails() {
  return (
    <>
      <h1>Song: Blinding Lights</h1>
      <h2>Artist: The Weeknd</h2>
      <h3>Genre: Pop</h3>
      <Award />
    </>
  );
}
const Award = () => <p>Award: Grammy Winner</p>;

function FitnessApp() {
  return (
    <>
      <h1>App: MyFitnessPal</h1>
      <h2>Type: Nutrition Tracker</h2>
      <h3>Features: Calorie Counter</h3>
      <Subscription />
    </>
  );
}
const Subscription = () => <p>Subscription: Free & Premium</p>;

function TravelInfo() {
  return (
    <>
      <h1>Destination: Maldives</h1>
      <h2>Attraction: Beaches</h2>
      <h3>Best Time: November to April</h3>
      <Stay />
    </>
  );
}
const Stay = () => <p>Stay: Overwater Villas</p>;

function PetInfo() {
  return (
    <>
      <h1>Pet: Golden Retriever</h1>
      <h2>Breed: Large Dog</h2>
      <h3>Life Span: 10-12 years</h3>
      <Trait />
    </>
  );
}
const Trait = () => <p>Trait: Friendly & Loyal</p>;

function FurnitureInfo() {
  return (
    <>
      <h1>Furniture: Dining Table</h1>
      <h2>Material: Solid Wood</h2>
      <h3>Seats: 6</h3>
      <Color />
    </>
  );
}
const Color = () => <p>Color: Walnut Finish</p>;

function ClothingInfo() {
  return (
    <>
      <h1>Clothing: Hoodie</h1>
      <h2>Brand: Nike</h2>
      <h3>Size: Large</h3>
      <Fabric />
    </>
  );
}
const Fabric = () => <p>Fabric: Cotton Blend</p>;

function StationeryInfo() {
  return (
    <>
      <h1>Item: Fountain Pen</h1>
      <h2>Brand: Parker</h2>
      <h3>Ink Color: Blue</h3>
      <NibType />
    </>
  );
}
const NibType = () => <p>Nib Type: Fine Point</p>;

export default UserProfile;