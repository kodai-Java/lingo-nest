resource "aws_s3_bucket" "lingo_nest_bucket" {
  bucket = "lingo-nest.com"
  tags = {
    Name = "LingoNest Static Site"
    Environment = "prod"
  }
}
