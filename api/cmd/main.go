package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/jbsbuilder/golang-vpc-api-project/api/database"
)

func middleware(c *fiber.Ctx) error {
	fmt.Println("Request Details:")
	fmt.Println("Request URL: ", c.OriginalURL())
	fmt.Println("Method:", c.Method())
	fmt.Println("Headers:", c.GetReqHeaders())

	var body map[string]interface{}
	if err := c.BodyParser(&body); err != nil {
		return err
	}
	fmt.Println("Body:", body)
	return nil
}

func main() {
	database.ConnectDb()
	app := fiber.New()
	app.Static("/", "./public")
	setupRoutes(app)
	//app.Use(middleware)

	app.Listen(":3000")
}
