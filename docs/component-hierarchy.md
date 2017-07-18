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

**ProjectContainer**
* Project Header
* VisitWebsiteButton
* ProjectItem
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
