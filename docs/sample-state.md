```js
{
  currentUser: {
    id: 1,,
    username: "demo-user"
    password: "password"
  },
  errors: {
    signUp: [],
    logIn: [],
    createProject: []
  },
  projects: {
    1: {
      id: 1,
      title: "Project1",
      category: "Tests",
      description: "This is blank description"
      creator_id: 1,
      funding_goal: 3000,
      funding_raised: 2000,
      end-date: '07/12/15'
    }
  },
  rewards: {
    1: {
      id: 1,
      amount: 22,
      description: "personal thanks",
      project_id: 1,
      reward_sum: 2000
      backing_limit: 20,
      delivery_date: "07/21/17"
    }
  },
  users:  {
    1: {
      id: 1,
      name: "user 1",
      password: "password"
    }
  },

  tagFilters: ["overseas", "local", "humanitarian"]
}
```
