# PlanesDatabase
Projekt - Tworzenie backendu do aplikacji webowych

## dependencies:
   * npm
   * body-parser
   * dotenv
   * express
   * express-session
   * mongoose
   * morgan
   * passport
   * passport-google-oauth2

## run command
    nodemon

## mongoDB setup

- Go to [mongo DB](https://www.mongodb.com/), click `Try Free`, proceed with registration. Create new free database cluster deployment.
![image](https://github.com/VeryFunnyUsername/PlanesDatabase/assets/155174712/62137e2f-0a30-476d-ad24-86174f9087a2)

- Next to the cluster name click `Connect` button, choose `Device` and view the following URL details that you will need in the `.env` file.
![image](https://github.com/VeryFunnyUsername/PlanesDatabase/assets/155174712/a234dfc9-76bd-450b-8746-7a59eb6a4e89)

- On the left panel choose `Network Access`, `Add IP Address`, `Allow Access From Anywhere`.

- On the left panel choose `Database Access`, `Add New Database User`, fill user name and password, click `Add Built In role` button with `Read and write to any database access`, `Add User`.

## way .env file content should look

- DB_USER = "\<mongo db username>\"
- DB_PASSWORD = "\<mongo db password>\"
- DB_NAME = "planes"
- DB_LINK = "\<cluster_name\>.\<cluster_id\>.mongodb.net"
- COOKIE_KEY = '\<any_string\>'
- CLIENT_ID = '\<Client ID of project in console.cloud.google.com for OAuth2.0\>'
- CLIENT_SECRET ='\<Client secter of project in console.cloud.google.com for OAuth2.0\>'
