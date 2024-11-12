module "acm" {
  source = "./modules/acm"

  providers = {
    aws.acm = aws.acm
   }
}

module "alb" {
  source              = "./modules/alb"
  name                = var.name
  vpc_id              = module.vpc.id
  subnets             = module.vpc.public_subnets
  zone_id             = var.zone_id
  environment         = var.environment
  alb_security_groups = [module.security_groups.alb]
  alb_tls_cert_arn    = aws_acm_certificate.certificate.arn
  health_check_path   = var.health_check_path
}

module "cloudFront" {
  source = "./modules/cloudFront"

  domain_name = module.static_bucket.domain_name
  acm_certificate_arn = module.acm.acm_certificate_arn
  bucket_id = module.static_bucket.bucket_id
}

module "ecr" {
  source      = "./modules/ecr"
  name        = var.name
  environment = var.environment
}
module "postgres-rds" {
  source              = "./modules/rds"
  name                = var.name
  environment         = var.environment
  database_secret_arn = var.database_secret_arn
  subnets             = module.vpc.private_subnets
  rds_security_groups = [module.security_groups.rds_sg]
}

 module "route53" {
  source = "./modules/route53"

  cloudfront_id = module.cloudFront.cloudfront_id
  cloudfront_zone = module.cloudFront.cloudfront_zone
}

module "static_bucket" {
  source = "./modules/s3_static"

  bucket_name = "cloudsmithlabs.com"
  acl = "public-read"
}
module "security_groups" {
  source         = "./modules/security-groups"
  name           = var.name
  vpc_id         = module.vpc.id
  environment    = var.environment
  container_port = var.container_port
}
module "vpc" {
  source             = "./modules/vpc"
  name               = var.name
  cidr               = var.cidr
  private_subnets    = var.private_subnets
  public_subnets     = var.public_subnets
  availability_zones = var.availability_zones
  environment        = var.environment
}