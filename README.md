# react-stack
A common react stack for frontend development  

## Main Features
- development build
- production build
- react, less and webpck

* [_Detailed Features_](docs/FEATURES.md)

## Installation and Usage
How to install, test, run and build

### Prerequisites
- install nodejs and npm
- install http-server - `npm install -g http-server`
- clone the repository - `git clone github.com/zerkotin/react-stack.git`

### First time
- from the repository folder - `npm install`

### Building the artifacts
- `npm run build` will build the application using a minifier and place the artifacts in `build` folder

### Serve the UI
- `npm start`
- go to [localhost:8080](localhost:8080)

### Testing with jest
- test - `npm test`
- update snapshots - `npm run snapshot`

### Run in development mode
To run with source maps and a watcher open 2 CMD/Terminal windows
- `npm run watch`  
- `npm start`  
