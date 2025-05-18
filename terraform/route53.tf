resource "aws_route53_zone" "lingo_nest_zone" {
    name = "lingo-nest.com"
    comment = "HostedZone created by Route53 Registrar"
}
resource "aws_route53_record" "lingo_nest_record" {
  zone_id = aws_route53_zone.lingo_nest_zone.zone_id
  name    = "lingo-nest.com"
  type    = "A"
  alias {
    name                   = "${aws_cloudfront_distribution.lingo_nest_distribution.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.lingo_nest_distribution.hosted_zone_id}"
    evaluate_target_health = false
  }
}
