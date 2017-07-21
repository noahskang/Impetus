# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(username: "guest1", password: "password1")

Project.create!(
  title: "Run the golden gate bridge",
  website_url: "google.com",
  category: "recreational",
  description: "let's go run!",
  creator_id: 3,
  funding_goal: 3000,
  end_date: "02/02/1994"
)

Project.create!(
  title: "another random project",
  website_url: "google.com",
  category: "recreational",
  description: "let's do a random project together",
  creator_id: 4,
  funding_goal: 4000,
  end_date: "02/02/1994"
)

Project.create!(
  title: "Project 3",
  website_url: "google.com",
  category: "recreational",
  description: "me and you forever",
  creator_id: 3,
  funding_goal: 3000,
  end_date: "02/02/1994"
)
