resource "aws_s3_bucket" "lingo_nest_bucket" {
  bucket = "lingo-nest.com"
}

# data "aws_caller_identity" "current" {}

# data "aws_cloudfront_distribution" "lingo_nest_distribution" {
#   id = "E2T8YE94PF6IZN"
# }
# resource "aws_s3_bucket_policy" "lingo_nest_bucket_policy" {
#   bucket = aws_s3_bucket.lingo_nest_bucket.id
#   policy = jsonencode({
#     Version = "2008-10-17"
#     Id      = "PolicyForCloudFrontPrivateContent"
#     Statement = [
#       {
#         Sid    = "AllowCloudFrontServicePrincipal"
#         Effect = "Allow"
#         Principal = {
#           Service = "cloudfront.amazonaws.com"
#         }
#         Action   = "s3:GetObject"
#         Resource = "${aws_s3_bucket.lingo_nest_bucket.arn}/*"
#         Condition = {
#           StringEquals = {
#             "AWS:SourceArn" = "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${aws_cloudfront_distribution.lingo_nest_distribution.id}"
#           }
#         }
#       }
#     ]
#   })
# }