variable "backend_bucket" {
  description = "tfstate bucket"
}

variable "region" {
  default     = "us-west-1"
  description = "AWS region"
}

variable "name" {
  description = "the name of your stack, e.g. \"demo\""
  default = "coffeesite"
}

variable "environment" {
  description = "the name of your environment, e.g. \"prod\""
  default     = "prod"
}

variable "availability_zones" {
  description = "a comma-separated list of availability zones, defaults to all AZ of the region, if set to something other than the defaults, both private_subnets and public_subnets have to be defined as well"
}

variable "cidr" {
  description = "The CIDR block for the VPC."

}

variable "private_subnets" {
  description = "a list of CIDRs for private subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
}

variable "public_subnets" {
  description = "a list of CIDRs for public subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
}

variable "service_desired_count" {
  description = "Number of tasks running in parallel"
  default     = 1
}

variable "container_port" {
  description = "The port where the Docker is exposed"
  default     = 3001
}

variable "container_cpu" {
  description = "The number of cpu units used by the task"
  default     = 512
}

variable "container_memory" {
  description = "The amount (in MiB) of memory used by the task"
  default     = 2048
}

variable "health_check_path" {
  description = "Http path for task health check"
  default     = "/"
}

# Use the only one certificate if the region of application deployment is us-east-1. Because Cloudfront only accepts certificates 
# at us-east-1
variable "tsl_certificatecloudfront" {
  description = "The ARN of the certificate that the Cloudfront uses."
  default     = "arn:aws:acm:region:account:certificate/certificate_ID"
}

variable "app_bucket" {
  description = "Bucket used by application previously created"
  default     = "virtual-promoter-test"
}

variable "admin_front_domain" {
  description = "Bucket name used to host admin frontend"
  default     = "coffee.cloudsmithlabs.com"
}

variable "admin_front_bucket" {
  description = "Domain name to host admin frontend"
  default     = "coffee.cloudsmithlabs.com"
}

variable "zone_id" {
  description = "ID from hosted zone"
}


variable "database_secret_arn" {
  description = "Secret ARN from database admin and pasword previously created"
  default     = "arn:aws:secretsmanager:us-west-1:706642554607:secret:coffieboi-43maIq"
}


variable "secrets_arn" {
  description = "Secret ARN from Twillio, Watson, Okta and AWS Credentials previously created"
  default = ["arn:aws::secretsmanager:us-east-2:111122223333:secret:SecretName"
  ]
}


variable "secrets_values" {
  description = "The secret ARN values and the name of variables"
  default = [
    {
      valueFrom = "arn:aws:secretsmanager:us-west-1:706642554607:secret:coffieboi-43maIq",
      name      = "VARIABLE_NAME"
    }
  ]
}

variable "bucket_name" {
type = string
}