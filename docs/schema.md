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
| website URL  |  string   | not null |
| description | string | not null |
| category | string | not null |
| creator_id | string | not null |
| funding_goal | integer | not null|
| end-date | date | not null |

**rewards**

| column name | data type | details |
|-------|-------|-------|
|  id    | integer | not null, primary key |
| pledge  |  integer   | not null |
| tier | integer | not null |
| description | string | not null |
| delivery_date | string | not null |
| project_id | integer | not null |

## Join Tables

**projects backers**
*customized backing amounts are distinguished from rewards*

| column name | data type | details |
|-------|-------|-------|
| backer_id    | integer | not null |
| project_id  |  integer   | not null |
| amount | integer | not null |

**project rewards**
*rewards are different from customized backing amounts*

| column name | data type | details |
|-------|-------|-------|
| reward_id    | integer | not null |
| project_id  |  integer   | not null |
| backer_id   |  integer | not null |
