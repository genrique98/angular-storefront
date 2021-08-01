# ANGULAR STOREFRONT
Basic single-page ecommerce application
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

# To install and launch 

run: `npm install` and `ng serve` and Navigate to `http://localhost:4200/`

# Features:
- Select quantities and add products to cart
- Click on individual products to see their descriptions
- Navigate to cart and see selected items and total cost, change quantity of items, fill out payment form
- Upon submitting the form, user is redirected to a confirmation page

# Angular features:
- Data is fetched from a .json file using the HttpClient module.
- Data is returned as an Observable using the rxjs library.
- Individual Product route (Dynamic Routing)
- Services are used for handling and passing data (Cart, Product, and Order models) to Components. Components are used for structuring data only. 
- Template-driven forms.