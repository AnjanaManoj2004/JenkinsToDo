pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Replace with your actual Git repository URL
                git 'https://github.com/AnjanaManoj2004/JenkinsToDo.git'
            }
        }

        stage('Build') {
            steps {
                // Replace this with the actual build command for your project (e.g., Maven, Gradle, etc.)
                bat 'mvn clean install'
            }
        }
    } // Close the 'stages' block

    post {
        always {
            echo 'This always runs!'
        }
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed.'
        }
    } // Close the 'post' block
} // Close the 'pipeline' block
