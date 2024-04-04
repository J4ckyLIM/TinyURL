# Project Title

This projet is an experiment to build an url shortener app.

# How does it work ?

The app is composed of a frontend inside the app folder and backend inside the api folder.

# Technical choices

The api is made in NestJs with Typescript
The app is made in ReactJs with Typescript

# Library used

## Backend

- Typeorm
- NanoId to handle unique id as slug generated for our shortened url
- UUID for unique id for our entities

## frontend

- Tanstack (react-query), in order to delegate state management when dealing with http request.
- ChakraUI, to reuse existing component and avoid having to create a custom design system.

# Context

Let's say around 1000 urls are shortened per second.

The makes:

- 3 600 000 URLs shortened every hour
- 86 400 000 every day
- 31 536 000 000 every year

As we are aiming for short URL we need to find a tradeoff between this number to avoid having a too short url that could possibly lose its uniqueness.

As such we consider these character as usable for us:

- a-Z: 26 characters
- A-Z: 26 characters
- 0-9: 10 characters

That makes 62 possible characters.

Considering a slug with:

- 1 character: 62 possibility (62^1)
- 2 characters: 3 844 (62^2)
- 3 characters: 238 328 (62^3)
- 4 characters: 14 776 336 (62^4)
- 5 characters: 916 132 832 (62^5)
- 6 characters: 56 800 235 584 (62^6), could be good but in less than 2 years, we would run out of unique id
- 7 characters: 3 521 614 600 000 (62^7)

7 seems to be the right number of character for our short id.
