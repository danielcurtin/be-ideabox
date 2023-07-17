<h1 align="center">Fullstack Ideabox (Frontend)</h1>

## Abstract
Backend side of a little ideabox application utilizing RESTful APIs with GET, POST, and DELETE functionality to be used in conjunction with [Frontend Ideabox](https://github.com/danielcurtin/fe-ideabox) as a first step into fullstack development.

## Installation
`clone` this directory<br>
`cd fe-ideabox`<br>
`npm i` to install dependencies<br>
`npm start` to run the server<br>
and it should open up right into your default browser at `localhost:3000`<br>

## Context
Created as a first foray into backend development utilizing Node.js and Express.js

## Endpoints
| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all ideas |`/api/v1/ideas`| GET | N/A | All ideas on the server: `{ideas: [{}, {}, ...]}` |
| Add new idear |`/api/v1/ideas`| POST | `{name: <String>, desc: <String>}` | New idea that was added: `{id: 1, name: "Reminder Application", desc: "An application that you can set reminders up with"}` |
| Delete existing idea |`/api/v1/ideas/:idea_id`| DELETE | N/A | For successful deletion: No response body (only 204 status code) |

## Contributors
[Daniel Curtin](https://www.github.com/danielcurtin)
