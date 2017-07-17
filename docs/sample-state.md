{
  currentUser: {
    id: 1,
    username: "demo-user"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createProject: {errors: ["fields can't be blank"]}
  },
  projects: {
    1: {
      id: 1,
      title: "Project1",
      category: "Tests",
      description: "This is blank description"
      creator_id: 1,
      funding-goal: 3000,
      funding-reached: 1000,
      end-date: '07/12/15'
      days-to-go: 47
      rewards: {
        1: {
          pledge: 10,
          tier: 1,
          description: "personal thanks",
          delivery-date: "date1"
        }
      }
      backers: {
        1: {user 1},
        2: {iser 2 1}
      }
    }
  },
  users:  {
    1: {
      id: 1
      name: "user 1"
      projects_created: {
        1: {project 1}
      }
      projects backed: {
        2: {project 2}
      }
    }
  },

  tagFilters: ["overseas", "local", "humanitarian"]
}
