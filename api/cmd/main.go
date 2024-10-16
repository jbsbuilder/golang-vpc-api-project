package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jbsbuilder/golang-vpc-api-project/api/database"
)

func main() {
	database.ConnectDb()
	app := fiber.New()
	app.Static("/", "./public")
	setupRoutes(app)

	app.Listen(":3000")
}
