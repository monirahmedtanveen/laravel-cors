## Send CORS Headers in Laravel Using <a href="https://github.com/spatie/laravel-cors">spatie/laravel-cors</a> Package 

This is an application which have laravel backend and jQuery frontend. In this application I solved the CORS(Cross Origin Resource Sharing) headers error while sharing data between frontend and backend. I used <a href="https://github.com/spatie/laravel-cors">spatie/laravel-cors</a> Package in backend app to solve the CORS headers issue.

## Backend App installation

1. At first cd to the 'backend' directory and run the following command :- 
<br>composer install 
2. Create a database on your database management system :- 'your_database'.
3. In .env file change the following lines:- 
```php
DB_DATABASE=your_database
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```
4. After that run the following command:-
```php
php artisan migrate
```
It will create users table in 'your_database'.

This will complete the installation process.

## Demonstration
Demonstration of 'Send CORS Headers in Laravel Using <a href="https://github.com/spatie/laravel-cors">spatie/laravel-cors</a> Package' will be written soon.