terraform {
  required_version = ">= 1.0.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "jaketerraformstate3.0"
    key            = "terraform/env/${terraform.workspace}/terraform.tfstate"
    region         = "us-west-1"
    encrypt        = true
    
    dynamodb_table = "terraform-state-lock"
    kms_key_id     = "alias/terraform-bucket-key"
    
    # Enable versioning
    versioning {
      enabled = true
    }
    
    # Additional security settings
    block_public_acls       = true
    block_public_policy     = true
    ignore_public_acls      = true
    restrict_public_buckets = true
  }
}

provider "aws" {
  region                   = "us-west-1"
  shared_credentials_files = ["~/.aws/credentials"]
  
  default_tags {
    tags = {
      Environment = "production"
      Project     = "golang-vpc-api"
      ManagedBy   = "terraform"
    }
  }
}

provider "aws" {
  alias                    = "acm"
  region                   = "us-east-1"
  shared_credentials_files = ["~/.aws/credentials"]
  
  default_tags {
    tags = {
      Environment = "production"
      Project     = "golang-vpc-api"
      ManagedBy   = "terraform"
    }
  }
}