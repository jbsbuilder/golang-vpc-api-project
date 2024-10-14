package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jbsbuilder/golang-vpc-api-project/api/handlers"
)

func setupRoutes(app *fiber.App) {
	app.Get("/check", handlers.ListUserData)

	app.Post("/create", handlers.CreateUser)

	app.Put("/update", handlers.UpdateUser)

	app.Delete("/delete", handlers.DeleteUser)
}
