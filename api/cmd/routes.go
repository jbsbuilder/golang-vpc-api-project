package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jbsbuilder/golang-vpc-api-project/api/handlers"
)

func setupRoutes(app *fiber.App) {
	app.Get("/create/check", handlers.ListUserData)

	app.Post("/create", handlers.CreateUser)

	app.Put("/create/update", handlers.UpdateUser)

	app.Delete("/create/delete", handlers.DeleteUser)
}
