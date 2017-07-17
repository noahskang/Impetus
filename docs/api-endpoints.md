#API Endpoints

##HTML API

**Root**
* `GET /` - loads React web app

##JSON API
**Users**
* `POST /api/users`
* `PATCH /api/users`

**Session**
* `POST /api/session`
* `DELETE /api/session`

**Projects**
* `GET /api/projects`
  * Project index/search
  * accepts `category` query param to list projects by category
* `POST /api/projects`
* `GET /api/projects/:id`
* `PATCH /api/projects/:id`
* `DELETE /api/projects/:id`
