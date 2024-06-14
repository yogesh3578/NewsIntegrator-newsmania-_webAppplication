# NewsIntegrator-newsmania-_webAppplication

NewsMania is a responsive web application built using React.js, designed to keep you updated with 
the latest headlines from various reputable news sources. Stay informed and connected with 
trending news from around the world, all in one place.

1. Navbar.js
The Navbar component is a functional React component that renders a navigation bar. This 
navigation bar includes links to various news categories such as Business, Entertainment, 
General, Health, Science, Sports, and Technology. The Navbar is designed to be fixed at the 
top of the page, responsive, and collapsible on smaller screens.
React: Importing the React library to create the component.
Link: Importing the Link component from react-router-dom for navigation 
without reloading the page.

2. News.js
The News component is a functional React component that uses hooks for state 
management and side effects. It integrates with the News API to fetch news articles 
based on the specified country and category. The component also implements infinite 
scrolling using the react-infinite-scroll-component library.
NewsItem: Importing the NewsItem component to display individual news articles.

3. NweItem:
The NewsItem component is a presentational component in the NewsMania app that displays 
individual news articles. It accepts props for the article's title, description, image URL, and the URL to 
the full news article. The component is styled using Bootstrap classes and custom inline styles.
The NewsItem component takes four props:
title: The title of the news article.
description: A brief description of the article.
imgurl: The URL of the article's image.
newsurl: The URL to the full news article

4. App.js:
The App component is the main entry point for the NewsMania app. It sets up the routing 
structure using react-router-dom to navigate between different news categories.
The App component uses React Router to handle navigation within the application. It includes 
a Navbar component for consistent navigation across different routes and defines several 
routes that render the News component for various news categories.
