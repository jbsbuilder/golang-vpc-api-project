resource "aws_eks_cluster" "main" {
  name     = "${var.name}-eks-cluster-${var.environment}"
  role_arn = var.eks_role_arn

  vpc_config {
    subnet_ids = var.subnets.*.id
  }
}

resource "aws_eks_fargate_profile" "main" {
  cluster_name           = aws_eks_cluster.main.name
  fargate_profile_name   = "${var.name}-fargate-profile-${var.environment}"
  pod_execution_role_arn = var.pod_execution_role_arn
  subnet_ids             = var.subnets.*.id

  selector {
    namespace = var.kubernetes_namespace
    labels = {
      app = "${var.name}-app-${var.environment}"
    }
  }
}

resource "kubernetes_deployment" "main" {
  metadata {
    name      = "${var.name}-deployment-${var.environment}"
    namespace = var.kubernetes_namespace
  }

  spec {
    replicas = var.service_desired_count

    selector {
      match_labels = {
        app = "${var.name}-app-${var.environment}"
      }
    }

    template {
      metadata {
        labels = {
          app = "${var.name}-app-${var.environment}"
        }
      }

      spec {
        container {
          name  = "${var.name}-container-${var.environment}"
          image = var.container_image

          resources {
            limits {
              cpu    = var.container_cpu_limit
              memory = var.container_memory_limit
            }
            requests {
              cpu    = var.container_cpu_request
              memory = var.container_memory_request
            }
          }

          port {
            container_port = var.container_port
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "main" {
  metadata {
    name      = "${var.name}-service-${var.environment}"
    namespace = var.kubernetes_namespace
  }

  spec {
    selector = {
      app = "${var.name}-app-${var.environment}"
    }

    port {
      port        = var.service_port
      target_port = var.container_port
    }

    type = "LoadBalancer"
  }
}
