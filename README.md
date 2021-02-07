# hoth2021
UCLA Hack Off The Hill 2021 Hack - Clothes with Care App

This branch contains code for the backend, which includes a Flask server and sqlite database. I set up a few endpoints for the home, search, and profile pages.
These endpoints make sqlite queries to extract the information that was asked for (such as all available items or a certain user's favorited items). This data
gets sent back to the frontend as a JSON object.
