variable "zone_id" {
  description = "ID da Hosted Zone Route 53"
  type        = string
}

variable "custom_domain_name" {
  description = "Subdomínio personalizado para apontar no CloudFront"
  type        = string
}

variable "cloudfront_domain_name" {
  description = "Domain name da distribuição CloudFront"
  type        = string
}

variable "cloudfront_hosted_zone_id" {
  description = "Hosted zone ID da distribuição CloudFront"
  type        = string
}
