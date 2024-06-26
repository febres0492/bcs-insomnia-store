# Bcs Insomnia Store

![screenshot](screenshot.png)

## Description

This is an outlines of the updates made to the API routes for categories, products, and tags. These updates add asynchronous support, improve error handling, and ensure data integrity across all route handlers.


[![License](https://img.shields.io/badge/Watch_live_demo_>>-darkgreen?style=for-the-badge)](https://drive.google.com/file/d/1irMuhpIuUz0AsLz8cmSuiznxgQl5DrKK/view)

<br>

## Table of Content
- [Description](#description)
- [What I did](#What-I-did)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [Questions](#questions)

<br>

## What I did

### Common Updates Across All Routes

- **Asynchronous Support**: Added `async` keyword to all route handlers to support asynchronous operations.
- **Error Handling**: Implemented `try` and `catch` blocks for comprehensive error handling in all asynchronous route handlers.


### Specific Route Handler Updates

### - GET `/` Route

- **Functionality**: Added logic to find all data (categories, products, tags) and include associated data (products for categories, Category and Tag data for products, Product data for tags).

### - GET `/:id` Route

- **Functionality**: Added logic to find a single item by its `id` and include associated data.
- **Error Handling**: Implemented error handling for when no item is found with the given `id`, returning a 404 status code and a message.
- **Responses**: Added responses to send back the found item with a 200 status code on success, and error handling with appropriate status codes (400 for categories and tags, 500 for products) on failure.

### - POST `/` Route

- **Pre-Check**: Added logic to check if an item with the given name already exists before creating a new one, returning a 400 status code and a message if it exists.
- **Creation**: Added logic to create a new item with the provided request body.
- **Responses**: Added responses to send back a success message and the created item with a 200 status code on success, and error handling with a 400 status code on failure.

### - PUT `/:id` Route

- **Update Logic**: Added logic to update an item by its `id` value with the provided request body.
- **Error Handling**: Implemented error handling for when no item is found with the given `id`, returning a 404 status code and a message.
- **Responses**: Added logic to fetch and send back the updated item with a 200 status code on success, and error handling with appropriate status codes (400 for categories and tags, 500 for products) on failure.

### - DELETE `/:id` Route

- **Deletion Logic**: Added logic to delete an item by its `id` value.
- **Error Handling**: Implemented error handling for when no item is found with the given `id`, returning a 404 status code and a message.
- **Responses**: Added responses to send back a success message with a 200 status code on success, and error handling with appropriate status codes (400 for categories and tags, 500 for products) on failure.

<br>

## Technologies
Technologies used:
- **Node JS**
- **Sequelize**


## Getting Started

This section will guide you through setting up the project locally. By the end of this guide, you will have a working version of My Project running on your machine.

<br>

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0 or later)

- [Git](https://git-scm.com/)

- A text editor like [VSCode](https://code.visualstudio.com/)

<br>

## Installation
Follow these steps to get your development environment set up:
```bash
git clone https://github.com/febres0492/bcs-insomnia-store.git
cd bcs-insomnia-store
npm install
```

<br>

## Usage
Follow these steps:
```bash
npm start
```
<br>


## Author
Carlos Febres

<br>


## Questions
For questions please get in contant.
Github Profile: https://github.com/Febres0492
Email: Example123@gmail.com
