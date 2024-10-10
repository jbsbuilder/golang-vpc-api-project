package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jbsbuilder/golang-vpc-api-project/api/database"
	"github.com/jbsbuilder/golang-vpc-api-project/api/models"
)

// revamp func to show only requested user data
func ListUserData(c *fiber.Ctx) error {
	userdata := []models.UserData{}
	database.DB.dB.Find(&userdata)

	return c.Status(200).JSON(userdata)
}

func CreateUser(c *fiber.Ctx) error {
	userdata := new(models.UserData)
	if err := c.BodyParser(userdata); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	database.Db.Db.Create(&userdata)

	return c.Status(200).JSON(userdata)
}

// Add update user data
func UpdateUser() {

}

// Add delete user data
func DeleteUser() {

}
