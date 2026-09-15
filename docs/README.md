# dev-golf
# HelloUser Web Application

## Description

A simple web application that asks the user for their name
and displays a personalized greeting and then user can search info available in this web.

## Technologies

HTML
CSS
JavaScript
Node.js
Express

## PROD codebase
  https://github.com/tuyetnguyenfl/dev-golf/tree/main 
  
## PROD server
  - https://tuyet.barrycumbie.com/
  - https://34.68.12.166:3000 (34.68.12.166 : externalIP of VM)

## DEV codebase
  https://github.com/tuyetnguyenfl/dev-golf/tree/dev
  
## DEV server
  https://dev-golf.onrender.com
  
## docs
  https://github.com/tuyetnguyenfl/dev-golf/tree/main/docs
  https://github.com/tuyetnguyenfl/dev-golf/tree/dev/docs
  
## published docs
  https://github.com/tuyetnguyenfl/dev-golf
  
##CI/CD workflow
  https://github.com/tuyetnguyenfl/dev-golf/actions/workflows/re-deploy-main-to-gcp.yml
  
## successful PROD deployment
  - https://34.68.12.166:3000 ((34.68.12.166 : externalIP of VM)
  - https://github.com/tuyetnguyenfl/dev-golf/actions/workflows/re-deploy-main-to-gcp.yml
  - https://tuyet.barrycumbie.com/

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

It is a simple web built by HTML/CSS/JavaScript for front end and node.js/express for back end. The version of this project is controlled by github, deployed to Render as the development environment, and deployed to a Google Cloud Linux VM as production, using Nginx and PM2.
