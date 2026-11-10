variable "bucket_name" {
  description = "Nome do bucket S3"
  type        = string
}

variable "cloudfront_distribution_arn" {
  description = "ARN da distribuição CloudFront autorizada a ler o bucket"
  type        = string
}
