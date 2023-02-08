import mongoose from "mongoose";

const userIds=[
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users =[{
    "_id": {
      "$oid": "63e2d167a194765e4b29b479"
    },
    "firstName": "Leroy",
    "email": "erickleroy@admin.com",
    "password": "$2b$10$XPD3YcC.C2bQXWHlzd81de5kD4rtWO2NKja1ePhuGPkPXqoChls46",
    "picturePath": "photo1.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 9269,
    "impressions": 8117,
    "createdAt": {
      "$date": {
        "$numberLong": "1675809127760"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675809127760"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2ef7de56923a68ba005d4"
    },
    "firstName": "kongne",
    "email": "erickleroy1@admin.com",
    "password": "$2b$10$hAZWXNmZUKvWGm77ZY.MjuvwDwOArRQ7c/iFtGIK2dCGXoU3xxVgW",
    "picturePath": "photo2.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 2920,
    "impressions": 5194,
    "createdAt": {
      "$date": {
        "$numberLong": "1675816829099"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675816829099"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2ef8ee56923a68ba005d6"
    },
    "firstName": "fah",
    "email": "erickleroy2@admin.com",
    "password": "$2b$10$rEBMXQAIghRsZR.FAeaP5ukbjHIzqRDy6jlFAya.pWPT6VAF0uz.i",
    "picturePath": "photo3.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 5637,
    "impressions": 6673,
    "createdAt": {
      "$date": {
        "$numberLong": "1675816846179"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675816846179"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2efaee56923a68ba005d8"
    },
    "firstName": "ananfack",
    "email": "ephraimananfack@admin.com",
    "password": "$2b$10$jCVzpiuiRgYLHfAoo6zphO50p816YF1BKie2Spm3InTwDloBplIoa",
    "picturePath": "photo4.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 7958,
    "impressions": 2258,
    "createdAt": {
      "$date": {
        "$numberLong": "1675816878812"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675816878812"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2efbde56923a68ba005da"
    },
    "firstName": "kongne",
    "email": "ephraimkongne@admin.com",
    "password": "$2b$10$tk391FjyiIPimhiDmaVRGeL1MjwIp2gOkt53Oa7gKr0cERFTxdABS",
    "picturePath": "photo5.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 9020,
    "impressions": 3140,
    "createdAt": {
      "$date": {
        "$numberLong": "1675816893443"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675816893443"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2f009e56923a68ba005dc"
    },
    "firstName": "likondem",
    "email": "julielikondem@admin.com",
    "password": "$2b$10$bcnecBjw2qwNLIU2B.Neme61ZpmZshuEoSJrg0FgtCqxPZHydIZdq",
    "picturePath": "photo6.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 5075,
    "impressions": 3470,
    "createdAt": {
      "$date": {
        "$numberLong": "1675816969907"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675816969907"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2f022e56923a68ba005de"
    },
    "firstName": "lekeufack",
    "email": "laurissalekeufack@admin.com",
    "password": "$2b$10$dMDY0Vnyj/MTVVqhkHd1N.jvvC6jfWpjUVnMClYAi0hZWABBhf/Hm",
    "picturePath": "photo7.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 642,
    "impressions": 8156,
    "createdAt": {
      "$date": {
        "$numberLong": "1675816994765"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675816994765"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2f084e56923a68ba005e0"
    },
    "firstName": "ngoko",
    "email": "germainengoko@admin.com",
    "password": "$2b$10$SXnxcnAOjrKKrt.DSZ0DVO3wSbVoJ2SfCgKLJURVCMfiNAyT.Uhzy",
    "picturePath": "photo8.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 5177,
    "impressions": 7536,
    "createdAt": {
      "$date": {
        "$numberLong": "1675817092019"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675817092019"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2f092e56923a68ba005e2"
    },
    "firstName": "mvondo",
    "email": "davidmvondo@admin.com",
    "password": "$2b$10$DYl15oJM.Uj9RLYVS.R/WuV19/bwiCz/YCnSXBlkLDK0D/vbwD.BO",
    "picturePath": "photo9.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 6941,
    "impressions": 4409,
    "createdAt": {
      "$date": {
        "$numberLong": "1675817106501"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675817106501"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63e2f0a4e56923a68ba005e4"
    },
    "firstName": "chedjou",
    "email": "rocelinchedjou@admin.com",
    "password": "$2b$10$ysWG19ehWMc/X4DQu/I88euq4Ck.6YYJamw4Cf7V1sqRDLOLuRBl.",
    "picturePath": "photo10.jpeg",
    "friends": [],
    "location": "Düsserdorf",
    "occupation": "developper",
    "viewedProfile": 2052,
    "impressions": 3252,
    "createdAt": {
      "$date": {
        "$numberLong": "1675817124392"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1675817124392"
      }
    },
    "__v": 0
  }];