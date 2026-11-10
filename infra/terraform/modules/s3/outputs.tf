output "bucket_id" {
  value       = aws_s3_bucket.site.id
  description = "ID do bucket S3"
}

output "bucket_arn" {
  value       = aws_s3_bucket.site.arn
  description = "ARN do bucket S3"
}

output "bucket_name" {
  value       = aws_s3_bucket.site.bucket
  description = "Nome do bucket S3"
}

output "bucket_regional_domain_name" {
  value       = aws_s3_bucket.site.bucket_regional_domain_name
  description = "Nome de domínio regional do bucket S3 para origem CloudFront"
}
