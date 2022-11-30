# Message Broker With Memphis

This is a mini project that show cases how to create a message broker with menphis.

run the following command:

```yaml
     docker-compose -f docker-compose up -d
```
```yaml
     cd consumer && yarn
```
```yaml
     cd costumer-complaints && yarn
```
Run the following in seperet terminal in botth consumer and customer:

```yaml
    yarn start
```

The application is hosted on port 3000 & the url is /complaints

The different protocols that are inuse are:

* Get to get the complaints
* Post to create a complaints
* put to update the status of an complaint
     
The create complaint body is 
```Json
{
    "category": "account",
    "description": "Something wrong with my product",
    "status": "resolved"
}
```
The update body is the following, remember to get the right Id or funny things will happen

```Json
{
    "id": 3,
    "category": "account",
    "description": "Something wrong with my product",
    "status": "resolved"
}
```
     