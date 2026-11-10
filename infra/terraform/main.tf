data "aws_route53_zone" "otcloud" {
  name         = var.root_domain_name
  private_zone = false
}

module "acm" {
  source = "./modules/acm"

  domain_name = var.custom_domain_name
  zone_id     = data.aws_route53_zone.otcloud.zone_id
}

module "s3" {
  source = "./modules/s3"

  bucket_name                 = "${var.project_name}-${var.environment}-site"
  cloudfront_distribution_arn = module.cloudfront.distribution_arn
}

module "cloudfront" {
  source = "./modules/cloudfront"

  project_name                = var.project_name
  environment                 = var.environment
  custom_domain_name          = var.custom_domain_name
  bucket_regional_domain_name = module.s3.bucket_regional_domain_name
  acm_certificate_arn         = module.acm.certificate_arn
}

module "route53" {
  source = "./modules/route53"

  zone_id                   = data.aws_route53_zone.otcloud.zone_id
  custom_domain_name        = var.custom_domain_name
  cloudfront_domain_name    = module.cloudfront.domain_name
  cloudfront_hosted_zone_id = module.cloudfront.hosted_zone_id
}
