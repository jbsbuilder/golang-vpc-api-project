resource "aws_s3_bucket" "static_blog_site" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "static_blog_site" {
  bucket = aws_s3_bucket.static_blog_site.id
  block_public_acls = false
  block_public_policy = false
  ignore_public_acls = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "static_blog_site" {
  bucket = aws_s3_bucket.static_blog_site.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = "s3:GetObject",
        Resource = "${aws_s3_bucket.static_blog_site.arn}/*",
      },
    ],
  })
}