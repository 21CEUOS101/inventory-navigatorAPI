# Pincode Locator API

The Pincode Locator API is a powerful tool for finding the nearest pincode based on a given pincode, now with the added capability to calculate the distance between two pincodes. This can be particularly useful for tasks such as warehouse allocation, where proximity is a key factor.

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
- Calculate the distance between two pincodes.
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
   cd inventory-navigatorAPI
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Request Format

#### Find Nearest Pincode

Send a POST request to the `/api/find-nearest` endpoint with the following JSON format:

```json
{
    "pincode": 387002,
    "pincodes": [362001, 390002, 387001]
}
```

#### Get Distance Between Pincodes

Send a POST request to the `/api/get-distance` endpoint with the following JSON format:

```json
{
    "source": 387002,
    "destination": 392001
}
```

### Response Format

The API will respond with a JSON object containing the nearest pincode or the distance between the two pincodes, depending on the endpoint.

#### Nearest Pincode Response:

```json
{
    "nearest_pincode": 387001
}
```

#### Distance Calculation Response:

```json
{
    "distance": 110.859
}
```

## Example

```javascript
const axios = require('axios');

// Example for finding the nearest pincode
const findNearestRequestData = {
  pincode: 387002,
  pincodes: [362001, 390002, 387001]
};

axios.post('https://inventory-navigatorapi.onrender.com/api/find-nearest', findNearestRequestData)
  .then(response => {
    console.log('Nearest Pincode:', response.data.nearest_pincode);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Example for getting distance between two pincodes
const getDistanceRequestData = {
  source: 387002,
  destination: 392001
};

axios.post('https://inventory-navigatorapi.onrender.com/api/get-distance', getDistanceRequestData)
  .then(response => {
    console.log('Distance:', response.data.distance);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

## Acknowledgments

- Special thanks to the Express and Node.js communities for their awesome contributions.
