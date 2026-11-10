variable "aws_region" {
  description = "Região AWS onde os recursos serão provisionados (us-east-1 é obrigatório para ACM com CloudFront)"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Nome do projeto"
  type        = string
  default     = "godoy-corretor"
}

variable "environment" {
  description = "Ambiente de implantação"
  type        = string
  default     = "prod"
}

variable "root_domain_name" {
  description = "Domínio raiz gerenciado na zona Route 53"
  type        = string
  default     = "otcloudsolutions.com.br"
}

variable "custom_domain_name" {
  description = "Subdomínio personalizado para acesso ao site do Godoy Corretor"
  type        = string
  default     = "godoy.otcloudsolutions.com.br"
}
