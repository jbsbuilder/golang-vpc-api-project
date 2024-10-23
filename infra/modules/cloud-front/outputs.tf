output "cloudfront_id" {
  value = aws_cloudfront_distribution.static_blog_site.domain_name
}

output "cloudfront_zone" {
  value = aws_cloudfront_distribution.static_blog_site.hosted_zone_id
}