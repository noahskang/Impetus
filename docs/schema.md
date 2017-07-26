# Schema Information

**users**

| column name | data type | details |
|----------|----------|------------|
|  id    | integer | not null, primary key |
| username  |  string   | not null, indexed, unique |
| email | string | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |

**projects**

| column name | data type | details |
|-------|-------|-------|
|  id    | integer | not null, primary key |
| title  |  string   | not null |
| website_url  |  string   | not null |
| description | string | not null |
| category | string | not null |
| creator_id | string | not null |
| funding_goal | integer | not null|
| end-date | date | not null |

**rewards**

| column name | data type | details |
|-------|-------|-------|
|  id    | integer | not null, primary key |
| amount  |  integer   | not null |
| description | string | not null |
| project_id | integer | not null |
| backing_limit | integer | not null |
| delivery_date | date | not null |

## Join Tables

**pledgess**
*customized backing amounts are distinguished from rewards*

| column name | data type | details |
|-------|-------|-------|
| backer_id    | integer | not null |
| reward_id | integer | not null |
