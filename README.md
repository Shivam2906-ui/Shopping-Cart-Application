# E-Commerce Web Application

This project is a fully functional e-commerce web application built using React JS, Redux Toolkit, and Tailwind CSS. The application allows users to browse products, add items to their cart, and manage their purchases seamlessly.

## Install dependencies:
- npm install
## Start the development server:
- npm start

## Key Features

### 1. Product Listing Page
- **Grid Layout**: Displays 6-10 products in a clean and organized grid layout.
- **Product Details**: Each product card includes:
  - Product Image
  - Product Name
  - Product Price (formatted for currency)
  - "Add to Cart" Button

### 2. Add to Cart Functionality
- **User Interaction**: Clicking the "Add to Cart" button adds the chosen product to the user's virtual shopping cart.
- **Cart Counter**: Optionally, a cart icon or counter updates to reflect the number of items added.
- **Visual Feedback**: Provides animation or other visual feedback confirming the item's addition to the cart.

### 3. Cart Page
- **Product Management**: The cart page allows users to manage their selected products:
  - Displays a list of all added products, each showing:
    - Product Image
    - Product Name
    - Product Price
    - Quantity Selector: Users can adjust the quantity using up/down buttons or an input field.
    - "Remove Item" Button: Allows users to remove specific products from the cart.
- **Cart Summary**:
  - **Subtotal**: Automatically calculates the total cost of all items in the cart.
  - **Discounts**: Optionally includes the ability to apply fixed or percentage-based discounts to the total price.
  - **Total Price**: Displays the final price after applying any discounts.
  - **Checkout Button**: Provides a simulated checkout experience or a message indicating successful cart addition.

## Technologies Used
- **Frontend**: React JS, Redux Toolkit
- **Styling**: CSS, Tailwind CSS
- **State Management**: Context API

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
