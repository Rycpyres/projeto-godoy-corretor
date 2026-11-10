variable "project_name" {
  description = "Nome do projeto"
  type        = string
}

variable "environment" {
  description = "Ambiente de implantação"
  type        = string
}

variable "custom_domain_name" {
  description = "Subdomínio personalizado do site"
  type        = string
}

variable "bucket_regional_domain_name" {
  description = "Nome de domínio regional do bucket S3"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ARN do certificado ACM"
  type        = string
}
