pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Create the 'output' directory if it doesn't exist
                bat 'if not exist output (mkdir output) || exit /b 1'
                
                // Use robocopy and exclude the output folder, preventing retries on failure
                bat 'robocopy . output /E /XD output /R:0 /W:0 || exit /b 1'
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
