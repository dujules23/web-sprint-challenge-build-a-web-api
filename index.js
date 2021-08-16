/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Pull your server into this file and start it!
*/
const express = require("express")
const server = require('./api/server')
const dotenv = require("dotenv").config()
const cors = require("cors")

const port = process.env.PORT || 4000

// path allows you to create paths
const path = require("path")

server.use(cors())

// tells express to access a static page (html, tc.)
// put in one parameter along with the working path
// this specifically goes to the home page
server.use(express.static(path.join(__dirname, "client/build")))


server.use("/api*", (_,res) => {
  res.json({
    data: "The Api is working!"
  })
})

server.listen(port, ()=> {
  console.log(`\n* Server Running on ${port} *\n`)
})

console.log(dotenv)