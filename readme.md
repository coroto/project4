# INCO Academy

## Project 4: First basic web app

### About

This project develops a planning management system for the team of Mr. Coffee.

Planning management system for MR Coffee teams includes creating an account and login system.

## Technologies used

- [x] Node JS
- [x] Express
- [x] postgres db
- [x] EJS
- [x] [Materializecss](http://archives.materializecss.com/0.100.2/about.html)

## Installation

```bash
git clone https://github.com/coroto/project4.git

cd project4

npm install
```

## Database setup

Create an **.env** file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME = VALUE. To do this, take as a reference the .env.sample file found in this repository and replace it with the values from your Database.

Run the following scripts to create and feed the database with test data.

```bash
npm run create-db
```
```bash
npm run create-tables
```
```bash
npm run seed-tables
```

## Authors

**Juan Carlos Mellizo** - @Coroto

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
