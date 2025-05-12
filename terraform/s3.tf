resource "aws_s3_bucket" "lingo_nest_bucket" {
  bucket = "lingo-nest.com"
  force_destroy = true
}

resource "aws_s3_bucket_policy" "lingo_nest_bucket_policy" {
  bucket = aws_s3_bucket.lingo_nest_bucket.id
  policy = jsonencode({
    Version = "2008-10-17"
    Id      = "PolicyForCloudFrontPrivateContent"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipal"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.lingo_nest_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = "arn:aws:cloudfront::975049915902:distribution/E2T8YE94PF6IZN"
          }
        }
      }
    ]
  })
}
