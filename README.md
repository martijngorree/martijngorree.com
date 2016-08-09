
#martijngorree.com

##Getting the development cycle up and running.

####Requirements: 
 * Homebrew

####Get the source:
```
git clone https://github.com/martijngorree/martijngorree.com.git
```

####Install the dependencies

####NPM

```
npm install bower -g
npm install babel-cli -g
npm install webpack -g
npm install
```

####LibSASS

```
brew install libsass sassc
```

####Mongodb (if you don't have it already)
```
brew install mongodb
brew services start mongodb
```

I use mongo-express for a GUI for mongodb:
```
npm install mongo-express
cd node_modules/mongo-express
cp config.default.js config.js
```

Edit the config.js so that it connects to the martijngorree db by default:
```
... SNIP ...

  mongo = {
    db:       'martijngorree',
    host:     'localhost',
    password: 'pass',
    port:     27017,
    ssl:      false,
    url:      'mongodb://localhost:27017/db',
    username: 'admin',
  };

... SNIP ...

```

Then you need to create the martijngorree database and create the db user:
```
$ mongo

> use martijngorree;
> db.createUser({user: 'admin', pwd: 'pass', roles:['dbAdmin']});
```

###To start 

####Running it

To get the development chain running, open two terminals and in the first do:
```
npm run watch-css
```

And in the second:
```
npm run watch-js
```

To get the server version running is a story for another time (TODO).