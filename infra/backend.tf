resource "aws_s3_bucket" "coffee" {
  bucket = "jaketerraformstate3.0"
}

# resource "aws_s3_bucket_lifecycle_configuration" "coffee" {
#     bucket = aws_s3_bucket.coffee.id
#     prevent_destroy = true
# }

resource "aws_s3_bucket_versioning" "CRUD" {
  bucket = aws_s3_bucket.CRUD.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_acl" "CRUD" {
  bucket = aws_s3_bucket.CRUD.id
  acl = var.acl
}

resource "aws_s3_bucket_server_side_encryption_configuration" "CRUD" {
  bucket = aws_s3_bucket.CRUD.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "aws:kms"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "CRUD" {
  bucket = aws_s3_bucket.CRUD.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
