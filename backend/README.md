

### 1. Install PROJECT dependencies:

`npm ci`

### 2. Setup dB:

Create database for backend.
Follow below instructions to setup local database.

##### Setting Up a local database

To run the application locally, you need to setup a postgres database on your system.

Install postgres

`sudo apt install postgresql libpq-dev`

Login as the 'postgres' user and start postgres shell

`sudo su - postgres`

`psql`

Create a user for use with the application.
Remember to wrap your password in single quotes.

`create user expressuser with password 'password123';`

Create a database and give permissions for the above user

`create database testdb;`

`grant ALL privileges on database testdb to expressuser;`

Give permissions to the user to create database so that test databses can be created

`ALTER USER expressuser CREATEDB;`

### 4. Setup .env files

Use corresponding Values. That is username,password,port and database name

postgresql://USER:PASSWORD@HOST:PORT/DATABASE?KEY1=VALUE&KEY2=VALUE&KEY3=VALUE


### 5. Migrate the Models to dB

`npx prisma migrate`

### 6. Run the Server (port:3000)

`npm run start`

### 7. To run the test

`npm test`
