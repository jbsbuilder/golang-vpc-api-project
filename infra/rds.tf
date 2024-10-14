resource "aws_db_subnet_group" "postgres-subnet" {
  name        = "postgres-subnet"
  description = "RDS subnet group"
  subnet_ids  = [aws_subnet.main-private-1.id, aws_subnet.main-private-2.id]
}

#update me to Postgres
resource "aws_db_instance" "mysql" {
  allocated_storage      = 20
  engine                 = "postgres"
  engine_version         = "14"
  instance_class         = "db.t2.micro"
  identifier             = "postgres"
  username               = var.db_username
  password               = var.db_password
  port                   = "5432"
  db_subnet_group_name   = aws_db_subnet_group.postgres-subnet.name
  multi_az               = "false"
  vpc_security_group_ids = [aws_security_group.allow-postgres.id]
  storage_type           = "gp2"
  availability_zone      = aws_subnet.main-private-1.availability_zone
  skip_final_snapshot    = true
}
