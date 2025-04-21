
Built by https://www.blackbox.ai

---

```markdown
# E-Learning Safety Riding

## Project Overview
E-Learning Safety Riding is an educational web application designed to teach the principles of safe riding practices. The platform covers various modules including basic safety riding, braking techniques, hazard anticipation, microsleep prevention, and understanding blind spots. Users can log in with their details, learn modules, take quizzes, and check their progress through a user-friendly dashboard.

## Installation
To set up the project locally, follow these instructions:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate into the Project Directory**
   ```bash
   cd e-learning-safety-riding
   ```
3. **Open the `index.html` file in your web browser**

The application does not have any backend setup and uses LocalStorage for data management, making it easy to run locally without any additional configuration.

## Usage
After loading the application in your browser, you can:
1. Log in by entering your NPK (employee identifier), name, and department.
2. Access the dashboard where you can navigate to different learning modules.
3. Complete quizzes to assess your understanding of the material.
4. Check your learning progress and statistics.

## Features
- User authentication via LocalStorage.
- Various modules focusing on safety riding practices.
- Responsive design utilizing Tailwind CSS for styling.
- Dynamic content loading, including quizzes and progress tracking.
- Error handling and user guidance through modals.
- Analytics dashboard for monitoring user engagement and performance.

## Dependencies
This project utilizes the following libraries:
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Chart.js](https://www.chartjs.org/) for analytics visualizations.
- [Font Awesome](https://fontawesome.com/) for icons.

Additional JavaScript files include:
- `auth.js`: Manages user authentication, session handling, and analytics.
- Various HTML files for different modules and user interfaces.

## Project Structure
The project's directory structure is as follows:
```
e-learning-safety-riding/
├── index.html                 # Main entry point for the application
├── dashboard.html             # User dashboard
├── analytics.html             # Analytics view for user performance
├── basic.html                 # Basic safety riding module
├── braking.html               # Braking techniques module
├── hazard.html                # Hazard anticipation module
├── microsleep.html            # Microsleep awareness module
├── blindspot.html             # Blind spot awareness module
└── auth.js                    # JavaScript for authentication and frontend logic
```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is open-source and available under the MIT License.
```