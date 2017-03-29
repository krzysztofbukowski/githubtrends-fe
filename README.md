# githubtrends-fe

Front end application for the github trends website.
It's built using Angular 2.

### Prerequisites

To run the application locally you need to have NodeJS >= 6 installed. 
You can install it using [nvm](https://github.com/creationix/nvm).

### Setup

After cloning the repository and successful NodeJS installation you need to install the app's dependencies.
In the project path run:

    $ npm install
    
### Running the app

To run the app you just need to run a single command:

    $ npm start

Once it's finished you should be able to see the application by going to 
`http://localhost:8080`. Make sure that local API is running too (see https://github.com/krzysztofbukowski/githubtrends-api)


### Unit testing

Unit tests are run by karma using the mocha framework with support of chai an sinon.
Tests can be run by invoking the following command:
    
    $ npm test
    
Unit test runner generates a code coverage report available in `coverage/html/report/`

<center>
    <img src="https://angular.io/resources/images/logos/angular2/angular.png" height="100px"/>
</center>





