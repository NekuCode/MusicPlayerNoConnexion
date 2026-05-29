# MusicPlayer

[![GitHub language count](https://img.shields.io/github/languages/count/Nathan-Pro-FR/MusicPlayer?style=flat-square)](https://github.com/Nathan-Pro-FR/MusicPlayer)
[![GitHub top language](https://img.shields.io/github/languages/top/Nathan-Pro-FR/MusicPlayer?style=flat-square)](https://github.com/Nathan-Pro-FR/MusicPlayer)
[![GitHub stars](https://img.shields.io/github/stars/Nathan-Pro-FR/MusicPlayer?style=flat-square)](https://github.com/Nathan-Pro-FR/MusicPlayer/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Nathan-Pro-FR/MusicPlayer?style=flat-square)](https://github.com/Nathan-Pro-FR/MusicPlayer/network/members)
[![License: Unspecified](https://img.shields.io/badge/License-Unspecified-lightgrey.svg?style=flat-square)](https://github.com/Nathan-Pro-FR/MusicPlayer/blob/main/LICENSE)

## Table of Contents
- [Project Title & Description](#project-title--description)
- [Key Features & Benefits](#key-features--benefits)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Prerequisites & Dependencies](#prerequisites--dependencies)
- [Installation & Setup Instructions](#installation--setup-instructions)
- [Usage Examples](#usage-examples)
- [Configuration Options](#configuration-options)
- [Contributing Guidelines](#contributing-guidelines)
- [License Information](#license-information)
- [Acknowledgments](#acknowledgments)

## Project Title & Description
**MusicPlayer** is a simple, client-side web application designed to serve as an **Offline Music Dashboard**. It provides an intuitive interface for users to browse, search, and play music tracks, organized into different playlists, directly from their web browser. This project is ideal for managing and playing a local music collection without the need for an internet connection (once the files are downloaded).

The application emphasizes a clear user experience, allowing for easy navigation through playlists and efficient searching for specific tracks.

## Key Features & Benefits
*   **Offline Music Playback**: Enjoy your music collection anytime, anywhere, without requiring an active internet connection after the initial setup.
*   **Intuitive Music Dashboard**: A clean and user-friendly interface for effortless navigation and control over your music.
*   **Playlist Management**: Organize tracks into predefined categories (e.g., AMV, Anime, Techno) for quick access.
*   **Track Search Functionality**: Quickly find your favorite songs using the integrated search bar.
*   **Basic Player Controls**: Essential playback controls including play/pause and a progress bar for seeking within tracks.
*   **Dynamic Content Loading**: Music data is loaded from a structured CSV file, making it easy to update your music library.
*   **Pure Client-Side**: Built with HTML, CSS, and JavaScript, meaning no server-side setup is required to run the application.

## Project Structure
The repository is organized to clearly separate concerns, making it easy to manage assets and code.

```
.
├── assets/                            # Contains actual audio files (e.g., .mp3, .wav)
├── covers/                            # Contains cover images for playlists/tracks
│   ├── amv.png
│   ├── anime.png
│   └── techno.png
├── data/                              # Directory for data files
│   └── playlists.csv                  # CSV file defining tracks and their metadata
├── index_musique_hors_connexion.html  # Main HTML file for the music player interface
├── script_musique_hors_connexion.js   # JavaScript file for player logic and functionality
└── styles_musique_hors_connexion.css  # CSS file for styling the application
```

## Technologies Used
This project is built using fundamental web technologies:

### Languages
*   **JavaScript**: For all interactive functionalities, music playback control, data fetching, and UI manipulation.
*   **HTML5**: Structures the content and layout of the music player dashboard.
*   **CSS3**: Styles the application, providing a visually appealing and responsive user interface.

## Prerequisites & Dependencies
To run this project, you only need:

*   **A Modern Web Browser**: Any up-to-date web browser such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari will work.
*   No external libraries, frameworks, or server-side dependencies are required, as it's a pure client-side application.

## Installation & Setup Instructions
Follow these steps to get the MusicPlayer up and running on your local machine:

1.  **Clone the Repository**:
    First, clone the `MusicPlayer` repository to your local machine using Git:
    ```bash
    git clone https://github.com/Nathan-Pro-FR/MusicPlayer.git
    cd MusicPlayer
    ```

2.  **Prepare Music Data**:
    The player fetches track information from a CSV file.
    *   Create a directory named `data` in the project root if it doesn't exist.
    *   Inside the `data` directory, create a file named `playlists.csv`.
    *   Populate `playlists.csv` with your music track details. Refer to the [Configuration Options](#configuration-options) section for the expected CSV format.

3.  **Add Audio Assets**:
    *   Place your actual audio files (e.g., `.mp3`, `.wav`) into the `assets/` directory. Ensure the paths in your `playlists.csv` correctly point to these files.

4.  **Add Cover Images**:
    *   Place your cover art images (e.g., `.png`, `.jpg`) into the `covers/` directory. Ensure the paths in your `playlists.csv` correctly point to these images, and that any predefined playlist covers (like `amv.png`, `anime.png`, `techno.png`) are present.

5.  **Open in Browser**:
    *   Once you have the repository cloned and your `playlists.csv` and audio/cover assets in place, simply open the `index_musique_hors_connexion.html` file in your preferred web browser.
    *   You can do this by double-clicking the file or by navigating to its path in your browser's address bar.
    *   Alternatively, for better local development (e.g., if you encounter CORS issues with `fetch` for local files in some browsers), you can use a simple local web server:
        ```bash
        # For Python users:
        python -m http.server 8000
        # Then open http://localhost:8000/index_musique_hors_connexion.html in your browser.
        ```

## Usage Examples
Using the MusicPlayer is straightforward:

1.  **Launch the Player**: Open `index_musique_hors_connexion.html` in your web browser.
2.  **Select a Playlist**: On the left sidebar, click any of the playlist buttons (e.g., "AMV", "Anime", "Techno") to display the tracks within that category.
3.  **Play a Track**: Click on any track listed in the main content area to start playing it. The currently playing track's title and artist will appear in the footer.
4.  **Control Playback**: Use the play/pause button in the footer to control the audio.
5.  **Seek Through Track**: Drag the progress bar in the footer to jump to a specific point in the current song.
6.  **Search for Music**: Type keywords (e.g., track title, artist) into the search bar in the header to filter the displayed tracks.

## Configuration Options
The primary configuration for the MusicPlayer is managed through the `data/playlists.csv` file.

### `data/playlists.csv` Structure
This CSV file defines all the music tracks available in the player. Each row represents a single track, and the columns specify its metadata.

| Column       | Description                                                 | Example Value                        |
| :----------- | :---------------------------------------------------------- | :----------------------------------- |
| `title`      | The title of the music track.                               | `A Beautiful Song`                   |
| `artist`     | The artist or group performing the track.                   | `Amazing Artist`                     |
| `audio_path` | Relative path to the audio file within the `assets/` folder. | `assets/a_beautiful_song.mp3`        |
| `cover_path` | Relative path to the cover image within the `covers/` folder. | `covers/default_album_art.png`       |
| `playlist`   | The category or playlist this track belongs to.             | `AMV`                                |

**Example `playlists.csv` content:**
```csv
title,artist,audio_path,cover_path,playlist
Rise,J-Rock Band,assets/rise.mp3,covers/anime.png,Anime
Cybernetic Love,Synthwave Duo,assets/cybernetic_love.mp3,covers/techno.png,Techno
Epic Montage,Orchestral Group,assets/epic_montage.mp3,covers/amv.png,AMV
Chill Vibes,Lo-Fi Artist,assets/chill_vibes.mp3,covers/anime.png,Anime
```

Ensure your `audio_path` and `cover_path` values correctly reference files that exist in your `assets/` and `covers/` directories, respectively.

## Contributing Guidelines
We welcome contributions to the MusicPlayer project! If you have ideas for improvements, bug fixes, or new features, please follow these guidelines:

1.  **Fork the repository**: Click the "Fork" button at the top right of this page to create your copy of the repository.
2.  **Clone your forked repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/MusicPlayer.git
    cd MusicPlayer
    ```
3.  **Create a new branch**: For each new feature or bug fix, create a dedicated branch:
    ```bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b bugfix/issue-description
    ```
4.  **Make your changes**: Implement your features or fixes, adhering to the existing code style.
5.  **Test your changes**: Ensure your modifications work as expected and don't introduce new issues.
6.  **Commit your changes**: Write clear, concise commit messages.
    ```bash
    git commit -m "feat: Add new search filter functionality"
    ```
7.  **Push your branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
8.  **Open a Pull Request**: Go to the original `Nathan-Pro-FR/MusicPlayer` repository on GitHub and open a new Pull Request from your branch. Describe your changes clearly and provide any necessary context.

## License Information
This project currently has **no specified license**.

Therefore, by default, standard copyright laws apply, and all rights are reserved by the owner, Nathan-Pro-FR. This means others typically cannot use, modify, or distribute the project without explicit permission from the copyright holder.

It is highly recommended to add an appropriate open-source license (e.g., MIT, Apache 2.0, GPL) to clarify how others can legally use, modify, and share this project. This will encourage community involvement and provide legal protection for both contributors and users.

## Acknowledgments
*   Developed by [Nathan-Pro-FR](https://github.com/Nathan-Pro-FR).
*   Inspired by the need for a simple, client-side offline music player.
*   Relies on the user to provide structured music data via `data/playlists.csv` and corresponding audio/cover assets.
