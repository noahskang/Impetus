# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# User.create!(username: "Noah", password: "password1")
User.create!(username: "guest1", password: "password1")
User.create!(username: "Noah", password: "password1")
User.create!(username: "Friend", password: "password1")
User.create!(username: "Munyo", password: "password1")

Project.create!(
  title: "Restore U.W.s cherry blossom quad",
  website_url: "https://www.washington.edu/",
  category: "community",
  description: "U.W.'s quad has been a fixture of the University of Washington campus and a tourist attraction for decades. Help us restore this beautiful state landmark.",
  creator_id: 3,
  funding_goal: 5000,
  end_date: "08/10/2020",
  funding_raised: 2000,
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1500918683/13482103233_470c035e1a_k_i3fyne.jpg"
)

Project.create!(
  title: "another random project",
  website_url: "google.com",
  category: "recreational",
  description: "let's do a random project together",
  creator_id: 4,
  funding_goal: 4000,
  funding_raised: 2000,
  end_date: "02/02/1994",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1500918663/15731353122_8da92e49ce_k_s98i5v.jpg"
)

Project.create!(
  title: "Project 3",
  website_url: "google.com",
  category: "recreational",
  description: "me and you forever",
  creator_id: 3,
  funding_goal: 10000,
  funding_raised: 2000,
  end_date: "02/02/1994",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1500918569/19721181278_68c4d1ace9_k_pwx0ka.jpg"
)
