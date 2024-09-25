pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the specified Git repository
                git 'https://github.com/AnjanaManoj2004/JenkinsToDo.git'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // Use the Node.js installation configured in Jenkins
                    def nodeHome = tool name: 'NodeJS 20', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}\\bin;${env.PATH}" // Update PATH for Windows

                    // Run your build commands here
                    bat 'npm install' // Example command
                }
            }
        }
    }
}
