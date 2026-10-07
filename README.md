
# 🎬 Movie App

A responsive movie application built using **React.js** and **Vite**. The app allows users to browse movies fetched from an API, search for movies, and create a personalised watchlist using the ❤️ button.

## 🚀 Features

### 🎥 Movie Page

* Displays a collection of movies fetched from a **Movie API**.
* Movies are displayed in an easy-to-browse layout.
* Includes **Next** and **Previous** pagination to navigate between movie pages.
* Each movie has a ❤️ **Watchlist** button.
* Clicking the heart adds the selected movie to the watchlist.
* Includes a **Search** functionality to find movies quickly.

### ❤️ Watchlist

* Dedicated **Watchlist Page** containing all movies added by the user.
* Movies can be added to the watchlist directly from the Movie Page.
* Includes a **Genre Filter** to find watchlist movies based on their genre.
* Users can search through their watchlist using the **Search** functionality.
* Makes it easy to manage and access favourite movies.

## 🛠️ Technologies Used

* **React.js** – Frontend library
* **Vite** – Development and build tool
* **JavaScript**
* **HTML5**
* **TAILWINDCSS**
* **Movie API** – Used to fetch movie information

## 📂 Project Structure

```text
movie-app/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```
## 🔍 How It Works

### Browse Movies

The Movie Page fetches movie data from the API and displays the available movies.

### Search Movies

Users can enter a movie name in the search bar to quickly find movies on the Movie Page or within their Watchlist.

### Add to Watchlist

Each movie contains a ❤️ button. When the user clicks the heart, the movie is added to the Watchlist.

### Filter by Genre

The Watchlist Page provides a list of genres. Selecting a genre displays the watchlist movies belonging to that genre.

### Pagination

The Movie Page provides **Previous** and **Next** buttons, allowing users to navigate through different pages of movies.

## 📱 Main Pages

| Page              | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| 🎥 Movie Page     | Displays movies fetched from the API with search and pagination |
| ❤️ Watchlist Page | Displays saved movies with search and genre filtering           |

## ✨ Future Improvements

* Add movie details page
* Add movie ratings and reviews
* Add trailers
* Add user authentication
* Add sorting options such as rating and release date
* Improve responsive design for mobile devices
* Add dark/light theme support


