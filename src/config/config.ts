require('dotenv').config();

export const config = {
    "postgress": {
        "username": process.env.POSTGRES_USERNAME,
        "password": process.env.POSTGRES_PASSWORD,
        "endpoint": process.env.POSTGRES_ENDPOINT
    },
    "aws":{
        "region" : process.env.AWS_REGION,
        "profile": process.env.AWS_PROFILE
    }
}