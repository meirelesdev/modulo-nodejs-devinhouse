import App from './app'
import appRoutes from './routes'

const PORT = process.env.PORT || 3333
const app = new App()

app.addRoutes(appRoutes)

app.run(PORT, ()=>{
    console.log("Server is running on", PORT)
})