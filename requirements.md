Use Case:

Jeff wants to send <20 bitcoin> to each of his three kids, none of which have a bitcoin wallet.  They have each requested that he 
send them coin in their favorite currencies <Ethereum>, <Litecoin>, and <DASH>. Joe wants to get the best rates possible when he 
converts the coins to give his children.
 
Challenge:

Write a web app using nodeJS as the backend and reactJS as the client portal that will find out what the best exchanges would be 
for each of these trades. The app should talk to the BTC-E and Poloniex API’s (and perhaps other crypto-exchanges if you want to 
go farther) to get real data.
 
Extra Credit:

Charts are nice.  In order for charts to work, a polling engine that grabs and stores the data periodically into a MongoDB would 
be a great way to show trends.

Notes:

Bitfinex	"bitfinex"	key, secret
Bitstamp	"bitstamp"	key, secret, username
BitX	"bitx"	key, secret
BTC-e	"btce"	key, secret

user: jeffrey_sanford;  password: jX4s762zexdP
key:  LKKW3OTB-7XFGGJKT-8KVOUDMW-Z3B4ZWIJ-W913OXF4
secret: b922eae9b58f02579d711dca6c0654a90bc3dbdc8674c4857bfa68adcb52f0fe

CEX.io	"cexio"	key, secret, username
Gdax	"gdax"	key, secret, passphrase

Poloniex	"poloniex"	key, secret
key:  IR05LORP-C54B1PM3-MZ5P4SHM-UMZTH4IP
secret:  a3619a0c7d302cf608464f7be584bf996662e8a090f9072050d97012e79b93d0156f7fd858ba89a0415f8496b3b89047b02e81305fd57112949a8fa3b265237b

* Open Exchange Rates	"oxr"	key
* (Not using)npm package cryptox
* https://github.com/dutu/cryptox


Development steps:

Back-End:

* Created API keys for btce and poloniex.  Created node application to poll the two services.  Used to create RESTful API in
node to respond to front-end XMLHttpRequests.  Server is running on port 3000 under the file server.js (nodemon server.js).  
API currently responding to localhost:3000/btc_usd.  

TO-DO:  

Front-End:

* Created front-end in React with header, kid report, exchanges, and footer section.  kid report wrapper contains object cards 
for each kid with name, email, and if selected; current selected coin currency, best rate for coin exchange from bitcoin, and 
the current exchanged money quote.

TO-DO:

* Finish kids wrapper, kid element.  add selected rate information, float: right with a col-4
* Bind the stats in the exchanges wrapper, exchanges.exchange.method to API method call on server.
* Bind stats to socket.io event/broadcast fom front-end to server, from server to external APIs.



devOps:

* Web Server reloads on changes to index.html -- need to add other resources based on the dist or build directory.  Precompilation of css and Ahead OfTime compilation of JSX/TSC files is not being done.
live-server --ignore="/home/jeffrey/repos/github.io/JeffreySanford.github.io/development/projects/nodeJS/blockchain/ideasbynature/data"

* Server.JS runs the API that will collect stats from external exchanges and respond to API requests.  Run Server 
with 'nodemon server.js'.  

TO-DO:

* Grunt could hand the server launch and hen live-reload operations.


