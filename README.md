# DailyReadings.Today

Daily Mass Readings

A simple distraction free Daily Mass Readings app.

It provides the readings for the current day.

Minimal by design.

[![Netlify Status](https://api.netlify.com/api/v1/badges/dd33a5cd-6820-45b0-9806-f43ef15a40f7/deploy-status)](https://app.netlify.com/sites/dailyreadings/deploys)

[DailyReadings.Today](https://dailyreadings.today)

[![Get it on Google Play](public/icons/google-play.png)](https://play.google.com/store/apps/details?id=today.dailyreadings.twa)

## Run DailyReadings.Today Locally

### Docker Run

`docker pull bozodev/dailyreadings.today:latest`

`docker run -d --name=dailyreadings.today -p 3333:3333 --restart unless-stopped bozodev/dailyreadings.today:latest`

### Docker Compose

Create docker-compose.yml:

```
services:
  nextjs:
    image: bozodev/dailyreadings.today:latest
    ports:
      - "3333:3333"
    environment:
      - NODE_ENV=production
    container_name: dailyreadings.today
    restart: unless-stopped
```

`docker-compose pull`

`docker-compose up -d`
