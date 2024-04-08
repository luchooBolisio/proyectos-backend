import server from "./server.ts"

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Servidor corriendo el puerto ${port}`);
})