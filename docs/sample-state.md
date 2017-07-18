```js
{
  currentUser: {
    id: 1,
    username: "demo-user"
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
      funding-goal: 3000,
      end-date: '07/12/15'
      backers: {user_1_id: reward_id, user_2_id: reward_2_id}
      rewards: {
        1: {
          pledge: 10,
          tier: 1,
          description: "personal thanks",
          delivery-date: "date1"
          project_id: 1
        }
      },
    }
  },
  users:  {
    1: {
      id: 1
      name: "user 1"
      projects_created: [project_1_id, project_2_id]
      projects_backed: [project_1_id, project_2_id]
    }
  },

  tagFilters: ["overseas", "local", "humanitarian"]
}
```
