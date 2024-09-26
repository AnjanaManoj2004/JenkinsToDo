pipeline {
    agent any

    stages {
        stage('Check Permissions and Replace Files') {
            steps {
                script {
                    def workspaceDir = "${env.WORKSPACE}"
                    def outputDir = "${workspaceDir}\\output"
                    def testFile = "${outputDir}\\testfile.txt"

                    // PowerShell script to check read permission
                    echo "Checking read permission in workspace..."
                    powershell """
                        Get-ChildItem -Path '${workspaceDir}'
                    """

                    // PowerShell script to check write permission and replace file if it exists
                    echo "Checking write permission and replacing file if it exists in output directory..."
                    powershell """
                        # Ensure output directory exists
                        if (-not (Test-Path '${outputDir}')) {
                            New-Item -ItemType Directory -Path '${outputDir}' | Out-Null
                        }
                        
                        # Check if testfile.txt exists and replace it
                        if (Test-Path '${testFile}') {
                            Write-Host 'File testfile.txt exists. Replacing it...'
                            Remove-Item -Path '${testFile}' -Force
                        }
                        
                        # Create a new testfile.txt
                        New-Item -ItemType File -Path '${testFile}' | Out-Null

                        # Verify if the file was successfully created
                        if (Test-Path '${testFile}') {
                            Write-Host 'Write test successful: testfile.txt created/replaced in output directory'
                        } else {
                            Write-Host 'Failed to write in output directory'
                        }
                    """
                }
            }
        }
    }
}
