// Features
// Solutions
// Plans
// Pricing
// Resources
// Log in
// Get Trello for free
// Atlassian uses cookies to improve your browsing experience, perform analytics and research, and conduct advertising. Accept all cookies to indicate that you agree to our use of cookies on your device. Atlassian cookies and tracking notice, (opens new window)

// Preferences

// Only necessary

// Accept all
// Algorithm Ladder

// Public


// Filters


// ETL #4
// in list 
// From Brute to Linear

// Description
// This is very similar to ETL #3, but you must now accomplish the task in linear time (O(N)).

// Given an array of Youtube videos, for example:

// [
// {title: 'How to Make Wood', author_id: 4, views: 6},
// {title: 'How to Seem Perfect', author_id: 4, views: 111},
// {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
// {title: 'Why Pigs Stink', author_id: 1, views: 12}
// ]

// and an array of authors, for example:

// [
// {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
// {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
// {id: 3, first_name: 'Saron', last_name: 'Kim'},
// {id: 4, first_name: 'Teena', last_name: 'Burgess'},
// ]

// Return a new array of videos in the following format, and only include videos that have at least 100 views:

// [
// {title: 'How to Seem Perfect', views: 111, author_name: 'Teena Burgess' }
// {title: 'Review of the New "Unbreakable Mug"', views: 202, author_name: 'Ichabod Loadbearer' },
// ]

var input = 
[
{title: 'How to Make Wood', author_id: 4, views: 6},
{title: 'How to Seem Perfect', author_id: 4, views: 111},
{title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
{title: 'Why Pigs Stink', author_id: 1, views: 12}
]

var author = 
[
{id: 1, first_name: 'Jazz', last_name: 'Callahan'},
{id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
{id: 3, first_name: 'Saron', last_name: 'Kim'},
{id: 4, first_name: 'Teena', last_name: 'Burgess'},
]

const combined = (input, author) => { 
  const authorMap = author.reduce((acc, a) => { 
    acc[a.id] = `${a.first_name} ${a.last_name}`
    return acc;
  }, {})
  return input
  .filter(video => video.views > 100)
  .map(video => ({ 
    title: video.title, 
    views: video.views, 
    author_name: authorMap[video.author_id]
  }))
}

console.log(combined(input, author))