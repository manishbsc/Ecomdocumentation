define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/ecom/cart/addProduct/:userId",
    "title": "Add product to the user's cart",
    "version": "0.0.1",
    "group": "Add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the product passed as a body parameter(optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Added successfully\",\n           \"status\": 500,\n           \"data\": {\n               \"quantity\": Number,\n               \"_id\": \"String\",\n               \"userId\": \"String\",\n               \"productId\": \"String\",\n               \"created\": \"date\",\n               \"lastModified\": \"date\",\n               \"-v\":0\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 300,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \" parameters missing\",\n\t    \"status\": 200,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"product doesnot exist\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "Add",
    "name": "PostApiV1EcomCartAddproductUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/ecom/product/create",
    "title": "Create/Add    new Product details",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header,Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of product passed as a body parameter(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prod_Description",
            "description": "<p>Description of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of product passed as a body parameter(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount on product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating(1 to 5) of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>Brand of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colors",
            "description": "<p>Colors of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "payment_options",
            "description": "<p>Payment options for product purchase passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>Warranty of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "features",
            "description": "<p>features of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviews",
            "description": "<p>Reviews of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product Details created/added successfully\",\n       \"status\": 500,\n       \"data\": [\n           {\n               \"payment_options\": {\n                   \"netBanking\": true,\n                   \"COD\": false,\n                   \"EMI\": false\n               },\n               \"productName\": \"String\",\n               \"prod_Description\": \"String\",\n               \"price\": Number,\n               \"discount\": Number,\n               \"category\": \"String\",\n               \"brandName\": \"String\",\n               \"colors\": [],\n               \"warranty\": Number,\n               \"features\": [],\n               \"reviews\": [],\n               \"quantity\": Number,\n               \"productId\": \"String\",\n               \"rating\": Number,\n               \"created\": \"date\",\n               \"lastModified\": \"date\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create product\",\n    \"status\": 300,\n    \"data\": error message\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Create",
    "name": "PostApiV1EcomProductCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/ecom/cart/delete/:productId/:userId",
    "title": "Delete product from user's cart",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Deleted Successfully\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product delete Unsuccesfull\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "Delete",
    "name": "PostApiV1EcomCartDeleteProductidUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/ecom/product/delete/:productId",
    "title": "Delete Product Details",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ID of product passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Product Deleted\",\n    \"status\": 500,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 200,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"Delete error\",\n    \"status\": 300,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Delete",
    "name": "PostApiV1EcomProductDeleteProductid"
  },
  {
    "type": "put",
    "url": "/api/v1/ecom/product/edit/:productId",
    "title": "Edit Product Details",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ID of product passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prod_Description",
            "description": "<p>Description of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount on product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating(1 to 5) of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>Brand of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colors",
            "description": "<p>Colors of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "payment_options",
            "description": "<p>Payment options for product purchase passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>Warranty of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "features",
            "description": "<p>features of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviews",
            "description": "<p>Reviews of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product Details edited/updated successfully\",\n       \"status\": 500,\n       \"data\": {\n           \"n\": 1,\n           \"nModified\": 1,\n           \"ok\": 1\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to edit product\",\n    \"status\": 500,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"Edit Unsuccessfull\",\n    \"status\": 300,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Edit",
    "name": "PutApiV1EcomProductEditProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecom/cart/view/all/:userId/viewcart",
    "title": "View the all items from user's cart",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Displaying Cart items\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"_id\": \"String\",\n                   \"quantity\": Number,\n                   \"userId\": \"String\",\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\",\n                   \"__v\": 0\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 300,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Cart is empty\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcomCartViewAllUseridViewcart"
  },
  {
    "type": "get",
    "url": "/api/v1/ecom/product/view/all",
    "title": "View All Products",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header(Required))</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \n{\n  \"error\": false,\n  \"message\": \"All Product Found\",\n  \"status\": 500,\n  \"data\": [\n      {\n          \"payment_options\": {\n              \"netBanking\": true,\n              \"COD\": false,\n              \"EMI\": false\n          },\n          \"productName\": \"String\",\n          \"prod_Description\": \"String\",\n          \"price\": Number,\n          \"discount\": Number,\n          \"category\": \"String\",\n          \"brandName\": \"String\",\n          \"colors\": [],\n          \"warranty\": Number,\n          \"features\": [],\n          \"reviews\": [],\n          \"quantity\": Number,\n          \"productId\": \"String\",\n          \"rating\": Number,\n          \"created\": \"date\",\n\t\t  \"lastModified\": \"date\",\n\t\t  \"-v\":0\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"Failed to find product details\",\n\"status\": 200,\n\"data\": null\n}\n{\n\"error\": true,\n\"message\": \"No Product Found\",\n\"status\": 300,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcomProductViewAll"
  },
  {
    "type": "get",
    "url": "/api/v1/ecom/product/view/id/:productId",
    "title": "Get Product Details by ID",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ID of product passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product found Successfully\",\n       \"status\": 500,\n       \"data\": [\n           {\n               \"payment_options\": {\n                   \"netBanking\": true,\n                   \"COD\": false,\n                   \"EMI\": false\n               },\n               \"productName\": \"String\",\n               \"prod_Description\": \"String\",\n               \"price\": Number,\n               \"discount\": Number,\n               \"category\": \"String\",\n               \"brandName\": \"String\",\n               \"colors\": [],\n               \"warranty\": Number,\n               \"features\": [],\n               \"reviews\": [],\n               \"quantity\": Number,\n               \"productId\": \"String\",\n               \"rating\": Number,\n               \"created\": \"date\",\n               \"lastModified\": \"date\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 200,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"No Product Found with given ID\",\n    \"status\": 300,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcomProductViewIdProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecom/product/view/name/:productName",
    "title": "Get Product Details by Name",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of product passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product Found Successfully.\",\n       \"status\": 500,\n       \"data\": [\n           {\n               \"payment_options\": {\n                   \"netBanking\": true,\n                   \"COD\": false,\n                   \"EMI\": false\n               },\n               \"productName\": \"String\",\n               \"prod_Description\": \"String\",\n               \"price\": Number,\n               \"discount\": Number,\n               \"category\": \"String\",\n               \"brandName\": \"String\",\n               \"colors\": [],\n               \"warranty\": Number,\n               \"features\": [],\n               \"reviews\": [],\n               \"quantity\": Number,\n               \"productId\": \"String\",\n               \"rating\": Number,\n               \"created\": \"date\",\n               \"lastModified\": \"date\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 200,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"Product Not Found with given name\",\n    \"status\": 300,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Read",
    "name": "GetApiV1EcomProductViewNameProductname"
  }
] });
