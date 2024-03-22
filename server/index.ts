import { app } from "./app"

app.listen({
  port: 3000
}).then(() => {
  console.log('Server running in port 3000')
})