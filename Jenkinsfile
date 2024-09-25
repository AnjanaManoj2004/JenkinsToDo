pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Specify the Node.js version and tool
                    def nodeHome = tool name: 'NodeJS 14', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}\\bin;${env.PATH}"

                    // Install dependencies and build the application
                    bat 'npm install' // Install dependencies using npm                }
            }
        }
    }
}
