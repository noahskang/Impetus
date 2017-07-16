# Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
* ProjectsContainer
* NavBar
  * Explore
  * Search

**ProjectsContainer**
* Projects Header
* ProjectsIndex

**ProjectsIndex**
* Project Index Item
* Project Details
  * Categories
  * title
  * image
  * description
  * creator
  * backing progress
    * visualizer
    * money pledged
    * % funded
    * days to go

**ProjectContainer**
* Project Header
* VisitWebsiteButton
* Project
* Project Details
  * Categories
  * title
  * image
  * description
  * creator
  * backing progress
    * visualizer
    * money pledged
    * % funded
    * days to go
* BackProjectButton
  * SubmitPledgeButton

**NewProjectContainer**
* New Project
* Start a project Link

**NewProject**
* New Project Form
* Create Project Button

**Explore**
* AutoSearch
* AutoSearch Results

**Search**


# Routes

| Path          | Component     |    
| ------------- |---------------|
| "/signup"     | "AuthFormContainer" |
| "/login"      | "AuthFormContainer"     |
| "/"           | "HomeContainer"      |  
| "/projects/:projectId"     | "ProjectContainer" |
| "/new-project"      | "NewProjectContainer"     |
