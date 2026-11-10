output "record_a_fqdn" {
  value       = aws_route53_record.site_a.fqdn
  description = "FQDN do registro Route 53 tipo A"
}

output "record_aaaa_fqdn" {
  value       = aws_route53_record.site_aaaa.fqdn
  description = "FQDN do registro Route 53 tipo AAAA"
}
