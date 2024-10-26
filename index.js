// improting
const jasonServer = require('json-server')

// create server
const hostelServer = jasonServer.create()

const middleware = jasonServer.defaults()

const router = jasonServer.router('db.json')

const PORT = 4000 || process.env.PORT

hostelServer.use(middleware)
hostelServer.use(router)

hostelServer.listen(PORT,()=>{
  console.log(`hostelserver is running at port ${PORT}`);
  
})