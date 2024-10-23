# resource "aws_s3_bucket" "static_blog_site" {
#   bucket = var.bucket_name
# }

# resource "aws_s3_bucket_acl" "static_blog_site" {
#   bucket = aws_s3_bucket.static_blog_site.id
#   acl = var.acl

# locals {
#   s3_origin_id = 
#   }
# }
resource "aws_cloudfront_distribution" "static_blog_site" {
  origin {
    domain_name = var.domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.static_blog_site.id
    origin_id = var.bucket_id
  }
    enabled             = true
    is_ipv6_enabled     = true
    comment             = "website"
    default_root_object = "index.html"
  
  aliases = ["cloudsmithlabs.com"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.bucket_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    }

  viewer_certificate {
    acm_certificate_arn = var.acm_certificate_arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE"]
    }
  }

}


resource "aws_cloudfront_origin_access_control" "static_blog_site" {
  name = "static_blog_site"
  origin_access_control_origin_type = "s3"
  signing_behavior = "always"
  signing_protocol = "sigv4"
}