import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const app = express()

app.use(express.json())

const defaultUser = {
  name: 'abc xyz',
  email: 'abc@example.com',
  mobile: '1234567890',
  age: '25',
  state: null,
  city: null,
  timestamp: null,
  lastActive: null,
  profileImage: null,
  interests: null,
}

const defaultPost = {
  post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  title: 'Lorem Ipsum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: null,
  timestamp: null,
  poll: null,
  supports: 0,
  disAgree: 0,
  needImprovement: 0,
}

app.get('/', (req, res) => {
  res.send('API is Running')
})

app.post('/api/user', (req, res) => {
  res.send(req.body)
})

app.get('/api/user', (req, res) => {
  res.send(defaultUser)
})

app.post('/api/post', (req, res) => {
  res.send(req.body)
})

app.get('/api/post', (req, res) => {
  res.send(defaultPost)
})

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold
  )
)

// User Registration:

// Name
// Email   ]  Verification Reqd
// Mobile ]
// Age
// State  ] Keep Null - Later Use
// City     ]
// Timestamp ] System generated
// lastActivr    ]
// ProfileImage ] Keep null - Later Use
// Interests        ]

// Post :
// Title - Mandatory
// Description - Mandatory
// Image - Optional
// Timestamp - System generated
// Poll [ Title, Options: [ ] ] - Optional
// Supports - Keep 0 now
// DisAgree - Keep 0 now
// NeedImprovements - Keep 0 now
