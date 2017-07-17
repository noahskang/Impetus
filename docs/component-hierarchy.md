# Component Hierarchy

**AuthFormContainer**
* AuthForm

**Home**
* ProjectsIndexContainer
* NavBar
* FeaturedProjects

**FeaturedProjectsContainer**
* FeaturedProjects

**ProjectsIndexContainer**
* Header
* ProjectsIndex

**ProjectsIndex**
* ProjectIndexItemContainer

**ProjectIndexItemContainer**
* ProjectIndexItem
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
* NewProjectForm

**NewProjectForm**
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
| "/"           | redirect to /signup or /home |
| "/home"       | "Home"   |
| "/home/projects/:projectId"     | "ProjectContainer" |
| "/home/new-project"      | "NewProjectContainer"     |
