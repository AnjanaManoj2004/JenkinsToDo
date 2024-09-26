pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from version control (Git, SVN, etc.)
                git https://github.com/AnjanaManoj2004/JenkinsToDo.git
            }
        }

        stage('Build') {
            steps {
                // Use Maven to build the project
                bat 'mvn clean install' // Use 'bat' for Windows, 'sh' for Linux
            }
        }
}