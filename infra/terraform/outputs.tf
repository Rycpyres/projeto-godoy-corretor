output "s3_bucket_name" {
  value       = module.s3.bucket_name
  description = "Nome do bucket S3 onde os arquivos do site são hospedados"
}

output "cloudfront_distribution_id" {
  value       = module.cloudfront.distribution_id
  description = "ID da distribuição CloudFront para invalidação de cache"
}

output "cloudfront_domain" {
  value       = module.cloudfront.domain_name
  description = "URL nativa da distribuição CloudFront (https://<id>.cloudfront.net)"
}

output "custom_domain_url" {
  value       = "https://${var.custom_domain_name}/index.html"
  description = "URL com subdomínio personalizado do Godoy Corretor"
}
