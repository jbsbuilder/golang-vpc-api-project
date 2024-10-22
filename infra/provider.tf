provider "aws" {
  region                   = var.region
  shared_credentials_files = ["~/.aws/credentials"]
}

terraform {
  backend "s3" {
    bucket = var.backend_bucket
    key    = "s3/terraform.tfstate"
    region = "var.region"

    encrypt        = true
  }
}