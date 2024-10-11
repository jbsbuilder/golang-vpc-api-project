package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jbsbuilder/golang-vpc-api-project/api/database"
	"github.com/jbsbuilder/golang-vpc-api-project/api/models"
)

func ListUserData(c *fiber.Ctx) error {
	email := c.Query("email")
	if email == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Email is required",
		})
	}

	userdata := new(models.UserData)
	database.DB.Db.Model(userdata).Where("email = ?", email).Find(userdata)

	if userdata.ID == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	return c.Status(200).JSON(userdata)
}

func CreateUser(c *fiber.Ctx) error {
	userdata := new(models.UserData)
	if err := c.BodyParser(userdata); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	database.DB.Db.Create(&userdata)

	return c.Status(200).JSON(userdata)
}

func UpdateUser(c *fiber.Ctx) error {
	email := c.Query("email")
	if email == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Email is required",
		})
	}

	userdata := new(models.UserData)
	if err := c.BodyParser(userdata); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	// Find the user by the current email
	var existingUser models.UserData
	result := database.DB.Db.Model(&models.UserData{}).Where("email = ?", email).First(&existingUser)
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	// Update the user's details
	if userdata.Firstname != "" {
		existingUser.Firstname = userdata.Firstname
	}
	if userdata.Lastname != "" {
		existingUser.Lastname = userdata.Lastname
	}
	if userdata.Email != "" {
		existingUser.Email = userdata.Email
	}

	database.DB.Db.Save(&existingUser)

	return c.Status(200).JSON(existingUser)
}

// Add delete user data
func DeleteUser(c *fiber.Ctx) error {
	userdata := new(models.UserData)
	if err := c.BodyParser(&userdata); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	database.DB.Db.Delete(&userdata)

	return c.Status(200).JSON("User data deleted")
}
