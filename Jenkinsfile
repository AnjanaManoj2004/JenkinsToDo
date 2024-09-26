pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                git 'https://github.com/AnjanaManoj2004/JenkinsToDo.git'
            }
        }

        stage('Install') {
            steps {
                script {
                    // Set up Node.js environment
                    def nodeHome = tool 'NodeJS' // Make sure this matches the name of your Node.js installation in Jenkins
                    env.PATH = "C:\Program Files\nodejs" // Update the PATH for Node.js
                }
                // Run npm install to install dependencies
                bat 'npm install'  // Use 'bat' for Windows commands
            }
        }

        stage('Build') {
            steps {
                // Run your build command
                bat 'npm run build'  // Adjust this command as necessary
            }
        }
    }

    post {
        always {
            echo 'This always runs!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
