
## pre reqs
Install brew, node, npm & mongo. On OSX the commands below should work.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor #fix all issues
brew update
brew install node
brew install mongodb
```

## download dependencies and run server for API
In the terminal - From your project folder run the following
```
npm install
npm run start
```
* navigate to http://localhost:3001/testCode/index.html
* do you work within the testCode directory

## download dependencies and run server for front-end
In a different terminal - from your project folder run the following
```
npm install
npm run build
```
* navigate to http://localhost:4000

* do you work within the testCode directory

# Functionality Implemented
*Show a list of companies
*Show the details/full record of an existing company
*Create a new company
*Edit an existing company's record
*Show a list of people who work at a given company
*Show the details for a specific person
*Edit a person's record
*Delete a person record
*Create a new person, associating them to an existing company
*Bonus: make the site responsive
