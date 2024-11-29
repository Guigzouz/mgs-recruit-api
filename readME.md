## mgs-recruit-api

This repository is a MyDigitalSchool project intervening in the context of a mobile/react development course it is also a project i meant to do on a personal level being a fanboy of the metal gear solid universe

The following repository is an expressJs api paired with a mongodb database dockerized

The project in itself aims to give to provide [mgs-motherbase-pwa](https://github.com/Guigzouz/mgs-motherbase-pwa) with user management as well as scorepoints and other important informations that cannot be stored server-side

## how to launch

**_required :_**

- docker
- nodeJs >= 20

Clone the repository and follow the next steps
Be sure to fill your own .env !

```
docker compose up -d
```

```
npm install
```

```
npm run start
```

open the link in your browser (usually localhost:3000)

## how to launch the front-end

this repository in itself has yet not much interest in itself, to use it to its full potential you need to clone and launch the [mgs-motherbase-pwa](https://github.com/Guigzouz/mgs-motherbase-pwa) , follow the repo's own readme to successfully launch it

## what comes next ?

As of now the project is at a very basic level, and the gmp_count is yet just a redux countSlice that increases your score (much like an idle game), but the purpose is not to make an idle game but rather a management game worldwide, here below a list of features that i plan on doing next

- Overall scoreboard of users gmp count
- "External Ops" that will allow two users's motherbase to "fight" and gain/loose resources
- "R&D" -> for better overall technology (multplicator of strength for a unit)
- Recruits details -> In-depth customization of each unit & randomly generated images of them
- Putting up swagger for better api documentation
