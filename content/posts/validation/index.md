---
title: How to validate your input
description: How to do validation for you REST application.
date: 2021-04-21
draft: false
slug: /pensieve/validation
tags:
  - Validation
  - Ajv
  - Input
  - REST
---

# How to validate your input

## Introduction

Data data data, you can store them use them as value and build great things from it. What if your data are not reliable anymore ? You business has one thing that need to be reliable : `data` that you store.

You need to validate your input before using it. Were are going to see here how you can do it properply for a REST api. So you can imagine building a business that save claims and you want that some field are required, match a pattern, and more. You can validate everything so that your data that are comming to your application is reliable and with the format you want.

## Dependencies

Install the dependencies:

- [ajv](https://ajv.js.org/guide/getting-started.html)
- [express](https://expressjs.com/en/5x/api.html)
- [body-parser](https://github.com/expressjs/body-parser)

```shell
npm install express ajv body-parser
```

We are going to use `ajv` for the validation part it self.
For the REST api it self we are going to use `express` and add a simple route where we will attach the validation.

## Server

Lets create a simple server to add a route to it and use it for the entry of our validation.

Add the `express` dependency and create the server instance.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
```

For the `port` note that we have the `or` here because this application will be deployed via `Heroku`, and they will give you a specific port for your app.

```javascript
const port = process.env || 3000;
```

To start the server you can use the function `listen` on your instance and providing the `port` and a `callback` function that will be called after the server starts.

```javascript
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## Route

Let's add a `POST` route were we are going to caputre to data we want to validate. And also respond with the validation errors or if its valid.

```javascript
app.post('/', (req, res) => {
  const input = req.body;
  const result = isValid(input);
  return res.send(result ? "It's valid" : "It's not");
});
```

You can see that we take the `body` from the request wich we are going to use as input for validation.

We also have this function that we will detail later : `isValid`. After the validation we reponde with `It's valid` or not doepending on the case.

## Validation

Add the `ajv` dependency and create the validator.

```javascript
const Ajv = require('ajv');
const ajv = new Ajv();
```

For the validation we need to create what we call a `schema` where you define the validation on your payload.

We are going to create a simple schema for a foo bar object type. Just to understand the mechanism.

### Schema

```javascript
const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
};
```

So the object need to have only `2 properties` and no additional one.

- Foo: will be an `integer` and will also be `required`.
- Bar: will be a simple `string` and not required.

### Validate

Lets implement the `isValid` function we talked about before. We are going to change a bit and add a `schema` as a parameter to validate the input we pass to it.

```javascript
function isValid(input, schema) {
  const validate = ajv.compile(schema);
  const valid = validate(input);
  if (!valid) {
    return validate.errors;
  }
  return { valid: true };
}
```

## Postman

We are going to test the validator with a simple call and posting an `empty object` to see the errors.

```curl
curl --location --request POST 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{}'
```

Response :

```json
[
  {
    "instancePath": "",
    "schemaPath": "#/required",
    "keyword": "required",
    "params": {
      "missingProperty": "foo"
    },
    "message": "must have required property 'foo'"
  }
]
```

Here is an exmemple with a `valid` payload.

```curl
curl --location --request POST 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "foo": 1,
    "bar": "bar"
}'
```

Response :

```json
{
  "valid": true
}
```

## Middleware

Developpers are lazy persons right ? We like automation we dont want to write this for all kind of `validation`. To repeat and isolate the process we are going to create a `middleware` that we could attach to any route to have a validation on early stage.
To have scalable way to add schema validation we can separate here 3 things :

- The `middleware` for the validation only.
- The `validator` that is generic for all schemas.
- The `schema` for the type of input.

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Validation of the payload ",
  "details": [
    {
      "instancePath": "",
      "schemaPath": "#/required",
      "keyword": "required",
      "params": {
        "missingProperty": "foo"
      },
      "message": "must have required property 'foo'"
    }
  ]
}
```

For the `schema` we create a file for it `./schemas/foo.js`.

```javascript
module.exports = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
};
```

For the `middleware` we create a file for it `./middlewares/validator.js`.
Here you pass the `schema` as a `parameter` that is used to do the validation of the `req.body`.
If the validation fail we send a `404` error with a nice `code` and a `message` and the `details` of why it failed.
When everyting went good it just pass to the next function. To read more about [middleware](http://expressjs.com/en/guide/using-middleware.html#using-middleware).

```javascript
const { isValid } = require('../utils/validator');

module.exports = schema => (req, res, next) => {
  const result = isValid(req.body, schema);
  if (Array.isArray(result)) {
    // array means we have errors
    return res.status(404).send({
      code: 'VALIDATION_ERROR',
      message: 'Validation of the payload ',
      details: result,
    });
  }
  next();
};
```

For the `utils` we create a file for it `./utils/validator.js`.

```javascript
const Ajv = require('ajv');
const ajv = new Ajv();

function isValid(input, schema) {
  const validate = ajv.compile(schema);
  const valid = validate(input);
  if (!valid) {
    return validate.errors;
  }
  return { valid: true };
}

module.exports = {
  isValid,
};
```

## Source

[Github](https://github.com/hamzaPixl/posts-validation)

[Blog](https://hmounir.com/pensieve/validation)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Hamza Mounir - [@pixlhamza](https://twitter.com/pixlhamza) - hamza.pixelle@gmail.com

## Support

Give a ⭐️ if you like this post!
