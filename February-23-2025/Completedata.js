var input = 
[
{title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
{title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
{title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
{title: 'Mondays are the worst', submitted_by: 403, likes: 644}
]

var user = 
[
{user_id: 403, name: "Aunty Em"},
{user_id: 231, name: "Joelle P."},
{user_id: 989, name: "Lyndon Johnson"},
{user_id: 111, name: "Patti Q."},
]

const completed = (input, user) => { 
  return input.filter((i) => i.likes > 1000)
    .map((i) => { 
      var foundName = user.find((u) => u.user_id === i.submitted_by)
      return ({ 
        title: i.title, 
        likes: i.likes, 
        user: foundName.name
      })
    })
}

console.log(completed(input, user))