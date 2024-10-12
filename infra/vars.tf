variable "region" {
  type = string
  default = "us-west-1"
}

variable "PATH_TO_PRIVATE_KEY" {
  default = ""
}

variable "PATH_TO_PUBLIC_KEY" {
  default = ""
}

variable "AMIS" {
  default = ""
}

variable "db-password" {
  default = ""
}

variable "AS_AMI" {
  default = ""
}

variable "acl" {
  type = string
  default = "private"
}