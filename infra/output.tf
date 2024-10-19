output "ELB" {
  value = aws_alb.my-elb.dns_name
}

output "instance" {
  value = aws_instance.instancef.public_ip
}

output "rds" {
  value = aws_db_instance.postgres.endpoint
}

output "domain_name" {
  value = aws_s3_bucket.coffee.bucket_regional_domain_name
}

output "bucket_id" {
  value = aws_s3_bucket.coffee.id
}
