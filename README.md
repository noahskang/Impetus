# Impetus

[Impetus live](https://impetus-kickstarter-clone.herokuapp.com/#/)
Impetus is a crowdfunding full-stack web application based closely on Kickstarter. Impetus allows users to publicize their own ideas and financially back the projects that they are passionate about. Noah Kang designed Impetus as a personal project using Ruby on Rails and React-redux.

![image](http://res.cloudinary.com/noah-s-kang/image/upload/v1501282903/Screen_Shot_2017-07-28_at_4.01.13_PM_sw2wi9.png)
http://res.cloudinary.com/noah-s-kang/image/upload/v1501283121/Screen_Shot_2017-07-28_at_4.04.59_PM_y8nudp.png

## Features
* Secure authentication for user login and signup
* Projects: creation and deletion
* Rewards / Backing: Project creators can add and delete rewards. Project backers can select pledge to support projects.
* Image attachments for projects

## Project Design

http://res.cloudinary.com/noah-s-kang/image/upload/v1501283278/Screen_Shot_2017-07-28_at_4.07.35_PM_mgu20q.png

### User Experience

Impetus was designed with an emphasis on User Experience. Although the functionality of the App was based on Kickstarter, the UI was inspired by Squarespace to achieve a clean, modern aesthetic emphasizing intuitive usability.

## Implementation

http://res.cloudinary.com/noah-s-kang/image/upload/v1501283208/Screen_Shot_2017-07-28_at_4.06.25_PM_pyhgnh.png

### Searching Projects by Keyword or Category

**functionality**

- Projects are searchable by title or description, and view an index of all the project details.
- Categories can be browsed by clicking the "explore icon," and clicking a category will automatically populate a list of all the projects listed underneath that category.

**Development Challenges**
- Both my projects index page and my categories/search pages rely on making a Get request to the Index method of the projects controller. Conditional logic was needed to handle the difference between these two index options.

**Implementation**
- I used an active record query in my projects query to handle the search.

```ruby

def index
  if params[:query]
    @projects = Project.all.where("title LIKE ? OR description LIKE ?", "%#{params[:query]}%", "%#{params[:query]}%")
  else
    @projects = Project.includes(:rewards).all
  end
end
```
* The categories page renders a new list of relevant projects without rerouting, simply by changing state.

when rendering my list of categories, I attach an onClick event handler to each button:

```javascript
{
  categories.map(category => {
  return(<button onClick={this.handleClick} value={category.toLowerCase()} key={category}>{category}</button>);
})}
```

```javascript
handleClick(e){
    e.preventDefault();
    let selectedProjects = this.props.projectArray.filter(project => ( project.category.toLowerCase()===e.currentTarget.value));
    this.setState({
      categoryProjects: selectedProjects
    });
  }
```

### User Authentication
**functionality**
* Users can only create projects, back projects, and view the projects that they created if they are signed in. Attempting to access one of these pages while logged out will trigger a redirect to the login page.
* Users can only delete projects or add rewards if they are signed in, and if they are the project owner.
* A LOGOUT button replaces the LOGIN button when the user is already logged in.

**development challenges**
* The login page is a full-size page with NO navigation bar. This meant that I would need to conditionally render the navigation bar, rather than rendering it on every page.

**implementation**
* I used Protected Routes to redirect the user to a login page when they click on a link that only a logged in user can access.
* I used Auth Routes to redirect the user to the home page when they try to login after having already logged in.
* A switch statement for the components controls rendering.
* Implementing second switch statement allowed for conditionally rendering the navigation bar.

```javascript
<Switch>
  <AuthRoute path="/login" component = {SessionFormContainer} />
  <AuthRoute path="/signup" component = {SessionFormContainer} />
  <Route component={NavBar} />
</Switch>

<Switch>
  <ProtectedRoute exact path="/user/projects" component= {UserProjectsContainer} />
  <ProtectedRoute path="/projects/:projectId/rewards" component={RewardsFormContainer} />
  <ProtectedRoute path="/projects/:projectId/pledges" component={PledgesFormContainer}/>
  <ProtectedRoute path="/projects/new" component = {ProjectFormContainer}/>
  <Route path="/projects/:projectId/" component={ProjectShowPageContainer}/>
  <Route exact path="/" component = {Home}/>
</Switch>
```
## Technology

Impetus was designed utilizing these key technologies:

### Backend
* Ruby on Rails
* PostgreSQL database
* Cloudinary image storage

### Frontend
* React/Redux
* React DOM
* React Router
* jQuery
* Webpack

## Future Additions
**User Profile Page**
Users can upload profile photos, view the projects they created, and the projects that they are backing.

**Advanced Backing Capabilities**
The app can handle credit card payments, and issues email confirmations to users when they make a pledge.
