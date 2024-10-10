package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jbsbuilder/golang-vpc-api-project/api/handlers"
)

func setupRoutes(app *fiber.App) {
	app.Get("/", handlers.ListUserData)

	app.Post("/fact", handlers.CreateUserData)
}
