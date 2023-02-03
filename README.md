# book**record**management

This is a book record management API Backend for themanagement of records and books

# Routes and Endpoints

## /users

POST:Create a new user✅
GET: GEt all list of users ✅

## /users/{id} ==>> dynamic users

GET: Get a user by id✅
PUT: Update a user by id✅
DELETE: Delete a user by id (check if he/she still has an issued book.)✅

## /users/subscription-details/{id}

GET: Get a user subscription details

1. Date of subscription
2. Valid till
   3.Fine if any

## /books

GET: Get all books
POST: Create/add a new book

## /books/{id}

GET: Get a book my id
PUT: Upadte a book by id

## /books/issued/by-user

GET: Get all issued books

## /books/issued/withFine

GET: All issued books with fine

# Subscription Types

Basic (3 months)
Standard (6 months)
premium (12 months)

If the subscription date is 01/02/23
and subscription type is standard
the valid till date will be 01/02/23

If he has an issued book and the issued book is to bereturned at 01/01/23
If he missed the date of return , then he gets a fine of Rs.100/-

If he has an issued book and the issued book is to be returned at 01/01/23
If he missed the date of return , and his subsciption also ex[ries, then he will get a fine of 200/-
