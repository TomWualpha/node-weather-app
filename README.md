# node-weather-app
Learning project, Weather App takes one US address and retrieves the weather forecast of the provided address. 
Deployed on Heroku free tier, server goes to sleep after 30 minutes, so will need to wait.
https://tom-node-weather-app.herokuapp.com/ 

Weather app takes the provided address and call Mapbox API to convert address to Geo-code, then calls DarkSky API with the Geo-code to obtain the weather forecast of the provided address.
