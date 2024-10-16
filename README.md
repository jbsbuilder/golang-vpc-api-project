func main() {
	port := "3000"
	database.ConnectDb()
	app := fiber.New()

	app.Static("/", "../../frontend-build")

	app.Listen(":" + port)
}
