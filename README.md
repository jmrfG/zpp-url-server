
# URL-Shortener

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>
This project is a implementation of a URL shortener using **Express, TypeScript and MongoDB**. It's a tool that helps to shorten a long URL (Uniform Resource Locator) into a shorter, more manageable form. The shortened URL, then, redirects to the original URL when accessed, allowing it to be shared or saved more easily in various online platforms, such as social media, email, or text messages, where space is limited. The purpose of a URL shortener is to make it easier to share links, save space and simplify the URL, making it more user-friendly.

### Check the live demonstration at the following link: [zsurl.vercel.app](https://zsurl.vercel.app)

## Getting Started <a name = "getting_started"></a>

 1. Clone this repository by using the command: 
		 `git clone https://github.com/jmrfG/zpp-url-server.git`
 2. Navigate to the project directory: 
		 `cd <directory-name>`
 3. Install the required dependencies by running one of the following commands: 
		 `npm install or yarn install`

### Prerequisites

In order to run this project locally, you'll need to install [Node.JS](https://nodejs.org/en/). 

### Setting up the .env file
The `process.env` is an object in Node.js that contains key-value pairs representing environment variables. It is commonly used to store configuration information and sensitive data such as API keys, credentials, and database connection strings that should not be hardcoded into the codebase.

To set up the `process.env` for local development in MongoDB, you need to follow these steps:

1.  Create a `.env` file in your project root directory.
2.  Add your environment variables to the file in the format of `KEY=value`. For example, if you have a MongoDB connection string, you could add it as `MONGO_URI=mongodb://localhost:27017/mydatabase`.

### .env Structure:
This project local environment takes two properties: a MONGO_URL and a TTL to set the expire timer of each generated link. 
#### .env Example:
````
MONGO_URL="<connection_string>"
TTL=<time in seconds>
```` 


## Usage <a name = "usage"></a>

Right now, the server has only three routes:

-   A  `GET`  route -  `/all`  which returns all the urls in the collection.
-   A  `GET`  route -  `/:code`  which uses the database mapping to redirect the shortened link to the original one.
-   A  `POST`  route -  `/shorten`  which is used to generate and persist the new shortened url.