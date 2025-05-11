resource "aws_route53_zone" "lingo_nest_zone" {
    name = "lingo-nest.com"
    comment = "HostedZone created by Route53 Registrar"
}
