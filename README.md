# Weather App 🌤️

This is a simple Weather Application that allows users to check real-time weather information for any city in the world. It fetches data from the [OpenWeatherMap API](https://openweathermap.org/) and displays current weather conditions including temperature, humidity, wind speed, and a brief description of the weather.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [API Key](#api-key)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search weather by city name
- Displays current temperature, humidity, wind speed, and weather description
- Dynamic weather icons based on the weather condition
- Beautiful background video
- Responsive design for mobile and desktop views

## Demo

[Link to the demo (optional if hosted)](https://example.com)

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate into the project directory:
   ```bash
   cd weather-app
   ```

3. Open the project in your preferred editor (e.g., VSCode).

4. Install the required dependencies (if any):
   ```bash
   npm install
   ```

5. Get your free API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

6. Add your API key in the `script.js` file:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

7. Open `index.html` in your browser to view the app.

## Usage

1. Enter a city name in the search bar.
2. Click the search button or press "Enter" to fetch weather data.
3. The app will display the current temperature, humidity, wind speed, and weather condition for the searched city.
4. Weather icons and a background video adjust based on the weather condition.

## Technologies

- **HTML5**: For structuring the app.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6)**: For fetching data from the API and handling user interactions.
- **OpenWeatherMap API**: Provides real-time weather information.
- **FontAwesome**: Used for weather icons.
- **Google Fonts**: Used for custom fonts.
  
## API Key

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You will need to sign up and get your own free API key. 

1. Go to [OpenWeatherMap API](https://home.openweathermap.org/users/sign_up) and sign up.
2. Once signed in, navigate to the API keys section and generate a new API key.
3. Replace the placeholder API key in the `script.js` file:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

## Project Structure

```
├── assets/                   # Weather icons and background video
├── index.html                # Main HTML file
├── style.css                 # CSS file for styling
├── script.js                 # JavaScript file for API calls and DOM manipulation
└── README.md                 # Project documentation
```

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add a feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
