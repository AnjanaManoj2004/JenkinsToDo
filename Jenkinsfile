pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'if not exist output (mkdir output)' // Create the 'output' directory if it doesn't exist
                bat 'robocopy . output /E /XD output' // Use robocopy and exclude the output folder
            }
        }
    }        

    post {
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
