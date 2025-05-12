resource "aws_route53_zone" "lingo_nest_zone" {
    name = "lingo-nest.com"
    comment = "HostedZone created by Route53 Registrar"
}
resource "aws_route53_record" "lingo_nest_record" {
  zone_id = aws_route53_zone.lingo_nest_zone.zone_id
  name    = "lingo-nest.com"
  type    = "A"
  alias {
    name                   = "d3jsm5pw7l6ki.cloudfront.net."
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "lingo_nest_record_cname" {
    zone_id = aws_route53_zone.lingo_nest_zone.zone_id
    name    = "_e6dd576dfe1f22a43b6d66fb2e65ca05.lingo-nest.com"
    type    = "CNAME"
    ttl     = 300
    records = ["_06c0a38e5a808f70bec47a433223c902.xlfgrmvvlj.acm-validations.aws."]
}

resource "aws_route53_record" "lingo_nest_ns" {
    zone_id = aws_route53_zone.lingo_nest_zone.zone_id
    name    = "lingo-nest.com"
    type    = "NS"
    ttl     = 172800
    records = [
        "ns-1513.awsdns-61.org",
    "ns-1749.awsdns-26.co.uk",
    "ns-78.awsdns-09.com",
    "ns-713.awsdns-25.net"
    ]
}

resource "aws_route53_record" "lingo_nest_soa" {
    zone_id = aws_route53_zone.lingo_nest_zone.zone_id
    name    = "lingo-nest.com"
    type    = "SOA"
    ttl     = 900
    records = [
        "ns-1513.awsdns-61.org",
        "awsdns-hostmaster.amazon.com",
        1,
        7200,
        900,
        1209600,
        86400
    ]
}