variable "domain_name" {
  description = "Nome do domínio para o certificado ACM"
  type        = string
}

variable "zone_id" {
  description = "ID da Hosted Zone do Route 53 para validação DNS"
  type        = string
}
