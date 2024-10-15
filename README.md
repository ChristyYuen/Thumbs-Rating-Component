# Thumbs Rating Component

This repository contains a Thumbs Rating Component implemented using [py4web](https://py4web.com/), a web framework for Python designed to create web applications easily and quickly.

## Project Overview

The Thumbs Rating Component allows users to express their preferences by clicking on thumbs (up and down) to toggle their state. The application is designed to provide feedback effectively, maintaining the state of the thumbs even after the page is reloaded.

## Features

- **Installation**: The Thumbs Rating Component can be installed correctly within a py4web application.
- **State Management**: Clicking on a thumb toggles its state between filled and empty.
- **Mutual Exclusivity**: When one thumb is filled, the opposite thumb remains empty. It is possible to have both thumbs unfilled, but not both filled at the same time.
- **Persistence**: The state of the thumbs persists when the page is reloaded, ensuring a seamless user experience.

## Lesson Learned

Throughout the development of this project, I learned the importance of state management in web applications. Ensuring that the state persists across page reloads greatly enhances user experience. I also gained valuable experience in integrating components within the py4web framework, allowing for smoother interactions and responsiveness.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/thumbs-rating-component.git
   cd thumbs-rating-component
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt

3. Start the py4web application:
   ```bash
   python -m py4web

4. Open your web browser and navigate to `http://localhost:8000` to see the Thumbs Rating Component in action.