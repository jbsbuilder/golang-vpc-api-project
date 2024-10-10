package models

import "gorm.io/gorm"

type UserData struct {
	gorm.Model
	Firstname string `json:"firstname" gorm:"type:text;not null;default:null"`
	Lastname  string `json:"lastname" gorm:"type:text;not null;default:null"`
	Email     string `json:"email" gorm:"type:text;not null;default:null"`
}
