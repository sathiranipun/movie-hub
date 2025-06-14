# React Movie App

A movie browsing and favorites app built with React, based on the [Tech With Tim YouTube tutorial](https://youtu.be/G6D9cBaLViA?si=vEjt1BkpSc4arT7B).

## Features

- Browse movies
- Add/remove favorites
- Responsive UI

## Movie API

This project uses the [The Movie Database (TMDb) API](https://www.themoviedb.org/) for movie data.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - You need to create a `.env` file in your project root. Use the `.env_sample` file for reference.
   - Add your TMDb API key and other config as needed.

4. **Run the app:**
   ```bash
   npm start
   ```

## Environment Variables

This project requires an API key from [The Movie Database (TMDb)](https://www.themoviedb.org/).

1. **Copy the sample environment file:**
   ```bash
   cp .env.sample .env
   ```
2. **Open `.env` and add your TMDb API key:**
   ```
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
   ```

3. **Save the file.**

> **Note:** Please refer to the `.env.sample` file in this project to create your own `.env` file with the required environment variables.

## Credits

- Tutorial by [Tech With Tim](https://www.youtube.com/@TechWithTim)
- Movie data provided by [The Movie Database (TMDb)](https://www.themoviedb.org/)

---

Feel free to customize this README for your project!
