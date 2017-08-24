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
User.create!(username: "Blargh", password: "password1")
User.create!(username: "vul222", password: "password1")
User.create!(username: "joechoe", password: "password1")

Project.create!(
  title: "510 Art Gallery",
  website_url: "artgallerybayarea.com",
  category: "art",
  description: "The purpose of this project is to gather all the artist around the Bay Area that have limited resources to portray their art to receive recognition. By doing this, it will provide a way to gather the community but also experience the art of different cultures within the Bay Area community.",
  creator_id: 5,
  funding_goal: 10000,
  funding_raised: 200,
  end_date: "02/02/2018",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501225842/pexels-photo-519762_bqicms.jpg"
)

Project.create!(
  title: "3D Printed Steak",
  website_url: "steak.com",
  category: "technology",
  description: "Gone are the days when we have to unnecessarily slaughter animals for our dinner table. Our labs in Santa Clara have developed a new protein oligopeptide ink capable of building upon a 3D infrastructure. This revolutionary technology will make you rethink how you eat your food, and where you get your food.",
  creator_id: 6,
  funding_goal: 10000,
  funding_raised: 2000,
  end_date: "02/02/2018",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501226257/images_e6mq0j.jpg"
)

Project.create!(
  title: "Love for Foster Youth",
  website_url: "helpfosteryouth.org",
  category: "local",
  description: "Please support my idea to create a program for foster youth, where they can be helped according to their specific needs and wants. This will look like; awarding them for academic success, hiring tutors to help those in need after schools, group activities free of charge, personal counseling, etc.",
  creator_id: 5,
  funding_goal: 10000,
  funding_raised: 20,
  end_date: "03/12/2018",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501226378/people-woman-coffee-meeting_cal29r.jpg"
)

Project.create!(
  title: "Air toilet",
  website_url: "toilet.com",
  category: "technology",
  description: "Development of a new patented toilet technology that keeps the smells in. Our air toilets are wholly different from the traditional water based system. This results in an increased savings of .56 cents per flush in sewage treatment costs. Best of all, the air system hooks onto your existing plumbing so that installation will be a breeze..",
  creator_id: 6,
  funding_goal: 10000,
  funding_raised: 100,
  end_date: "05/02/2018",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501226600/11875309_678695948933207_1778869059_n_rzcu8d.jpg"
)

Project.create!(
  title: "Burger Buns Documentary",
  website_url: "burgers.com",
  category: "culinary",
  description: "Burger Buns have revolutionized the sandwich industry since its inception. Why are there sesame seeds on our burger buns? This documentary follows a groups of burger bun artisans and digs deep into the industry, where corruption a scandal have had criminal consequences. We need $20,000 more dollars to pay for production and advertising costs.",
  creator_id: 6,
  funding_goal: 15000,
  funding_raised: 500,
  end_date: "11/12/2017",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501226605/DSC05840_fihnmp.jpg"
)

Project.create!(
  title: "Coffee and Turtles",
  website_url: "turtles.com",
  category: "local",
  description: "We drink coffee everyday, whether it be at Starbucks or somewhere else. There are some cafes we can bring our dogs or cats, but what about the cafes for turtles? We are small independent group that started up in Oakland. We want you to come check out the turtle pond, while sipping a hot latte. We are currently raising funds to purchase a building off 19th Ave. Your funds will go towards making this dream come true..",
  creator_id: 6,
  funding_goal: 1000,
  funding_raised: 0,
  end_date: "08/10/2017",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/c_scale,w_1141/v1500918663/15731353122_8da92e49ce_k_s98i5v.jpg"
)

Project.create!(
  title: "Hope for the Homeless",
  website_url: "homelesshope.com",
  category: "local",
  description: "Please support my idea to create a nonprofit that is specified to helping those are the streets. This would entail hiring counselors of all kinds to bring hope to those on the streets. My vision is to create low income housing for the homelss but also to help them find jobs that will help better their lives. Some are struggling with drug abuse and our nonprofit will provides ways to help.",
  creator_id: 5,
  funding_goal: 60000,
  funding_raised: 1000,
  end_date: "12/10/2017",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501226790/person-woman-sitting-old_uqt4tz.jpg"
)

Project.create!(
  title: "UltraLite Write",
  website_url: "pencil.com",
  category: "technology",
  description: "Let’s face it. Pencils are too heavy. It is the leading cause of arthritis for pregnant woman. Our newly patented, scientifically tested pencil technology will revolutionize how your write. These pencils are so light that they do not even contain any graphite. Your funds will support our manufacturing and R&D process. Now comes in lavender scent!",
  creator_id: 6,
  funding_goal: 50000,
  funding_raised: 0,
  end_date: "12/10/2017",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501226876/Michael-George_HB_LAMP_2_mt9pbx.jpg"
)

Project.create!(
  title: "Robot for the Disabled",
  website_url: "transformer.com",
  category: "relief work",
  description: "These days, sickness is getting worse and it is harder to find help for those people. I can create a robot that can help a person walk where is needed, drive them to a destination, bathe them, etc. All manual labor needed.",
  creator_id: 5,
  funding_goal: 100000,
  funding_raised: 100,
  end_date: "2/10/2018",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1501227136/pexels-photo-185725_okajt2.jpg"
)

Project.create!(
  title: "Restore U.W.s cherry blossom quad",
  website_url: "https://www.washington.edu/",
  category: "local",
  description: "U.W.'s quad has been a fixture of the University of Washington campus and a tourist attraction for decades. Help us restore this beautiful state landmark.",
  creator_id: 1,
  funding_goal: 5000,
  end_date: "08/10/2020",
  funding_raised: 2000,
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1500918683/13482103233_470c035e1a_k_i3fyne.jpg"
)

Project.create!(
  title: "Musical Firepit",
  website_url: "google.com",
  category: "Music",
  description: "What's a bonfire without music? Now, all the people who love singing old-time folk songs with their friends to the strumming o an acoustic guitar round' the ol' bonfire can do that -- even without musical skills. this firepit can be controlled by bluetooth to play your favorite campfire playlist. s'mores, anyone?",
  creator_id: 2,
  funding_goal: 4000,
  funding_raised: 400,
  end_date: "02/02/2018",
  image_url: "http://res.cloudinary.com/noah-s-kang/image/upload/v1500918663/15731353122_8da92e49ce_k_s98i5v.jpg"
)

Reward.create!(
  project_id: 1,
  amount: 1000,
  description: "Receive a free piece of artwork from the artist of your choice.",
  delivery_date: "02/02/2018",
  backing_limit: 10,
  title: "Fun Bay Area Art",
)

Reward.create!(
  project_id: 2,
  amount: 1000,
  description: "Donate 1000 and get a free 3d Printer with steak ink for 4 people",
  delivery_date: "02/05/2018",
  backing_limit: 10000,
  title: "Silver Backer",
)

Reward.create!(
  project_id: 2,
  amount: 5000,
  description: "Donate 5000 or more and get 2 3D printers, one in rose gold and other in onyx black. Plus 1 weeks worth of steak ink.",
  delivery_date: "02/05/2018",
  backing_limit: 10000,
  title: "Gold Backer",
)

Reward.create!(
  project_id: 3,
  amount: 200,
  description: "For every $200 dollars donated, you will receive a free t-shirt that our program design and also a free mug.",
  delivery_date: "02/05/2018",
  backing_limit: 10000,
  title: "Silver Backer",
)

Reward.create!(
  project_id: 3,
  amount: 5000,
  description: "You will be scheduled to give a keynote lecture.",
  delivery_date: "02/05/2018",
  backing_limit: 10000,
  title: "Gold Backer",
)

Reward.create!(
  project_id: 4,
  amount: 100,
  description: "$100, will receive thank you card and your picture on our air toilet website",
  delivery_date: "02/10/2018",
  backing_limit: 10000,
  title: "Silver Backer",
)

Reward.create!(
  project_id: 4,
  amount: 1000,
  description: "at $1000 dollars you will receive a brand new air toilet, with free installation and also receive a thank you card.",
  delivery_date: "03/10/2018",
  backing_limit: 10000,
  title: "Platinum Backer",
)

Reward.create!(
  project_id: 5,
  amount: 500,
  description: "at $500, you will get to attend a free screening of our documentary at the Sundance Film Festival ",
  delivery_date: "05/10/2018",
  backing_limit: 20000,
  title: "Burger Scholar",
)

Reward.create!(
  project_id: 5,
  amount: 1000,
  description: "At this level of donation of $1000 you will get a free VIP access to the screening of our documentary + a free weekend VIP access to the 2017 Sundance Festival",
  delivery_date: "05/10/2018",
  backing_limit: 100,
  title: "Burger God",
)

Reward.create!(
  project_id: 6,
  amount: 50,
  description: "You get a free baby turtle mug at a donation of $50",
  delivery_date: "05/10/2018",
  backing_limit: 100,
  title: "Turtle Lover",
)

Reward.create!(
  project_id: 6,
  amount: 100,
  description: "At $100 donation you will be invited to a coffee session with turtle and coffee lover Jeff Sessions. ",
  delivery_date: "04/07/2018",
  backing_limit: 100,
  title: "Turtle Aficionado",
)

Reward.create!(
  project_id: 7,
  amount: 1000,
  description: "For the amount of $1000, you will receive a free tablet",
  delivery_date: "04/07/2018",
  backing_limit: 100,
  title: "Free Tablet",
)

Reward.create!(
  project_id: 8,
  amount: 5,
  description: "If you donate less than $5 then you are an ultralite Donor. You will get one UltraLite pencil with your name on it.",
  delivery_date: "09/07/2018",
  backing_limit: 100,
  title: "UltraLite Donor",
)

Reward.create!(
  project_id: 8,
  amount: 100,
  description: "Our bigger donors get bigger prizes. at $100 you will get our UltraLite colored penicils that come in colors such as Lavendar Lilly and Incan Gold",
  delivery_date: "09/07/2018",
  backing_limit: 1000,
  title: "Heavy Set Donor",
)

Reward.create!(
  project_id: 9,
  amount: 10000,
  description: "For your donation of 10000 you will receive a drone that is used for filming and can be customized according to your wants.",
  delivery_date: "09/10/2018",
  backing_limit: 200,
  title: "Free Drone"
)

Reward.create!(
  project_id: 10,
  amount: 200,
  description: "For your donation of 200 you will receive a UW branded sweatshirt.",
  delivery_date: "09/10/2018",
  backing_limit: 200,
  title: "Sweatshirt"
)

Reward.create!(
  project_id: 11,
  amount: 1000,
  description: "For your donation of 1000 you will receive a free musical firepit.",
  delivery_date: "09/10/2018",
  backing_limit: 200,
  title: "Musical firepit"
)
