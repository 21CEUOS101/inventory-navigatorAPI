# Pincode Locator API

The Pincode Locator API is a powerful tool for finding the nearest pincode based on a given pincode. This can be particularly useful for tasks such as warehouse allocation, where proximity is a key factor.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Request Format](#request-format)
  - [Response Format](#response-format)
- [Example](#example)
- [Acknowledgments](#acknowledgments)

## Features

- Find the nearest pincode from a given list.
- Easily integrate into your application for warehouse allocation or similar tasks.
- Built on Express and Node.js for efficiency and scalability.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/21CEUOS101/inventory-navigatorAPI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pincode-locator-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Request Format

Send a POST request to the `/api/find-nearest` endpoint with the following JSON format:

```json
{
    "pincode": 387002,
    "pincodes": [362001, 390002, 387001]
}
```

### Response Format

The API will respond with a JSON object containing the nearest pincode:

```json
{
    "nearest_pincode": 387001
}
```

## Example

```javascript
const axios = require('axios');

const requestData = {
  pincode: 387002,
  pincodes: [362001, 390002, 387001]
};

axios.post('https://inventory-navigatorapi.onrender.com/api/find-nearest', requestData)
  .then(response => {
    console.log('Nearest Pincode:', response.data.nearest_pincode);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```


## Acknowledgments

- Special thanks to the Express and Node.js communities for their awesome contributions.
