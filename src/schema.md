## SCHEMAS
- ## User
  - firstName : String
  - lastName : String
  - email : String
  - password : String (Hashed)
  - Address : [
      - Address (from address schema)
  ]
  - Order : [
      {
          address : Address (from address schema)
      }
  ]

  - ## Product
  - name : String
  - stickerPrice : Number
  - markedPrice : Number
  - category (from category schema)
  - image : String (URL)
  - compatibleWith  [ "iPhone13", "iPhone12", "Apple Watch" ]
  - stock : Number
  - color : String 
  - weigth : String,
  - mfd : Number (year manufaactured in)
  
  - ## Category
  - name : String
  - description : String

  - ## Order 
  - address : Address (from address schema)
  - user : User (from user schema)
  - products : [
      product : Product (from Product schema)
  ]
  - total : Number
  - status : [ "payment_pending", "payment_success", "payment_errored" ]

  - ## Address 
  - houseNumber : String
  - fullAddress : String
  - landmark : String
  