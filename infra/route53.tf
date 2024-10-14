data "aws_route53_zone" "root_domain" {
  name         = "cloudsmithlabs.com"
  private_zone = false
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.root_domain.zone_id
  name = "coffee.cloudsmithlabs.com"
  type = "A"
}
