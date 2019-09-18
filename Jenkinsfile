pipeline {
    agent any
    environment {
        BUILD_VERSION = "1.${env.BUILD_NUMBER}-${env.GIT_BRANCH.replaceAll("/", "-")}"
    }
    stages {
        stage('Install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Link package') {
          steps {
            dir('packages/core') {
                sh 'yarn link'
            }
            dir('packages/react') {
                sh 'yarn link "i18nix"'
            }
          }
        }
        stage('Build') {
            steps {
                sh 'yarn lerna run build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn lerna run test'
            }
        }
    }
}
