output "distribution_id" {
  value       = aws_cloudfront_distribution.site.id
  description = "ID da distribuição CloudFront"
}

output "distribution_arn" {
  value       = aws_cloudfront_distribution.site.arn
  description = "ARN da distribuição CloudFront"
}

output "domain_name" {
  value       = aws_cloudfront_distribution.site.domain_name
  description = "Domain name gerado pelo CloudFront (ex: d123.cloudfront.net)"
}

output "hosted_zone_id" {
  value       = aws_cloudfront_distribution.site.hosted_zone_id
  description = "Hosted zone ID da distribuição CloudFront para registros Route 53 Alias"
}
