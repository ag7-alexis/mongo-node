# mongo-node

## Cours 1 :

Création de cluster sur MondoDB Atlas
Installation de MongoDB Compass
Connexion du cluster MongoDB altas sur Compass

plasticité = document => schema dynamique

## Cours 2 :

couche controlleur/service
Création d'une api pour gérer des chiens, on utilise express

### Erreurs

#### 1

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
https://stackoverflow.com/a/7086621/14648427
https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers

J'avais appelé setHeader après writeHead, car writeHeader envoi les headers en réponse du coup on ne peu plus rajouté des headers

#### 2

Cannot read properties of undefined (reading 'name')
https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application#:~:text=Starting%20with%20release%204.16.0%2C%20a%20new%20express.json()%20middleware%20is%20available.
Essayer d'accéder au body quand on fait un post, le probleme est qu'il faut le convertir en JSON, pour cela j'utilise le middleware pour parser le body en json

todo swager
todo expliquer import module au lieu de require

## Cours 3 :

### Layout routes/services/controllers

Permet de réutiliser le code et l'ajout de layout permet d'absorder la complexité

## Cours 4 :

Authentification via JWT
