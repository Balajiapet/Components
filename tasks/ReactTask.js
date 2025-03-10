import React from "react";

const ReactTask = () => (
  <>
    <WeatherInfo />
    <MovieDetails />
    <BookInfo />
    <EventDetails />
    <CourseInfo />
    <TechStack />
    <FitnessTracker />
  </>
);

function WeatherInfo() {
  return <Weather city="Pune" temperature={28} condition="Sunny" />;
}

const Weather = ({ city, temperature, condition }) => (
  <div>
    <h3>City: {city}</h3>
    <p>Temperature: {temperature}°C</p>
    <p>Condition: {condition}</p>
  </div>
);

function MovieDetails() {
  return <Movie title="Interstellar" director="Christopher Nolan" year={2014} />;
}

const Movie = ({ title, director, year }) => (
  <div>
    <h3>Movie: {title}</h3>
    <p>Director: {director}</p>
    <p>Year: {year}</p>
  </div>
);

function BookInfo() {
  return <Book title="Atomic Habits" author="James Clear" year={2018} />;
}

const Book = ({ title, author, year }) => (
  <div>
    <h3>Book: {title}</h3>
    <p>Author: {author}</p>
    <p>Published: {year}</p>
  </div>
);

function EventDetails() {
  return <Event name="Tech Conference 2025" date="March 25, 2025" location="Bengaluru" />;
}

const Event = ({ name, date, location }) => (
  <div>
    <h3>Event: {name}</h3>
    <p>Date: {date}</p>
    <p>Location: {location}</p>
  </div>
);

function CourseInfo() {
  return <Course name="React Mastery" instructor="John Doe" duration="3 months" />;
}

const Course = ({ name, instructor, duration }) => (
  <div>
    <h3>Course: {name}</h3>
    <p>Instructor: {instructor}</p>
    <p>Duration: {duration}</p>
  </div>
);

function TechStack() {
  return <Stack tech="React" version="18.0" />;
}

const Stack = ({ tech, version }) => (
  <div>
    <h3>Technology: {tech}</h3>
    <p>Version: {version}</p>
  </div>
);

function FitnessTracker() {
  return <Fitness activity="Running" caloriesBurned={450} />;
}

const Fitness = ({ activity, caloriesBurned }) => (
    <div>
      <h3>Activity: {activity}</h3>
      <p>Calories Burned: {caloriesBurned}</p>
    </div>
  );
  
  export default ReactTask;